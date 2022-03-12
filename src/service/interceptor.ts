import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import * as _ from 'lodash'

export type ResponseInterceptor = <T extends AxiosResponse>(res: T) => T

export type RequestInterceptor = <T extends AxiosRequestConfig>(config: T) => T

export interface Interceptors {
  request?: RequestInterceptor[] | ResponseInterceptor
  response?: ResponseInterceptor[] | ResponseInterceptor
}

export function addInterceptor(instance: AxiosInstance, interceptor: Interceptors = { request: [], response: [] }) {
  if (!Array.isArray(interceptor.request)) {
    if (!_.isFunction(interceptor.request)) {
      interceptor.request = []
      // TODO solve type error
      // @ts-expect-error
      interceptor.request = [interceptor.request]
    }
  }

  if (!Array.isArray(interceptor.response)) {
    if (!_.isFunction(interceptor.response)) {
      interceptor.response = []
    }
    // @ts-expect-error
    interceptor.response = [interceptor.response]
  }

  (Object.keys(interceptor) as ['request', 'response']).forEach((item) => {
    (interceptor[item] as Interceptors[typeof item][])!.forEach((interItem) => {
      // @ts-expect-error
      instance.interceptors[item].use(interItem as (ResponseInterceptor | RequestInterceptor))
    })
  })
}

export const getResponseDataInterceptor = (res: AxiosResponse) => res.data || {}
