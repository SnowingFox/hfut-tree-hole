import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConstant } from '../../shared/constant/auth.constant'
import { RedisService } from '../redis/redis.service'
import { IVerifyTokenHeaders } from '../../shared/types'
import { handleToken } from '../../shared/utils'

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
    const authorization = payload.authorization
    if (!authorization) {
      return false
    }
    const authToken = handleToken(authorization)

    if (!authToken || authToken === '') {
      return false
    }
    try {
      const decodeToken = this.jwtService.decode(authToken) as IVerifyTokenHeaders
      const cacheToken = await this.jwtService.decode(await this.redisService.getKey(decodeToken?.studentId)) as IVerifyTokenHeaders
      let verifyCode = false

      if (cacheToken.studentId === decodeToken.studentId && cacheToken.userAgent === decodeToken.userAgent) {
        verifyCode = true
      }

      return verifyCode
    } catch (err) {
      console.log(err)
      throw new HttpException({ msg: 'Token is invaild!' }, HttpStatus.OK)
    }
  }

  async validateIsLogin(payload: any) {
    const authorization = payload.authorization
    if (!authorization) {
      return false
    }
    const authToken = handleToken(authorization)

    if (!authToken || authToken === '') {
      return false
    }
    try {
      const decodeToken = this.jwtService.decode(authToken) as IVerifyTokenHeaders
      const cacheToken = await this.jwtService.decode(await this.redisService.getKey(decodeToken.studentId)) as IVerifyTokenHeaders

      if (!cacheToken) {
        return false
      }
      if (!decodeToken) {
        return false
      }

      if (cacheToken.studentId === decodeToken.studentId && cacheToken.userAgent === decodeToken.userAgent) {
        return true
      }
    } catch (err) {
      console.log(err)
      throw new HttpException({ msg: 'Token is invaild!' }, HttpStatus.OK)
    }
  }
}
