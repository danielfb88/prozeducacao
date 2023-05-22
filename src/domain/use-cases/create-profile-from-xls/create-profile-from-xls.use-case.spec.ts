import { IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'
import { IProfileRepository } from '@/shared/interfaces/profile-repository.interface'
import { IXlsReaderService } from '@/shared/interfaces/xls-reader-service.interface'
import { loggerServiceStub } from '@/tests/utils/stubs/logger-service.stub'
import { profileRepositoryStub } from '@/tests/utils/stubs/profile-repository.stub'
import { getXlsReaderService } from '../../../infrastructure/xls-reader/factories/xls-reader-service.factory'
import { IPlanilhaAlunosService } from '../../interfaces/planila-alunos-service.interface'
import { CreateProfileFromXlsUseCase } from './create-profile-from-xls.use-case'
import { PlanilhaAlunosService } from './planilha-alunos.service'

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
    xlsReaderService = getXlsReaderService()
    planilhaAlunoService = new PlanilhaAlunosService()
    useCase = new CreateProfileFromXlsUseCase(logger, xlsReaderService, planilhaAlunoService, repository)
  })

  it('should be definided', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should be able to call method readFile when method execute is executed', async () => {
    // const repositorySpyOn = jest.spyOn(repository, 'save')
    // jest.spyOn(repository, 'findByEmail').mockResolvedValue(undefined)
    // jest.spyOn(repository, 'save').mockResolvedValue(getProfileEntityDummy())

    await useCase.execute()

    // expect(repositorySpyOn).toHaveBeenCalled()
  })
})
