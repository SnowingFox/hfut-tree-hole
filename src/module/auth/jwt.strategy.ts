import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConstant } from '../../shared/constant/auth.constant'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstant.secret,
    })
  }

  async validate(payload: any) {
    const authToken = payload.authorization
    if (!authToken) {
      return false
    }
    const decodeToken = this.jwtService.verify(authToken)
    console.log(decodeToken)
    return payload
  }
}
