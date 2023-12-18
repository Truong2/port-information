import { ChevronDownIcon } from '@/assets/icons/ChevronDownIcon'
import { ChevronUpIcon } from '@/assets/icons/ChevronUpIcon'
import ShowDetail from '@/layouts/components/ui/ShowDetail'
import UserProfileHeader from '@/layouts/components/ui/UserProFileHeader'
import { Collapse } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LayoutAminRight from 'src/layouts/LayoutAminRight'

interface DataTypeDetail {
  label: string // biến chứa label của chi tiết
  value: string // biến chứa nội dung chi tiết
  isCertificate?: boolean // biến kiểm tra có phải giấy chứng thực hay không
}

const AccountAdminDetail = () => {
  //* Hooks
  const router = useRouter()
  const currentPath = router.asPath
  const { id } = router.query

  const infoDetails = [
    {
      label: 'Email',
      value: 'Email'
    },
    {
      label: 'Số điện thoại',
      value: 'Số điện thoại'
    },
    {
      label: 'Giới tính',
      value: 'Giới tính'
    },
    {
      label: 'Quê quán',
      value: 'Quê quán'
    }
  ]

  const infoDetails1 = [
    {
      label: 'Tên đăng nhập',
      value: 'Tên đăng nhập'
    },
    {
      label: 'Mật khẩu',
      value: '*******'
    },
    {
      label: 'Chức vụ',
      value: 'Chức vụ'
    }
  ]

  return (
    <LayoutAminRight
      breadcrumb={[
        {
          title: 'Tài khoản'
        },
        {
          title: <Link href={currentPath.replace(`/${id}`, '')}>Danh sách quản trị viên </Link>
        },
        {
          title: 'Chi tiết tài khoản'
        }
      ]}
    >
      {/* Header */}
      <UserProfileHeader />

      {/* Todo: Tối ưu lại logic */}
      {/* Content */}
      <div className='mt-4'>
        <Collapse
          expandIconPosition='end'
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => {
            return isActive ? <ChevronUpIcon /> : <ChevronDownIcon />
          }}
          size='middle'
          items={[
            {
              key: '1',
              label: <p className='label-item-detail'>Thông tin cá nhân</p>,
              children: (
                <div>
                  {infoDetails?.map((item: DataTypeDetail) => (
                    <ShowDetail
                      key={item.label}
                      label={item.label}
                      value={item.value}
                      isCertificate={item?.isCertificate}
                    />
                  ))}
                </div>
              )
            }
          ]}
        />
      </div>
      <div className='mt-6'>
        <Collapse
          expandIconPosition='end'
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => {
            return isActive ? <ChevronUpIcon /> : <ChevronDownIcon />
          }}
          size='middle'
          items={[
            {
              key: '1',
              label: <p className='label-item-detail'>Thông tin Tài khoản </p>,
              children: (
                <div>
                  {infoDetails1?.map((item: DataTypeDetail) => (
                    <ShowDetail
                      key={item.label}
                      label={item.label}
                      value={item.value}
                      isCertificate={item?.isCertificate}
                    />
                  ))}
                </div>
              )
            }
          ]}
        />
      </div>
    </LayoutAminRight>
  )
}

export default AccountAdminDetail
