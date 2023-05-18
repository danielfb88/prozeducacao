import { IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { loggerServiceStub } from '@/tests/utils/stubs/logger-service.stub'
import { HealthCheckUseCase } from './health-check.use-case'

describe('HealthGetByUseCase', () => {
  let useCase: IUseCase<any, any>
  let logger: ILoggerService

  beforeEach(() => {
    jest.clearAllMocks()

    logger = loggerServiceStub()
    useCase = new HealthCheckUseCase(logger)
  })

  it('should be definided', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should be able to call method save when method execute is executed', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'debug')
    await useCase.execute()

    expect(loggerSpyOn).toHaveBeenCalled()
  })
})
