export const PARENT_PERMISSION = {
  ORGANIZATION: ['employee/view', 'department/view', 'role/view'],
  SETTING: ['branding/view', 'enterprise/view', 'navigation/update']
}

/** Biến khai báo toàn bộ quyền trong hệ thống */

export const FEATURE_PERMISSION: any = {
  // #region Workplace

  // #region 1: Employee
  'employee/view': {
    name: 'Xem danh sách nhân viên',
    code: 'EMPLOYEE_GET_LIST'
  },
  'employee/detail': {
    name: 'Xem chi tiết nhân viên',
    code: 'EMPLOYEE_GET_DETAIL'
  },
  'employee/create': {
    name: 'Tạo nhân viên',
    code: 'EMPLOYEE_CREATE'
  },
  'employee/edit': {
    name: 'Sửa nhân viên',
    code: 'EMPLOYEE_UPDATE'
  },
  'employee/delete': {
    name: 'Xóa nhân viên',
    code: 'EMPLOYEE_DELETE'
  },

  // #endregion

  // #region 2: Phòng ban
  'department/view': {
    name: 'Xem danh sách phòng ban',
    code: 'DEPARTMENT_GET_LIST'
  },
  'department/detail': {
    name: 'Xem chi tiết phòng ban',
    code: 'DEPARTMENT_GET_DETAIL'
  },
  'department/create': {
    name: 'Tạo phòng ban',
    code: 'DEPARTMENT_CREATE'
  },
  'department/edit': {
    name: 'Sửa phòng ban',
    code: 'DEPARTMENT_UPDATE'
  },
  'department/delete': {
    name: 'Xóa phòng ban',
    code: 'DEPARTMENT_DELETE'
  },

  // #endregion

  // #region 3: Vai trò
  'role/view': {
    name: 'Xem danh sách vai trò',
    code: 'ROLE_GET_LIST'
  },
  'role/detail': {
    name: 'Xem chi tiết vai trò',
    code: 'ROLE_GET_DETAIL'
  },
  'role/create': {
    name: 'Tạo vai trò',
    code: 'ROLE_CREATE'
  },
  'role/edit': {
    name: 'Sửa vai trò',
    code: 'ROLE_UPDATE'
  },
  'role/delete': {
    name: 'Xóa vai trò',
    code: 'ROLE_DELETE'
  },

  // App Permission

  'role/viewListRole': {
    name: 'Xem danh sách vai trò',
    code: 'VIEW_LIST_ROLE'
  },
  'role/deleteRole': {
    name: 'Xóa vai trò',
    code: 'DELETE_ROLE'
  },
  'role/createRole': {
    name: 'Tạo mới vai trò',
    code: 'CREATE_ROLE'
  },
  'role/viewDetailRole': {
    name: 'Xem chi tiết vai trò',
    code: 'VIEW_DETAIL_ROLE'
  },
  'role/updateRole': {
    name: 'Chỉnh sửa vai trò',
    code: 'EDIT_ROLE'
  },
  'task/viewListTask': {
    name: 'Xem danh sách công việc',
    code: 'VIEW_LIST_TASK'
  },
  'task/viewListTaskType': {
    name: 'Xem danh sách loại công việc',
    code: 'TASK_TYPE_GET_LIST'
  },
  'config/taskConfigPrefix': {
    name: 'Thiết lập Prefix',
    code: 'TASK_CONFIG_PREFIX'
  },
  'config/taskConfigNotify': {
    name: 'Cấu hình thông báo',
    code: 'TASK_CONFIG_NOTIFY'
  },

  // #endregion
  'branding/view': {
    name: 'Xem thông tin thương hiệu',
    code: 'BRANDING_GET_DETAIL'
  },
  'branding/update': {
    name: 'Chỉnh sửa thông tin thương hiệu',
    code: 'BRANDING_UPDATE'
  },
  'branding/manage': {
    name: 'Quản lý thương hiệu',
    code: 'BRANDING_UPDATE'
  },
  'navigation/update': {
    name: 'Chỉnh sửa hiển thị Navigation',
    code: 'NAVIGATION_UPDATE'
  },
  'enterprise/view': {
    name: 'Xem thông tin doanh nghiệp',
    code: 'PROFILE_GET_ENTERPRISE_DETAIL'
  },
  'enterprise/update': {
    name: 'Chỉnh sửa thông tin doanh nghiệp',
    code: 'PROFILE_UPDATE_ENTERPRISE'
  },
  'enterprise/address/view': {
    name: 'Xem sổ địa chỉ doanh nghiệp',
    code: 'PROFILE_GET_ENTERPRISE_ADDRESS_DETAIL'
  },
  'enterprise/address/update': {
    name: 'Chỉnh sửa sổ địa chỉ doanh nghiệp',
    code: 'PROFILE_UPDATE_ENTERPRISE_ADDRESS'
  },
  'enterprise/address/delete': {
    name: 'Xóa sổ địa chỉ doanh nghiệp',
    code: 'PROFILE_DELETE_ENTERPRISE_ADDRESS'
  }

  // #endregion
}

export type PermissionType = typeof FEATURE_PERMISSION
