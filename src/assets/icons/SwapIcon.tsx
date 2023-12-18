import React from 'react'
import type { IconProps } from './IconProps'

export const SwapIcon: React.FC<IconProps> = ({ size = 60, color = '#2C3D94' }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M40.125 30.125L52.5 42.5L40.125 54.875L36.59 51.34L42.93 44.9975L10 45V40H42.93L36.59 33.66L40.125 30.125ZM19.875 5.125L23.41 8.66L17.07 15H50V20H17.07L23.41 26.34L19.875 29.875L7.5 17.5L19.875 5.125Z'
        fill={color}
      />
    </svg>
  )
}
