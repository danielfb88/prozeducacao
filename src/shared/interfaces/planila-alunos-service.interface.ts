import { Profile } from '@/domain/entities/profile.entity'

export interface IPlanilhaAlunosService {
  extractAlunos: (xlsResult: any) => Profile[]
}
