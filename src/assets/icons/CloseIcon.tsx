import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const CloseIcon: React.FC<IconProps> = ({ size = 20, color = colors.white }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.19038 5.19038C5.44422 4.93654 5.85578 4.93654 6.10962 5.19038L15.643 14.7237C15.8968 14.9776 15.8968 15.3891 15.643 15.643C15.3891 15.8968 14.9776 15.8968 14.7237 15.643L5.19038 6.10962C4.93654 5.85578 4.93654 5.44422 5.19038 5.19038Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.19038 15.643C4.93654 15.3891 4.93654 14.9776 5.19038 14.7237L14.7237 5.19038C14.9776 4.93654 15.3891 4.93654 15.643 5.19038C15.8968 5.44422 15.8968 5.85578 15.643 6.10962L6.10962 15.643C5.85578 15.8968 5.44422 15.8968 5.19038 15.643Z'
        fill={color}
      />
    </svg>
  )
}
