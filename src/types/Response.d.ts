export interface ApiResponse<T> {
  data: T
}

export interface PageResponse<T> {
  content: T[]
  pageable: object
  totalPages: number
  totalElements: number
  last: boolean
  sort: object
  numberOfElements: number
  first: boolean
  size: number
  number: number
  empty: boolean
}
