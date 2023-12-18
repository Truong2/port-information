import React from 'react'

interface Props {
  name: string
}

const DoctorComment = ({ name = 'Đánh giá bác sỹ' }: Props) => {
  return (
    <div>
      <h1>My Component</h1>
      <p>Hello, {name}</p>
    </div>
  )
}

export default DoctorComment
