import { IPlanilhaAlunosService } from '@/shared/interfaces/planila-alunos-service.interface'

const stub = Object.freeze({
  extractAlunos: jest.fn()
})

export const planilhaAlunosServiceStub = jest
  .fn()
  .mockReturnValue(stub) as () => IPlanilhaAlunosService
