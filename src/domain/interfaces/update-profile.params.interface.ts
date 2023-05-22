import { GenderEnum } from '@/shared/enum/gender.enum'
import { CivilStatusEnum } from '../../shared/enum/civil-status.enum'

export interface IUpdateProfileParams {
  id: string
  name: string
  civilStatus: CivilStatusEnum
  cpf: string
  rg: string
  birthDate: Date
  gender: GenderEnum
}
