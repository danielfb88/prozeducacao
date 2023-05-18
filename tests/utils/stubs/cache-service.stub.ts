import { ICacheService } from 'src/shared/interfaces/cache-service.interface'

const stub = Object.freeze({
  get: jest.fn(),
  set: jest.fn(),
  quit: jest.fn()
})

export const cacheServiceStub = jest
  .fn()
  .mockReturnValue(stub) as () => ICacheService
