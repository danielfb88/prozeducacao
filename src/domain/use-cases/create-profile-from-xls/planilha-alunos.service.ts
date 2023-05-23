import { CivilStatusEnum } from '@/shared/enum/civil-status.enum'
import { GenderEnum } from '@/shared/enum/gender.enum'
import { IPlanilhaAlunosService } from '../../../shared/interfaces/planila-alunos-service.interface'
import { Profile } from '../../entities/profile.entity'

export class PlanilhaAlunosService implements IPlanilhaAlunosService {
  extractAlunos (xlsResult: any): Profile[] {
    const profileList: Profile[] = []
    const rows = xlsResult[0].data

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].length === 7 && rows[i][0] !== 'Nome do Aluno') {
        const profile = new Profile({
          name: rows[i][0],
          civilStatus: ((rows[i][1] as string).toUpperCase() as CivilStatusEnum),
          email: rows[i][2],
          cpf: rows[i][3],
          rg: rows[i][4],
          // birthDate: rows[i][5],
          birthDate: new Date(),
          gender: ((rows[i][6] as string).toUpperCase() as GenderEnum)
        })
        profileList.push(profile)
      }
    }

    return profileList
  }
}
