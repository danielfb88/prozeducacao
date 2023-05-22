import { IUpdateProfileParams } from '@/domain/interfaces/update-profile.params.interface'
import { ICacheService, IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { getProfileEntityDummy } from '@/tests/utils/dummies/profile.entity.dummy'
import { getUpdateProfileParamDummy } from '@/tests/utils/dummies/update-profile.param.dummy'
import { cacheServiceStub } from '@/tests/utils/stubs/cache-service.stub'
import { loggerServiceStub } from '@/tests/utils/stubs/logger-service.stub'
import { profileRepositoryStub } from '@/tests/utils/stubs/profile-repository.stub'
import { UPDATE_PROFILE_USE_CASE_RECEIVED, UPDATE_PROFILE_USE_CASE_UPDATED, UpdateProfileUseCase } from './update-profile.use-case'

describe('UpdateProfileUseCase', () => {
  let useCase: IUseCase<any, any>
  let repository: IProfileRepository
  let logger: ILoggerService
  let cache: ICacheService

  const params: IUpdateProfileParams = getUpdateProfileParamDummy()

  beforeEach(() => {
    jest.clearAllMocks()

    repository = profileRepositoryStub()
    logger = loggerServiceStub()
    cache = cacheServiceStub()
    useCase = new UpdateProfileUseCase(logger, cache, repository)
  })

  it('should be definided', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should be able to call method update when method execute is executed', async () => {
    const repositorySpyOn = jest.spyOn(repository, 'update')
    const dummy = getProfileEntityDummy()
    jest.spyOn(repository, 'findById').mockResolvedValue(dummy)
    jest.spyOn(repository, 'update').mockResolvedValue(dummy)

    await useCase.execute(params)

    expect(repositorySpyOn).toHaveBeenCalled()
  })

  it('should be able to call method info from loggerService when method execute is executed ', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'info')
    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalledWith(
      UPDATE_PROFILE_USE_CASE_RECEIVED,
      UpdateProfileUseCase.name,
      params
    )
  })

  it('should be able to call method info from loggerService when method execute is executed with success', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'info')
    const result = {}
    jest.spyOn(repository, 'findById').mockResolvedValue(getProfileEntityDummy())
    jest.spyOn(repository, 'update').mockResolvedValue(result as any)
    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalledWith(
      UPDATE_PROFILE_USE_CASE_UPDATED,
      UpdateProfileUseCase.name,
      result
    )
  })

  it('should be able to call method error from loggerService when e-mail already exists', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'error')
    jest.spyOn(repository, 'findById').mockResolvedValue(undefined)

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalled()
  })

  it('should be able to call method error from loggerService when method execute is executed with error', async () => {
    const error = new Error()
    const loggerSpyOn = jest.spyOn(logger, 'error')
    jest.spyOn(repository, 'update').mockRejectedValue(error)

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalled()
  })
})
