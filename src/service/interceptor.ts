import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export type ResponseInterceptor = <T extends AxiosResponse>(res: T) => T

export type RequestInterceptor = <T extends AxiosRequestConfig>(config: T) => T

export interface Interceptors {
  request?: RequestInterceptor[] | RequestInterceptor
  response?: ResponseInterceptor[] | ResponseInterceptor
}

export type KeyofInterceptors = keyof Interceptors

export function addInterceptor(
  instance: AxiosInstance,
  interceptor: Interceptors = { request: [], response: [] },
) {
  if (!Array.isArray(interceptor.request) && interceptor.request) {
    interceptor.request = [interceptor.request]
  }

  if (!Array.isArray(interceptor.response) && interceptor.response) {
    interceptor.response = [interceptor.response]
  }

  (Object.keys(interceptor) as KeyofInterceptors[]).forEach((item) => {
    (interceptor[item] as Interceptors[typeof item][])!.forEach((interItem) => {
      instance.interceptors[item].use(
        interItem as ResponseInterceptor | RequestInterceptor,
      )
    })
  })
}

export const getResponseDataInterceptor = (res: AxiosResponse) => res.data || {}
