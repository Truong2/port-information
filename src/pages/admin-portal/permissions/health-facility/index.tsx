import React from 'react'

interface Props {
  name: string
}

const PermissionHealthFacility = ({ name = 'Phân quyền cơ sở y tế' }: Props) => {
  return (
    <div>
      <h1>My Component</h1>
      <p>Hello, {name}</p>
    </div>
  )
}

export default PermissionHealthFacility
