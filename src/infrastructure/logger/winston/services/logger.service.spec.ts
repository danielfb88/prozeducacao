import { LoggerService } from './logger.service'
import { loggerClientStub } from '@/tests/utils/stubs/logger-client.stub'
import winston from 'winston'

describe('LoggerService', () => {
  let logger: winston.Logger
  let service: LoggerService

  beforeEach(() => {
    jest.clearAllMocks()

    logger = loggerClientStub()
    service = new LoggerService(logger)
  })

  it('should be definided', () => {
    expect(service).toBeDefined()
  })

  it('should execute method error', async () => {
    const clientSpyOn = jest.spyOn(logger, 'error')
    await service.error('any-message', 'any-context', 'any-meta')
    expect(clientSpyOn).toHaveBeenCalled()
  })

  it('should execute method info', async () => {
    const clientSpyOn = jest.spyOn(logger, 'info')
    await service.info('any-message', 'any-context', 'any-meta')
    expect(clientSpyOn).toHaveBeenCalled()
  })

  it('should execute method warn', async () => {
    const clientSpyOn = jest.spyOn(logger, 'warn')
    await service.warn('any-message', 'any-context', 'any-meta')
    expect(clientSpyOn).toHaveBeenCalled()
  })

  it('should execute method debug', async () => {
    const clientSpyOn = jest.spyOn(logger, 'debug')
    await service.debug('any-message', 'any-context', 'any-meta')
    expect(clientSpyOn).toHaveBeenCalled()
  })

  it('should execute method verbose', async () => {
    const clientSpyOn = jest.spyOn(logger, 'verbose')
    await service.verbose('any-message', 'any-context', 'any-meta')
    expect(clientSpyOn).toHaveBeenCalled()
  })
})
