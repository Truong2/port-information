// ** React Import
// ** Type Import
import VerticalLayout from '@/layouts/components/vertical/VerticalLayout'
import { LayoutProps } from '@/layouts/type'

const Layout = (props: LayoutProps) => {
  // ** Props
  const { children } = props

  // ** Ref

  return <VerticalLayout {...props}>{children}</VerticalLayout>
}

export default Layout
