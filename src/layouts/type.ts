import { ReactNode } from 'react'

export type VerticalNavItem = {
  children?: VerticalNavItem[]
  key?: string
  icon?: ReactNode
  label?: ReactNode
  path?: string
  hidden?: boolean
}

export type VerticalNavItemsType = VerticalNavItem[]

export type VerticalLayoutProps = {
  navMenu: {
    navItems?: VerticalNavItemsType
    navItems1?: VerticalNavItemsType
    navItems2?: VerticalNavItemsType
    navItems3?: VerticalNavItemsType
    content?: (props?: any) => ReactNode
  }
}

export type LayoutProps = {
  children: ReactNode
  contentHeightFixed?: boolean
  scrollToTop?: (props?: any) => ReactNode
  verticalLayoutProps: VerticalLayoutProps
}
