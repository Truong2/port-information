import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const MenuDot: React.FC<IconProps> = ({ size = 16, color = colors.neutral800 }) => {
  return (
    <svg width={size!} height={size!} viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.25 3C9.25 3.55228 8.80228 4 8.25 4C7.69772 4 7.25 3.55228 7.25 3C7.25 2.44772 7.69772 2 8.25 2C8.80228 2 9.25 2.44772 9.25 3Z'
        fill={color!}
      />
      <path
        d='M9.25 7.66667C9.25 8.21895 8.80228 8.66667 8.25 8.66667C7.69772 8.66667 7.25 8.21895 7.25 7.66667C7.25 7.11438 7.69772 6.66667 8.25 6.66667C8.80228 6.66667 9.25 7.11438 9.25 7.66667Z'
        fill={color!}
      />
      <path
        d='M9.25 13C9.25 13.5523 8.80228 14 8.25 14C7.69772 14 7.25 13.5523 7.25 13C7.25 12.4477 7.69772 12 8.25 12C8.80228 12 9.25 12.4477 9.25 13Z'
        fill={color!}
      />
    </svg>
  )
}
