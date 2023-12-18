export type ErrCallbackType = (err: { [key: string]: any }) => void

export type ResponseLogin = (res: { [key: string]: any }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
  userType: number
}

export type LoginResponse = {
  refresh_token: string
  expires_in: number
  access_token: string
}

export type UserDataType = {
  id: number
  role: string
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
  avatarLink?: string | null
  firstname?: string
  lastname?: string
}

export type AuthValuesType = {
  loading: boolean
  logout: () => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: FormData, successCallBack?: ResponseLogin, errorCallback?: ErrCallbackType) => void
}
