import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { loginRequest } from '../../common/request/request'
import { LoginQueryDto } from './dto/login-query.dto'

@Injectable()
export class AuthService {
  @Inject()
  private readonly userService: UserService

  @Inject()
  private readonly jwtService: JwtService

  async login(loginQueryDto: LoginQueryDto): Promise<any> {
    const result = await this.validateUser(loginQueryDto)
    const response = Object.create({
      data: {},
      msg: '',
      code: 0,
    })
    if (!result) {

    }
  }

  async validateUser(loginQueryDto: LoginQueryDto): Promise<boolean> {
    const { studentId } = loginQueryDto
    const user = await this.userService.findUser(studentId)
    if (!user) {
      return false
    }
    const login = await loginRequest(loginQueryDto) as any
    if (login.code <= 0) {
      return false
    }
    return login.code === 1
  }
}
