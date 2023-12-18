import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const ZoomIcon: React.FC<IconProps> = ({ size = 18, color = colors.white }) => {
  return (
    <svg width={size} height={color} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='url(#paint0_linear_3599_436)' />
      <path
        d='M15 20.25C15 19.5597 15.5597 19 16.25 19H23.75C25.8211 19 27.5 20.6789 27.5 22.75V27.75C27.5 28.4404 26.9404 29 26.25 29H18.75C16.6789 29 15 27.3211 15 25.25V20.25Z'
        fill={color}
      />
      <path
        d='M28.125 23.6894C28.125 23.0839 28.3447 22.4989 28.7435 22.0431L30.857 19.6278C31.427 18.9763 32.5 19.3795 32.5 20.2452V27.755C32.5 28.6206 31.427 29.0237 30.857 28.3722L28.7435 25.957C28.3447 25.5012 28.125 24.9162 28.125 24.3107V23.6894Z'
        fill={color}
      />
      <defs>
        <linearGradient id='paint0_linear_3599_436' x1='24' y1='0' x2='24' y2='48' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#0079FA' />
          <stop offset='1' stopColor='#56ACFF' />
        </linearGradient>
      </defs>
    </svg>
  )
}
