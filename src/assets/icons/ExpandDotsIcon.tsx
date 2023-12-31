import type { IconProps } from './IconProps'

export const ExpandDotsIcon: React.FC<IconProps> = ({ size = 24, color = '#666666' }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5 10.5C4.175 10.5 3.5 11.175 3.5 12C3.5 12.825 4.175 13.5 5 13.5C5.825 13.5 6.5 12.825 6.5 12C6.5 11.175 5.825 10.5 5 10.5ZM20 10.5C19.175 10.5 18.5 11.175 18.5 12C18.5 12.825 19.175 13.5 20 13.5C20.825 13.5 21.5 12.825 21.5 12C21.5 11.175 20.825 10.5 20 10.5ZM12.5 10.5C11.675 10.5 11 11.175 11 12C11 12.825 11.675 13.5 12.5 13.5C13.325 13.5 14 12.825 14 12C14 11.175 13.325 10.5 12.5 10.5Z'
        fill={color}
      />
    </svg>
  )
}
