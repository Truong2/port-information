import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

const WarningIcon1 = ({ size = 24, color = colors.red1000 }: IconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 32 32' fill='none'>
      <path
        d='M24.25 26.6668H7.75C5.68225 26.6668 4 25.0716 4 23.1108C4 22.5023 4.16509 21.9016 4.47756 21.3733L12.7255 7.15259C12.727 7.1501 12.7285 7.14766 12.7299 7.14517C14.1625 4.73005 17.8369 4.72916 19.2701 7.14517C19.2716 7.14761 19.273 7.1501 19.2745 7.15259L27.5225 21.3733C27.8349 21.9016 28 22.5023 28 23.1108C28 25.0716 26.3178 26.6668 24.25 26.6668ZM14.3661 8.01351L6.11847 22.2336C6.11702 22.2361 6.11556 22.2386 6.11411 22.241C5.95769 22.5047 5.875 22.8055 5.875 23.1108C5.875 24.0912 6.71613 24.8888 7.75 24.8888H24.25C25.2839 24.8888 26.125 24.0912 26.125 23.1108C26.125 22.8054 26.0423 22.5047 25.8859 22.241C25.8844 22.2386 25.883 22.2361 25.8815 22.2336L17.634 8.01373C16.9164 6.80966 15.0846 6.80828 14.3661 8.01351Z'
        fill={color}
      />
      <path
        d='M16 18.6658C15.4822 18.6658 15.0625 18.2678 15.0625 17.7768V12.4427C15.0625 11.9517 15.4822 11.5537 16 11.5537C16.5178 11.5537 16.9375 11.9517 16.9375 12.4427V17.7768C16.9375 18.2678 16.5178 18.6658 16 18.6658Z'
        fill={color}
      />
      <path
        d='M16 22.2218C16.5178 22.2218 16.9375 21.8238 16.9375 21.3328C16.9375 20.8418 16.5178 20.4438 16 20.4438C15.4822 20.4438 15.0625 20.8418 15.0625 21.3328C15.0625 21.8238 15.4822 22.2218 16 22.2218Z'
        fill={color}
      />
    </svg>
  )
}

export default WarningIcon1
