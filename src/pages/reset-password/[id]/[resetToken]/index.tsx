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
import ModalNotification from '@/layouts/components/register/ModalNotification'
import AuthModel from '@/models/AuthModel'
import { validatePassword, validateRequire, validateRequireInput } from '@/utils/validation'
import { Button, TextField } from '@onesme/dxui'
import { useMutation } from '@tanstack/react-query'
import { Form } from 'antd'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const { id, resetToken } = router.query as { id: string; resetToken: string }

  //state
  const [visibleModal, setVisibleModal] = useState(false)
  const [infoModal, setInfoModal] = useState({})
  const [errorForm, setErrorForm] = useState<{
    newPassword: string
    confirmPassword: string
  }>({
    newPassword: '',
    confirmPassword: ''
  })

  const successModal = {
    iconType: 'SUCCESS',
    title: 'Đổi mật khẩu thành công',
    subTile: 'Hãy sử dụng mật khẩu mới để đăng nhập.',
    textButton: 'Đi dền đăng nhập',
    redirectPage: '/login'
  }

  const errorModal = {
    iconType: 'ERROR',
    title: 'Đổi mật khẩu thất bại',
    subTile: 'Đã có lỗi xảy ra. Vui lòng thử lại sau một vài phút.',
    textButton: 'Đi đến quên mật khẩu',
    redirectPage: '/forgot-password'
  }

  const mutation = useMutation(AuthModel.resetPassword, {
    onSuccess: () => {
      setVisibleModal(true)
      setInfoModal(successModal)
    },
    onError: (error: any) => {
      setVisibleModal(true)

      console.log(error)
      setInfoModal(errorModal)
    }
  })

  const handleSubmitReset = (dataReset: any) => {
    const newPassword = { newPassword: dataReset.newPassword }
    mutation.mutate({ id, resetToken, newPassword })
  }

  return (
    <LoginPageLayout
      title='Đặt lại mật khẩu'
      description='Vui lòng tạo mật khẩu mới để tiếp tục sử dụng oneDX Workplace'
    >
      <CustomForm
        form={form}
        className='mt-12 flex flex-col '
        onFinish={handleSubmitReset}
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

      {/* Modal */}
      <ModalNotification visibleModal={visibleModal} setVisibleModal={setVisibleModal} infoModal={infoModal} />
    </LoginPageLayout>
  )
}

ResetPassword.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

ResetPassword.guestGuard = true

export default ResetPassword
