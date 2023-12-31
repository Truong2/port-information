import React from 'react'
import { IconProps } from './IconProps'

export const InfoIcon: React.FC<IconProps> = ({ color, size = '1.5em' }) => {
  return (
    <svg viewBox='0 0 50 50' width={size} height={size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M25 50C11.1925 50 0 38.8075 0 25C0 11.1925 11.1925 0 25 0C38.8075 0 50 11.1925 50 25C50 38.8075 38.8075 50 25 50ZM25 45C30.3043 45 35.3914 42.8929 39.1421 39.1421C42.8929 35.3914 45 30.3043 45 25C45 19.6957 42.8929 14.6086 39.1421 10.8579C35.3914 7.10714 30.3043 5 25 5C19.6957 5 14.6086 7.10714 10.8579 10.8579C7.10714 14.6086 5 19.6957 5 25C5 30.3043 7.10714 35.3914 10.8579 39.1421C14.6086 42.8929 19.6957 45 25 45ZM22.5 12.5H27.5V17.5H22.5V12.5ZM22.5 22.5H27.5V37.5H22.5V22.5Z'
        fill={color || 'currentColor'}
      />
    </svg>
  )
}
