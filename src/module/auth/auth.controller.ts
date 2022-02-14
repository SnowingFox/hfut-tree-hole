import { Controller, Get, Query, Request } from '@nestjs/common'
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

  @Get('login')
  async login(@Query() loginQueryDto: LoginQueryDto, @Request() request: Request) {
    return await this.authService.login(loginQueryDto, request.headers)
  }
}
