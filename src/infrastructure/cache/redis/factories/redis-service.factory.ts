import { ICacheService } from '@/shared/interfaces'
import { RedisService } from '../services/redis.service'
import { getRedisClient } from './redis-client.factory'

export const getRedisService = (): ICacheService => {
  return new RedisService(getRedisClient())
}
