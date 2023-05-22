import { IUseCase } from '@/shared/interfaces'
import { getProfileEntityDummy } from '@/tests/utils/dummies/profile.entity.dummy'
import { getUpdateProfileDtoDummy } from '@/tests/utils/dummies/update-profile.dto.dummy'
import { useCaseStub } from '@/tests/utils/stubs/use-case.stub'
import { UpdateProfileDto } from '../../dto/update-profile.dto'
import { UpdateProfileController } from './update-profile.controller'

describe('UpdateProfileController', () => {
  let controller: UpdateProfileController
  let useCase: IUseCase<any, any>

  const dto: UpdateProfileDto = getUpdateProfileDtoDummy()

  beforeEach(() => {
    jest.clearAllMocks()

    useCase = useCaseStub()
    controller = new UpdateProfileController(useCase)
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
