/** Hàm kiểm  quyền trong hệ thống */

import { FEATURE_PERMISSION, PermissionType } from '@/constants/permission'

export const checkPermission = (featureCode: PermissionType, permission: any) => {
  const code = FEATURE_PERMISSION[featureCode]?.code
  const allowAll = FEATURE_PERMISSION[featureCode]?.allowAll

  const result = (permission || []).find((role: any) => code === role?.name) || allowAll

  return !!result
}

/* Hàm kiểm tra menu cha có chứa submenu không */
export const checkListPermission = (permissionLst: any, permission: any) => {
  if (permissionLst.length > 0) {
    const permissionArr = permissionLst.map((item: any) => checkPermission(item, permission))

    return !!permissionArr.find((item: boolean) => item)
  }

  return false
}

/**
 * Hàm lọc danh sách quyền
 * @param permissionLst  danh sách quyền
 * @param exceptionPermission  danh sách tên quyền cần loại bỏ
 * @returns
 */
export const filterExceptionPermission = (permissionLst: any, exceptionPermission: any) => {
  if (exceptionPermission.length > 0) {
    return permissionLst.filter((item: any) => !exceptionPermission.includes(item.name))
  }

  return permissionLst
}

/**
 * Hàm lọc danh sách quyền
 * @param permissionLst  danh sách quyền
 * @param acceptPermission  danh sách tên quyền cần giữ lại
 * @returns
 */
export const filterAcceptPermission = (permissionLst: any, acceptPermission: any) => {
  if (acceptPermission?.length > 0 && permissionLst?.length > 0) {
    return permissionLst?.filter((item: any) => acceptPermission.includes(item.name))
  }

  return permissionLst
}
