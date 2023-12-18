import React from 'react'
import { IconProps } from './IconProps'
import { colors } from '@/assets/colors'

export const Phone1Icon: React.FC<IconProps> = ({ color = colors.neutral700, size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.9459 12.9937C17.3087 13.3575 17.5124 13.8503 17.5124 14.3641C17.5124 14.8779 17.3087 15.3707 16.9459 15.7345L16.3749 16.3919C11.2469 21.2988 -1.22955 8.82607 3.60354 3.6831L4.32286 3.05705C4.68728 2.70444 5.17576 2.5093 5.68282 2.51375C6.18988 2.5182 6.67485 2.72189 7.03302 3.08084C7.05181 3.10025 8.21187 4.60777 8.21187 4.60777C8.55599 4.96928 8.74761 5.44947 8.74691 5.94857C8.74621 6.44768 8.55325 6.92733 8.20811 7.28788L7.48253 8.20003C7.88373 9.17485 8.4736 10.0608 9.21825 10.8069C9.9629 11.5531 10.8476 12.1448 11.8217 12.5479L12.7388 11.8186C13.0993 11.4736 13.5789 11.2808 14.0778 11.2801C14.5768 11.2794 15.0568 11.4709 15.4183 11.8148C15.4183 11.8148 16.9265 12.9749 16.9459 12.9937ZM16.085 13.9039C16.085 13.9039 14.5869 12.7508 14.5675 12.732C14.4385 12.6041 14.2643 12.5323 14.0826 12.5323C13.901 12.5323 13.7267 12.6041 13.5978 12.732C13.5809 12.7483 12.3181 13.7549 12.3181 13.7549C12.233 13.8227 12.1318 13.8671 12.0243 13.8838C11.9168 13.9004 11.8068 13.8888 11.7052 13.8501C10.4426 13.3806 9.2958 12.6449 8.34262 11.693C7.38944 10.7411 6.65221 9.59534 6.18097 8.33337C6.13975 8.23078 6.12643 8.11909 6.14237 8.00968C6.15832 7.90026 6.20296 7.79702 6.27175 7.71046C6.27175 7.71046 7.27781 6.44772 7.29471 6.43082C7.42259 6.30184 7.49435 6.12757 7.49435 5.94594C7.49435 5.76432 7.42259 5.59004 7.29471 5.46107C7.27593 5.44229 6.12275 3.94353 6.12275 3.94353C5.99192 3.82607 5.82112 3.7631 5.64536 3.76752C5.46959 3.77194 5.30217 3.84343 5.17742 3.96732L4.45809 4.59337C0.92468 8.83922 11.7384 19.0538 15.459 15.5379L16.0299 14.8806C16.1646 14.757 16.2456 14.5859 16.2559 14.4035C16.2662 14.221 16.2049 14.0418 16.085 13.9039Z'
        fill={color}
      />
    </svg>
  )
}