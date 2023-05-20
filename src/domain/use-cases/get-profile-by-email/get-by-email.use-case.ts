import { Profile } from '@/domain/entities/profile.entity'
import { IUseCase } from '@/shared/interfaces'
import { ICacheService } from '@/shared/interfaces/cache-service.interface'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { IGetProfileByEmailParams } from '../../interfaces/get-profile-by-email.params.interface'

export const GET_PROFILE_BY_EMAIL_USE_CASE_RECEIVED =
  'domain.usecase.get-profile-by-email.received'
export const GET_PROFILE_BY_EMAIL_USE_CASE_FOUND = 'domain.usecase.get-profile-by-email.found'
export const GET_PROFILE_BY_EMAIL_USE_CASE_ERROR = 'domain.usecase.get-profile-by-email.error'

export class GetProfileByEmailUseCase
implements IUseCase<IGetProfileByEmailParams, void> {
  constructor (
    readonly loggerService: ILoggerService,
    readonly cacheService: ICacheService,
    readonly repository: IProfileRepository
  ) {}

  async execute (data: IGetProfileByEmailParams): Promise<Profile> {
    this.loggerService.info(
      GET_PROFILE_BY_EMAIL_USE_CASE_RECEIVED,
      GetProfileByEmailUseCase.name,
      data
    )

    try {
      const foundInCache = await this.cacheService.get(data.email) as string
      if (foundInCache) {
        const profile = JSON.parse(foundInCache)

        this.loggerService.info(
          GET_PROFILE_BY_EMAIL_USE_CASE_FOUND,
          GetProfileByEmailUseCase.name,
          foundInCache
        )

        return profile
      }

      const foundInDatabase = await this.repository.findByEmail(data.email)

      this.loggerService.info(
        GET_PROFILE_BY_EMAIL_USE_CASE_FOUND,
        GetProfileByEmailUseCase.name,
        foundInDatabase
      )

      return foundInDatabase
    } catch (error) {
      this.loggerService.error(
        GET_PROFILE_BY_EMAIL_USE_CASE_ERROR,
        GetProfileByEmailUseCase.name,
        error
      )
    }
  }
}
