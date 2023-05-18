import { GenderEnum } from '@/shared/enum/gender.enum'
import { CivilStatusEnum } from '../../shared/enum/civil-status.enum'

export interface ICreateProfileResponse {
  name: string
  email: string
  civilStatus: CivilStatusEnum
  cpf: string
  rg: string
  birthDate: Date
  gender: GenderEnum
}
