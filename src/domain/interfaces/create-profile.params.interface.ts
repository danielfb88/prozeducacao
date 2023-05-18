import { GenderEnum } from '@/shared/enum/gender.enum'

export interface ICreateProfileParams {
  name: string
  email: string
  civilStatus: string
  cpf: string
  rg: string
  birthDate: Date
  gender: GenderEnum
}
