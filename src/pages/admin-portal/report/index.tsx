import React from 'react'

interface Props {
  name: string
}

const ReportScreen = ({ name = 'Báo cáo thống kê' }: Props) => {
  return (
    <div>
      <h1>My Component</h1>
      <p>Hello, {name}</p>
    </div>
  )
}

export default ReportScreen
