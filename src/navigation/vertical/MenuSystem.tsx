import { DashboardIcon, OrganizationIcon } from '@/assets/icons'
import { BillIcon } from '@/assets/icons/BillIcon'
import { VerticalNavItemsType } from '@/layouts/type'

const MenuSystem = (): VerticalNavItemsType => {
  return [
    {
      key: '/admin-portal/medical-specialty',
      label: 'Chuyên khoa',
      path: '/admin-portal/medical-specialty',
      icon: <DashboardIcon color={'currentColor'} />,
      hidden: false
    },
    {
      key: '/admin-portal/doctor',
      label: 'Bác sỹ',
      path: '/admin-portal/doctor',
      icon: <OrganizationIcon color={'currentColor'} />,
      children: [
        {
          key: '/admin-portal/doctor/calendar',
          label: 'Lịch làm việc',
          path: '/admin-portal/doctor/calendar'
        },
        {
          key: '/admin-portal/doctor/appointment-schedule',
          label: 'Lịch hẹn',
          path: '/admin-portal/doctor/appointment-schedule'
        }
      ]
    },
    {
      key: '/admin-portal/services',
      label: 'Dịch vụ',
      path: '/admin-portal/services',
      icon: <BillIcon color={'currentColor'} />,
      children: [
        {
          key: '/admin-portal/services/list',
          label: 'Dịch vụ',
          path: '/admin-portal/services/list'
        },
        {
          key: '/admin-portal/services/coupon',
          label: 'Chương chình khuyến mại',
          path: '/admin-portal/services/coupon'
        }
      ]
    }
  ]
}
export { MenuSystem }
