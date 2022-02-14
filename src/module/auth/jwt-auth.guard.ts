import { ExecutionContext, Inject, Injectable, PreconditionFailedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  @Inject()
  private readonly jwtStrategy: JwtStrategy

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>()
    const { headers } = request
    const result = await this.jwtStrategy.validate(headers)
    if (!result) {
      throw new PreconditionFailedException('Token verification failed!')
    }
    return true
  }
}
