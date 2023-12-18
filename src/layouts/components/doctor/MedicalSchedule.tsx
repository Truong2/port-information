/* eslint-disable @typescript-eslint/no-unused-vars */
import { validateRequireInput } from '@/utils/validation'
import { Button, DatePicker, Form, Select, Spin } from 'antd'
import { useState } from 'react'
import { Schedule } from 'src/utils/dataFake'

const { Item } = Form
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
const MedicalSchedule = () => {
  const [timeSchedule, setTimeSchedule] = useState<any>([])

  const [doctor, setDoctor] = useState([])
  const [idDoctor, setIdDoctor] = useState()
  const [resetHour, setResetHour] = useState(false)

  // const disabledDate = (current: number) => {
  //   // Can not select days before today and today
  //   return current && current < moment().endOf('day')
  // }

  function listDoctor() {
    return [
      ...doctor.map((e: { name: any; id: any }) => ({
        label: e.name,
        value: e.id
      }))
    ]
  }

  const handleSetTimeSchedule = (value: any) => {
    const check = timeSchedule?.includes(value)
    if (check) {
      setTimeSchedule(timeSchedule.filter((e: { id: any }) => e.id !== value?.id))
    } else {
      setTimeSchedule([...timeSchedule, value])
    }
  }

  return (
    <Spin spinning={false}>
      <Form className='text-base grid gap-4' layout='vertical'>
        <div className='mx-8 flex items-center gap-4 '>
          <div className='w-1/2 mt-4'>
            <Item
              className='w-full '
              name='idDoctor'
              required
              style={{ marginBottom: '4px' }}
              rules={[validateRequireInput('Không bỏ trống trường này')]}
            >
              <Select
                allowClear
                showArrow
                showSearch
                onChange={value => setIdDoctor(value)}
                className='w-full flex-1'
                placeholder='Chọn bác sỹ'
                filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                options={listDoctor()}
                autoFocus
              />
            </Item>
          </div>
          <div className='w-1/2  mt-4'>
            <Item
              className='w-full '
              name='dateSchedule'
              required
              style={{ marginBottom: '4px' }}
              rules={[validateRequireInput('Không bỏ trống trường này')]}
            >
              <DatePicker
                style={{
                  width: '100%'
                }}
                onChange={() => setResetHour(false)}
                placeholder='Chọn ngày'
                format={dateFormatList}
              />
            </Item>
          </div>
        </div>
        <div className='mx-8'>
          {Schedule?.map(e => (
            <Button
              key={e.id}
              style={{
                margin: '5px',
                background: timeSchedule?.includes(e) ? '#FFFAE0' : '#ffff',
                color: '#000000',
                fontWeight: '480'
              }}
              onClick={() => handleSetTimeSchedule(e)}
            >
              {e.time}
            </Button>
          ))}
        </div>
        {/* Save */}
        <div className='text-center my-4'>
          <Button
            size='large'
            type='primary'
            htmlType='submit'
            style={{
              width: '170px',
              marginLeft: '10px',
              textAlign: 'center'
            }}
          >
            Lưu
          </Button>
        </div>
      </Form>
    </Spin>
  )
}

export default MedicalSchedule
