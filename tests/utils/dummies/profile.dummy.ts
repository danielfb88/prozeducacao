import { Profile } from '@/domain/entities/profile.entity'
import { GenderEnum } from '../../shared/enum/gender.enum'
import { CivilStatusEnum } from '../../shared/enum/civil-status.enum'

export const getProfileDummy = (): Profile => ({
  name: 'any-name',
  email: 'any-email',
  civil_status: CivilStatusEnum.CASADO,
  cpf: 'any-cpf',
  rg: 'any-rg',
  birthdate: new Date(),
  gender: GenderEnum.MASCULINO
})
