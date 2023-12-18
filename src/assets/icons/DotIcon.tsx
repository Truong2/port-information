import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const DotIcon: React.FC<IconProps> = ({ size = 4, color = colors.neutral700 }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 4 4' fill='none'>
      <circle cx='2' cy='2' r='2' fill={color} />
    </svg>
  )
}
