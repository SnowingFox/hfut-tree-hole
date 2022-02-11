import axios, { AxiosRequestConfig } from 'axios'

export const createRequestInstance = (baseURL = '', config: AxiosRequestConfig = {}) => {
  return axios.create({
    baseURL,
    ...config,
  })
}

export const request = <T = any>(url: string, config: AxiosRequestConfig = {}, interceptor?: (args: any) => any) => {
  const instance = createRequestInstance()
  if (interceptor) {
    instance.interceptors.response.use(interceptor)
  }

  return instance.get<T>(url, config)
}
