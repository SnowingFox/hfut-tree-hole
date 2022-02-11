import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { loginRequest } from '../../common/request/request'
import { STATUS_CODE } from '../../config/status.config'
import { LoginQueryDto } from './dto/login-query.dto'

export interface IResponseData {
  code: number
  msg: string
  token?: string
}

@ApiTags('user')
@Controller('user')
export class UserController {
  @Get('/login')
  async login(@Query() loginQueryDto: LoginQueryDto) {
    const status = await loginRequest(loginQueryDto) as any
    const responseData: IResponseData = Object.create(null)

    if (status.code <= 0) {
      responseData.code = STATUS_CODE.login_error
      responseData.msg = '账号或密码不正确!'
    }
    if (status.code === 1) {
      responseData.code = STATUS_CODE.login_success
      responseData.msg = '登录成功!'
      responseData.token = 'XXXXXXXXXXXX'
    }
    return responseData
  }
}
