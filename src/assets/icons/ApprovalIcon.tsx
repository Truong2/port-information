import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const ApprovalIcon: React.FC<IconProps> = ({ size = 18, color = colors.white }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='url(#paint0_linear_3599_110)' />
      <path
        d='M23.6727 26.6182L25.2 28.1455L34.4727 18.8727L36 20.4L25.2 31.2L18.2182 24.2182L19.7455 22.6909L22.0364 24.9818L23.6727 26.6182ZM23.6727 23.4545L29.1273 18L30.5455 19.6364L25.0909 25.0909L23.6727 23.4545ZM20.5091 29.6727L18.9818 31.2L12 24.2182L13.5273 22.6909L15.0545 24.2182C15.1636 24.2182 20.5091 29.6727 20.5091 29.6727Z'
        fill={color}
      />
      <defs>
        <linearGradient id='paint0_linear_3599_110' x1='24' y1='0' x2='24' y2='48' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#FFAF51' />
          <stop offset='1' stopColor='#FF760F' />
        </linearGradient>
      </defs>
    </svg>
  )
}
