import { ExpandDotsIcon } from '@/assets/icons/ExpandDotsIcon'
import { ClickItem } from '@/utils/interfaces'
import { Dropdown, MenuProps, Switch } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Account from 'src/layouts/components/accounts'
import CustomModal from 'src/layouts/components/modal'
import { dataAccountAdmin } from 'src/utils/dataFake'

const AccountAdmin = () => {
  //* Hooks
  const router = useRouter()
  const currentPath = router.pathname // Đường dẫn hiện tại

  //* State
  const [clickMenu, setClickMenu] = useState<ClickItem>({
    isChangePassword: false,
    isChangeUser: false,
    isDeleAccount: false
  })

  const { isChangePassword, isChangeUser, isDeleAccount } = clickMenu

  const handleMenuClick = (menuItem?: keyof ClickItem) => {
    setClickMenu({
      isChangePassword: menuItem === 'isChangePassword',
      isChangeUser: menuItem === 'isChangeUser',
      isDeleAccount: menuItem === 'isDeleAccount'
    })
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div onClick={() => handleMenuClick('isChangeUser')}>Thay đổi tên đăng nhập</div>
    },
    {
      key: '2',
      label: <div onClick={() => handleMenuClick('isChangePassword')}>Đổi mật khẩu</div>
    },
    {
      key: '3',
      label: <div onClick={() => handleMenuClick('isDeleAccount')}>Xoá tài khoản</div>
    }
  ]

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (value: string, record: { id: any }) => <Link href={`${currentPath}/${record.id}`}>{value} </Link>,
      width: 250
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
      key: 'hoTen',
      width: 250
    },
    {
      title: 'Phân quyền',
      dataIndex: 'permission',
      key: 'permission'
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'status',
      key: 'status',
      render: (text: boolean | undefined, record: { key: string }) => (
        <Switch
          checked={text}
          onChange={checked => {
            const newData = dataAccountAdmin.map(item =>
              item.key === record.key ? { ...item, status: checked } : item
            )

            console.log('Toggle change', newData)
          }}
        />
      ),
      width: 169
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Dropdown menu={{ items }} placement='bottomLeft' arrow>
          <div className=''>
            <ExpandDotsIcon />
          </div>
        </Dropdown>
      ),
      width: 50,
      align: 'center'
    }
  ]

  // title Modal
  const TitleModal = () => {
    if (isChangePassword) return 'Thay đổi mật khẩu'
    else if (isChangeUser) return 'Thay đổi tên đăng nhập'
    else return 'Xoá tài khoản'
  }

  return (
    <>
      <Account
        name='Tài khoản quản trị viên'
        breadcrumb={[
          {
            title: 'Tài khoản'
          },

          {
            title: 'Quản trị viên'
          }
        ]}
        dataTable={dataAccountAdmin}
        columns={columns}
      />

      {/* Modal đổi mật khẩu */}
      <CustomModal
        open={isChangePassword || isChangeUser || isDeleAccount}
        title={TitleModal()}
        onCancel={() => handleMenuClick()}
      >
        <div className='flex'>
          {isChangePassword && 'Form thay đổi mật khẩu'}
          {isChangeUser && 'Form thay đổi thông tin đăng nhập'}
          {isDeleAccount && 'Bạn có chắn chắn muốn xoá tài khoản'}
        </div>
      </CustomModal>
    </>
  )
}

export default AccountAdmin
