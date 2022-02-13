import { LoginQueryDto } from '../../module/auth/dto/login-query.dto'
import { sharedResponseFn } from '../../shared/utils'
import { request } from './base'

export const loginRequest = (loginQueryDto: LoginQueryDto) => {
  const url = 'http://localhost:3000/login'
  return request(url, {
    params: {
      username: loginQueryDto.studentId,
      password: loginQueryDto.password,
    },
  }, sharedResponseFn)
}
