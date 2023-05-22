import { GenderEnum } from '@/shared/enum/gender.enum'
import { CivilStatusEnum } from '../../shared/enum/civil-status.enum'

export interface IUpdateProfileResponse {
  id: string
  name: string
  civilStatus: CivilStatusEnum
  cpf: string
  rg: string
  birthDate: Date
  gender: GenderEnum
}
