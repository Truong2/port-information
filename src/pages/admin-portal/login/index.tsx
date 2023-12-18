// ** React Imports
import { Form, Spin } from 'antd'
import { ReactNode, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import { styled } from '@mui/material/styles'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import { DEV_ENV, REGEX_MAIL_OR_TAX_CODE, getProfileUser, setToken } from '@/constants'
import LoginPageLayout from '@/layouts/components/login/LoginPageLayout'
import { validateCustomPattern, validateRequireInput } from '@/utils/validation'
import { Button } from '@mui/material'
import { Alert, TextField } from '@onesme/dxui'
import { useRouter } from 'next/router'
import { trim } from 'stylis'

const defaultValues = !DEV_ENV
  ? {
      username: '',
      password: ''
    }
  : { username: 'tinhnvt1610@gmail.com', password: '12345678' }
const CustomForm = styled(Form)`
  label,
  input {
    font-size: 14px;
  }

  .ant-form-item-explain-error {
    display: none;
  }

  .error-icon-input {
    display: flex;
  }
`

const LoginPage = () => {
  // ** state
  const [errorForm, setErrorForm] = useState<{
    username: string
    password: string
  }>({
    username: '',
    password: ''
  })

  // ** Hooks
  const [form] = Form.useForm()
  const { setUser } = useAuth()
  const auth = useAuth()
  const router = useRouter()

  const [error, setError] = useState<string | null>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    const { username, password } = data
    const userType = '0'
    const bodyFormData = new FormData()
    bodyFormData.append('email', username)
    bodyFormData.append('password', password as string)
    bodyFormData.append('userType', userType as string)

    setError('')

    auth.login(
      bodyFormData,
      res => {
        setToken(res.data.token)
        getProfileUser(res.data.token, setUser, router)
        router.push('/admin-portal')
      },
      err => {
        const error: any = err?.response
        if (error?.data.error.errorDescription === 'Bad credentials') {
          setError('Sai tài khoản mật khẩu')
        }
      }
    )
    setIsLoading(false)
  }

  return (
    <Spin spinning={isLoading}>
      <LoginPageLayout
        title='Đăng nhập'
        description='Đăng nhập để sử dụng cổng thông tin chăm sóc sức khoẻ'
        footer={
          <div className='flex flex-col items-start'>
            <div className='flex items-center'>
              <div className='text-default' style={{ fontWeight: 500, fontSize: '14px', marginRight: '12px' }}>
                Bạn chưa có tài khoản?
              </div>
              <Link className='text-greenAccent1000 text-sm font-semibold cursor-pointer' href='/register'>
                Đăng ký
              </Link>
            </div>
          </div>
        }
      >
        {/* form */}
        <CustomForm
          form={form}
          className='mt-12'
          onFinish={onSubmit}
          initialValues={defaultValues}
          onFieldsChange={() => {
            const errorArray = form.getFieldsError()
            const newErrorForm = {
              username: '',
              password: ''
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
          {error && <Alert type='error' description={error} showIcon />}
          <Form.Item
            name='username'
            normalize={trim}
            className='mb-0'
            required
            rules={[
              validateRequireInput('Tên đăng nhập không được bỏ trống'),

              validateCustomPattern(REGEX_MAIL_OR_TAX_CODE, 'Sai định dạng mã số thuế')
            ]}
          >
            <TextField
              type='text'
              maxLength={100}
              placeholder='Tên đăng nhập'
              error={errorForm.username !== ''}
              subText={errorForm.username}
            />
          </Form.Item>
          <Form.Item
            name='password'
            normalize={trim}
            required
            rules={[validateRequireInput('Mật khẩu đăng nhập không được bỏ trống')]}
            className='mb-0'
          >
            <TextField
              type='password'
              placeholder='Mật khẩu đăng nhập'
              error={errorForm.password !== ''}
              subText={errorForm.password}
            />
          </Form.Item>
          <Form.Item className='text-right mt-4 mb-12'>
            <Link className='text-greenAccent1000 font-semibold' href='/forgot-password'>
              Quên mật khẩu
            </Link>
          </Form.Item>
          <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
            Đăng nhập
          </Button>
        </CustomForm>
      </LoginPageLayout>
    </Spin>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginPage.guestGuard = true

export default LoginPage
