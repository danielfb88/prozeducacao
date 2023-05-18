import { Profile } from '@/domain/entities/profile.entity'
import { ICacheService } from '@/shared/interfaces/cache-service.interface'
import { ICreateProfileParams } from '@/domain/interfaces/create-profile.params.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IUseCase } from '@/shared/interfaces'

export const CREATE_PROFILE_USE_CASE_RECEIVED =
  'domain.usecase.create-profile.received'
export const CREATE_PROFILE_USE_CASE_SAVED = 'domain.usecase.create-profile.saved'
export const CREATE_PROFILE_USE_CASE_ERROR = 'domain.usecase.create-profile.error'

export class CreateProfileUseCase
implements IUseCase<ICreateProfileParams, void> {
  constructor (
    readonly loggerService: ILoggerService,
    readonly cacheService: ICacheService,
    readonly repository: IProfileRepository
  ) {}

  async execute (data: ICreateProfileParams): Promise<Profile> {
    this.loggerService.info(
      CREATE_PROFILE_USE_CASE_RECEIVED,
      CreateProfileUseCase.name,
      data
    )

    try {
      const saved = await this.repository.save(data)
      await this.cacheService.set(saved.id, JSON.stringify(saved))

      this.loggerService.info(
        CREATE_PROFILE_USE_CASE_SAVED,
        CreateProfileUseCase.name,
        data
      )
      return saved
    } catch (error) {
      this.loggerService.error(
        CREATE_PROFILE_USE_CASE_ERROR,
        CreateProfileUseCase.name,
        error
      )
    }
  }
}
