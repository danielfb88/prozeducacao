import { GenderEnum } from '@/shared/enum/gender.enum'

export interface ICreateProfileParams {
  name: string
  email: string
  civil_status: string
  cpf: string
  rg: string
  birthdate: Date
  gender: GenderEnum
}
