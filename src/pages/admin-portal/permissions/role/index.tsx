// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import { Form, Input, Radio, Tree } from 'antd'
import LayoutAminRight from 'src/layouts/LayoutAminRight'
import { DataNode } from 'antd/es/tree'
import { validateRequireInput } from '@/utils/validation'

interface CardDataType {
  title: string
  avatars: string[]
  totalUsers: number
}

const cardData: CardDataType[] = [
  { totalUsers: 4, title: 'Admin', avatars: ['1.png', '2.png', '3.png', '4.png'] },
  { totalUsers: 7, title: 'Quản lý', avatars: ['5.png', '6.png', '7.png', '8.png', '1.png', '2.png', '3.png'] },
  { totalUsers: 5, title: 'Khách hàng', avatars: ['4.png', '5.png', '6.png', '7.png', '8.png'] },
  { totalUsers: 3, title: 'Cơ sơ y tế', avatars: ['1.png', '2.png', '3.png'] },
  { totalUsers: 3, title: 'Bác sỹ', avatars: ['1.png', '2.png', '3.png'] },
  { totalUsers: 3, title: 'Lễ tân', avatars: ['1.png', '2.png', '3.png'] },
  { totalUsers: 3, title: 'Admin khu vực', avatars: ['1.png', '2.png', '3.png'] }
]

const RolesCards = () => {
  //* Hooks
  const [form] = Form.useForm()

  // ** States
  const [open, setOpen] = useState<boolean>(false)
  const [dialogTitle, setDialogTitle] = useState<'Add' | 'Edit'>('Add')
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0-0-0', '0-0-1'])
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0'])
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([])
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true)

  //* Function
  const handleClickOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
  }

  const renderCards = () =>
    cardData.map((item, index: number) => (
      <Grid item xs={12} sm={6} lg={4} key={index}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ color: 'text.secondary' }}>{`Total ${item.totalUsers} users`}</Typography>
              <AvatarGroup
                max={4}
                className='pull-up'
                sx={{
                  '& .MuiAvatar-root': { width: 32, height: 32, fontSize: theme => theme.typography.body2.fontSize }
                }}
              >
                {item.avatars.map((img, index: number) => (
                  <Avatar key={index} alt={item.title} src={`/images/avatars/${img}`} />
                ))}
              </AvatarGroup>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography
                  href='/'
                  component={Link}
                  sx={{ color: 'primary.main', textDecoration: 'none' }}
                  onClick={e => {
                    e.preventDefault()
                    handleClickOpen()
                    setDialogTitle('Edit')
                    form.setFieldsValue({
                      permissions: ['0-0-0-0', '0-1-0-1']
                    })
                  }}
                >
                  Edit Role
                </Typography>
              </Box>
              <IconButton size='small' sx={{ color: 'text.disabled' }}>
                <Icon icon='tabler:copy' />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))

  console.log('form', form.getFieldsValue())
  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log('onExpand', expandedKeysValue)

    setExpandedKeys(expandedKeysValue)
    setAutoExpandParent(false)
  }

  const onCheck = (checkedKeysValue: React.Key[]) => {
    console.log('onCheck', checkedKeysValue)
    setCheckedKeys(checkedKeysValue)
  }

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    console.log('onSelect', info)
    setSelectedKeys(selectedKeysValue)
  }

  const treeData: DataNode[] = [
    {
      title: 'Quản lý tài khoản ',
      key: '0-0',
      children: [
        { title: '0-0-0-0', key: '0-0-0-0' },
        { title: '0-0-0-1', key: '0-0-0-1' },
        { title: '0-0-0-2', key: '0-0-0-2' }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' }
      ]
    },
    {
      title: '0-2',
      key: '0-2'
    }
  ]

  return (
    <LayoutAminRight
      breadcrumb={[
        {
          title: 'Phân quyền'
        },

        {
          title: 'Quản trị viên'
        }
      ]}
    >
      <Grid container spacing={6} className='match-height'>
        {renderCards()}
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              handleClickOpen()
              setDialogTitle('Add')
            }}
          >
            <Grid container sx={{ height: '100%' }}>
              <Grid item xs={5}>
                <Box
                  sx={{
                    height: '100%',
                    minHeight: 140,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                  }}
                >
                  <img height={122} alt='add-role' src='/images/pages/add-new-role-illustration.png' />
                </Box>
              </Grid>
              <Grid item xs={7}>
                <CardContent sx={{ pl: 0, height: '100%' }}>
                  <Box sx={{ textAlign: 'right' }}>
                    <Button
                      variant='contained'
                      sx={{ mb: 3, whiteSpace: 'nowrap' }}
                      onClick={() => {
                        handleClickOpen()
                        setDialogTitle('Add')
                      }}
                    >
                      Thêm mới
                    </Button>
                    <Typography sx={{ color: 'text.secondary' }}>Thêm mới vai trò</Typography>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Dialog fullWidth maxWidth='md' scroll='body' onClose={handleClose} open={open}>
          <DialogTitle
            component='div'
            sx={{
              textAlign: 'center',
              px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
              pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
            }}
          >
            <Typography variant='h3'>{`${dialogTitle === 'Add' ? 'Thêm mới' : 'Chỉnh sửa'} Vai trò`}</Typography>
          </DialogTitle>
          <DialogContent
            sx={{
              pb: theme => `${theme.spacing(5)} !important`,
              px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
            }}
          >
            {/* form */}
            <Form
              form={form}
              className='mt-10'
              layout='vertical'
              onFinish={values => {
                console.log('values', values)
              }}
            >
              <div className='flex flex-col gap-4 '>
                <Form.Item
                  name='roleName'
                  label='Tên vai trò'
                  rules={[validateRequireInput('Tên vai trò không được bỏ trống')]}
                >
                  <Input size='large' placeholder='Nhập tên vai trò' />
                </Form.Item>
                <Form.Item name='status' label='Trạng thái hoạt động' valuePropName='checked'>
                  <Radio.Group>
                    <Radio value={true}>Hoạt động</Radio>
                    <Radio value={false}>Không hoạt động</Radio>
                  </Radio.Group>
                </Form.Item>

                {/* Todo: Hỏi thầy xem nên làm như nào */}
                <Form.Item
                  name='permissions'
                  label='Quyền'
                  rules={[{ required: true, message: 'Vui lòng lựa chọn ít nhất 1 quyền' }]}
                >
                  <Tree
                    checkable
                    onExpand={onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    onCheck={checkedKeysValue => onCheck(checkedKeysValue as React.Key[])}
                    checkedKeys={checkedKeys}
                    onSelect={onSelect}
                    selectedKeys={selectedKeys}
                    treeData={treeData}
                  />
                </Form.Item>
              </div>
            </Form>
          </DialogContent>
          <DialogActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
              pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
            }}
          >
            <Box className='demo-space-x'>
              <Button type='submit' variant='contained' onClick={handleClose}>
                Submit
              </Button>
              <Button color='secondary' variant='tonal' onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      </Grid>
    </LayoutAminRight>
  )
}

export default RolesCards
