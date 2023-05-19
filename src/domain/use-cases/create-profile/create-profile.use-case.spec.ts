import { ICreateProfileParams } from '@/domain/interfaces/create-profile.params.interface'
import { ICacheService, IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { getCreateProfileParamDummy } from '@/tests/utils/dummies/create-profile.param.dummy'
import { getProfileEntityDummy } from '@/tests/utils/dummies/profile.entity.dummy'
import { cacheServiceStub } from '@/tests/utils/stubs/cache-service.stub'
import { loggerServiceStub } from '@/tests/utils/stubs/logger-service.stub'
import { profileRepositoryStub } from '@/tests/utils/stubs/profile-repository.stub'
import { CREATE_PROFILE_USE_CASE_RECEIVED, CREATE_PROFILE_USE_CASE_SAVED, CreateProfileUseCase } from './create-profile.use-case'

describe('CreateProfileUseCase', () => {
  let useCase: IUseCase<any, any>
  let repository: IProfileRepository
  let logger: ILoggerService
  let cache: ICacheService

  const params: ICreateProfileParams = getCreateProfileParamDummy()

  beforeEach(() => {
    jest.clearAllMocks()

    repository = profileRepositoryStub()
    logger = loggerServiceStub()
    cache = cacheServiceStub()
    useCase = new CreateProfileUseCase(logger, cache, repository)
  })

  it('should be definided', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should be able to call method save when method execute is executed', async () => {
    const repositorySpyOn = jest.spyOn(repository, 'save')
    jest.spyOn(repository, 'findByEmail').mockResolvedValue(undefined)
    jest.spyOn(repository, 'save').mockResolvedValue(getProfileEntityDummy())

    await useCase.execute(params)

    expect(repositorySpyOn).toHaveBeenCalled()
  })

  it('should be able to call method info from loggerService when method execute is executed ', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'info')
    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalledWith(
      CREATE_PROFILE_USE_CASE_RECEIVED,
      CreateProfileUseCase.name,
      params
    )
  })

  it('should be able to call method info from loggerService when method execute is executed with success', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'info')
    const result = {}
    jest.spyOn(repository, 'save').mockResolvedValue(result as any)
    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalledWith(
      CREATE_PROFILE_USE_CASE_SAVED,
      CreateProfileUseCase.name,
      result
    )
  })

  it('should be able to call method error from loggerService when e-mail already exists', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'error')
    jest.spyOn(repository, 'findByEmail').mockResolvedValue(getProfileEntityDummy())

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalled()
  })

  it('should be able to call method error from loggerService when method execute is executed with error', async () => {
    const error = new Error()
    const loggerSpyOn = jest.spyOn(logger, 'error')
    jest.spyOn(repository, 'save').mockRejectedValue(error)

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalled()
  })
})
