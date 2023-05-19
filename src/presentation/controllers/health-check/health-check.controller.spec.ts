import { IUseCase } from '@/shared/interfaces'
import { useCaseStub } from '@/tests/utils/stubs/use-case.stub'
import { HealthCheckController } from './health-check.controller'

describe('HealthCheckController', () => {
  let controller: HealthCheckController
  let useCase: IUseCase<any, any>

  beforeEach(() => {
    jest.clearAllMocks()

    useCase = useCaseStub()
    controller = new HealthCheckController(useCase)
  })

  it('should be definided', () => {
    expect(controller).toBeDefined()
  })

  it('should be defined method handle', () => {
    expect(controller.handle).toBeDefined()
  })

  it('should be able to call method execute when method handle is executed', async () => {
    const useCaseSpyOn = jest.spyOn(useCase, 'execute')
    await controller.handle()

    expect(useCaseSpyOn).toHaveBeenCalled()
  })
})
