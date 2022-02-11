import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './app/user/user.module'
import databaseConfig from './config/database.config'

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
