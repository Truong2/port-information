import { PermissionInfo } from './apps/permissionTypes'

export interface RoleType {
  status: 'INACTIVE' | 'ACTIVE' | 'ALL'
  roleName: string
  isRoleDefault: boolean
  id: number
}

export interface RoleEmployee {
  id: number
  email: string
  phoneNumber: number
  departmentName: string
  modifiedAt: string
  status: 'INACTIVE' | 'ACTIVE' | 'ALL'
  avatar: string | null

  // createdType: 0 - tạo trên onesme, 1 - tạo trên workplace hoặc bên ngoài
  createdType: 1 | 0
  parentId: number
  name: string
}

export interface RolePermission {
  parent: PermissionInfo
  lstChild: PermissionInfo[]
}

export interface RoleInformationType {
  id: number
  name: string
  status: 'INACTIVE' | 'ACTIVE' | 'ALL'
  isRoleDefault: boolean
  permissionTree: RolePermission[]
}

export interface RoleDetailType {
  id: number
  name: string
  status: 'INACTIVE' | 'ACTIVE' | 'ALL'
  isRoleDefault: boolean
  permissionTree: RolePermission[]
  lstEmployees: RoleEmployee[]
}
