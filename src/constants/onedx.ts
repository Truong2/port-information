import axios from 'axios'
import { NextRouter } from 'next/router'
import authConfig from '@/configs/auth'
import { setCookie } from 'cookies-next'

export const DEV_ENV = process.env.NODE_ENV === 'development'

export const CUSTOMER_TYPE = {
  ENTERPRISE: 'ENTERPRISE',
  HOUSE_HOLD: 'HOUSE_HOLD',
  PERSONAL: 'PERSONAL'
}
export const CUSTOMER_TYPE_COMPACT = {
  ENTERPRISE: 'KHDN',
  HOUSE_HOLD: 'HKD',
  PERSONAL: 'CN',
  KHDN: 'ENTERPRISE',
  HKD: 'HOUSE_HOLD',
  CN: 'PERSONAL'
}

export const ROLE_USER = {
  SME: 'SME',
  DEV: 'DEV',
  ADMIN: 'ADMIN'
}

export const GENDER_OPTIONS = [
  {
    value: 0,
    label: 'Nữ'
  },
  {
    value: 1,
    label: 'Nam'
  },

  {
    value: 2,
    label: 'Khác'
  }
]

export const GENDER_TYPE = {
  FEMALE: 'FEMALE',
  MALE: 'MALE',
  OTHER: 'OTHER',
  FEMALE_VN: 'Nữ',
  MALE_VN: 'Nam',
  OTHER_VN: 'Khác',
  NO_INFORMATION: '--'
}

export const GENDER = {
  FEMALE: 'Nữ',
  MALE: 'Nam',
  OTHER: 'Khác'
}

export const genderOptionsConvert = {
  Nữ: 0,
  Nam: 1,
  Khác: 2,
  0: 'Nữ',
  1: 'Nam',
  2: 'Khác'
}

// danh sách màu của component Tag
export const COLOR_TAG = [
  'light-purple',
  'light-primary',
  'light-blue',
  'light-yellow',
  'light-green',
  'light-red',
  'light-gray',
  'gray',
  'cyan',
  'purple',
  'default',
  'warning',
  'error',
  'success',
  'primary'
]
export const PARAM_SEND_OTP_COOKIE_NAME = 'paramSendOTP'

export const PARAM_LENGTH_OTP_COOKIE_NAME = 'lengthOTP'

export const INFO_ACCOUNT_SWITCH_COOKIE_NAME = 'infoSwitchAccount'

export const METHOD_SEND_OTP = {
  EMAIL: 'EMAIL',
  SMS: 'SMS'
}
export const ACTION_TYPE = {
  LOGIN: 'LOGIN',
  ACTIVATE: 'ACTIVATE',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  SWITCH_ACCOUNT: 'SWITCH_ACCOUNT'
}

export const REGEX_MAIL_OR_TAX_CODE = /^(?:\d{10}|\d{13}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

export const getProfileUser = (token: string, setUser: any, route: NextRouter) => {
  axios
    .get(authConfig.getUserProfile, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(async response => {
      setUser({ ...response.data })
      window.localStorage.setItem('userData', JSON.stringify(response.data))
      const returnUrl = route.query.returnUrl
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

      await route.replace(redirectURL as string)
    })
    .catch(() => {
      localStorage.removeItem('userData')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('accessToken')
      setUser(null)
      if (authConfig.onTokenExpiration === 'logout' && !route.pathname.includes('login')) {
        route.replace('/login')
      }
    })
}

// Format các kí tự đặc biệt mà string không truyền xuống được
export function formatSpecialDigits(value: string) {
  return value ? value.replace(/%/g, '\\%').replace(/_/g, '\\_') : ''
}

export const setToken = (token: string) => {
  const expirationToken = new Date()
  expirationToken.setTime(expirationToken.getTime() + 10 * 60 * 60 * 1000) // 10 hour in milliseconds
  setCookie(authConfig.storageTokenKeyName, `Bearer ${token}`, {
    expires: expirationToken,
    sameSite: 'lax'
  })
}
export const setRefreshToken = (refreshToken: string) => {
  const expirationRefreshToken = new Date()
  expirationRefreshToken.setTime(expirationRefreshToken.getTime() + 30 * 24 * 60 * 60 * 1000) // 30 day in milliseconds
  setCookie(authConfig.onTokenExpiration, refreshToken, {
    expires: expirationRefreshToken,
    sameSite: 'lax'
  })
}
