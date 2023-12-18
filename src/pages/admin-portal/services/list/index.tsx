import { Button } from '@mui/material'
import { Input, Select, Switch, Table, Tag } from 'antd'
import { Add1Icon, Delete1Icon } from 'src/assets/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LayoutAminRight from 'src/layouts/LayoutAminRight'
import { dataService } from 'src/utils/dataFake'
import { useState } from 'react'

// Option Trạng thái dịch vụ
const statusOptions = [
  { value: 'all', label: 'Tất cả' },
  { value: 'approved', label: 'Đã duyệt' },
  { value: 'pending', label: 'Chờ duyệt' },
  { value: 'unapproved', label: 'Chưa duyệt' },
  { value: 'rejected', label: 'Từ chối' }
]

// Define options for 'Dịch vụ của cơ sở y tế'
const serviceProviders = [
  { value: 'hospital1', label: 'Bệnh viện A' },
  { value: 'clinic1', label: 'Phòng khám B' },
  { value: 'clinic2', label: 'Phòng khám C' }
]

// Define options for 'Đối tượng'
const targets = [
  { value: 'children', label: 'Trẻ em' },
  { value: 'adults', label: 'Người lớn' },
  { value: 'elderly', label: 'Người già' },
  { value: 'pregnantWomen', label: 'Phụ nữ mang thai' }
]

// Define options for 'Trạng thái hiển thị'
const displayStatusOptions = [
  { value: 'all', label: 'Tất cả' },
  { value: 'visible', label: 'Hiển thị' },
  { value: 'hidden', label: 'Ẩn' }
]

// danh mục
const categoryOptions = [
  {
    value: 'examination',
    label: 'Dịch vụ khám chữa bệnh'
  },
  {
    value: 'diagnosis',
    label: 'Dịch vụ xét nghiệm'
  },
  {
    value: 'treatment',
    label: 'Dịch vụ chẩn đoán hình ảnh'
  },
  {
    value: 'prevention',
    label: 'Dịch vụ điều trị'
  },
  {
    value: 'rehabilitation',
    label: 'Dịch vụ phục hồi chức năng'
  },
  {
    value: 'consulting',
    label: 'Dịch vụ tư vấn sức khỏe'
  },
  {
    value: 'homecare',
    label: 'Dịch vụ chăm sóc sức khỏe tại nhà'
  },
  {
    value: 'nutritional counseling',
    label: 'Dịch vụ tư vấn dinh dưỡng'
  },
  {
    value: 'psychological counseling',
    label: 'Dịch vụ tư vấn tâm lý'
  },
  {
    value: 'health education',
    label: 'Dịch vụ giáo dục sức khỏe'
  },

  {
    value: 'chronic care',
    label: 'Dịch vụ chăm sóc sức khỏe cho người bệnh mãn tính'
  }
]

const Services = () => {
  const router = useRouter()
  const currentPath = router.pathname

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const columns = [
    {
      title: 'STT',
      key: 'id',
      dataIndex: 'id',
      width: 60
    },
    {
      title: 'Tên dịch vụ',
      key: 'name',
      dataIndex: 'name',
      width: 200,
      render: (text: string, record: any) => (
        <div className='flex items-center '>
          <img
            src='https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-cartoon-anime-scene-of-free-blood-donation-in-hospital-png-image_2609310.jpg'
            alt={text}
            style={{ marginRight: '8px', width: '70px', height: '70px', borderRadius: '50%' }}
          />
          <Link href={`${currentPath}/${record.id}`}>{text}</Link>
        </div>
      )
    },
    {
      title: 'Cơ sở y tế',
      dataIndex: 'facility',
      key: 'facility',
      width: 150
    },
    {
      title: 'Thời gian cập nhật ',
      dataIndex: 'updated_at',
      key: 'updated_at',
      width: 150
    },

    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      width: 150
    },
    {
      title: 'Trạng thái duyệt',
      key: 'statusBrowsing',
      dataIndex: 'statusBrowsing',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (status: any) => {
        switch (status) {
          case 'Đã duyệt':
            return (
              <Tag color='success' style={{ color: 'white', backgroundColor: '#009688' }}>
                {status}
              </Tag>
            )
          case 'Chờ duyệt':
            return (
              <Tag color='warning' style={{ color: 'white', backgroundColor: '#596d1c' }}>
                {status}
              </Tag>
            )
          case 'Từ chối':
            return (
              <Tag color='error' style={{ color: 'white', backgroundColor: '#f44336' }}>
                {status}
              </Tag>
            )
          default:
            return (
              <Tag color='info' style={{ color: 'white', backgroundColor: '#ffc107' }}>
                {status}
              </Tag>
            )
        }
      },
      width: 150
    },
    {
      title: 'Trạng thái',
      key: 'status',
      dataIndex: 'status',
      render: (status: boolean) => {
        return (
          <>
            <Switch checked={status} />
          </>
        )
      },
      width: 80
    }
  ]

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  return (
    <LayoutAminRight
      breadcrumb={[
        {
          title: 'Tài khoản'
        },

        {
          title: 'Danh sách dịch vụ'
        }
      ]}
    >
      <h1>Dịch vụ hệ thống</h1>
      <div className='w-full flex justify-end'>
        <Button variant='contained' sx={{ mb: 4 }}>
          Tạo dịch vụ <Add1Icon color='white' />
        </Button>
      </div>

      {/* Search */}
      <div className='flex flex-col gap-4 mt-2'>
        <div className='w-full flex gap-3'>
          <Input className='w-1/3' placeholder='Tên dịch vụ' allowClear size='large' />
          <Select
            className='w-1/3'
            size='large'
            placeholder='Dịch vụ của cơ sở y tế'
            onChange={value => console.log('Selected service provider:', value)}
            options={serviceProviders}
          />

          <Select
            className='w-1/3'
            size='large'
            placeholder='Đối tượng'
            onChange={value => console.log('Selected target:', value)}
            options={targets}
          />
        </div>
        <div className='w-full flex gap-3'>
          <Select className='w-1/3' size='large' placeholder='Trạng thái hiển thị' options={displayStatusOptions} />
          <Select className='w-1/3' size='large' placeholder='Danh mục' options={categoryOptions} />
          <Select className='w-1/3' size='large' placeholder='Trạng thái duyệt' options={statusOptions} />
        </div>
      </div>

      <div className='flex items-center justify-between mb-3'>
        <h2 className='my-4 w-1/3'>Danh sách dịch vụ</h2>

        <div className='items-center text-right w-2/3 flex gap-2 justify-end'>
          <span className='mr-4'>Đã chọn : {selectedRowKeys?.length}</span>
          <Button variant='outlined'>
            <div className='flex items-center justify-center gap-2'>
              <Delete1Icon size={16} color='#28C76F' />
              <span>Xoá</span>
            </div>
          </Button>
          <Button variant='outlined'>Yêu cầu phê duyệt</Button>
        </div>
      </div>

      {/* Table */}
      <Table
        rowSelection={rowSelection}
        className='beauty-scroll-table'
        dataSource={dataService}
        columns={columns}
        rowKey='id'
        scroll={{ x: 1200 }}
      />
    </LayoutAminRight>
  )
}

export default Services
