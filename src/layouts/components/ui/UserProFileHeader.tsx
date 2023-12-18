// ** React Imports
import { useState } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { RoleIcon } from 'src/assets/icons'

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: '50%',
  border: `4px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}))

const UserProfileHeader = () => {
  // ** State
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState([])

  const designationIcon = 'tabler:briefcase'

  return data !== null ? (
    <Card>
      <CardMedia
        component='img'
        alt='profile-header'
        sx={{
          height: { xs: 150, md: 250 }
        }}
      />
      <CardContent
        sx={{
          pt: 0,
          mt: -8,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <ProfilePicture src='/images/avatars/3.png' alt='profile-picture' />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
            <Typography variant='h5' sx={{ mb: 2.5 }}>
              Nguyễn Văn Trường
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start']
              }}
            >
              <Box sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'text.secondary' } }}>
                <Icon fontSize='1.25rem' icon={designationIcon} />
                <Typography sx={{ color: 'text.secondary' }}>DEV</Typography>
              </Box>
              <Box sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'text.secondary' } }}>
                <Icon fontSize='1.25rem' icon='tabler:map-pin' />
                <Typography sx={{ color: 'text.secondary' }}>Hà Nội</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'text.secondary' } }}>
                <Icon fontSize='1.25rem' icon='tabler:calendar' />
                <Typography sx={{ color: 'text.secondary' }}>Thời gian tạo: 20/11/2023</Typography>
              </Box>
            </Box>
          </Box>
          <Button variant='contained' sx={{ '& svg': { mr: 2 } }}>
            <RoleIcon size={24} color='white' />
            Chỉnh sửa
          </Button>
        </Box>
      </CardContent>
    </Card>
  ) : null
}

export default UserProfileHeader
