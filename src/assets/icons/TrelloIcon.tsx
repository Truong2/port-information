import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const TrelloIcon: React.FC<IconProps> = ({ size = 18, color = colors.white }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='url(#paint0_linear_3599_2936)' />
      <g clipPath='url(#clip0_3599_2936)'>
        <path
          d='M35.2733 9H12.7571C10.6809 9 8.99992 10.6808 8.99992 12.75C8.99323 12.75 8.99992 12.4821 8.99992 35.25C8.99992 37.3192 10.6809 39 12.7504 39H35.2666C37.3293 38.9866 38.9969 37.3125 38.9969 35.25V12.75C39.0036 10.6875 37.336 9.01339 35.2733 9ZM22.1935 31.721C22.1801 32.7054 21.3831 33.5022 20.392 33.5022H14.8533C13.8621 33.5089 13.0518 32.7121 13.0451 31.721V14.6987C13.0451 13.7076 13.8487 12.8973 14.8466 12.8973H20.3987C21.3898 12.8973 22.2002 13.7009 22.2002 14.6987V31.721H22.1935ZM35.1259 24.221C35.1259 25.2121 34.3222 26.0223 33.3244 26.0223H27.8996C26.9084 26.0223 26.098 25.2187 26.098 24.221V14.7054C26.098 13.7143 26.9017 12.904 27.8929 12.904H33.3244C34.3155 12.904 35.1259 13.7076 35.1259 14.7054V24.221Z'
          fill={color}
        />
      </g>
      <defs>
        <linearGradient id='paint0_linear_3599_2936' x1='24' y1='0' x2='24' y2='48' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#0079FA' />
          <stop offset='1' stopColor='#0A6FD0' />
        </linearGradient>
        <clipPath id='clip0_3599_2936'>
          <rect width='30' height='30' fill='white' transform='translate(9 9)' />
        </clipPath>
      </defs>
    </svg>
  )
}
