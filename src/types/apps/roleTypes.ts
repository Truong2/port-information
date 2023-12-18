export type RoleType = {
  name: string
  lstPermissionId: number[]
  lstEmployeeId: number[]
}

export type RoleUpdateType = {
  id: number
  name: string
  lstPermissionId: number[]
  lstEmployeeId: number[]
}

export type RoleBodyDeleteType = {
  id: number
  isChangeRole: boolean
  lstChangeRoleId: number[]
}
