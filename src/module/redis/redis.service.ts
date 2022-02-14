import { Inject, Injectable } from '@nestjs/common'
import { createClient } from 'redis'
import { RedisClientType } from '@node-redis/client/dist/lib/client'
import { REDIS_INJECT_KEY } from './redis.constant'

@Injectable()
export class RedisService {
  private client: RedisClientType<any, any>
  constructor() {
    this.init()
  }

  private async init(): Promise<void> {
    const client = createClient()

    client.on('error', err => console.log('Redis Client Error', err))

    await client.connect()

    await client.set('key', 'value')
    const value = await client.get('key')
    this.client = client
  }

  public async setKey(key: string, val: any) {
    return await this.client.set(key, val)
  }

  public async getKey(key: string) {
    return await this.client.get(key)
  }
}
