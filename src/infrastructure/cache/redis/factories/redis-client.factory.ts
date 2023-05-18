import { CACHE_PASSWORD, CACHE_URL } from '@/main/config'
import Redis from 'ioredis'

export const getRedisClient = (): Redis => {
  return new Redis({
    host: CACHE_URL,
    password: CACHE_PASSWORD
  })
}
