import { Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common'

import { ApiTags } from '@nestjs/swagger'
import { LOGIN_RESPONSE_CODE } from '../../common/enums/response-code.enum'
import { LoginQueryDto } from './dto/login-query.dto'
import { AuthService } from './auth.service'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Get('login')
  async login(@Query() loginQueryDto: LoginQueryDto) {
    return await this.authService.login(loginQueryDto)
  }
}
