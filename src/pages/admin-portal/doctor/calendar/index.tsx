import MedicalSchedule from '@/layouts/components/doctor/MedicalSchedule'
import React from 'react'
import LayoutAminRight from 'src/layouts/LayoutAminRight'

const Calendar = () => {
  return (
    <LayoutAminRight
      breadcrumb={[
        {
          title: 'Bác sỹ'
        },

        {
          title: 'Đăng ký lịch làm việc'
        }
      ]}
    >
      <div className='bg-white'>
        <div className='text-center text-xl'>Lịch khám bệnh của bác sỹ</div>
        <MedicalSchedule />
      </div>
    </LayoutAminRight>
  )
}

export default Calendar
