import { message, notification } from 'antd'
import axios, { AxiosError, AxiosResponse } from 'axios'
import NProgress from 'nprogress'
import * as process from 'process'
import authConfig from 'src/configs/auth'
import { getCookie } from 'cookies-next'

const BASE_URL = process.env.REACT_APP_API_BASEURL

const config = {
  baseURL: BASE_URL,
  timeout: 1000 * 60,
  withCredentials: false,
  maxRedirects: 3,
  headers: {
    'Content-Type': ' application/json;charset=UTF-8'
  }
}

const axiosConfig = axios.create(config)
axiosConfig.interceptors.request.use(
  function (config) {
    NProgress.start()

    // get token
    const token = getCookie(authConfig.storageTokenKeyName)
    if (token) {
      config.headers['authorization'] = token
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosConfig.interceptors.response.use(
  function (response: AxiosResponse) {
    NProgress.done()

    if (response.data) {
      const { msg, status } = response.data
      if (status === 1) {
        message.error(msg).then()
      }
    }

    return response && response.data
  },
  function (error: AxiosError) {
    const { response, stack } = error

    /** Kiểm tra xem lỗi xảy ra có phải do chủ động hủy request hay không */
    const manuallyCancelled = stack?.includes('AbortSignal')

    NProgress.done()

    /** Trường hợp lỗi xảy ra do chủ động hủy request */
    if (manuallyCancelled) return

    /** Trường hợp lỗi xảy ra ngoài ý muốn */
    if (!window.navigator.onLine) {
      // Mất mạng
      notification.error({
        message: 'Network Error',
        duration: 3
      })
    } else if (response && response.status === 502) {
      // Server đang bảo trì (HTTP status code 502)
      notification.error({
        message: 'Server đang bảo trì, vui lòng thử lại sau',
        duration: 3
      })
    } else if (!response) {
      debugger

      notification.error({
        message: 'Đã có lỗi xảy ra, vui lòng thử lại sau ít phút.',
        duration: 3
      })
    }

    return Promise.reject(error)
  }
)

// Dùng cho upload File
const axiosConfigFile = axios.create(config)
axiosConfigFile.interceptors.request.use(
  function (config) {
    NProgress.start()

    // get token
    const token = getCookie(authConfig.storageTokenKeyName)
    if (token) {
      config.headers['authorization'] = token
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosConfigFile.interceptors.response.use(
  function (response: AxiosResponse) {
    NProgress.done()

    if (response.data) {
      const { msg, status } = response.data
      if (status === 1) {
        message.error(msg).then()
      }
    }

    return response
  },
  function (error: AxiosError) {
    const { response, stack } = error

    /** Kiểm tra xem lỗi xảy ra có phải do chủ động hủy request hay không */
    const manuallyCancelled = stack?.includes('AbortSignal')

    NProgress.done()

    /** Trường hợp lỗi xảy ra do chủ động hủy request */
    if (manuallyCancelled) return

    /** Trường hợp lỗi xảy ra ngoài ý muốn */
    if (!window.navigator.onLine) {
      // Mất mạng
      notification.error({
        message: 'Network Error',
        duration: 3
      })
    } else if (response && response.status === 502) {
      // Server đang bảo trì (HTTP status code 502)
      notification.error({
        message: 'Server đang bảo trì, vui lòng thử lại sau',
        duration: 3
      })
    } else if (!response) {
      notification.error({
        message: 'Đã có lỗi xảy ra, vui lòng thử lại sau ít phút.',
        duration: 3
      })
    }

    return Promise.reject(error)
  }
)
export { axiosConfig, axiosConfigFile }
