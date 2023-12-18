import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const WarningIcon: React.FC<IconProps> = ({ size = 24, color = colors.red1000 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        fill={color}
      />
      <path
        d='M13 15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5C11 14.9477 11.4477 14.5 12 14.5C12.5523 14.5 13 14.9477 13 15.5Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 7C12.4142 7 12.75 7.33579 12.75 7.75V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75V7.75C11.25 7.33579 11.5858 7 12 7Z'
        fill='white'
      />
    </svg>
  )
}
