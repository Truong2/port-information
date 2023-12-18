import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const RedHeartIcon: React.FC<IconProps> = ({ size = 20, color = colors.red1000 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.9987 4.8853C13.4283 3.98914 15.3275 3.26194 16.9681 3.78324C20.5368 4.92435 21.6446 8.78183 20.6538 11.8512C19.1248 16.672 12.5949 20.2679 12.3179 20.4187C12.2194 20.4728 12.1104 20.4998 12.0014 20.4998C11.8924 20.4998 11.7842 20.4737 11.6857 20.4205C11.4105 20.2714 4.92808 16.7287 3.34813 11.8521L3.34725 11.8512C2.3555 8.78096 3.45979 4.92261 7.02502 3.78324C8.69904 3.24625 10.5234 3.96212 11.9987 4.8853Z'
        fill={color}
      />
    </svg>
  )
}
