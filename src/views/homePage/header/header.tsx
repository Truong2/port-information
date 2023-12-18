// ** React Imports
import { Avatar, Dropdown, Menu, Space } from 'antd'

// ** Layout Import

// ** Demo Imports
import { DownArrowIcon, LogoPort } from '@/assets/icons'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CategoryMenuBos from './CategoryMenuBos'
import Link from 'next/link'
import { Button, Transaction } from '@onesme/dxui'

// Menu Header
export const ITEM_NAV = {
  HOME: 0,
  DEVICE: 1,
  SOLUTION: 2,
  VNPT: 3
}

// ** Styled Components
const CustomDiv = styled.div<{ name?: number; style?: any }>`
  position: relative;
  justify-content: center;
  display: flex;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 1px;
    z-index: 10000;
    background-color: ${props => (props.name === ITEM_NAV.VNPT ? '#eb4542' : '#2A6AEB')};
    transition: width 150ms ease-in-out;
  }
  &:hover:after {
    width: 100%;
  }
`

const Header = () => {
  // ** hook
  const router = useRouter()

  const [hoveredItem, setHoveredItem] = useState(0)
  const [visibleModalConfirmLogout, setVisibleModalConfirmLogout] = useState(false)
  const visibleCategory = hoveredItem === ITEM_NAV.DEVICE || hoveredItem === ITEM_NAV.SOLUTION

  const handleMouseEnter = (itemKey: number) => {
    setHoveredItem(itemKey)
  }

  const handleMouseLeave = () => {
    setHoveredItem(0)
  }

  const MenuItemContent = ({ text, keyItem }: any) => (
    <Space
      className={`body-14-regular ${
        hoveredItem === keyItem ? 'text-primary600' : 'text-neutral1100'
      } whitespace-nowrap`}
    >
      {text}
      {hoveredItem === keyItem ? <DownArrowIcon /> : <DownArrowIcon />}
    </Space>
  )

  const notLoggedIn = true

  //* MENU
  const menuItems = [
    {
      key: ITEM_NAV.HOME,
      label: 'Trang chủ',
      to: '#',
      onMouseEnter: () => handleMouseEnter(ITEM_NAV.HOME),
      onMouseLeave: handleMouseLeave,
      content: <div className='body-14-regular text-neutral1100 hover:text-primary600'>Trang chủ</div>
    },
    {
      key: ITEM_NAV.DEVICE,
      label: 'Cơ sở y tế',
      onMouseEnter: () => handleMouseEnter(ITEM_NAV.DEVICE),
      content: <MenuItemContent text='Cơ sở y tế' keyItem={ITEM_NAV.DEVICE} />
    },
    {
      key: ITEM_NAV.SOLUTION,
      label: 'Dịch vụ y tế',
      onMouseEnter: () => handleMouseEnter(ITEM_NAV.SOLUTION),
      content: <MenuItemContent text='Dịch vụ y tế' keyItem={ITEM_NAV.SOLUTION} />
    },
    {
      key: ITEM_NAV.VNPT,
      label: 'Gói khám',
      to: '#',
      onMouseEnter: () => handleMouseEnter(ITEM_NAV.VNPT),
      onMouseLeave: handleMouseLeave,
      content: (
        <div className='flex items-center text-red600'>
          Gói khám'
          {/* <MusicIcon /> */}
        </div>
      )
    }
  ]

  const user = {} as any

  const DropdownMenuAvatar = (
    <Menu className='top-3'>
      <div className='flex items-center gap-2 px-6 py-3'>
        <Avatar src={user.avatar} className='w-8 h-8 leading-8 cursor-pointer bg-primary600'>
          Nguyen Van Truong
        </Avatar>
        <div className='body-14-semibold text-neutral1100'>{user.lastname + user.firstname}</div>
      </div>
      <Menu.Item key='profile'>
        <Link href='/bos-portal/account/profile' className='body-14-medium text-neutral1100'>
          Hồ sơ cá nhân
        </Link>
      </Menu.Item>
      <Menu.Item key='econtract'>
        <Link href='/bos-portal/account/econtract' className='body-14-medium text-neutral1100'>
          Quản lý hợp đồng
        </Link>
      </Menu.Item>
      <Menu.Item key='logout' onClick={() => setVisibleModalConfirmLogout(true)}>
        <div className='body-14-medium text-neutral1100 h-7 leading-7'>Đăng xuất</div>
      </Menu.Item>
    </Menu>
  )

  const AvatarUser = () =>
    notLoggedIn ? (
      <>
        {/* Chưa đăng nhập */}
        <Link title='Đăng nhập' className='body-14-medium ' href='/login'>
          Đăng nhập
        </Link>
        <Button
          className='ml-2 body-14-medium border-none'
          type='primary-normal'
          onClick={() => {
            router.push('/register')
          }}
        >
          Đăng ký
        </Button>
      </>
    ) : (
      <Dropdown overlay={DropdownMenuAvatar} trigger={['click']}>
        <Avatar src={user.avatar} className='w-8 h-8 leading-8 cursor-pointer bg-primary600'>
          {user?.firstname && user?.firstname[0]}
        </Avatar>
      </Dropdown>
    )

  return (
    <>
      <header
        id='headerId'
        className='fixed right-0 left-0 w-full z-max bg-main  mb-2 shadow-header header-transition'
        style={{
          zIndex: '999999'
        }}
      >
        <div className='w-full'>
          <div
            className='px-6 py-2 mx-auto'
            style={{ maxWidth: '1440px', borderBottom: '1px solid  #E2E8F3' }}
            onMouseEnter={handleMouseLeave}
          >
            <div className='flex justify-between items-center self-start grow-0 h-9 '>
              <div className='w-80 flex items-center gap-6'>
                <LogoPort size={50} />
                <div className='text-lg font-bold'>Health Care</div>
              </div>
              <div className='flex items-center justify-end gap-6'>
                <AvatarUser />
              </div>
            </div>
            {/* column 2 */}
          </div>
          <div className='pt-3 flex px-6 items-center justify-center relative'>
            <div className='flex items-center gap-6 body-14-regular'>
              <Menu mode='horizontal' className='body-14-regular menu-bos'>
                {menuItems.map(item => (
                  <Menu.Item key={item.key} onClick={() => router.push(item.to as string)}>
                    <CustomDiv
                      className='text-sm pb-2 whitespace-nowrap'
                      onMouseEnter={item.onMouseEnter}
                      onMouseLeave={item.onMouseLeave && item.onMouseLeave}
                      name={item.key}
                    >
                      {item.content}
                    </CustomDiv>
                  </Menu.Item>
                ))}
              </Menu>
            </div>

            {/* Danh mục */}
            <CategoryMenuBos
              hoveredItem={hoveredItem}
              visibleCategory={visibleCategory}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
        {visibleModalConfirmLogout && (
          <Transaction
            rightBtnName='Xác nhận'
            leftBtnName='Huỷ'
            icon={'InfoDialogIcon'}
            open={visibleModalConfirmLogout}
            title='Đăng xuất'
            subTitle='Bạn có muốn đăng xuất'
            handleCancel={() => setVisibleModalConfirmLogout(false)}
            handleOk={() => setVisibleModalConfirmLogout(false)}
          />
        )}
      </header>
      {/* Lớp phủ khi hover Dropdown menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-0 hidden transition-all ${
          visibleCategory && 'block opacity-25'
        }`}
        style={{
          zIndex: '99999'
        }}
      />
    </>
  )
}

export default Header
