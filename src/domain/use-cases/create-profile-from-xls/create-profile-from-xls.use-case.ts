import { Profile } from '@/domain/entities/profile.entity'
import { IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { IXlsReaderService } from '../../../shared/interfaces/xls-reader-service.interface'

export const CREATE_PROFILE_FROM_XLS_USE_CASE_RECEIVED =
  'domain.usecase.create-profile-from-xls.received'
export const CREATE_PROFILE_FROM_XLS_USE_CASE_SAVED = 'domain.usecase.create-profile-from-xls.saved'
export const CREATE_PROFILE_FROM_XLS_USE_CASE_ERROR = 'domain.usecase.create-profile-from-xls.error'

export class CreateProfileFromXlsUseCase
implements IUseCase<void> {
  constructor (
    readonly loggerService: ILoggerService,
    readonly xlsReaderService: IXlsReaderService,
    readonly repository: IProfileRepository
  ) {}

  async execute (): Promise<Profile> {
    this.loggerService.info(
      CREATE_PROFILE_FROM_XLS_USE_CASE_RECEIVED,
      CreateProfileFromXlsUseCase.name
    )

    try {
      // extract xls data
      const result = await this.xlsReaderService.readFile('planilha_alunos.xlsx')

      // check if exists
      // const found = await this.repository.findByEmail(data.email)
      // if (found) {
      //   throw new EmailInUseError(data.email)
      // }

      // save
      // const saved = await this.repository.save(data)

      this.loggerService.info(
        CREATE_PROFILE_FROM_XLS_USE_CASE_SAVED,
        CreateProfileFromXlsUseCase.name,
        /* saved */
        {}
      )

      // return array saved
      return {} as any
    } catch (error) {
      this.loggerService.error(
        CREATE_PROFILE_FROM_XLS_USE_CASE_ERROR,
        CreateProfileFromXlsUseCase.name,
        error
      )
    }
  }
}
