import { Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common'

import { ApiTags } from '@nestjs/swagger'
import { LoginQueryDto } from './dto/login-query.dto'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './jwt-auth.guard'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Get()
  async login(@Query() loginQueryDto: LoginQueryDto) {
    const loginResult = await this.authService.login(loginQueryDto)

    if (!loginResult) {

    }
  }
}
