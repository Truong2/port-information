import React from 'react'
import { colors } from '../colors'
import type { IconProps } from './IconProps'

export const WorkerIcon: React.FC<IconProps> = ({ size = 16, color = colors.white }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.02013 9.69052C5.08394 9.43111 4.92917 9.16831 4.67346 9.10346C4.48441 9.05506 4.28679 9.03087 4.08632 9.03087C2.70536 9.03087 1.58203 10.175 1.58203 11.5814V11.639C1.58203 11.9066 1.79536 12.123 2.05822 12.123C2.32108 12.123 2.53441 11.9066 2.53441 11.639V11.5814C2.53441 11.4512 2.55441 11.3264 2.58346 11.2049C2.74632 10.5302 3.33108 10.0269 4.03679 10.0037C4.05394 10.0032 4.06965 9.99833 4.08679 9.99833C4.20917 9.99833 4.3287 10.0129 4.44298 10.0419C4.69727 10.1082 4.95632 9.94993 5.02013 9.69052Z'
        fill={color}
      />
      <path
        d='M4.08814 8.46122C5.02195 8.46122 5.78195 7.6888 5.78195 6.73972C5.78195 5.79065 5.02195 5.01822 4.08814 5.01822C3.15433 5.01822 2.39433 5.79065 2.39433 6.73972C2.39433 7.6888 3.15433 8.46122 4.08814 8.46122ZM4.08814 5.98617C4.49671 5.98617 4.82957 6.32447 4.82957 6.73972C4.82957 7.15497 4.49671 7.49327 4.08814 7.49327C3.67957 7.49327 3.34671 7.15497 3.34671 6.73972C3.34671 6.32447 3.67957 5.98617 4.08814 5.98617Z'
        fill={color}
      />
      <path
        d='M14.1806 9.77764C13.7068 9.29608 13.0787 9.03087 12.4106 9.03087C12.2106 9.03087 12.013 9.05555 11.8239 9.10346C11.5687 9.16831 11.4135 9.43111 11.4773 9.69004C11.5411 9.94945 11.7987 10.1063 12.0544 10.0424C12.1863 10.009 12.3225 9.99785 12.4596 10.0032C12.843 10.0177 13.2268 10.1769 13.5068 10.462C13.7115 10.6701 13.8468 10.9266 13.9135 11.2054C13.943 11.3273 13.963 11.4527 13.963 11.5814V11.639C13.963 11.9066 14.1758 12.123 14.4392 12.123C14.7025 12.123 14.9154 11.9066 14.9154 11.639V11.5814C14.9154 10.9005 14.6544 10.2597 14.1806 9.77764Z'
        fill={color}
      />
      <path
        d='M12.4092 8.46122C13.3435 8.46122 14.1035 7.6888 14.1035 6.73972C14.1035 5.79065 13.3435 5.01822 12.4092 5.01822C11.4754 5.01822 10.7154 5.79065 10.7154 6.73972C10.7154 7.6888 11.4754 8.46122 12.4092 8.46122ZM12.4092 5.98617C12.8178 5.98617 13.1511 6.32447 13.1511 6.73972C13.1511 7.15497 12.8182 7.49327 12.4092 7.49327C12.0001 7.49327 11.6678 7.15497 11.6678 6.73972C11.6678 6.32447 12.0006 5.98617 12.4092 5.98617Z'
        fill={color}
      />
      <path
        d='M8.24871 8.46123C6.36966 8.46123 4.84062 10.0153 4.84062 11.925V12.016C4.84062 12.2837 5.05395 12.5 5.31681 12.5C5.57966 12.5 5.793 12.2837 5.793 12.016V11.925C5.793 10.5486 6.89443 9.42918 8.24871 9.42918C9.60252 9.42918 10.7039 10.5486 10.7039 11.925V12.0155C10.7039 12.2832 10.9168 12.4995 11.1801 12.4995C11.4435 12.4995 11.6563 12.2832 11.6563 12.0155V11.925C11.6563 10.0153 10.1278 8.46123 8.24871 8.46123Z'
        fill={color}
      />
      <path
        d='M8.24872 8.04307C9.4811 8.04307 10.4835 7.02431 10.4835 5.77178C10.4835 4.51925 9.4811 3.5 8.24872 3.5C7.01634 3.5 6.01396 4.51877 6.01396 5.77178C6.01396 7.02431 7.01634 8.04307 8.24872 8.04307ZM8.24872 4.46795C8.95586 4.46795 9.5311 5.05259 9.5311 5.77178C9.5311 6.49096 8.95586 7.07512 8.24872 7.07512C7.54158 7.07512 6.96634 6.49048 6.96634 5.77178C6.96634 5.05308 7.54158 4.46795 8.24872 4.46795Z'
        fill={color}
      />
      <path
        d='M5.52707 12.5H11.0647C11.2164 12.5 11.3618 12.4476 11.469 12.3542C11.5763 12.2609 11.6365 12.1342 11.6365 12.0022C11.6365 11.8702 11.5763 11.7436 11.469 11.6502C11.3618 11.5569 11.2164 11.5044 11.0647 11.5044H5.52707C5.37542 11.5044 5.22999 11.5569 5.12275 11.6502C5.01552 11.7436 4.95528 11.8702 4.95528 12.0022C4.95528 12.1342 5.01552 12.2609 5.12275 12.3542C5.22999 12.4476 5.37542 12.5 5.52707 12.5Z'
        fill={color}
      />
    </svg>
  )
}