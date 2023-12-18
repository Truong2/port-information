// ** React Imports
import { createContext, ReactNode, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios, { AxiosResponse } from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AppDispatch } from '@/store'
import { appActions } from '@/store/apps/user'
import { message, notification } from 'antd'
import { getCookie } from 'cookies-next'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { AuthValuesType, LoginResponse, ResponseLogin, UserDataType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()

  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = getCookie(authConfig.storageTokenKeyName)!
      if (storedToken) {
        setLoading(true)
        await axios
          .get(authConfig.getUserProfile, {
            headers: {
              Authorization: storedToken
            }
          })
          .then(async response => {
            setLoading(false)
            setUser({ ...response.data })
            window.localStorage.setItem('userData', JSON.stringify(response.data))
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
            if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/admin-portal/login')
            }
          })
      } else {
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const catchError = (
    e: {
      response: { data: { error: any }; status: number; error: { url: string | string[] } }
      status: number
    },
    errorCallback: undefined | void
  ) => {
    const error = e.response?.data?.error
    let statusACCOUNT = ''
    if (error?.errorDescription === 'User is not activated') {
      statusACCOUNT = 'NOT_ACTIVE'
      dispatch(
        appActions.updateUser({
          statusACCOUNT
        })
      )
      error.dontCatchError = true
    } else if (
      error?.errorCode === 'error?.user.disable' ||
      error?.errorCode === 'error?.user.inactive' ||
      error?.errorDescription === 'User is disabled'
    ) {
      message.error('Tải khoản đã bị vô hiệu hóa')
    } else if (
      e.response?.status === 403 ||
      error?.errorCode === 'error?.ticket.user.not.be.supporter' ||
      error?.errorCode === 'error?.ticket.sme.not.be.owner' ||
      error?.errorCode === 'error?.department.user.not.own' ||
      (error?.errorCode === 'error?.no.have.access' && error?.object === 'customer_ticket')
    ) {
      statusACCOUNT = 'DENIED'
      dispatch(appActions.changeStatus(statusACCOUNT))
      error.dontCatchError = true
    } else if (e.status === 401) {
      dispatch(appActions.updateUser({}))
      error.dontCatchError = true
    } else if (
      (e.response?.status === 400 && error?.errorCode === 'invalid_grant') ||
      error?.errorCode === 'error?.data.format'
    ) {
      if (errorCallback) {
        errorCallback
      }
    } else if (e.response?.status === 502) {
      notification.error({
        message: t('errors.serverMaintenance')
      })
    } else if (
      !error?.field &&
      !error?.fields &&
      !e.response?.error?.url?.includes('/auth-server/api/users-sme/import/users') &&
      !e.response?.error?.url?.includes('/auth-server/api/users-sme/import-url/users') &&
      !error?.error?.url?.includes('/admin-portal/email-template/')
    ) {
      notification.error({
        message: t('errors.errorOccurred')
      })
    }
    throw error
  }

  const handleLogin = async (params: FormData, successCallBack?: ResponseLogin, errorCallback?: ErrorCallback) => {
    await axios
      .post(authConfig.loginEndpoint, params)
      .then(async (response: AxiosResponse<LoginResponse>) => {
        if (successCallBack) {
          ;(await successCallBack) && successCallBack(response?.data)
        }
      })
      .catch(err => {
        catchError(err, errorCallback && errorCallback(err))
      })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/admin-portal/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
