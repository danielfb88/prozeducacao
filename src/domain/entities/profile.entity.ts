import { GenderEnum } from '@/shared/enum/gender.enum'
import { ICreateProfileParams } from '../interfaces/create-profile.params.interface'
import { CivilStatusEnum } from '../../shared/enum/civil-status.enum'

export class Profile {
  id?: string

  name: string

  email: string

  civil_status: CivilStatusEnum

  cpf: string

  rg: string

  birthdate: Date

  gender: GenderEnum

  constructor (params: ICreateProfileParams) {
    Object.assign(this, params)
  }
}
