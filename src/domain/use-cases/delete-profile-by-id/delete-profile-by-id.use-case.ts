import { ICacheService, IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { NotFoundError } from '../../errors/not-found.error'

export const DELETE_PROFILE_BY_ID_USE_CASE_RECEIVED =
  'domain.usecase.delete-profile-by-id.received'
export const DELETE_PROFILE_BY_ID_USE_CASE_DELETED = 'domain.usecase.delete-profile-by-id.deleted'
export const DELETE_PROFILE_BY_ID_USE_CASE_ERROR = 'domain.usecase.delete-profile-by-id.error'

export class DeleteProfileByIdUseCase
implements IUseCase<{ id: string }, void> {
  constructor (
    readonly loggerService: ILoggerService,
    readonly cacheService: ICacheService,
    readonly repository: IProfileRepository
  ) {}

  async execute (data: { id: string }): Promise<void> {
    this.loggerService.info(
      DELETE_PROFILE_BY_ID_USE_CASE_RECEIVED,
      DeleteProfileByIdUseCase.name,
      data
    )

    try {
      const found = await this.repository.findById(data.id)
      if (!found) {
        throw new NotFoundError('Profile not found')
      }

      await this.repository.delete(data.id)
      await this.cacheService.set(found.email, undefined)

      this.loggerService.info(
        DELETE_PROFILE_BY_ID_USE_CASE_DELETED,
        DeleteProfileByIdUseCase.name,
        data.id
      )
    } catch (error) {
      this.loggerService.error(
        DELETE_PROFILE_BY_ID_USE_CASE_ERROR,
        DeleteProfileByIdUseCase.name,
        error
      )
    }
  }
}
