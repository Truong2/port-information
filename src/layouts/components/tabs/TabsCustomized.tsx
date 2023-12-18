// ** React Imports
import { ReactNode, SyntheticEvent, useState } from 'react'

// ** MUI Imports
import TabContext from '@mui/lab/TabContext'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/material/styles'

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

type tabItem = {
  [x: string]: any
  value: string
  label: string
  icon?: string
  component: ReactNode
}

interface TabItem {
  tabItem: tabItem[]
}

const TabsCustomized = (props: TabItem) => {
  const { tabItem } = props

  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label='customized tabs example'>
        {tabItem?.map((tab: tabItem) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </TabList>
      {tabItem?.map((tab: tabItem) => (
        <>
          <TabPanel value={tab.value}>{tab.component}</TabPanel>
        </>
      ))}
    </TabContext>
  )
}

export default TabsCustomized
