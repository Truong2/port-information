import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const StoreIcon: React.FC<IconProps> = ({ size = 18, color = colors.neutral700 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.66667 3.75H5C4.30964 3.75 3.75 4.30964 3.75 5V6.66667C3.75 7.35702 4.30964 7.91667 5 7.91667H6.66667C7.35702 7.91667 7.91667 7.35702 7.91667 6.66667V5C7.91667 4.30964 7.35702 3.75 6.66667 3.75ZM5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V6.66667C2.5 8.04738 3.61929 9.16667 5 9.16667H6.66667C8.04738 9.16667 9.16667 8.04738 9.16667 6.66667V5C9.16667 3.61929 8.04738 2.5 6.66667 2.5H5Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.66667 12.0833H5C4.30964 12.0833 3.75 12.643 3.75 13.3333V15C3.75 15.6904 4.30964 16.25 5 16.25H6.66667C7.35702 16.25 7.91667 15.6904 7.91667 15V13.3333C7.91667 12.643 7.35702 12.0833 6.66667 12.0833ZM5 10.8333C3.61929 10.8333 2.5 11.9526 2.5 13.3333V15C2.5 16.3807 3.61929 17.5 5 17.5H6.66667C8.04738 17.5 9.16667 16.3807 9.16667 15V13.3333C9.16667 11.9526 8.04738 10.8333 6.66667 10.8333H5Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15 3.75H13.3333C12.643 3.75 12.0833 4.30964 12.0833 5V6.66667C12.0833 7.35702 12.643 7.91667 13.3333 7.91667H15C15.6904 7.91667 16.25 7.35702 16.25 6.66667V5C16.25 4.30964 15.6904 3.75 15 3.75ZM13.3333 2.5C11.9526 2.5 10.8333 3.61929 10.8333 5V6.66667C10.8333 8.04738 11.9526 9.16667 13.3333 9.16667H15C16.3807 9.16667 17.5 8.04738 17.5 6.66667V5C17.5 3.61929 16.3807 2.5 15 2.5H13.3333Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15 12.0833H13.3333C12.643 12.0833 12.0833 12.643 12.0833 13.3333V15C12.0833 15.6904 12.643 16.25 13.3333 16.25H15C15.6904 16.25 16.25 15.6904 16.25 15V13.3333C16.25 12.643 15.6904 12.0833 15 12.0833ZM13.3333 10.8333C11.9526 10.8333 10.8333 11.9526 10.8333 13.3333V15C10.8333 16.3807 11.9526 17.5 13.3333 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V13.3333C17.5 11.9526 16.3807 10.8333 15 10.8333H13.3333Z'
        fill={color}
      />
    </svg>
  )
}
