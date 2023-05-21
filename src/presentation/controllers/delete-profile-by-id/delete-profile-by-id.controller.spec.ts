import { IUseCase } from '@/shared/interfaces'
import { useCaseStub } from '@/tests/utils/stubs/use-case.stub'
import { DeleteProfileByIdDto } from '../../dto/delete-profile-by-id.dto'
import { DeleteProfileByIdController } from './delete-profile-by-id.controller'

describe('DeleteProfileByIdController', () => {
  let controller: DeleteProfileByIdController
  let useCase: IUseCase<any, any>

  const dto: DeleteProfileByIdDto = { id: 'ae093890-421a-41bd-beaa-41645b3f5314' }

  beforeEach(() => {
    jest.clearAllMocks()

    useCase = useCaseStub()
    controller = new DeleteProfileByIdController(useCase)
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
