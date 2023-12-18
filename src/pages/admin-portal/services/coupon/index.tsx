import React from 'react'

interface Props {
  name: string
}

const Coupon = ({ name = 'Chương trình khuyến mại' }: Props) => {
  return (
    <div>
      <h1>My Component</h1>
      <p>Hello, {name}</p>
    </div>
  )
}

export default Coupon
