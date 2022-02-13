import { ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly jwtStrategy: JwtStrategy,
  ) { super() }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>()
    const { headers } = request
    await this.jwtStrategy.validate(headers)
    return true
  }
}
