import { Button, Tab, Tabs } from '@mui/material'
import { Input, Select, Table } from 'antd'
import { useRouter } from 'next/router'
import { Add1Icon, AddingAppIcon, Worker3Icon } from 'src/assets/icons'
import LayoutAminRight from 'src/layouts/LayoutAminRight'

interface Props {
  name: string
  breadcrumb: any
  dataTable: any
  columns: any
  typeTable?: number
  setTypeTable?: any
}

const { Search } = Input

const Account = ({ name, breadcrumb, dataTable, columns, typeTable, setTypeTable }: Props) => {
  //* Hooks
  const router = useRouter()
  const currentPath = router.pathname // Đường dẫn hiện tại
  const currentQuery = router.query
  const newPath = `${currentPath}/create-account`

  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <LayoutAminRight breadcrumb={breadcrumb}>
      <h1>{name}</h1>
      <div className='w-full flex justify-end'>
        <Button
          variant='contained'
          sx={{ mb: 4 }}
          onClick={() => router.push({ pathname: newPath, query: currentQuery })}
        >
          Tạo tài khoản <Add1Icon color='white' />
        </Button>
      </div>

      {/* Tìm kiếm */}
      <div className='flex gap-3 mt-2'>
        <Search className='w-1/4' placeholder='Email' allowClear size='large' onSearch={onSearch} />
        <Search className='w-1/4' placeholder='Họ và tên' allowClear size='large' onSearch={onSearch} />
        <Select
          className='w-1/4'
          size='large'
          showSearch
          allowClear
          placeholder='Phân quyền'
          optionFilterProp='children'
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={[
            {
              value: '0',
              label: 'FULL ADMIN'
            },
            {
              value: '1',
              label: 'ADMIN Miền Bắc'
            },
            {
              value: '2',
              label: 'ADMIN Miền Nam'
            }
          ]}
        />
        <Select
          className='w-1/4'
          allowClear
          showSearch
          size='large'
          placeholder='Trạng thái hoạt động'
          optionFilterProp='children'
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={[
            {
              value: '0',
              label: 'Tất cả'
            },
            {
              value: '1',
              label: 'Bật'
            },
            {
              value: '2',
              label: 'Tắt'
            }
          ]}
        />
      </div>
      <div className='flex items-center justify-between'>
        <h2 className='my-4'>Danh sách tài khoản {typeTable === 1 ? 'cơ sở y tế' : 'nhân viên'} </h2>
        {typeTable && (
          <div className='flex items-center'>
            <Tabs value={typeTable} onChange={(element, item) => setTypeTable(item)} aria-label='icon tabs example'>
              <Tab value={1} icon={<AddingAppIcon color='black' size={24} />} />
              <Tab value={2} icon={<Worker3Icon color='black' size={24} />} />
            </Tabs>
          </div>
        )}
      </div>
      {/* Table */}
      <Table
        className='beauty-scroll-table'
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: typeTable === 2 ? 1800 : 0 }}
      />
    </LayoutAminRight>
  )
}

export default Account
