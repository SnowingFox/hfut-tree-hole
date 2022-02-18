import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { jwtConstant } from '../../shared/constant/auth.constant'
import { RedisService } from '../redis/redis.service'
import { RedisModule } from '../redis/redis.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [PassportModule, RedisModule, JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: { expiresIn: '0' },
  })],
  providers: [AuthService, JwtStrategy, RedisService],
  controllers: [AuthController],
  exports: [JwtStrategy],
})
export class AuthModule {}
