// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import

// ** MUI Components
import { styled } from '@mui/material/styles'

// ** Custom Component Import

// ** Icon Imports

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import LoginPageLayout from '@/layouts/components/login/LoginPageLayout'
import { validatePassword, validateRequire, validateRequireInput } from '@/utils/validation'
import { Button, TextField } from '@onesme/dxui'
import { Form } from 'antd'
import { trim } from 'stylis'

// Styled Components
const CustomForm = styled(Form)`
  label,
  input {
    font-size: 14px;
  }
  .ant-form-item-explain-error {
    display: none;
  }
`

const ResetPassword = () => {
  // hooks
  const [form] = Form.useForm()

  //state
  const [errorForm, setErrorForm] = useState<{
    newPassword: string
    confirmPassword: string
  }>({
    newPassword: '',
    confirmPassword: ''
  })

  return (
    <LoginPageLayout
      title='Đặt lại mật khẩu'
      description='Vui lòng tạo mật khẩu mới để tiếp tục sử dụng oneDX Workplace'
    >
      <CustomForm
        form={form}
        className='mt-12 flex flex-col '
        onFieldsChange={() => {
          const errorArray = form.getFieldsError()
          const newErrorForm = {
            newPassword: '',
            confirmPassword: ''
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
          name='newPassword'
          normalize={trim}
          rules={[
            validateRequire('Mật khẩu mới không được bỏ trống'),
            validatePassword(
              'Mật khẩu phải có từ 8-16 ký tự, bao gồm ít nhất 1 chữ viết hoa, 1 chữ viết thường, 1 chữ số và 1 ký tự đặc biệt trong !@#$%^&+='
            )
          ]}
          className='mb-0'
        >
          <TextField
            type='password'
            placeholder='Mật khẩu'
            error={errorForm.newPassword !== ''}
            subText={errorForm.newPassword}
          />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          dependencies={['newPassword']}
          normalize={trim}
          rules={[
            validateRequireInput('Nhập lại mật khẩu mới không được bỏ trống'),
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve()
                }

                return Promise.reject('Nhập lại mật khẩu mới không khớp với mật khẩu mới')
              }
            })
          ]}
          className='mb-0'
        >
          <TextField
            type='password'
            placeholder='Nhập lại mật khẩu'
            error={errorForm.confirmPassword !== ''}
            subText={errorForm.confirmPassword}
          />
        </Form.Item>
        <div className='flex items-center justify-between mt-10'>
          <Button htmlType='submit' size='large' type='primary-normal' className='w-full'>
            Xác nhận
          </Button>
        </div>
      </CustomForm>
    </LoginPageLayout>
  )
}

ResetPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

ResetPassword.guestGuard = true

export default ResetPassword
