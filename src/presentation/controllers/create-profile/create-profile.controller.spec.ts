import { IUseCase } from '@/shared/interfaces'
import { getCreateProfileDtoDummy } from '@/tests/utils/dummies/create-profile.dto.dummy'
import { getProfileEntityDummy } from '@/tests/utils/dummies/profile.entity.dummy'
import { useCaseStub } from '@/tests/utils/stubs/use-case.stub'
import { CreateProfileDto } from '../../dto/create-profile.dto'
import { CreateProfileController } from './create-profile.controller'

describe('CreateProfileController', () => {
  let controller: CreateProfileController
  let useCase: IUseCase<any, any>

  const dto: CreateProfileDto = getCreateProfileDtoDummy()

  beforeEach(() => {
    jest.clearAllMocks()

    useCase = useCaseStub()
    controller = new CreateProfileController(useCase)
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
