import { axiosConfig, axiosConfigFile } from '@/utils/api'

export const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT

export class Base {
  private readonly apiRoot: string | undefined
  private readonly apiPrefix: string | undefined

  constructor(apiPrefix: string | null = null) {
    this.apiRoot = API_ROOT
    this.apiPrefix = `${API_ROOT}/api${apiPrefix}`
  }

  normalizeQuery = (query: { [x: string]: any }) => {
    const formatQuery: Record<string, any> = {}
    Object.keys(query).forEach(key => {
      if (query[key] !== null && typeof query[key] === 'string') {
        formatQuery[key] = query[key].trim()
      } else if (query[key] !== null && !Number.isNaN(query[key])) {
        formatQuery[key] = query[key]
      }
    })

    return formatQuery
  }

  apiGet = (url: string, query = {}, signal?: any) =>
    axiosConfig.get(`${this.apiPrefix}${url}`, { params: this.normalizeQuery(query), signal })

  apiGetWithoutPrefix = (url: string, query = {}, signal?: any) =>
    axiosConfig.get(`${this.apiRoot}${url}`, { params: this.normalizeQuery(query), signal })

  apiPost = (url: string, body: any, signal?: any) => axiosConfig.post(`${this.apiPrefix}${url}`, body, { signal })

  apiPut = (url: string, body: any, signal?: any) => axiosConfig.put(`${this.apiPrefix}${url}`, body, { signal })

  apiPutWithoutPrefix = (url: any, body: any, signal?: any) =>
    axiosConfig.put(`${this.apiRoot}${url}`, body, { signal })

  apiPostWithoutPrefix = (url: string, body: any, signal?: any) =>
    axiosConfig.post(`${this.apiRoot}${url}`, body, { signal })

  apiDelete = (url = {}, signal?: any) => axiosConfig.delete(`${this.apiPrefix}${url}`, { signal })

  apiDeleteWithoutPrefix = (url = {}, signal?: any) => axiosConfig.delete(`${this.apiRoot}${url}`, { signal })

  apiUploadFile = (url: string, body: any, signal?: any) =>
    axiosConfig.post(`${this.apiRoot}${url}`, body, {
      headers: { 'Content-Type': 'multipart/form-data' },
      signal
    })

  apiDeleteBody = (url = '', body: any, signal?: any) => {
    return axiosConfig.delete(`${this.apiPrefix}${url}`, {
      data: body,
      signal
    })
  }

  apiPostUpload = (url: string, body: any) =>
    axiosConfigFile.post(`${this.apiRoot}${url}`, body, {
      headers: { 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      responseType: 'blob'
    })

  // apiPostUpload = (url: any, body: any) => axiosConfig.postUploadAPI(`${this.apiPrefix}${url}`, body);

  // apiDownload = (url, params?) => axiosConfig.getDownload(`${this.apiPrefix}${url}`, params)

  // apiUpload = (url, body) => axiosConfig.postDownload(`${this.apiPrefix}${url}`, body)

  // formatResPagination = res => {
  //   if (res?.data?.content) {
  //     return {
  //       content: res.data.content,
  //       total: res.data.totalElements,
  //       ...omit(res, ['data'])
  //     }
  //   }
  //   if (res?.content) {
  //     return {
  //       content: res.content,
  //       total: res.totalElements
  //     }
  //   }
  //   if (res?.length > 0) {
  //     return {
  //       content: res,
  //       total: res.length
  //     }
  //   }
  //   if (res?.data) {
  //     return {
  //       content: res.data,
  //       total: res.totalElements
  //     }
  //   }

  //   return {
  //     content: [],
  //     total: 0
  //   }
  // }
}
