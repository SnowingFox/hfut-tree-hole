import type { TypeOrmModuleOptions } from '@nestjs/typeorm'

const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'hfut',
  autoLoadEntities: true,
  synchronize: true,
}

export const redisConfig = {
  url: 'redis://treehole:redis@localhost:6379',
}

export default databaseConfig
