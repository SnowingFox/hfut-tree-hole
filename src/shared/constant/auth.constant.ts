import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface'

export const jwtConstant: JwtModuleOptions = {
  secret: 'HFUT-TREE-HOLE',
  signOptions: {
    expiresIn: '1800s',
  },
}
