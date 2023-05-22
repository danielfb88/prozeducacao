import { Profile } from '@/domain/entities/profile.entity'
import { IUseCase } from '@/shared/interfaces'
import { ICacheService } from '@/shared/interfaces/cache-service.interface'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { NotFoundError } from '../../errors/not-found.error'
import { IUpdateProfileParams } from '../../interfaces/update-profile.params.interface'

export const UPDATE_PROFILE_USE_CASE_RECEIVED =
  'domain.usecase.update-profile.received'
export const UPDATE_PROFILE_USE_CASE_UPDATED = 'domain.usecase.update-profile.updated'
export const UPDATE_PROFILE_USE_CASE_ERROR = 'domain.usecase.update-profile.error'

export class UpdateProfileUseCase
implements IUseCase<IUpdateProfileParams, void> {
  constructor (
    readonly loggerService: ILoggerService,
    readonly cacheService: ICacheService,
    readonly repository: IProfileRepository
  ) {}

  async execute (data: IUpdateProfileParams): Promise<Profile> {
    this.loggerService.info(
      UPDATE_PROFILE_USE_CASE_RECEIVED,
      UpdateProfileUseCase.name,
      data
    )

    try {
      const found = await this.repository.findById(data.id)
      if (!found) {
        throw new NotFoundError(data.id)
      }

      const updated = await this.repository.update(data)
      await this.cacheService.set(updated.email, JSON.stringify(updated))

      this.loggerService.info(
        UPDATE_PROFILE_USE_CASE_UPDATED,
        UpdateProfileUseCase.name,
        updated
      )
      return updated
    } catch (error) {
      this.loggerService.error(
        UPDATE_PROFILE_USE_CASE_ERROR,
        UpdateProfileUseCase.name,
        error
      )
    }
  }
}
