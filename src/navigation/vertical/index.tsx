// ** Type import

import { DashboardIcon, OrganizationIcon } from '@/assets/icons'
import { BillIcon } from '@/assets/icons/BillIcon'
import { SupportIcon } from '@/assets/icons/SupportIcon'
import { VerticalNavItemsType } from '@/layouts/type'

const navigation = (): VerticalNavItemsType => {
  /** Note: Đặt key = path để khi load lại tự focus vào menu vừa chọn */

  return [
    {
      key: '/medical-specialty',
      label: 'Chuyên khoa',
      path: '/medical-specialty',
      icon: <DashboardIcon color={'currentColor'} />,
      hidden: false
    },
    {
      key: '/doctor',
      label: 'Bác sỹ',
      path: '/doctor',
      icon: <OrganizationIcon color={'currentColor'} />,
      children: [
        {
          key: '/doctor/calendar',
          label: 'Lịch làm việc',
          path: '/doctor/calendar'
        },
        {
          key: '/doctor/appointment-schedule',
          label: 'Lịch hẹn',
          path: '/doctor/appointment-schedule'
        }
      ]
    },
    {
      key: '/services',
      label: 'Dịch vụ',
      path: '/services',
      icon: <BillIcon color={'currentColor'} />,
      children: [
        {
          key: '/services/list',
          label: 'Dịch vụ',
          path: '/services/list'
        },
        {
          key: '/services/coupon',
          label: 'Chương chình khuyến mại',
          path: '/services/coupon'
        }
      ]
    },
    {
      key: '/accounts',
      label: 'Tài khoản',
      path: '/accounts',
      icon: <SupportIcon color={'currentColor'} />,
      children: [
        {
          key: '/accounts/admin',
          label: 'Quản trị viên',
          path: '/accounts/admin'
        },
        {
          key: '/accounts/health-facility',
          label: 'Cơ sở y tế',
          path: '/accounts/health-facility'
        },
        {
          key: '/accounts/customer',
          label: 'Khách hàng',
          path: '/accounts/customer'
        }
      ]
    }
  ]
}

export default navigation
