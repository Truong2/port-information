import React from 'react'
import { Modal, ModalProps } from 'antd'

interface CustomModalProps extends ModalProps {
  open: boolean
  title: React.ReactNode
  children: React.ReactNode
  primaryButtonText?: React.ReactNode
  secondaryButtonText?: React.ReactNode
  onCancel?: () => void
  onOk?: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({
  title,
  children,
  primaryButtonText,
  secondaryButtonText,
  onCancel,
  onOk,
  open
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={primaryButtonText}
      cancelText={secondaryButtonText}
    >
      {children}
    </Modal>
  )
}

export default CustomModal
