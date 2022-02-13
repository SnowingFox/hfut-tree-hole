import { IsString } from 'class-validator'

export class LoginQueryDto {
  @IsString()
  studentId: string

  @IsString()
  password: string
}
