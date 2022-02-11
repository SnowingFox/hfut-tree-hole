import { IsString } from 'class-validator'

export class LoginQueryDto {
  @IsString()
  username: string

  @IsString()
  password: string
}
