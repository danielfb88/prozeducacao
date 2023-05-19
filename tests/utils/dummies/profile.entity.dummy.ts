import { GenderEnum } from '@/shared/enum/gender.enum'
import { CivilStatusEnum } from '@/shared/enum/civil-status.enum'
import { Profile } from '../../infrastructure/orm/typeorm/postgres/entities/profile.entity'

export const getProfileEntityDummy = (): Profile => ({
  id: 'any-id',
  name: 'any-name',
  email: 'any-email',
  civilStatus: CivilStatusEnum.CASADO,
  cpf: 'any-cpf',
  rg: 'any-rg',
  birthDate: new Date(),
  gender: GenderEnum.MASCULINO,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
