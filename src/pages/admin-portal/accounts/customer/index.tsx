import { ExpandDotsIcon } from '@/assets/icons/ExpandDotsIcon'
import { Dropdown, MenuProps, Switch } from 'antd'
import { useState } from 'react'
import Account from 'src/layouts/components/accounts'
import { dataAccountAdmin, dataAccountCustomer } from 'src/utils/dataFake'
import { ClickItem } from 'src/utils/interfaces'

const AccountCustomer = () => {
  //* State
  const [clickMenu, setClickMenu] = useState<ClickItem>({
    isChangePassword: false,
    isChangeUser: false,
    isDeleAccount: false
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      dataIndex: 'stt',
      key: 'stt'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'hoTen',
      key: 'hoTen'
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address'
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
      )
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

  return (
    <Account
      name='Tài khoản Khách hàng'
      breadcrumb={[
        {
          title: 'Tài khoản'
        },

        {
          title: 'Khách hàng'
        }
      ]}
      dataTable={dataAccountCustomer}
      columns={columns}
    />
  )
}

export default AccountCustomer
