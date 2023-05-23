import { PlanilhaAlunosService } from './planilha-alunos.service'

describe('PlanilhaAlunosService', () => {
  let service: PlanilhaAlunosService
  const xlsResultDummy = [{ data: [['','','','','','','']] }]

  beforeEach(() => {
    jest.clearAllMocks()

    service = new PlanilhaAlunosService()
  })

  it('should be definided', () => {
    expect(service).toBeDefined()
  })

  it('should be defined method extractAlunos', () => {
    expect(service.extractAlunos).toBeDefined()
  })

  it('should be able to process when method extractAlunos is executed', async () => {
    const result = await service.extractAlunos(xlsResultDummy)

    expect(result.length).toBe(1)
  })
})
