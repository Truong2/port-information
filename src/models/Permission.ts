import { PermissionRow } from '@/types/apps/permissionTypes'
import { Base } from './Base'

class Permission extends Base {
  // @ts-ignore: Unreachable code error
  getTreePermissions = (): Promise<PermissionRow[]> => this.apiGet('/get-tree')
}

export default new Permission('/permissions')
