// ** React Imports
import { FormEvent, useState } from 'react'

// ** MUI Imports
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import CustomTextField from 'src/@core/components/mui/text-field'
import PageHeader from 'src/@core/components/page-header'

// ** Types
import { Table, Tag } from 'antd'
import { dataPermission } from 'src/utils/dataFake'

const PermissionsTable = () => {
  // ** State
  const [editValue, setEditValue] = useState<string>('')
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false)

  // ** Hooks

  const handleDialogToggle = () => setEditDialogOpen(!editDialogOpen)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setEditDialogOpen(false)
    e.preventDefault()
  }

  const getTagColor = (role: any) => {
    switch (role) {
      case 'Admin':
        return 'blue'
      case 'User':
        return 'green'
      case 'Doctor':
        return 'red'
      case 'Healthcare':
        return 'orange'

      default:
        return 'default'
    }
  }

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Tên quyền',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Vai trò được gán',
      dataIndex: 'assignedTo',
      key: 'assignedTo',
      render: (value: any[]) => (
        <>
          {value.map((role, index) => (
            <Tag color={getTagColor(role)} key={index}>
              {role}
            </Tag>
          ))}
        </>
      )
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'createdDate',
      key: 'createdDate'
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (text: any, record: any) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <Icon icon='tabler:edit' />
          </IconButton>
          <IconButton>
            <Icon icon='tabler:trash' />
          </IconButton>
        </Box>
      )
    }
  ]

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <PageHeader
            title={
              <Typography variant='h4' sx={{ mb: 6 }}>
                Danh sách quyền
              </Typography>
            }
            subtitle={<Typography sx={{ color: 'text.secondary' }}>Các quyền trong hệ thống</Typography>}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Table className='beauty-scroll-table' dataSource={dataPermission} columns={columns} />
          </Card>
        </Grid>
      </Grid>
      <Dialog maxWidth='sm' fullWidth onClose={handleDialogToggle} open={editDialogOpen}>
        <DialogTitle
          sx={{
            textAlign: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Typography variant='h5' component='span' sx={{ mb: 2 }}>
            Edit Permission
          </Typography>
          <Typography variant='body2'>Edit permission as per your requirements.</Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Alert severity='warning' sx={{ maxWidth: '500px' }}>
            <AlertTitle>Warning!</AlertTitle>
            By editing the permission name, you might break the system permissions functionality. Please ensure you're
            absolutely certain before proceeding.
          </Alert>

          <Box component='form' sx={{ mt: 8 }} onSubmit={onSubmit}>
            <FormGroup sx={{ mb: 2, alignItems: 'center', flexDirection: 'row', flexWrap: ['wrap', 'nowrap'] }}>
              <CustomTextField
                fullWidth
                value={editValue}
                label='Permission Name'
                sx={{ mr: [0, 4], mb: [3, 0] }}
                placeholder='Enter Permission Name'
                onChange={e => setEditValue(e.target.value)}
              />

              <Button type='submit' variant='contained' sx={{ mt: 4 }}>
                Update
              </Button>
            </FormGroup>
            <FormControlLabel control={<Checkbox />} label='Set as core permission' />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PermissionsTable
