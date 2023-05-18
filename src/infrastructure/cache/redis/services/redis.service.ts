import Redis from 'ioredis'
import { ICacheService } from '@/shared/interfaces'
import { CACHE_TTL } from '@/main/config/constants'

export class RedisService implements ICacheService {
  constructor (private readonly client: Redis) {}

  async set (key: string, value: string | number | Buffer): Promise<'OK'> {
    return this.client.set(key, value, 'EX', CACHE_TTL)
  }

  async get (key: string): Promise<string> {
    return this.client.get(key)
  }

  async quit (): Promise<'OK'> {
    return this.client.quit()
  }
}
