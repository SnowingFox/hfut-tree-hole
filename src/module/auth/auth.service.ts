import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { loginRequest } from '../../common/request/request'
import { LOGIN_RESPONSE_CODE } from '../../common/enums/response-code.enum'
import { LoginQueryDto } from './dto/login-query.dto'

@Injectable()
export class AuthService {
  @Inject()
  private readonly userService: UserService

  @Inject()
  private readonly jwtService: JwtService

  async login(loginQueryDto: LoginQueryDto): Promise<any> {
    const loginResult = await this.validateUser(loginQueryDto)
    const response = Object.create({
      code: LOGIN_RESPONSE_CODE.success,
      msg: '',
      data: {},
    })
    if (!loginResult) {
      response.msg = '账号或密码错误'
      response.code = LOGIN_RESPONSE_CODE.faild
    } else {
      response.msg = '登录成功'
      response.code = LOGIN_RESPONSE_CODE.success
    }
    return response
  }

  async validateUser(loginQueryDto: LoginQueryDto): Promise<boolean> {
    // const { studentId } = loginQueryDto
    // const user = await this.userService.findUser(studentId)
    // if (!user) {
    //   return false
    // }
    const login = await loginRequest(loginQueryDto) as any
    console.log(login)
    if (login.code <= 0) {
      return false
    }
    return login.code === 1
  }
}
