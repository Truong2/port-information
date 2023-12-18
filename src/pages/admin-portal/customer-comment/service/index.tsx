import React from 'react'

interface Props {
  name: string
}

const CustomerComment = ({ name = 'Đánh giá của khách hàng' }: Props) => {
  return (
    <div>
      <h1>My Component</h1>
      <p>Hello, {name}</p>
    </div>
  )
}

export default CustomerComment
