// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    path: '/home',
    icon: 'tabler:smart-home'
  },
  {
    title: 'Second Page',
    path: '/second-page',
    icon: 'tabler:mail'
  },
  {
    path: '/task-management',
    title: 'Quản lý công việc',
    icon: 'tabler:layout-kanban'
  }
]

export default navigation
