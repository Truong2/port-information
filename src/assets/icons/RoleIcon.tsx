import React from 'react'
import { colors } from '../colors'
import { IconProps } from './IconProps'

export const RoleIcon: React.FC<IconProps> = ({ size = 24, color = colors.neutral700 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.1551 14.3242C13.4603 14.0179 13.4603 13.5203 13.1551 13.214C12.8498 12.9076 12.354 12.9076 12.0487 13.214C11.7435 13.5203 11.7435 14.0179 12.0487 14.3242C12.354 14.6306 12.8498 14.6306 13.1551 14.3242Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.53862 16.5041C4.64333 16.6083 4.78535 16.6668 4.93343 16.6668H12.2995C12.3306 16.6668 12.3613 16.6642 12.3915 16.6592C13.1991 16.7179 14.0268 16.4376 14.6439 15.8184C15.3172 15.1426 15.5885 14.2149 15.4572 13.3364L17.1329 11.6554C17.2347 11.5532 17.2917 11.4149 17.2917 11.2708V9.60572C17.2917 9.30588 17.0492 9.06253 16.7504 9.06253H15.0913C14.9477 9.06253 14.8098 9.11975 14.7081 9.22187L13.0324 10.9036C12.1577 10.7718 11.2333 11.0441 10.5599 11.7198C9.51632 12.7672 9.4389 14.4192 10.3277 15.5557H5.52639C5.62772 14.7344 5.94989 13.9516 6.46365 13.2923C7.09224 12.4855 7.9721 11.9092 8.9653 11.6535C9.03686 11.6373 9.10453 11.6074 9.16444 11.5652C9.22436 11.5231 9.27534 11.4696 9.31449 11.4078C9.35363 11.3461 9.38017 11.2773 9.39258 11.2053C9.405 11.1334 9.40305 11.0597 9.38684 10.9885C9.37064 10.9173 9.3405 10.8499 9.29814 10.7903C9.25579 10.7307 9.20204 10.68 9.13998 10.641C9.07792 10.6021 9.00876 10.5757 8.93644 10.5633C8.86413 10.551 8.79007 10.5529 8.71851 10.569C7.47399 10.8729 6.3686 11.585 5.58062 12.5905C4.79264 13.5959 4.36791 14.8362 4.37509 16.1112C4.37509 16.2586 4.43391 16.3999 4.53862 16.5041ZM13.8782 15.0507C13.4849 15.4453 12.9546 15.6197 12.4402 15.5736C12.3951 15.5619 12.3484 15.5558 12.3011 15.5557C11.9436 15.4955 11.6007 15.3271 11.3249 15.0507C10.6206 14.3431 10.6206 13.1951 11.3249 12.4883C11.7976 12.0139 12.4673 11.8582 13.0699 12.0189C13.2561 12.0689 13.4553 12.0153 13.5917 11.8784L15.315 10.1489H16.2092V11.0463L14.4858 12.7758C14.3494 12.9127 14.296 13.1126 14.3458 13.2994C14.506 13.9042 14.3509 14.5763 13.8782 15.0507Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.10656 9.44459C8.4992 9.44459 7.90547 9.26538 7.40047 8.92964C6.89547 8.59389 6.50187 8.11668 6.26944 7.55835C6.03701 7.00002 5.9762 6.38565 6.09469 5.79294C6.21318 5.20022 6.50565 4.65577 6.93512 4.22845C7.36459 3.80112 7.91177 3.51011 8.50746 3.39221C9.10315 3.27431 9.7206 3.33482 10.2817 3.56609C10.8429 3.79735 11.3225 4.18899 11.6599 4.69147C11.9973 5.19395 12.1774 5.78471 12.1774 6.38904C12.1765 7.19915 11.8527 7.97583 11.277 8.54867C10.7013 9.1215 9.92073 9.44371 9.10656 9.44459ZM9.10656 4.4446C8.72005 4.4446 8.34223 4.55864 8.02087 4.7723C7.6995 4.98596 7.44903 5.28964 7.30112 5.64494C7.15321 6.00024 7.11451 6.3912 7.18991 6.76838C7.26532 7.14557 7.45144 7.49203 7.72473 7.76397C7.99803 8.0359 8.34624 8.22109 8.72531 8.29612C9.10439 8.37115 9.49731 8.33264 9.85439 8.18547C10.2115 8.0383 10.5167 7.78908 10.7314 7.46932C10.9461 7.14955 11.0607 6.77362 11.0607 6.38904C11.0607 5.87335 10.8549 5.37877 10.4884 5.01412C10.1219 4.64946 9.62484 4.4446 9.10656 4.4446Z'
        fill={color}
      />
    </svg>
  )
}
