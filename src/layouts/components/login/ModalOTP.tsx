import { METHOD_SEND_OTP } from '@/constants'
import { Transaction } from '@onesme/dxui'
import { Radio, Space } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  isOpen: boolean
  setOpen: (b: boolean) => void
  infoModal: any
}

function ModalOTP(props: Props) {
  const { infoModal, isOpen, setOpen } = props
  const { title, subTitle, methodOTP, handleConfirm } = infoModal
  const { t } = useTranslation()
  const [verificationMethod, setVerificationMethod] = useState(METHOD_SEND_OTP.EMAIL)

  return (
    <Transaction
      icon={'InfoDialogIcon'}
      handleOk={() => {
        setOpen(false)
        handleConfirm(verificationMethod)
      }}
      handleCancel={() => setOpen(false)}
      open={isOpen}
      title={title || t('title.methodSendOTP')}
      subTitle={subTitle || `${t('subTitle.methodSendOTP')}`}
    >
      {methodOTP && (
        <div>
          <Radio.Group
            className='float-left mb-8'
            onChange={e => {
              setVerificationMethod(e.target.value)
            }}
            value={verificationMethod}
          >
            <Space direction='vertical' className='mt-6'>
              <Radio value={METHOD_SEND_OTP.EMAIL}>
                <div className='w-[314px] flex flex-row justify-between'>
                  <div>Email</div>
                  {verificationMethod === METHOD_SEND_OTP.EMAIL ? <div>{methodOTP.emailMask}</div> : null}
                </div>
              </Radio>
              <Radio value={METHOD_SEND_OTP.SMS}>
                <div className='w-[314px] flex flex-row justify-between'>
                  <div>Số điện thoại</div>
                  {verificationMethod === METHOD_SEND_OTP.SMS ? (
                    <div className={methodOTP?.phoneMask === '' ? 'text-red-600' : ''}>
                      {methodOTP.phoneMask !== '' ? methodOTP.phoneMask : t('errors.notDeclarePhone')}
                    </div>
                  ) : null}
                </div>
              </Radio>
            </Space>
          </Radio.Group>
        </div>
      )}
    </Transaction>
  )
}

export default ModalOTP
