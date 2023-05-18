import Redis from 'ioredis'

const stub = Object.freeze({
  set: jest.fn(),
  get: jest.fn(),
  quit: jest.fn()
})

export const redisClientStub = jest
  .fn()
  .mockReturnValue(stub) as () => Redis
