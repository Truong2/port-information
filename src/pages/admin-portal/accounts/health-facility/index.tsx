import { ExpandDotsIcon } from '@/assets/icons/ExpandDotsIcon'
import { Dropdown, Switch } from 'antd'
import { useState } from 'react'
import Account from 'src/layouts/components/accounts'
import { dataAccountAdmin, dataEmployee, dataFacility } from 'src/utils/dataFake'

const AccountHealthFacility = () => {
  //* State
  const [typeTable, setTypeTable] = useState(1)

  const columnFacility = [
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
      title: 'Tên cơ sở y tế',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Số điện thoại ',
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
        <Dropdown placement='bottomRight'>
          <ExpandDotsIcon />
        </Dropdown>
      )
    }
  ]

  const columnEmployee = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 50
    },
    {
      title: 'Mã nhân viên',
      dataIndex: 'code',
      key: 'code',
      width: 150
    },
    {
      title: 'Mã cơ sở y tế',
      dataIndex: 'codeFacilities',
      key: 'codeFacilities',
      width: 150
    },
    {
      title: 'Tên nhân viên',
      dataIndex: 'employeeName',
      key: 'employeeName',
      width: 250
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 250
    },
    {
      title: 'Số điện thoại ',
      dataIndex: 'phone',
      key: 'phone',
      width: 150
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      width: 250
    },
    {
      title: 'Đối tượng',
      dataIndex: 'userType',
      key: 'userType',
      width: 150
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
      width: 160
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Dropdown placement='bottomRight'>
          <ExpandDotsIcon />
        </Dropdown>
      ),
      width: 50,
      align: 'center'
    }
  ]

  return (
    <Account
      name='Tài khoản cơ sở y tế'
      breadcrumb={[
        {
          title: 'Tài khoản'
        },

        {
          title: 'Cơ sở y tế'
        }
      ]}
      dataTable={typeTable === 1 ? dataFacility : dataEmployee}
      columns={typeTable === 1 ? columnFacility : columnEmployee}
      typeTable={typeTable}
      setTypeTable={setTypeTable}
    />
  )
}

export default AccountHealthFacility
