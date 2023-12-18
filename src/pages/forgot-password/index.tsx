// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import { styled } from '@mui/material/styles'

// ** Custom Component Import

// ** Icon Imports

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import { ChevronLeftIcon } from '@/assets/icons'
import { REGEX_MAIL_OR_TAX_CODE } from '@/constants'
import LoginPageLayout from '@/layouts/components/login/LoginPageLayout'

import { validateCustomPattern, validateRequireInput } from '@/utils/validation'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Button, TextField, Tooltip, colors } from '@onesme/dxui'
import { Form } from 'antd'
import { trim } from 'stylis'

const CustomForm = styled(Form)`
  label,
  input {
    font-size: 14px;
  }
  .ant-form-item-explain-error {
    display: none;
  }
`

const ForgotPassword = () => {
  // hook
  const [form] = Form.useForm()

  // state
  const [errorForm, setErrorForm] = useState<{
    username: string
  }>({
    username: ''
  })

  const handleSubmit = (event: any) => {
    console.log('Submit', event)
  }

  return (
    <LoginPageLayout title='Quên mật khẩu' description='Đặt lại mật khẩu để tiếp tục sử dụng '>
      <CustomForm
        form={form}
        className='mt-12 flex flex-col gap-4'
        onFinish={handleSubmit}
        onFieldsChange={() => {
          const errorArray = form.getFieldsError()
          const newErrorForm = {
            username: ''
          }

          // Lấy lỗi đưa vào object newErrorForm
          errorArray.forEach(errorItem => {
            if (errorItem.errors.length > 0) {
              const fieldName = errorItem.name[0] as keyof typeof newErrorForm
              newErrorForm[fieldName] = errorItem.errors[0]
            }
          })

          setErrorForm(newErrorForm)
        }}
      >
        <Form.Item
          name='username'
          normalize={trim}
          rules={[
            validateRequireInput('Tên đăng nhập không được bỏ trống'),

            validateCustomPattern(REGEX_MAIL_OR_TAX_CODE, 'Sai định dạng tên đăng nhập')
          ]}
          className='mb-0'
        >
          <TextField
            type='text'
            maxLength={100}
            placeholder='Tên đăng nhập'
            error={errorForm.username !== ''}
            subText={errorForm.username}
            suffixIcon={
              <Tooltip
                title='Tên đăng nhập của admin doanh nghiệp là mã số thuế, tên đăng nhập của nhân viên doanh nghiệp là email'
                className={''}
                placement={'top'}
              >
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </Form.Item>

        <div className='flex items-center justify-between mt-10'>
          <div>
            <Link className='text-primary600 font-semibold flex items-center' href='/login'>
              <ChevronLeftIcon color={colors.primary600} />
              <span className='ml-2'>Quay lại</span>
            </Link>
          </div>
          <div>
            <Button htmlType='submit' size='large' type='primary-normal' className='w-60'>
              Đặt lại mật khẩu
            </Button>
          </div>
        </div>
      </CustomForm>
    </LoginPageLayout>
  )
}

ForgotPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

ForgotPassword.guestGuard = true

export default ForgotPassword
