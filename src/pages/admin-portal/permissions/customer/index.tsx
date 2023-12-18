import React from 'react'

interface Props {
  name: string
}

const PermissionCustomer = ({ name = 'Phân quyền khách hàng' }: Props) => {
  return (
    <div>
      <h1>My Component</h1>
      <p>Hello, {name}</p>
    </div>
  )
}

export default PermissionCustomer
