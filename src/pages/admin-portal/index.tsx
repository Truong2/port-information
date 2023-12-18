import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const AdminPage = () => {
  const router = useRouter()
  router.push('/admin-portal/services/list')
}

AdminPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

AdminPage.authGuard = true

export default AdminPage
