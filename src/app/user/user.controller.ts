import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { LoginQueryDto } from './dto/login-query.dto'

@ApiTags('user')
@Controller('user')
export class UserController {
  @Get('/login')
  public login(@Query() loginQueryDto: LoginQueryDto) {
    const { username, password } = loginQueryDto

    return loginQueryDto
  }
}
