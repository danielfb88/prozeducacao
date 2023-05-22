import { Profile } from '@/domain/entities/profile.entity'
import { IUseCase } from '@/shared/interfaces'
import { ICacheService } from '@/shared/interfaces/cache-service.interface'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { IXlsReaderService } from '../../../shared/interfaces/xls-reader-service.interface'
import { EmailInUseError } from '../../errors/email-in-use.error'

export const CREATE_PROFILE_FROM_XLS_USE_CASE_RECEIVED =
  'domain.usecase.create-profile-from-xls.received'
export const CREATE_PROFILE_FROM_XLS_USE_CASE_SAVED = 'domain.usecase.create-profile-from-xls.saved'
export const CREATE_PROFILE_FROM_XLS_USE_CASE_ERROR = 'domain.usecase.create-profile-from-xls.error'

export class CreateProfileFromXlsUseCase
implements IUseCase<void> {
  constructor (
    readonly loggerService: ILoggerService,
    readonly cacheService: ICacheService,
    readonly repository: IProfileRepository,
    readonly xlsReaderService: IXlsReaderService
  ) {}

  async execute (): Promise<Profile> {
    this.loggerService.info(
      CREATE_PROFILE_FROM_XLS_USE_CASE_RECEIVED,
      CreateProfileFromXlsUseCase.name
    )

    try {
      const found = await this.repository.findByEmail(data.email)
      if (found) {
        throw new EmailInUseError(data.email)
      }

      const saved = await this.repository.save(data)
      await this.cacheService.set(saved.email, JSON.stringify(saved))

      this.loggerService.info(
        CREATE_PROFILE_FROM_XLS_USE_CASE_SAVED,
        CreateProfileFromXlsUseCase.name,
        saved
      )
      return saved
    } catch (error) {
      this.loggerService.error(
        CREATE_PROFILE_FROM_XLS_USE_CASE_ERROR,
        CreateProfileFromXlsUseCase.name,
        error
      )
    }
  }
}
