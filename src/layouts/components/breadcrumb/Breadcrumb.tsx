import { Breadcrumb as BreadcrumbAnt } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

const renderBreadcrumb = (breadcrumbData: any, currentPath: string) => {
  const breadcrumbItems = []

  const findBreadcrumbItem = (data: any, path: string) => {
    for (const item of data) {
      if (item.path === path) {
        breadcrumbItems.push(<BreadcrumbAnt.Item key={item.key}>{item.label}</BreadcrumbAnt.Item>)

        return true
      } else if (item.children) {
        if (findBreadcrumbItem(item.children, path)) {
          breadcrumbItems.unshift(
            <BreadcrumbAnt.Item key={item.key}>
              <Link href={item.path}>{item.label}</Link>
            </BreadcrumbAnt.Item>
          )

          return true
        }
      }
    }

    return false
  }

  findBreadcrumbItem(breadcrumbData, currentPath)

  if (breadcrumbItems.length > 0) {
    breadcrumbItems.unshift(
      <BreadcrumbAnt.Item key='home'>
        <Link href='/'>Home</Link>
      </BreadcrumbAnt.Item>
    )
  }

  return <BreadcrumbAnt style={{ marginBottom: '12px' }}>{breadcrumbItems}</BreadcrumbAnt>
}

const Breadcrumb = (props: { items: any }) => {
  const { items } = props
  const router = useRouter()
  const { pathname } = router

  return <div className='ml-6'>{renderBreadcrumb(items, pathname)}</div>
}

export default Breadcrumb
