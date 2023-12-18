// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
// ** Navigation Imports

// ** Component Import
// Uncomment the below line (according to the layout type) when using server-side menu
// import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'
// import ServerSideHorizontalNavItems from './components/horizontal/ServerSideNavItems'
// ** Hook Import
import Layout from '@/layouts/Layout'
import { useSettings } from 'src/@core/hooks/useSettings'
import VerticalNavItems from '@/navigation/vertical'
import { MenuSystem } from '@/navigation/vertical/MenuSystem'
import { MenuAccount } from '@/navigation/vertical/MenuAccount'
import { MenuComment } from '@/navigation/vertical/MenuComment'

interface Props {
  children: ReactNode
  contentHeightFixed?: boolean
}

const UserLayout = ({ children }: Props) => {
  // ** Hooks
  const { settings } = useSettings()

  // ** Vars for server side navigation
  // const { menuItems: verticalMenuItems } = ServerSideVerticalNavItems()
  // const { menuItems: horizontalMenuItems } = ServerSideHorizontalNavItems()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  if (hidden && settings.layout === 'horizontal') {
    settings.layout = 'vertical'
  }

  return (
    <Layout
      verticalLayoutProps={{
        navMenu: {
          navItems: VerticalNavItems(),
          navItems1: MenuSystem(),
          navItems2: MenuAccount(),
          navItems3: MenuComment()
        }
      }}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
