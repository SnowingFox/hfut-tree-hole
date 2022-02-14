import { Module } from '@nestjs/common'
import { RedisService } from './redis.service'

@Module({ providers: [RedisService], exports: [RedisService] })
export class RedisModule {
  // static registry(options: RedisOptions = {}): DynamicModule {
  //   return {
  //     module: RedisModule,
  //     providers: [
  //       {
  //         provide: REDIS_INJECT_KEY,
  //         useValue: options,
  //       },
  //       RedisService,
  //     ],
  //     exports: [RedisService],
  //   }
  // }
}
