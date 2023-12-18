import BlankLayout from '@/@core/layouts/BlankLayout'
import Header from '@/views/homePage/header/header'
import { ReactNode } from 'react'

const Home = () => {
  return (
    <>
      <Header />
    </>
  )
}

Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Home.guestGuard = true

export default Home
