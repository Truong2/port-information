import React, { useState } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

const ServiceDetail = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const handleTabChange = (key: React.SetStateAction<string>) => {
    setActiveTab(key)
  }

  return (
    <div className='flex flex-col items-center'>
      {/* Product Image and Title */}
      <div className='w-full p-4 flex items-start'>
        <img
          src='https://placekitten.com/1200/600' // Replace with your product image
          alt='Product Image'
          className='w-1/3 h-auto rounded-lg'
        />
        <div className='ml-4 w-2/3'>
          <h1 className='text-2xl font-semibold'>Product Name</h1>
          <p className='text-lg'>Mô tả sản phẩm...</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs activeKey={activeTab} onChange={handleTabChange} centered className='w-full '>
        <TabPane tab='Tổng quan' key='overview'>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            {/* Overview Tab Content */}
            <p>Tổng quan về sản phẩm...</p>
          </div>
        </TabPane>
        <TabPane tab='Bảng giá' key='pricing'>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            {/* Pricing Tab Content */}
            <p>Bảng giá sản phẩm...</p>
          </div>
        </TabPane>
        <TabPane tab='Đánh giá' key='reviews'>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            {/* Reviews Tab Content */}
            <p>Đánh giá sản phẩm...</p>
          </div>
        </TabPane>
        <TabPane tab='Đăng ký khám bệnh' key='booking'>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            {/* Booking Tab Content */}
            <p>Đăng ký khám bệnh cho sản phẩm...</p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default ServiceDetail
