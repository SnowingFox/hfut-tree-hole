import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { loginRequest } from '../../common/request/request'
import { LOGIN_RESPONSE_CODE } from '../../common/enums/response-code.enum'
import { createResponse } from '../../shared/response-manager'
import { RedisService } from '../redis/redis.service'
import { LoginQueryDto } from './dto/login-query.dto'

@Injectable()
export class AuthService {
  @Inject()
  private readonly jwtService: JwtService

  @Inject()
  private readonly redisService: RedisService

  async login(loginQueryDto: LoginQueryDto, headers: any): Promise<any> {
    const loginResult = await this.validateUser(loginQueryDto)
    const response = createResponse()

    if (!loginResult) {
      response.setResponse(LOGIN_RESPONSE_CODE.faild, '用户名或密码错误')
    } else {
      const userAgent: string = headers['user-agent']
      const host: string = headers.host
      const token = this.jwtService.sign({
        userAgent,
        host,
        signTime: Date.now(),
        ...loginQueryDto,
      })
      await this.redisService.setKey(loginQueryDto.studentId, token)
      response.setResponse(LOGIN_RESPONSE_CODE.success, '登录成功', { token })
    }

    return response.getResponse()
  }

  async validateUser(loginQueryDto: LoginQueryDto): Promise<boolean> {
    const login = await loginRequest(loginQueryDto) as any

    if (login.code <= 0) {
      return false
    }
    return login.code === 1
  }
}
