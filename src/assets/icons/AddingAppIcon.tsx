import React from 'react'
import { colors } from '../colors'
import { IconProps } from './IconProps'

export const AddingAppIcon: React.FC<IconProps> = ({ size = 24, color = colors.neutral200 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 4.5H6C5.17157 4.5 4.5 5.17157 4.5 6V8C4.5 8.82843 5.17157 9.5 6 9.5H8C8.82843 9.5 9.5 8.82843 9.5 8V6C9.5 5.17157 8.82843 4.5 8 4.5ZM6 3C4.34315 3 3 4.34315 3 6V8C3 9.65685 4.34315 11 6 11H8C9.65685 11 11 9.65685 11 8V6C11 4.34315 9.65685 3 8 3H6Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 14.5H6C5.17157 14.5 4.5 15.1716 4.5 16V18C4.5 18.8284 5.17157 19.5 6 19.5H8C8.82843 19.5 9.5 18.8284 9.5 18V16C9.5 15.1716 8.82843 14.5 8 14.5ZM6 13C4.34315 13 3 14.3431 3 16V18C3 19.6569 4.34315 21 6 21H8C9.65685 21 11 19.6569 11 18V16C11 14.3431 9.65685 13 8 13H6Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 4.5H16C15.1716 4.5 14.5 5.17157 14.5 6V8C14.5 8.82843 15.1716 9.5 16 9.5H18C18.8284 9.5 19.5 8.82843 19.5 8V6C19.5 5.17157 18.8284 4.5 18 4.5ZM16 3C14.3431 3 13 4.34315 13 6V8C13 9.65685 14.3431 11 16 11H18C19.6569 11 21 9.65685 21 8V6C21 4.34315 19.6569 3 18 3H16Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 14.5H16C15.1716 14.5 14.5 15.1716 14.5 16V18C14.5 18.8284 15.1716 19.5 16 19.5H18C18.8284 19.5 19.5 18.8284 19.5 18V16C19.5 15.1716 18.8284 14.5 18 14.5ZM16 13C14.3431 13 13 14.3431 13 16V18C13 19.6569 14.3431 21 16 21H18C19.6569 21 21 19.6569 21 18V16C21 14.3431 19.6569 13 18 13H16Z'
        fill={color}
      />
    </svg>
  )
}
