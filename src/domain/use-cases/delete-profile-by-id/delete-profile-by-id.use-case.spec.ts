import { ICacheService, IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { getProfileEntityDummy } from '@/tests/utils/dummies/profile.entity.dummy'
import { cacheServiceStub } from '@/tests/utils/stubs/cache-service.stub'
import { loggerServiceStub } from '@/tests/utils/stubs/logger-service.stub'
import { profileRepositoryStub } from '@/tests/utils/stubs/profile-repository.stub'
import { DELETE_PROFILE_BY_ID_USE_CASE_DELETED, DeleteProfileByIdUseCase } from './delete-profile-by-id.use-case'

describe('DeleteProfileByIdUseCase', () => {
  let useCase: IUseCase<any, any>
  let repository: IProfileRepository
  let logger: ILoggerService
  let cache: ICacheService

  const params = {
    id: 'any-id'
  }

  beforeEach(() => {
    jest.clearAllMocks()

    repository = profileRepositoryStub()
    logger = loggerServiceStub()
    cache = cacheServiceStub()
    useCase = new DeleteProfileByIdUseCase(logger, cache, repository)
  })

  it('should be definided', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should be able to call method delete when method execute is executed', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'info')
    jest.spyOn(repository, 'findById').mockResolvedValue(getProfileEntityDummy())

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalledWith(
      DELETE_PROFILE_BY_ID_USE_CASE_DELETED,
      DeleteProfileByIdUseCase.name,
      params.id
    )
  })

  it('should shows error log if profile not found', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'info')
    jest.spyOn(repository, 'findById').mockResolvedValue(undefined)

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalled()
  })
})
