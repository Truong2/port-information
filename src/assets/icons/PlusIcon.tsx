import React from 'react'
import { IconProps } from '@/assets/icons/IconProps'

function PlusIcon({ size = 20, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.33398 9.99968C3.33398 9.6545 3.61381 9.37468 3.95898 9.37468H16.0424C16.3876 9.37468 16.6674 9.6545 16.6674 9.99968C16.6674 10.3449 16.3876 10.6247 16.0424 10.6247H3.95898C3.61381 10.6247 3.33398 10.3449 3.33398 9.99968Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0007 3.33301C10.3459 3.33301 10.6257 3.61283 10.6257 3.95801V16.0413C10.6257 16.3865 10.3459 16.6663 10.0007 16.6663C9.65556 16.6663 9.37573 16.3865 9.37573 16.0413V3.95801C9.37573 3.61283 9.65556 3.33301 10.0007 3.33301Z'
        fill={color}
      />
    </svg>
  )
}

export default PlusIcon
