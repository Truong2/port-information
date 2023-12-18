import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const EditIcon: React.FC<IconProps> = ({ size = 20, color = colors.primary600 }) => {
  return (
    <svg width={size!} height={size!} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.1601 3.0814L6.54014 10.7014C6.2491 10.9909 6.01838 11.3352 5.86132 11.7144C5.70425 12.0937 5.62398 12.5003 5.62514 12.9108V13.7501C5.62514 13.9159 5.69099 14.0749 5.8082 14.1921C5.92541 14.3093 6.08438 14.3751 6.25014 14.3751H7.08951C7.49999 14.3763 7.90662 14.296 8.28586 14.139C8.6651 13.9819 9.00942 13.7512 9.29889 13.4601L16.9189 5.84015C17.2841 5.474 17.4893 4.97794 17.4893 4.46077C17.4893 3.9436 17.2841 3.44754 16.9189 3.0814C16.5474 2.72633 16.0534 2.52818 15.5395 2.52818C15.0257 2.52818 14.5316 2.72633 14.1601 3.0814ZM16.0351 4.9564L8.41514 12.5764C8.06272 12.9267 7.58639 13.1238 7.08951 13.1251H6.87514V12.9108C6.87644 12.4139 7.07362 11.9376 7.42389 11.5851L15.0439 3.96515C15.1774 3.83762 15.3549 3.76646 15.5395 3.76646C15.7241 3.76646 15.9016 3.83762 16.0351 3.96515C16.1664 4.09672 16.24 4.27495 16.24 4.46077C16.24 4.64659 16.1664 4.82483 16.0351 4.9564Z'
        fill={color!}
      />
      <path
        d='M16.875 8.11188C16.7092 8.11188 16.5503 8.17772 16.4331 8.29493C16.3158 8.41214 16.25 8.57112 16.25 8.73688V11.875L16.2031 13.0435C16.1897 13.3394 16.1592 13.4562 16.075 13.5935L15.7705 13.9683C15.3413 14.4016 14.3468 15.39 13.9952 15.7417C13.6436 16.0933 13.5645 16.162 13.1413 16.2142L11.875 16.25H5.625C5.12772 16.25 4.65081 16.0525 4.29917 15.7008C3.94754 15.3492 3.75 14.8723 3.75 14.375V5.625C3.75 5.12772 3.94754 4.65081 4.29917 4.29917C4.65081 3.94754 5.12772 3.75 5.625 3.75H11.2763C11.442 3.75 11.601 3.68415 11.7182 3.56694C11.8354 3.44973 11.9013 3.29076 11.9013 3.125C11.9013 2.95924 11.8354 2.80027 11.7182 2.68306C11.601 2.56585 11.442 2.5 11.2763 2.5H5.625C4.7965 2.50099 4.00222 2.83055 3.41639 3.41639C2.83055 4.00222 2.50099 4.7965 2.5 5.625V14.375C2.50099 15.2035 2.83055 15.9978 3.41639 16.5836C4.00222 17.1694 4.7965 17.499 5.625 17.5H12.7144C13.1249 17.5012 13.5317 17.4209 13.911 17.2638C14.2904 17.1068 14.6348 16.8761 14.9244 16.585L16.5844 14.9238C16.8755 14.6343 17.1063 14.29 17.2634 13.9108C17.4206 13.5315 17.501 13.1249 17.5 12.7144V8.73688C17.5 8.57112 17.4342 8.41214 17.3169 8.29493C17.1997 8.17772 17.0408 8.11188 16.875 8.11188Z'
        fill={color!}
      />
    </svg>
  )
}
