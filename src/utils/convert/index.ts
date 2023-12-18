import { GENDER_OPTIONS, GENDER_TYPE } from '@/constants'
import { API_ROOT } from '@/models/Base'

export const handleSrcImg = (src: string) => {
  const srcImg = src ? `${API_ROOT}${src}` : ''

  return srcImg
}

export const convertGenderSubmit = (type: number) => {
  if (type === GENDER_OPTIONS[0].value) return GENDER_TYPE.FEMALE
  if (type === GENDER_OPTIONS[1].value) return GENDER_TYPE.MALE
  if (type === GENDER_OPTIONS[2].value) return GENDER_TYPE.OTHER

  return ''
}

export const convertGenderDetail = (type: number) => {
  if (type === GENDER_OPTIONS[0].value) return GENDER_OPTIONS[0].label
  if (type === GENDER_OPTIONS[1].value) return GENDER_OPTIONS[1].label
  if (type === GENDER_OPTIONS[2].value) return GENDER_OPTIONS[2].label

  return ''
}
