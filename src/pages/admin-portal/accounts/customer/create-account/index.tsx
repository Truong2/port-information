import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LayoutAminRight from 'src/layouts/LayoutAminRight'
import { Form, Input, Select, Switch, Upload, message } from 'antd'
import styled from '@emotion/styled'

import type { UploadChangeParam } from 'antd/es/upload'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { Button, Checkbox } from '@mui/material'
import { trim } from 'lodash'
import {
  validateEmail,
  validateMaxLengthStr,
  validatePhoneNumber2,
  validateRequire,
  validateRequireInput
} from '@/utils/validation'

const BoxDetail = styled.div`
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
  .ant-form-item-control-input-content div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }

  return isJpgOrPng && isLt2M
}

const CreateAccountCustomer = () => {
  //* hooks
  const [form] = Form.useForm()
  const router = useRouter()
  const currentPath = router.pathname

  //* state
  const [isDirty, setDirty] = useState(false)
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)

      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <LayoutAminRight
      breadcrumb={[
        {
          title: 'Tài khoản'
        },
        {
          title: <Link href={currentPath.replace('/create-account', '')}>Danh sách tài khoản khách hàng </Link>
        },
        {
          title: 'Tạo tài khoản'
        }
      ]}
    >
      {/* title */}
      <h1>Tạo tài khoản khách hàng</h1>

      {/* form */}
      <Form
        form={form}
        className='mt-10'
        layout='vertical'
        onFinish={values => {
          console.log('values', values)
        }}
        onValuesChange={() => !isDirty && setDirty(true)}
      >
        <BoxDetail>
          <div className='flex justify-center'>
            <Form.Item name='avatar'>
              <Upload
                name='avatar'
                listType='picture-circle'
                className='avatar-uploader'
                showUploadList={false}
                action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Form.Item>
          </div>
          <div className='text-center text-primary'>Chọn ảnh đại diện</div>
        </BoxDetail>
        <div className='flex flex-col gap-4'>
          <Form.Item
            name='email'
            label='Email'
            normalize={trim}
            rules={[
              validateRequireInput('Email không được bỏ trống'),
              validateEmail('Sai định dạng email'),
              validateMaxLengthStr(100, 'Email có tối đa 100 ký tự')
            ]}
          >
            <Input size='large' placeholder='Nhập email' maxLength={100} />
          </Form.Item>
          <Form.Item required className='mb-0'>
            <div className='flex gap-4'>
              <Form.Item
                label='Họ'
                className='w-1/2'
                name='lastName'
                rules={[validateRequireInput('Họ không được bỏ trống'), validateMaxLengthStr(20, 'Tối đa 20 ký tự')]}
              >
                <Input size='large' placeholder='Nhập họ' maxLength={20} />
              </Form.Item>
              <Form.Item
                label='Tên'
                className='w-1/2'
                name='firstName'
                rules={[validateRequireInput('Tên không được bỏ trống')]}
              >
                <Input size='large' placeholder='Nhập tên' maxLength={20} />
              </Form.Item>
            </div>
          </Form.Item>

          <Form.Item
            name='phoneNumber'
            label='Số điện thoại'
            rules={[
              validateRequireInput('Số điện thoại không được bỏ trống'),
              validatePhoneNumber2('Sai định dạng số điện thoại')
            ]}
          >
            <Input size='large' maxLength={18} placeholder='Nhập số điện thoại' />
          </Form.Item>

          <Form.Item name='roles' label='Phân quyền' rules={[validateRequire('Phân quyền không được bỏ trống')]}>
            <Select
              size='large'
              placeholder='Chọn phân quyền'
              mode='multiple'
              optionLabelProp='label'
              showSearch
              allowClear
              className='w-full'
            />
          </Form.Item>
          <Form.Item name='adminType' label='Loại tài khoản'>
            <Select size='large' showSearch allowClear className='w-60 mr-6' placeholder='Chọn loại tài khoản'></Select>
          </Form.Item>
          <Form.Item
            style={{ flexDirection: 'row' }}
            name='status'
            label='Trạng thái hoạt động'
            className='flex'
            initialValue='ACTIVE'
            required
          >
            <Switch defaultChecked className='ml-0' />
          </Form.Item>
          <Form.Item
            className='flex items-center'
            name='notificationType'
            label='Chọn hình thức gửi thông tin'
            required
            initialValue={[0]}
          >
            <div className='flex items-center'>
              <Checkbox defaultChecked={true} sx={{ marginLeft: '-10px' }} size='medium' title='Gửi email' value={1} />
              Gửi email
            </div>
          </Form.Item>
        </div>

        <div className='flex gap-4 justify-center mt-3'>
          <Button variant='outlined' sx={{ mb: 4 }}>
            Huỷ
          </Button>
          <Button type='submit' variant='contained' sx={{ mb: 4 }} disabled={!isDirty}>
            Tạo
          </Button>
        </div>
      </Form>
    </LayoutAminRight>
  )
}

export default CreateAccountCustomer
