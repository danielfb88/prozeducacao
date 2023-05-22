import { Profile } from '@/domain/entities/profile.entity'
import { IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { IXlsReaderService } from '../../../shared/interfaces/xls-reader-service.interface'
import { EmailInUseError } from '../../errors/email-in-use.error'
import { IPlanilhaAlunosService } from '../../interfaces/planila-alunos-service.interface'

export const CREATE_PROFILE_FROM_XLS_USE_CASE_RECEIVED =
  'domain.usecase.create-profile-from-xls.received'
export const CREATE_PROFILE_FROM_XLS_USE_CASE_SAVED = 'domain.usecase.create-profile-from-xls.saved'
export const CREATE_PROFILE_FROM_XLS_USE_CASE_ERROR = 'domain.usecase.create-profile-from-xls.error'

export class CreateProfileFromXlsUseCase
implements IUseCase<void> {
  constructor (
    readonly loggerService: ILoggerService,
    readonly xlsReaderService: IXlsReaderService,
    readonly planilhaAlunosService: IPlanilhaAlunosService,
    readonly repository: IProfileRepository
  ) {}

  async execute (): Promise<Profile[]> {
    this.loggerService.info(
      CREATE_PROFILE_FROM_XLS_USE_CASE_RECEIVED,
      CreateProfileFromXlsUseCase.name
    )

    try {
      const result = await this.xlsReaderService.readFile('planilha_alunos.xlsx')
      const profileList = this.planilhaAlunosService.extractAlunos(result)

      const savedList: Profile[] = []

      for (const profile of profileList) {
        const found = await this.repository.findByEmail(profile.email)
        if (found) {
          throw new EmailInUseError(profile.email)
        }

        const saved = await this.repository.save(profile)
        savedList.push(saved)

        this.loggerService.info(
          CREATE_PROFILE_FROM_XLS_USE_CASE_SAVED,
          CreateProfileFromXlsUseCase.name,
          saved
        )
      }

      return savedList
    } catch (error) {
      this.loggerService.error(
        CREATE_PROFILE_FROM_XLS_USE_CASE_ERROR,
        CreateProfileFromXlsUseCase.name,
        error
      )
    }
  }
}
