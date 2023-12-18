import { BillIcon } from '@/assets/icons/BillIcon'
import { VerticalNavItemsType } from '@/layouts/type'

const MenuComment = (): VerticalNavItemsType => {
  return [
    {
      key: '/admin-portal/customer-comment',
      label: 'Đánh giá',
      path: '/admin-portal/customer-comment',
      icon: <BillIcon color={'currentColor'} />,
      children: [
        {
          key: '/admin-portal/customer-comment/service',
          label: 'Đánh giá sản phẩm dịch vụ',
          path: '/admin-portal/customer-comment/service'
        },
        {
          key: '/admin-portal/customer-comment/health-facility',
          label: 'Đánh giá cơ sở y tế',
          path: '/admin-portal/customer-comment/health-facility'
        },
        {
          key: '/admin-portal/customer-comment/docto',
          label: 'Đánh giá bác sỹ',
          path: '/admin-portal/customer-comment/doctor'
        }
      ]
    },
    {
      key: '/admin-portal/report',
      label: 'Báo cáo - Thống kê',
      path: '/admin-portal/report'
    }
  ]
}
export { MenuComment }
