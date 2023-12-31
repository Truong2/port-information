import ServiceApprove from '@/layouts/components/serviceDetails/ServiceApprove'
import ServiceDetail from '@/layouts/components/serviceDetails/ServiceDetail'
import TabsCustomized from '@/layouts/components/tabs/TabsCustomized'
import { Button, Typography } from '@mui/material'
import { Card, Tag } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import LayoutAminRight from 'src/layouts/LayoutAminRight'

const Services = () => {
  //* State
  const [showPreview, setShowPreview] = useState(false)

  return (
    <LayoutAminRight
      breadcrumb={[
        {
          title: 'Tài khoản'
        },
        {
          title: <Link href={'/admin-portal/services/list'}>Danh sách dịch vụ </Link>
        },
        {
          title: 'Chi tiết dịch vụ'
        }
      ]}
    >
      {showPreview ? (
        <ServiceDetail />
      ) : (
        <>
          <Card className='shadow-md rounded-md'>
            <div className='flex justify-between'>
              <div className='w-2/3'>
                <div className='text-xl font-semibold mb-4 truncate'>Dịch vụ A</div>
                <Tag style={{ backgroundColor: '#ffc107' }}>Chờ duyệt</Tag>
              </div>
              <div>
                <Button variant='contained' onClick={() => setShowPreview(true)}>
                  Xem trước{' '}
                  <span role='img' className='anticon ml-4'>
                    <svg viewBox='0 0 15 14' width='1em' height='1em' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M13.9717 6.8459C12.4905 3.72559 10.2514 2.15527 7.24985 2.15527C4.24672 2.15527 2.00922 3.72559 0.527971 6.84746C0.468558 6.97327 0.437744 7.11067 0.437744 7.2498C0.437744 7.38894 0.468558 7.52634 0.527971 7.65215C2.00922 10.7725 4.24828 12.3428 7.24985 12.3428C10.253 12.3428 12.4905 10.7725 13.9717 7.65059C14.092 7.39746 14.092 7.10371 13.9717 6.8459ZM7.24985 11.2178C4.72953 11.2178 2.88422 9.93965 1.58266 7.24902C2.88422 4.5584 4.72953 3.28027 7.24985 3.28027C9.77016 3.28027 11.6155 4.5584 12.917 7.24902C11.617 9.93965 9.77172 11.2178 7.24985 11.2178ZM7.18735 4.49902C5.6686 4.49902 4.43735 5.73027 4.43735 7.24902C4.43735 8.76777 5.6686 9.99902 7.18735 9.99902C8.7061 9.99902 9.93735 8.76777 9.93735 7.24902C9.93735 5.73027 8.7061 4.49902 7.18735 4.49902ZM7.18735 8.99902C6.22016 8.99902 5.43735 8.21621 5.43735 7.24902C5.43735 6.28184 6.22016 5.49902 7.18735 5.49902C8.15453 5.49902 8.93735 6.28184 8.93735 7.24902C8.93735 8.21621 8.15453 8.99902 7.18735 8.99902Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </Card>
          <div className='mt-4'>
            <TabsCustomized
              tabItem={[
                {
                  value: '1',
                  label: 'Thông tin đã duyệt',
                  component: (
                    <Typography>
                      Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer
                      wafer jelly cake caramels brownie gummies.
                    </Typography>
                  )
                },
                {
                  value: '2',
                  label: 'Thông tin đang xử lý',
                  component: <ServiceApprove />
                },
                {
                  value: '3',
                  label: 'Gói dịch vụ',
                  component: (
                    <Typography>
                      Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer
                      wafer jelly cake caramels brownie gummies.
                    </Typography>
                  )
                },
                {
                  value: '4',
                  label: 'Hỗ trợ',
                  component: (
                    <Typography>
                      Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer
                      wafer jelly cake caramels brownie gummies.
                    </Typography>
                  )
                }
              ]}
            />
          </div>
        </>
      )}

      {/* Table */}
    </LayoutAminRight>
  )
}

export default Services
