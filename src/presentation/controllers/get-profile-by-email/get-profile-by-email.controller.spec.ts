import { IUseCase } from '@/shared/interfaces'
import { getProfileEntityDummy } from '@/tests/utils/dummies/profile.entity.dummy'
import { useCaseStub } from '@/tests/utils/stubs/use-case.stub'
import { GetProfileByEmailDto } from '../../dto/get-profile-by-email.dto'
import { GetProfileByEmailController } from './get-profile-by-email.controller'

describe('GetProfileByEmailController', () => {
  let controller: GetProfileByEmailController
  let useCase: IUseCase<any, any>

  const dto: GetProfileByEmailDto = { email: 'any-email' }

  beforeEach(() => {
    jest.clearAllMocks()

    useCase = useCaseStub()
    controller = new GetProfileByEmailController(useCase)
  })

  it('should be definided', () => {
    expect(controller).toBeDefined()
  })

  it('should be defined method handle', () => {
    expect(controller.handle).toBeDefined()
  })

  it('should be able to call method execute when method handle is executed', async () => {
    jest.spyOn(useCase, 'execute').mockResolvedValue(getProfileEntityDummy())
    const useCaseSpyOn = jest.spyOn(useCase, 'execute')
    await controller.handle(dto)

    expect(useCaseSpyOn).toHaveBeenCalled()
  })

  it('should catch an error came from use-case', async () => {
    const error = new Error()
    jest.spyOn(useCase, 'execute').mockResolvedValue(undefined)

    const response = await controller.handle(dto)

    expect(response.statusCode).toEqual(204)
  })
})
