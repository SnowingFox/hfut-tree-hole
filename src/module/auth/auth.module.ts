import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { jwtConstant } from '../../shared/constant/auth.constant'
import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [UserModule, JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: { expiresIn: '60s' },
  }), PassportModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
