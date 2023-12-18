import { ErrorIcon, ExtraEmailIcon, InfoIcon, StartIcon, SwapIcon, TickCheck } from '@/assets/icons'
import { METHOD_SEND_OTP } from '@/constants'
import RegisterModel from '@/models/RegisterModel'
import { Button, Radio, colors } from '@onesme/dxui'
import { useQuery } from '@tanstack/react-query'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface ModalNotificationProps {
  visibleModal: boolean
  setVisibleModal: any
  infoModal?: infoModalType
  layoutLogin?: string
  layoutTaxCodeContact?: string
  isBack?: boolean
  onConfirm?: () => void
}

interface ConfirmData {
  isConfirmRegister: boolean
  methodSendOTP: string // You might want to replace 'string' with the specific type of 'verificationMethod'
}

interface infoModalType {
  iconType?: any
  title?: any
  subTile?: any
  extraTitle?: any
  extraSubTitle?: any
  isContact?: any
  isResendOTP?: any
  resendOTP?: any
  isCancelSendOTP?: any
  isCloseModal?: any
  textButton?: string
  haveHotline?: boolean
  handleConfirm?: (data: ConfirmData) => void
  handleConfirmSendOTP?: (data: string) => void
  methodOTP?: any
  redirectPage?: any
  handleConfirmEmail?: any
}

export default function ModalNotification({ visibleModal, setVisibleModal, infoModal }: ModalNotificationProps) {
  const router = useRouter()

  const {
    iconType,
    title,
    subTile,
    textButton,
    extraTitle,
    extraSubTitle,
    isContact,
    isResendOTP,
    resendOTP,
    isCancelSendOTP,
    isCloseModal,
    haveHotline,
    handleConfirm,
    handleConfirmSendOTP,
    methodOTP,
    redirectPage,
    handleConfirmEmail
  } = infoModal as infoModalType

  const showContact = false

  const [verificationMethod, setVerificationMethod] = useState<string>(METHOD_SEND_OTP.EMAIL)

  const { data: dataSystem } = useQuery(
    ['systemConfig'],
    async () => {
      const res: any = await RegisterModel.getSystemHotline()

      return res
    },
    { initialData: [] }
  )

  const closeModal = () => {
    setVisibleModal(false)
    if (handleConfirmEmail) {
      handleConfirmEmail()
    }
    if (redirectPage) {
      router.push(redirectPage)
    }
    if (handleConfirm) {
      const data: ConfirmData = {
        isConfirmRegister: true,
        methodSendOTP: verificationMethod
      }
      handleConfirm(data)
    }
    if (handleConfirmSendOTP) {
      handleConfirmSendOTP(verificationMethod)
    }
  }

  // const handleCancelSendOTP = () => {
  // 	setVisibleModal(false);
  // 	// ve trang login khi a button Huy cua modal send otp khi dang ky tai khoan
  // };

  return (
    <Modal
      centered
      visible={visibleModal}
      onCancel={() => setVisibleModal(false)}
      footer={null}
      closable={false}
      maskClosable={false}
      width={570}
    >
      {!showContact && (
        <div className='flex flex-col justify-items-center items-center gap-4'>
          {iconType === 'SUCCESS' && <TickCheck size={48} />}
          {iconType === 'ERROR' && <ErrorIcon size={48} />}
          {iconType === 'SUCCESS_CMT' && <StartIcon size={48} />}
          {iconType === 'EMAIL' && <ExtraEmailIcon size={48} />}
          {iconType === 'SWITCH' && <SwapIcon size={48} />}
          {iconType === 'WARNING' && <InfoIcon size={48} color={colors.primary600} />}

          <div className='text-base font-bold '>{extraTitle || title}</div>
          <div className={`text-center`}>
            <div className={`px-5  ${iconType === 'USER_DISABLE' ? 'text-[20px]' : 'text-sm'}`}>
              {extraSubTitle || subTile} {haveHotline && <span>{dataSystem?.paramHotlineValue}</span>}
            </div>
            {methodOTP && (
              <div className='flex items-center justify-between w-[85%]'>
                <Radio.Group
                  className='flex flex-col items-start mt-6 gap-4 w-1/2'
                  onChange={e => {
                    setVerificationMethod(e.target.value)
                  }}
                  value={verificationMethod}
                >
                  <Radio text='Email' value={METHOD_SEND_OTP.EMAIL} />
                  <Radio text='Số điện thoại' value={METHOD_SEND_OTP.SMS} />
                </Radio.Group>
                <div className='w-1/2  flex flex-col items-end h-[80px] mt-6 gap-4 '>
                  <div className='flex flex-row h-1/2 '>
                    {verificationMethod === METHOD_SEND_OTP.EMAIL ? <div>{methodOTP?.emailMask}</div> : null}
                  </div>
                  <div className='flex flex-row h-1/2 '>
                    {verificationMethod === METHOD_SEND_OTP.SMS ? (
                      <div className={methodOTP?.phoneMask === '' ? 'text-red-600' : ''}>
                        {methodOTP?.phoneMask !== '' ? methodOTP?.phoneMask : 'Số điện thoại chưa được khai báo'}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className='flex flex-row justify-items-center justify-center items-baseline space-x-6 px-16 mt-2'
            style={isContact || isResendOTP || isCancelSendOTP || isCloseModal ? { width: '100%' } : {}}
          >
            {isContact && (
              <Button type='tertiary-normal' className='w-1/2'>
                Liên hệ
              </Button>
            )}
            {isResendOTP && (
              <Button type='tertiary-normal' onClick={resendOTP} className='w-1/2'>
                Gửi lại mã
              </Button>
            )}
            {/* {isCancelSendOTP && (
              <Button type='default' onClick={handleCancelSendOTP} className='w-1/2'>
                {tButton('cancel')}
              </Button>
            )} */}
            {isCloseModal && (
              <Button type='tertiary-normal' onClick={() => setVisibleModal(false)} className='w-1/2'>
                Huỷ
              </Button>
            )}
            <Button
              type='primary-normal'
              size='large'
              onClick={closeModal}
              className={isContact || isResendOTP || isCancelSendOTP || isCloseModal ? 'w-1/2' : ''}
            >
              {textButton}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  )
}
