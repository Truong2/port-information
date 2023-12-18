// ** Next Import
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

import { InputSearch, colors } from '@onesme/dxui'
import { message } from 'antd'
import * as icons from '../../assets/icons'

const Icons = () => {
  const [valueSearch, setValueSearch] = useState('')

  const handleSearchChange = (value: any) => {
    const searchValue = value.toLowerCase()
    setValueSearch(searchValue)
  }

  const renderIconGrids = () => {
    return Object.values(icons)
      .filter(Icon => Icon.name.toLowerCase().trim().includes(valueSearch))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((Icon, index) => {
        return (
          <Grid
            item
            key={index}
            onClickCapture={() => {
              navigator.clipboard.writeText(Icon.name)
              message.success(`Copy ${Icon.name} thành công!`)
            }}
          >
            <Tooltip arrow title={Icon.name} placement='top'>
              <Card>
                <CardContent sx={{ display: 'flex', p: theme => `${theme.spacing(5)} !important` }}>
                  <Icon size={24} width={24} height={24} color={colors.primary1100} />
                </CardContent>
              </Card>
            </Tooltip>
          </Grid>
        )
      })
  }

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h4' style={{ color: '#7367F0' }}>
            OneDX Workplace Icon
          </Typography>
        }
        subtitle={<Typography sx={{ color: 'text.secondary' }}>Danh sách icon</Typography>}
      />
      <Grid item xs={4}>
        <InputSearch value={valueSearch} placeholder='Search' onChange={handleSearchChange} />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={6}>
          {renderIconGrids()}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Icons
