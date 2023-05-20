import { ICacheService, IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { getProfileEntityDummy } from '@/tests/utils/dummies/profile.entity.dummy'
import { cacheServiceStub } from '@/tests/utils/stubs/cache-service.stub'
import { loggerServiceStub } from '@/tests/utils/stubs/logger-service.stub'
import { profileRepositoryStub } from '@/tests/utils/stubs/profile-repository.stub'
import { IGetProfileByEmailParams } from '../../interfaces/get-profile-by-email.params.interface'
import { GetProfileByEmailUseCase } from './get-by-email.use-case'

describe('GetProfileByEmailUseCase', () => {
  let useCase: IUseCase<any, any>
  let repository: IProfileRepository
  let logger: ILoggerService
  let cache: ICacheService

  const params: IGetProfileByEmailParams = {
    email: 'any-email'
  }

  beforeEach(() => {
    jest.clearAllMocks()

    repository = profileRepositoryStub()
    logger = loggerServiceStub()
    cache = cacheServiceStub()
    useCase = new GetProfileByEmailUseCase(logger, cache, repository)
  })

  it('should be definided', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should be able to call method findByEmail when method execute is executed', async () => {
    const loggerSpyOn = jest.spyOn(logger, 'info')
    jest.spyOn(cache, 'get').mockResolvedValue(undefined)
    jest.spyOn(repository, 'findByEmail').mockResolvedValue(getProfileEntityDummy())

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalled()
  })

  it('should be able to get object by cache when method execute is executed', async () => {
    const profileDummy = getProfileEntityDummy()
    const profileDummyCached = JSON.stringify(profileDummy)

    const loggerSpyOn = jest.spyOn(logger, 'info')
    jest.spyOn(cache, 'get').mockResolvedValue(profileDummyCached)

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalled()
  })

  it('should be able to call method error from loggerService when method execute is executed with error', async () => {
    jest.spyOn(cache, 'get').mockResolvedValue(undefined)

    const error = new Error()
    const loggerSpyOn = jest.spyOn(logger, 'error')
    jest.spyOn(repository, 'findByEmail').mockRejectedValue(error)

    await useCase.execute(params)

    expect(loggerSpyOn).toHaveBeenCalled()
  })
})
