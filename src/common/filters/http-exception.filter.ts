import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'
import { Catch, HttpException } from '@nestjs/common'
import { COMMON_RESPONSE_CODE } from '../enums/response-code.enum'

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse()

    const error = typeof response === 'string' ? { msg: exceptionResponse } : (exceptionResponse as Object)

    response.status(status).json({
      code: COMMON_RESPONSE_CODE.error,
      ...error,
    })
  }
}
