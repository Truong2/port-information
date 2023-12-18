// ** React Imports

// ** MUI Imports
import Fab from '@mui/material/Fab'
import styled from 'styled-components'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Type Import
import { LayoutProps, VerticalNavItemsType } from '@/layouts/type'

// ** Components
import { colors } from '@/assets/colors'
import { CaretDownIcon, CheckIcon, LogoPort, SearchIcon } from '@/assets/icons'
import { BadgeIcon } from '@/assets/icons/BadgeIcon'
import { DEV_ENV } from '@/constants'
import { useAuth } from '@/hooks/useAuth'
import { handleSrcImg } from '@/utils'
import { Header, Layout, Popover, Sider, Transaction } from '@onesme/dxui'
import { Avatar, Dropdown } from 'antd'
import { Url } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Customizer from 'src/@core/components/customizer'
import ScrollToTop from 'src/@core/components/scroll-to-top'

const ContentWrapper = styled.div``

const LANGUAGE_MAP: { [index: string]: string } = {
  vi: 'VIE',
  en: 'EN'
}

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Tiếng Việt' }
]

const VerticalLayout = (props: LayoutProps) => {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const { logout, user } = useAuth()

  const { pathname } = router

  const [selectKey, setSelectKey] = useState(pathname === '/' ? '/my-app' : pathname)
  const defaultOpenKeys = ['/'.concat(selectKey?.split('/')[1])]

  // ** Props
  const { children, scrollToTop, verticalLayoutProps } = props

  const itemsSystem = useMemo(() => {
    return verticalLayoutProps.navMenu.navItems1 || []
  }, [verticalLayoutProps.navMenu.navItems1])

  const itemsApp = useMemo(() => {
    return verticalLayoutProps.navMenu.navItems2 || []
  }, [verticalLayoutProps.navMenu.navItems2])

  const itemsWorkplace = useMemo(() => {
    return verticalLayoutProps.navMenu.navItems3 || []
  }, [verticalLayoutProps.navMenu.navItems3])

  // ** Vars
  const { disableCustomizer } = themeConfig
  const [visibleModalConfirmLogout, setVisibleModalConfirmLogout] = useState(false)

  const handleLogout = () => {
    setVisibleModalConfirmLogout(true)
  }
  const handleConfirmLogout = () => {
    logout()
    setVisibleModalConfirmLogout(false)
  }

  const userItems: any[] = [
    {
      key: 'info',
      label: (
        <div className='pb-4 mb-1 text-sm border-b text-neutral1100 border-neutral-200'>
          <div className='flex flex-row items-center gap-4'>
            <Avatar
              size={40}
              src={user?.avatar ? handleSrcImg(user?.avatar as string) : null}
              className='bg-primary1000 border-[0.5px] border-solid border-white'
            >
              U
            </Avatar>
            <div>
              <div className='mb-1 text-neutral1100'>{(user?.lastname as string) + ' ' + user?.firstname}</div>
              <div className='text-xs text-neutral800'>{user?.email}</div>
            </div>
          </div>
        </div>
      )
    },

    {
      key: 'logout',
      label: (
        <div className='p-2 text-sm text-neutral-1300' onClick={handleLogout}>
          Đăng xuất
        </div>
      )
    }
  ]

  // ** Header
  const args = {
    logo: (
      <>
        <LogoPort size={40} />
        <div className='ml-4 font-bold'>Port Information</div>
      </>
    ),
    actionRight: (
      <div className='flex flex-row items-center gap-x-4'>
        {DEV_ENV && (
          <div className='flex flex-row items-center gap-x-4'>
            <div className='flex'>
              <SearchIcon size={20} />
            </div>
            <div className='flex'>
              <BadgeIcon size={20} />
            </div>
          </div>
        )}
        <div>
          <Popover
            placement='topRight'
            content={
              <div>
                {LANGUAGE_OPTIONS.map(item => (
                  <div
                    key={item.value}
                    className='flex items-center px-3 py-2 cursor-pointer gap-x-3 body-14-regular text-neutral1100'
                    onClick={() => {
                      i18n.changeLanguage(item.value)
                      localStorage.setItem('workplace_lang', item.value)
                    }}
                  >
                    {item.value === i18n.language ? (
                      <CheckIcon size={20} color='currentColor' />
                    ) : (
                      <div className='w-5' />
                    )}
                    {item.label}
                  </div>
                ))}
              </div>
            }
          >
            <div
              className='flex items-center py-1 pl-4 pr-3 cursor-pointer gap-x-1'
              style={{ borderRight: '1px solid', borderLeft: '1px solid', borderColor: colors.neutral200 }}
            >
              <div className='w-6 body-14-medium text-neutral800'>{LANGUAGE_MAP[i18n.language]}</div>
              <CaretDownIcon size={16} color={colors.neutral800} />
            </div>
          </Popover>
        </div>
      </div>
    ),
    user: (
      <Dropdown
        menu={{
          items: userItems.filter(item => !item?.hidden),
          style: { minWidth: 278 }
        }}
        className='cursor-pointer'
        placement='bottomRight'
        arrow
      >
        <Avatar
          size={32}
          src={user?.avatar ? handleSrcImg(user?.avatar as string) : null}
          className='bg-primary1000 border-[0.5px] border-solid border-white cursor-pointer'
        >
          U
        </Avatar>
      </Dropdown>
    )
  }

  const findPathByKey = (keyToFind: string, menuItems: VerticalNavItemsType): string | undefined => {
    for (const menuItem of menuItems) {
      if (menuItem.key === keyToFind) {
        return menuItem.path
      }

      if (menuItem.children) {
        const path = findPathByKey(keyToFind, menuItem.children)
        if (path) {
          return path
        }
      }
    }

    return undefined
  }

  const onClickSystem = (e: any) => {
    setSelectKey(e.key)
    const path: Url = findPathByKey(e.key, itemsSystem) || ''
    router.push(path)
  }

  const onClickApp = (e: any) => {
    setSelectKey(e.key)
    const path: Url = findPathByKey(e.key, itemsApp) || ''
    router.push(path)
  }

  const onClickWorkplace = (e: any) => {
    setSelectKey(e.key)
    const path: Url = findPathByKey(e.key, itemsWorkplace) || ''
    router.push(path)
  }

  useEffect(() => {
    const currentLang = localStorage.getItem('workplace_lang')
    if (currentLang) {
      i18n.changeLanguage(currentLang)
    } else {
      localStorage.setItem('workplace_lang', 'vi')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* Navigation Menu */}
      <Layout
        contentStyle={{ margin: '52px 0 0 0' }}
        header={
          <Header
            {...args}
            style={{ background: 'white', height: '52px', borderBottom: `1px solid ${colors.neutral200}` }}
          />
        }
        content={<ContentWrapper>{children}</ContentWrapper>}
        sider={
          <Sider
            defaultSelectedKeys={[selectKey]}
            // eslint-disable-next-line lines-around-comment
            // @ts-ignore: Unreachable code error
            items1={itemsSystem}
            // eslint-disable-next-line lines-around-comment
            // @ts-ignore: Unreachable code error
            items2={itemsApp}
            // eslint-disable-next-line lines-around-comment
            // @ts-ignore: Unreachable code error
            items3={itemsWorkplace}
            selectedKeys={[selectKey]}
            background={'#f2f3f5'}
            textLabel1={'Cơ sở y tế' ?? ''}
            textLabel2={'Tài khoản' ?? ''}
            textLabel3={'Đánh giá - Báo cáo thống kê' ?? ''}
            onClick1={onClickSystem}
            onClick2={onClickApp}
            onClick3={onClickWorkplace}
            defaultOpenKeys={defaultOpenKeys}
          />
        }
      />
      {visibleModalConfirmLogout && (
        <Transaction
          rightBtnName={t('button.confirm')}
          leftBtnName={t('button.cancel')}
          icon={'InfoDialogIcon'}
          open={visibleModalConfirmLogout}
          title={t('label.logout')}
          subTitle={`${t('messages.confirmLogout')}`}
          handleCancel={() => setVisibleModalConfirmLogout(false)}
          handleOk={handleConfirmLogout}
        />
      )}
      {/* Customizer */}
      {disableCustomizer ? null : <Customizer />}
      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <Icon icon='tabler:arrow-up' />
          </Fab>
        </ScrollToTop>
      )}
    </>
  )
}

export default VerticalLayout
