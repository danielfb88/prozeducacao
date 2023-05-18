import { redisClientStub } from '@/tests/utils/stubs/redis-client.stub'
import { RedisService } from './redis.service'
import Redis from 'ioredis'

describe('RedisService', () => {
  let client: Redis
  let service: RedisService

  beforeEach(() => {
    jest.clearAllMocks()

    client = redisClientStub()
    service = new RedisService(client)
  })

  it('should be definided', () => {
    expect(service).toBeDefined()
  })

  it('should execute method set', async () => {
    const clientSpyOn = jest.spyOn(client, 'set')
    await service.set('any-key', 'any-value')
    expect(clientSpyOn).toHaveBeenCalled()
  })

  it('should execute method get', async () => {
    const clientSpyOn = jest.spyOn(client, 'get')
    await service.get('any-key')
    expect(clientSpyOn).toHaveBeenCalled()
  })

  it('should execute method set', async () => {
    const clientSpyOn = jest.spyOn(client, 'set')
    await service.set('any-key', 'any-value')
    expect(clientSpyOn).toHaveBeenCalled()
  })

  it('should execute method quite', async () => {
    const clientSpyOn = jest.spyOn(client, 'quit')
    await service.quit()
    expect(clientSpyOn).toHaveBeenCalled()
  })
})
