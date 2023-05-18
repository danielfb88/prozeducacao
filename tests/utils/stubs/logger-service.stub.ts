import { ILoggerService } from 'src/shared/interfaces/logger-service.interface'

const stub = Object.freeze({
  error: jest.fn(),
  info: jest.fn(),
  log: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
  verbose: jest.fn(),
  setLogLevels: jest.fn(),
  alert: jest.fn()
})

export const loggerServiceStub = jest
  .fn()
  .mockReturnValue(stub) as () => ILoggerService
