import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const AddIcon2: React.FC<IconProps> = ({ size = 20, color = colors.primary600 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.33398 10.0002C3.33398 9.65499 3.61381 9.37517 3.95898 9.37517H16.0424C16.3876 9.37517 16.6674 9.65499 16.6674 10.0002C16.6674 10.3453 16.3876 10.6252 16.0424 10.6252H3.95898C3.61381 10.6252 3.33398 10.3453 3.33398 10.0002Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0007 3.3335C10.3459 3.3335 10.6257 3.61332 10.6257 3.9585V16.0418C10.6257 16.387 10.3459 16.6668 10.0007 16.6668C9.65556 16.6668 9.37573 16.387 9.37573 16.0418V3.9585C9.37573 3.61332 9.65556 3.3335 10.0007 3.3335Z'
        fill={color}
      />
    </svg>
  )
}
