// ** MUI Imports
import { LogoPort } from '@/assets/icons'
import Box, { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const FallbackSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {
  // ** Hook

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <LogoPort />
      <CircularProgress color='success' disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
