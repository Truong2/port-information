import React from 'react'
import { colors } from '../colors'

interface IconProps {
  size?: number
  color?: string
}

export const DefaultIcon: React.FC<IconProps> = ({ size = 48, color = colors.neutral800 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6 38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6H10C7.79086 6 6 7.79086 6 10V38Z'
        fill={color}
      />
    </svg>
  )
}
