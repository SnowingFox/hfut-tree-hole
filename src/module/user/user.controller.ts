import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { LoginQueryDto } from '../auth/dto/login-query.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { UserService } from './user.service'

export interface IResponseData {
  code: number
  msg: string
  token?: string
}

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/find/:id')
  async findUser(@Param('id') id: string) {
    return this.userService.findUser(id)
  }

  @UseGuards(JwtAuthGuard)
  @Get('getInfo/:id')
  async getInfo(@Param('id') id: number) {
    return 'hi'
  }
}
