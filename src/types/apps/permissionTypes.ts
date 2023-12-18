export interface PermissionRow {
  parent: PermissionInfo
  lstChild: PermissionInfo[]
}

export interface PermissionInfo {
  id: number
  displayName: string
  code: number
  name: string
  parentCode: number
  isFocused: any
}
