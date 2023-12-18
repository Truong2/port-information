import { Button } from '@mui/material'
import { Input, Select, Table } from 'antd'
import { Add1Icon } from 'src/assets/icons'
import LayoutAminRight from 'src/layouts/LayoutAminRight'
import { dataMedicalSpecialty } from 'src/utils/dataFake'

// Define options for 'Dịch vụ của cơ sở y tế'
const serviceProviders = [
  { value: 'hospital1', label: 'Bệnh viện A' },
  { value: 'clinic1', label: 'Phòng khám B' },
  { value: 'clinic2', label: 'Phòng khám C' }
]

const MedicalSpecialty = () => {
  // const router = useRouter()

  const columns = [
    {
      title: 'STT',
      key: 'id',
      dataIndex: 'id',
      width: 60
    },
    {
      title: 'Tên chuyên khoa',
      key: 'name',
      dataIndex: 'name',
      width: 200
    },
    {
      title: 'Cơ sở y tế',
      key: 'facility',
      dataIndex: 'facility',
      width: 150
    },
    {
      title: 'Mô tả',
      key: 'description',
      dataIndex: 'description',
      width: 200
    },
    {
      title: 'Thời gian tạo',
      key: 'created_at',
      dataIndex: 'created_at',
      width: 150
    }
  ]

  return (
    <LayoutAminRight
      breadcrumb={[
        {
          title: 'Chuyên khoa'
        },

        {
          title: 'Danh sách chuyên khoa'
        }
      ]}
    >
      <h1>Chuyên khoa</h1>
      <div className='w-full flex justify-end'>
        <Button variant='contained' sx={{ mb: 4 }}>
          Thêm chuyên khoa <Add1Icon color='white' />
        </Button>
      </div>

      {/* Search */}
      <div className='flex flex-col gap-4 mt-2'>
        <div className='w-full flex gap-3'>
          <Input className='w-1/3' placeholder='Tên chuyên khoa' allowClear size='large' />
          <Select
            className='w-1/3'
            size='large'
            placeholder='cơ sở y tế'
            onChange={value => console.log('Selected service provider:', value)}
            options={serviceProviders}
          />
        </div>
      </div>

      <div className='flex items-center justify-between mb-3'>
        <h2 className='my-4 w-1/3'>Danh sách chuyên khoa</h2>
      </div>

      {/* Table */}
      <Table className='beauty-scroll-table' dataSource={dataMedicalSpecialty} columns={columns} scroll={{ x: 1200 }} />
    </LayoutAminRight>
  )
}

export default MedicalSpecialty
