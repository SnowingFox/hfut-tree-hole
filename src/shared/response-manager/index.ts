import { IResponse } from '../types'

class ResponseManager {
  public response: Partial<IResponse>

  public setResponse<T = any>(code: number, msg: string, data: T = {} as T): void {
    this.response = {
      code,
      msg,
      data,
    }
  }

  public getResponse() {
    return this.response
  }
}

export const createResponse = <T = any>(code = 0, msg = '', data: T = {} as T) => {
  const instance = new ResponseManager()
  instance.setResponse(code, msg, data)

  return instance
}
