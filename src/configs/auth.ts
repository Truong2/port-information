import { API_ROOT } from '@/models/Base'

export default {
  meEndpoint: '/auth/me',

  loginEndpoint: `${API_ROOT}/api/login`,

  getUserProfile: `${API_ROOT}/api/user/profile`,

  logout: `${API_ROOT}/token/remove`,

  registerEndpoint: '/jwt/register',

  storageTokenKeyName: 'accessToken',

  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
