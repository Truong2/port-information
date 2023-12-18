import { Base } from './Base'

class Users extends Base {
  getProfile = (token: any) => this.apiGetWithoutPrefix('/api/user/profile', token)
}

export default new Users('/users')
