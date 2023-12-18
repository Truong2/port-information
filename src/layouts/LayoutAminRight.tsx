// ** React Imports
import { ReactNode } from 'react'

// ** Demo Imports
import { Breadcrumb, Layout } from 'antd'

interface Props {
  children: ReactNode
  breadcrumb: any
}

const { Content } = Layout

const LayoutAminRight: React.FC<Props> = ({ children, breadcrumb }) => {
  return (
    <Layout style={{ padding: '0 24px 24px', background: '#FCFCFD' }}>
      <Breadcrumb items={breadcrumb} style={{ margin: '16px 0' }}></Breadcrumb>
      <Content
        style={{
          padding: '8px 24px',
          margin: 0,
          minHeight: 280,
          background: 'white',
          borderRadius: '10px',
          border: '2px solid #ededef'
        }}
      >
        {children}
      </Content>
    </Layout>
  )
}

export default LayoutAminRight
