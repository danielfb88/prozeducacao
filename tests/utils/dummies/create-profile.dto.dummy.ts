import { GenderEnum } from '@/shared/enum/gender.enum'
import { CivilStatusEnum } from '@/shared/enum/civil-status.enum'
import { CreateProfileDto } from '@/presentation/dto/create-profile.dto'

export const getCreateProfileDtoDummy = (): CreateProfileDto => ({
  name: 'any-name',
  email: 'any-email',
  civilStatus: CivilStatusEnum.CASADO,
  cpf: 'any-cpf',
  rg: 'any-rg',
  birthDate: '08/02/1988',
  gender: GenderEnum.MASCULINO
})
