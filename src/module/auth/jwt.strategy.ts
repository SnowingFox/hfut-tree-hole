import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConstant } from '../../shared/constant/auth.constant'
import { RedisService } from '../redis/redis.service'
import { IVerifyTokenHeaders } from '../../shared/types'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstant.secret,
    })
  }

  async validate(payload: any) {
    const authToken = payload.authorization.replace('Bearer ', '')

    if (!authToken || authToken === '') {
      return false
    }
    try {
      const decodeToken = this.jwtService.decode(authToken) as IVerifyTokenHeaders
      let verifyCode = false

      if (await this.redisService.getKey(decodeToken.studentId) === authToken) {
        verifyCode = true
      }

      return verifyCode
    } catch (err) {
      console.log(err)
      throw new HttpException({ msg: 'Token is invaild!' }, HttpStatus.OK)
    }
  }
}
