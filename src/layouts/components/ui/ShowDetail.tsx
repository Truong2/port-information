'use client'
import { handleSrcImg } from '@/utils'
import { isEmpty } from 'lodash'
import React from 'react'

interface ShowDetailProps {
  label: string
  value: string
  isCertificate?: boolean
}

const ShowDetail: React.FC<ShowDetailProps> = ({ label, value, isCertificate }) => {
  return (
    <>
      {/* trường hợp có giấy chứng thực */}
      {isCertificate ? (
        <div className={`show-detail-img  ${isEmpty(value) && 'flx'}`}>
          <div className='label-show' style={{ minWidth: 250 }}>
            {label}:
          </div>
          {value?.length > 0 && Array.isArray(value) ? (
            <div>
              {value?.map((img: any, index: number) => (
                <div key={index} className='card-img-show'>
                  <img
                    src={!isEmpty(img?.externalLink) ? value : handleSrcImg(img?.filePath)}
                    alt='Certificate'
                    className='img-show'
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className='value-none'> Chưa có thông tin</p>
          )}
        </div>
      ) : (
        <div className='flex'>
          {/* trường hợp không có giấy chứng thực */}
          <div className='label-show' style={{ minWidth: 250 }}>
            {label}:
          </div>
          <p className='value-none'>{value || 'Chưa có thông tin'}</p>
        </div>
      )}
    </>
  )
}

export default ShowDetail
