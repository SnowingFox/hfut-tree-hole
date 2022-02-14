export interface IResponse<T = any> {
  code: number
  msg: string
  data: T
}

export interface IVerifyTokenHeaders {
  userAgent: string
  host: string
  signTime: number
  studentId: string
  password: string
  iat: number
  exp: number
}
