import { IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IPlanilhaAlunosService } from '@/shared/interfaces/planila-alunos-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { IXlsReaderService } from '@/shared/interfaces/xls-reader-service.interface'
import { getProfileEntityDummy } from '@/tests/utils/dummies/profile.entity.dummy'
import { loggerServiceStub } from '@/tests/utils/stubs/logger-service.stub'
import { planilhaAlunosServiceStub } from '@/tests/utils/stubs/planilha-alunos-service.stub'
import { profileRepositoryStub } from '@/tests/utils/stubs/profile-repository.stub'
import { xlsReaderServiceStub } from '@/tests/utils/stubs/xls-reader-service.stub'
import { CreateProfileFromXlsUseCase } from './create-profile-from-xls.use-case'

describe('CreateProfileFromXlsUseCase', () => {
  let useCase: IUseCase<any, any>
  let repository: IProfileRepository
  let logger: ILoggerService
  let xlsReaderService: IXlsReaderService
  let planilhaAlunoService: IPlanilhaAlunosService

  beforeEach(() => {
    jest.clearAllMocks()

    repository = profileRepositoryStub()
    logger = loggerServiceStub()
    xlsReaderService = xlsReaderServiceStub()
    planilhaAlunoService = planilhaAlunosServiceStub()
    useCase = new CreateProfileFromXlsUseCase(logger, xlsReaderService, planilhaAlunoService, repository)
  })

  it('should be definided', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should be able to call method readFile when method execute is executed', async () => {
    jest.spyOn(xlsReaderService, 'readFile').mockResolvedValue({})
    jest.spyOn(planilhaAlunoService, 'extractAlunos').mockReturnValue([getProfileEntityDummy()])
    jest.spyOn(repository, 'findByEmail').mockResolvedValue(undefined)

    const repositorySpyOn = jest.spyOn(repository, 'save')

    await useCase.execute()

    expect(repositorySpyOn).toHaveBeenCalled()
  })

  it('should throw EmailInUseError if email exists in database', async () => {
    jest.spyOn(xlsReaderService, 'readFile').mockResolvedValue({})
    jest.spyOn(planilhaAlunoService, 'extractAlunos').mockReturnValue([getProfileEntityDummy()])
    jest.spyOn(repository, 'findByEmail').mockResolvedValue({} as any)

    const loggerSpyOn = jest.spyOn(logger, 'error')

    await useCase.execute()

    expect(loggerSpyOn).toHaveBeenCalled()
  })
})
