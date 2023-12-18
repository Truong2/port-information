import { SupportIcon } from '@/assets/icons/SupportIcon'
import { VerticalNavItemsType } from '@/layouts/type'

const MenuAccount = (): VerticalNavItemsType => {
  return [
    {
      key: '/admin-portal/accounts',
      label: 'Tài khoản',
      path: '/admin-portal/accounts',
      icon: <SupportIcon color={'currentColor'} />,
      children: [
        {
          key: '/admin-portal/accounts/admin',
          label: 'Quản trị viên',
          path: '/admin-portal/accounts/admin'
        },
        {
          key: '/admin-portal/accounts/health-facility',
          label: 'Cơ sở y tế',
          path: '/admin-portal/accounts/health-facility'
        },
        {
          key: '/admin-portal/accounts/customer',
          label: 'Khách hàng',
          path: '/admin-portal/accounts/customer'
        }
      ]
    },
    {
      key: '/admin-portal/permissions',
      label: 'Phân quyền',
      icon: <SupportIcon color={'currentColor'} />,
      path: '/admin-portal/permissions',
      children: [
        {
          key: '/admin-portal/permissions/role',
          label: 'Vai trò',
          path: '/admin-portal/permissions/role'
        }
      ]
    }
  ]
}
export { MenuAccount }
