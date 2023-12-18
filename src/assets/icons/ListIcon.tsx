import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const ListIcon: React.FC<IconProps> = ({ size = 20, color = colors.neutral700 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6.875 6.31969H16.875C17.0408 6.31969 17.1997 6.2514 17.3169 6.12985C17.4342 6.00829 17.5 5.84343 17.5 5.67153C17.5 5.49963 17.4342 5.33477 17.3169 5.21321C17.1997 5.09166 17.0408 5.02337 16.875 5.02337H6.875C6.70924 5.02337 6.55027 5.09166 6.43306 5.21321C6.31585 5.33477 6.25 5.49963 6.25 5.67153C6.25 5.84343 6.31585 6.00829 6.43306 6.12985C6.55027 6.2514 6.70924 6.31969 6.875 6.31969Z'
        fill={color}
      />
      <path
        d='M16.875 9.56007H6.875C6.70924 9.56007 6.55027 9.62836 6.43306 9.74991C6.31585 9.87147 6.25 10.0363 6.25 10.2082C6.25 10.3801 6.31585 10.545 6.43306 10.6666C6.55027 10.7881 6.70924 10.8564 6.875 10.8564H16.875C17.0408 10.8564 17.1997 10.7881 17.3169 10.6666C17.4342 10.545 17.5 10.3801 17.5 10.2082C17.5 10.0363 17.4342 9.87147 17.3169 9.74991C17.1997 9.62836 17.0408 9.56007 16.875 9.56007Z'
        fill={color}
      />
      <path
        d='M16.875 14.0974H6.875C6.70924 14.0974 6.55027 14.1657 6.43306 14.2872C6.31585 14.4088 6.25 14.5737 6.25 14.7456C6.25 14.9175 6.31585 15.0823 6.43306 15.2039C6.55027 15.3254 6.70924 15.3937 6.875 15.3937H16.875C17.0408 15.3937 17.1997 15.3254 17.3169 15.2039C17.4342 15.0823 17.5 14.9175 17.5 14.7456C17.5 14.5737 17.4342 14.4088 17.3169 14.2872C17.1997 14.1657 17.0408 14.0974 16.875 14.0974Z'
        fill={color}
      />
      <path
        d='M3.75 6.96764C4.44036 6.96764 5 6.38725 5 5.67132C5 4.95538 4.44036 4.375 3.75 4.375C3.05964 4.375 2.5 4.95538 2.5 5.67132C2.5 6.38725 3.05964 6.96764 3.75 6.96764Z'
        fill={color}
      />
      <path
        d='M3.75 11.505C4.44036 11.505 5 10.9246 5 10.2086C5 9.49271 4.44036 8.91233 3.75 8.91233C3.05964 8.91233 2.5 9.49271 2.5 10.2086C2.5 10.9246 3.05964 11.505 3.75 11.505Z'
        fill={color}
      />
      <path
        d='M3.75 16.0417C4.44036 16.0417 5 15.4613 5 14.7453C5 14.0294 4.44036 13.449 3.75 13.449C3.05964 13.449 2.5 14.0294 2.5 14.7453C2.5 15.4613 3.05964 16.0417 3.75 16.0417Z'
        fill={color}
      />
    </svg>
  )
}
