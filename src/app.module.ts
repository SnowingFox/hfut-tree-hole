import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './module/user/user.module'
import { AuthModule } from './module/auth/auth.module'
import databaseConfig from './config/database.config'

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
