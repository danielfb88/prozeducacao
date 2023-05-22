import { UpdateProfileDto } from '@/presentation/dto/update-profile.dto'
import { CivilStatusEnum } from '@/shared/enum/civil-status.enum'
import { GenderEnum } from '@/shared/enum/gender.enum'

export const getUpdateProfileDtoDummy = (): UpdateProfileDto => ({
  id: '3f14c945-251c-4387-b0ad-85f1df926881',
  name: 'any-name',
  civilStatus: CivilStatusEnum.CASADO,
  cpf: 'any-cpf',
  rg: 'any-rg',
  birthDate: '08/02/1988',
  gender: GenderEnum.MASCULINO
})
