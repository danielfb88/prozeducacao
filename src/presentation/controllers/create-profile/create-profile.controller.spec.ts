import { IUseCase } from '@/shared/interfaces'
import { useCaseStub } from '@/tests/utils/stubs/use-case.stub'
import { CreateProfileController } from './create-profile.controller'
import { CreateProfileDto } from '../../dto/create-profile.dto'
import { getCreateProfileDtoDummy } from '@/tests/utils/dummies/create-profile.dto.dummy'

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
    const useCaseSpyOn = jest.spyOn(useCase, 'execute')
    await controller.handle(dto)

    expect(useCaseSpyOn).toHaveBeenCalled()
  })
})
