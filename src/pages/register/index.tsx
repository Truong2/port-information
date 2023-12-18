// ** React Imports
import { Form } from 'antd'
import { ReactNode, useState } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import { validateEmail, validatePassword, validateRequire, validateRequireInput } from '@/utils/validation'
import styled from '@emotion/styled'
import { Button, Checkbox, TextField } from '@onesme/dxui'
import Link from 'next/link'
import LoginPageLayout from 'src/layouts/components/login/LoginPageLayout'
import { trim } from 'stylis'
import { colors } from '@/assets/colors'

// ** Styled Components
const CustomForm = styled(Form)`
  label,
  input {
    font-size: 12px;
  }

  .ant-form-item-explain-error {
    display: none;
  }

  .error-icon-input {
    display: flex;
  }
`

// Type || Interface
type FieldType = {
  taxCode?: string
  email?: string
  phoneNumber?: string
  provinceId?: number
  firstName?: string
  lastName?: string
  password?: string
  confirmPassword?: string
}

const Register = () => {
  // ** hook
  const [form] = Form.useForm()

  // ** State

  const [isAgreement, setIsAgreement] = useState(false)
  const [errorForm, setErrorForm] = useState<{
    taxCode: string
    password: string
    confirmPassword: string
    phoneNumber: string
    email: string
    firstName: string
    lastName: string
    provinceId: string
  }>({
    taxCode: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
    firstName: '',
    lastName: '',
    provinceId: ''
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPolicy, setShowPolicy] = useState<boolean>(false)

  const handleSubmit = async (data: any) => {
    console.log('data', data)
  }

  return (
    <LoginPageLayout
      title='Đăng ký tài khoản'
      description={''}
      footer={
        <div className='flex flex-col items-start'>
          <div className='flex items-center'>
            <div className='text-default' style={{ fontWeight: 500, fontSize: '14px', marginRight: '12px' }}>
              Bạn đã có tài khoản?
            </div>
            <Link className='text-greenAccent1000 text-sm font-semibold cursor-pointer' href='/admin-portal/login'>
              Đăng nhập
            </Link>
          </div>
        </div>
      }
    >
      <CustomForm
        form={form}
        onFinish={handleSubmit}
        onFieldsChange={() => {
          const errorArray = form.getFieldsError()
          const newErrorForm = {
            taxCode: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            email: '',
            firstName: '',
            lastName: '',
            provinceId: ''
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
        className='mt-12 flex flex-col '
      >
        <Form.Item<FieldType>
          name='email'
          normalize={trim}
          rules={[validateRequireInput('Email không được bỏ trống'), validateEmail('Sai định dạng email')]}
          className='mb-0 w-full'
          required
        >
          <TextField
            type='text'
            placeholder='Email liên hệ'
            maxLength={100}
            error={errorForm.email !== ''}
            subText={errorForm.email}
          />
        </Form.Item>
        <div className='flex w-full gap-4'>
          <Form.Item<FieldType>
            name='lastName'
            rules={[validateRequireInput('Họ không được bỏ trống')]}
            className='mb-0 w-1/2'
            required
          >
            <TextField
              type='text'
              placeholder='Nhập họ'
              maxLength={20}
              error={errorForm.lastName !== ''}
              subText={errorForm.lastName}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name='firstName'
            rules={[validateRequireInput('Tên không được bỏ trống')]}
            className='mb-0 w-1/2'
            required
          >
            <TextField
              type='text'
              placeholder='Nhập tên '
              maxLength={20}
              error={errorForm.firstName !== ''}
              subText={errorForm.firstName}
            />
          </Form.Item>
        </div>
        <Form.Item<FieldType>
          name='password'
          dependencies={['password']}
          normalize={trim}
          rules={[
            validateRequire('Mật khẩu không được bỏ trống'),
            validatePassword(
              'Mật khẩu phải có từ 8-16 ký tự, bao gồm ít nhất 1 chữ viết hoa, 1 chữ viết thường, 1 chữ số và 1 ký tự đặc biệt trong !@#$%^&+='
            )
          ]}
          className='mb-0 w-full'
          required
        >
          <TextField
            type='password'
            autoComplete='new-password'
            placeholder='Mật khẩu'
            maxLength={16}
            error={errorForm.password !== ''}
            subText={errorForm.password}
          />
        </Form.Item>
        <Form.Item<FieldType>
          name='confirmPassword'
          normalize={trim}
          required
          rules={[
            validateRequireInput('Nhập lại mật khẩu không được bỏ trống'),
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject('Nhập lại mật khẩu không khớp với mật khẩu')
              }
            })
          ]}
          className='mb-0 w-full'
        >
          <TextField
            type='password'
            placeholder='Nhập lại mật khẩu '
            maxLength={16}
            error={errorForm.confirmPassword !== ''}
            subText={errorForm.confirmPassword}
          />
        </Form.Item>

        <div className='flex items-center justify-between mt-10'>
          <div className='flex items-center'>
            <Checkbox checked={isAgreement} onClick={() => setIsAgreement(!isAgreement)} />
            <div
              className='text-greenAccent1000 font-semibold cursor-pointer ml-4'
              onClickCapture={e => {
                e.preventDefault()
                setShowPolicy(true)
              }}
            >
              Điều khoản sử dụng
            </div>
          </div>
          <div>
            <Button
              htmlType='submit'
              size='large'
              type='primary-normal'
              className='w-60'
              styles={{ background: isAgreement ? colors.greenAccent1000 : colors.neutral700 }}
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </CustomForm>

      {/* modal Điều khoản sử dụng */}
      {/* <ModalTerms showPolicy={showPolicy} setShowPolicy={setShowPolicy} /> */}
    </LoginPageLayout>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
