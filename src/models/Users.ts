import { Base } from './Base'

class Users extends Base {
  getProfile = (body: any) => this.apiPostWithoutPrefix('/api/info_person', body)
}

export default new Users('/users')
