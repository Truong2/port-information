import { LogoPort } from '@/assets/icons'
import styled from '@emotion/styled'
import React, { ReactNode, useEffect, useState } from 'react'

interface LoginPageLayoutProps {
  children: ReactNode
  title: string
  description: string
  footer?: ReactNode
}
const LoginIllustration = styled('img')(({}) => ({
  width: '80%',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  margin: '0 auto'
}))

const LoginPageLayout: React.FC<LoginPageLayoutProps> = ({ children, title, description, footer }) => {
  const [margin, setMargin] = useState<string>('mb-[72px]')

  useEffect(() => {
    // Kiểm tra chiều cao của nội dung
    const contentElement = document.querySelector('.content')
    if (contentElement) {
      const contentHeight = contentElement.clientHeight
      const screenHeight = window.innerHeight

      // Kiểm tra nếu nội dung vượt qua chiều cao màn hình, thay đổi margin
      if (contentHeight >= screenHeight) {
        setMargin('mb-[32px]')
      } else {
        setMargin('mb-[72px]')
      }
    }
  }, [])

  return (
    <div className='flex w-full h-full'>
      <div
        className='w-1/2 relative flex justify-center items-center'
        style={{
          background: '#28c76f'
        }}
      >
        <LoginIllustration alt='login-illustration' src={`/images/admin-banner.svg`} />
        <div className='absolute bottom-20 text-[24px] text-white'>
          Welcome to <span className='text-[28px] text-red-500'>HEALTHCARE PORTAL</span>
        </div>
        <div className='absolute bottom-14 text-[14px] text-white'>Cổng thông tin cung cấp dịch vụ khám chữa bệnh </div>
      </div>
      <div className='w-1/2 h-full bg-white'>
        <div className='h-screen flex items-center justify-center overflow-y-auto '>
          <div className=' w-full max-w-[560px]'>
            <div className={`${margin} flex justify-center`}>
              <LogoPort />
            </div>

            {/* Title */}
            <div className='text-[32px] font-semibold text-neutral1300'>{title}</div>
            <div className='mt-4 text-sm text-neutral1300'>{description}</div>

            {/* Form */}
            <div className={`${margin}`}>{children}</div>

            {/* Footer */}
            <div className=''>{footer}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPageLayout
