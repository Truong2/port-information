import { Card } from 'antd'
import React, { MouseEvent, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { ITEM_NAV } from './header'
import { ChevronRightIcon } from '@/assets/icons'
import { useRouter } from 'next/router'

const WrapperSwiper = styled(Swiper)`
  &:hover .arrow {
    display: block;
  }
`

//* subMenu cho Thiết bị
const submenu = [
  {
    key: 'ALL',
    title: 'Bệnh viện công'
  },
  {
    key: 'MESH',
    title: 'Bệnh viện tư'
  },
  {
    key: 'SENSOR',
    title: 'Phòng khám'
  },
  {
    key: 'SMART_LIGHT',
    title: 'Phòng mạch'
  },
  {
    key: 'SWITCH',
    title: 'Xét nghiệm'
  },
  {
    key: 'SMART_SPEAKER',
    title: 'Y tế tại nhà'
  },
  {
    key: 'SMART_SPEAKER1',
    title: 'Tiêm chung'
  }
]

//* subMenu cho Giải pháp
const subMenuSolution = [
  {
    img: '/images/booking-examination.jpg',
    label: 'Đặt lịch tại cơ sở y tế'
  },
  {
    img: '/images/booking-examination.jpg',
    label: 'Đặt lịch khám theo bác sỹ'
  },
  {
    img: '/images/booking-examination.jpg',
    label: 'Đặt lịch xét nghiệm'
  },
  {
    img: '/images/booking-examination.jpg',
    label: 'Đặt lịch tiêm chủng'
  },
  {
    img: '/images/booking-examination.jpg',
    label: 'Gói khám sức khoẻ'
  },
  {
    img: '/images/booking-examination.jpg',
    label: 'Thanh toán viện phí'
  }
]

interface SubmenuItemProps {
  item: { key: string; title: string }
  index: number
  onMouseEnter: (index: number) => void
  onMouseLeave: (event: MouseEvent<HTMLElement> | null) => void
}

const CategoryMenuBos: React.FC<{
  visibleCategory: boolean
  handleMouseLeave: () => void
  hoveredItem: number
}> = props => {
  const { visibleCategory, handleMouseLeave, hoveredItem } = props
  const router = useRouter()

  const [isHovering, setIsHovering] = useState<number | null>(null)

  const handleWrapperMouseEnter = () => {
    setIsHovering(0)
  }

  const handleWrapperMouseLeave = () => {
    setIsHovering(null)
    handleMouseLeave()
  }

  const SubmenuItem: React.FC<SubmenuItemProps> = ({ item, index, onMouseEnter, onMouseLeave }) => (
    <li
      className={`body-14-regular flex items-center justify-between cursor-pointer transition-colors ${
        isHovering === index ? 'text-primary600' : 'text-neutral1100'
      }`}
      style={{ width: '267px' }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      {item.title}
      {isHovering === index && <ChevronRightIcon />}
    </li>
  )

  const goToDetailSolution = () => {
    // truyền ID của solution vào
    router.push('/bos-portal/solution/1')
  }

  return (
    <div onMouseEnter={handleWrapperMouseEnter} onMouseLeave={handleWrapperMouseLeave}>
      {visibleCategory && (
        <div
          className='absolute left-0 w-full bg-white h-auto rounded-b-xl py-8 shadow-lg'
          style={{
            top: '41px',
            borderTop: '1px solid #E2E8F3'
          }}
        >
          <div className='container-original mx-auto'>
            {/* Thiết bị */}
            {hoveredItem === ITEM_NAV.DEVICE && (
              <div className='flex gap-6'>
                {/* Menu */}
                <ul className='space-y-4 list-none pl-0' onMouseLeave={() => setIsHovering(null)}>
                  {submenu?.map((item, index) => (
                    <SubmenuItem
                      key={item.key}
                      item={item}
                      index={index}
                      onMouseEnter={setIsHovering}
                      onMouseLeave={() => setIsHovering(null)}
                    />
                  ))}
                </ul>

                {/* Item */}
                <WrapperSwiper slideToClickedSlide slidesPerView={4} spaceBetween={24} style={{ position: 'relative' }}>
                  {Array.from({ length: 5 }).map((_, item) => (
                    <SwiperSlide key={item}>
                      <div className='p-4 bg-neutral100 rounded-lg flex items-center justify-center'>
                        <Card
                          className='w-1/4 flex items-center justify-center gap-3 bg-neutral100 border-none'
                          bodyStyle={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                          }}
                        >
                          {/* img */}
                        </Card>
                      </div>
                    </SwiperSlide>
                  ))}
                </WrapperSwiper>
              </div>
            )}

            {/* Giải pháp */}
            {hoveredItem === ITEM_NAV.SOLUTION && (
              <div className='w-full flex justify-between gap-6'>
                {subMenuSolution.map((el, index) => (
                  <div
                    key={index}
                    aria-hidden='true'
                    onClick={() => goToDetailSolution()}
                    className='w-1/4 flex flex-col items-center justify-center gap-3 relative transform transition-transform hover:scale-105 cursor-pointer'
                  >
                    <img
                      style={{
                        height: '178px'
                      }}
                      src={el.img}
                      alt={el.label}
                      loading='eager'
                      className='w-full rounded-lg object-cover'
                    />
                    <div className='body-14-bold absolute text-white left-0 bottom-0 p-2'>{el.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryMenuBos
