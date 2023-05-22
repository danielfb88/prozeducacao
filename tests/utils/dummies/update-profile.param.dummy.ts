import { CivilStatusEnum } from '@/shared/enum/civil-status.enum'
import { GenderEnum } from '@/shared/enum/gender.enum'
import { IUpdateProfileParams } from '../../domain/interfaces/update-profile.params.interface'

export const getUpdateProfileParamDummy = (): IUpdateProfileParams => ({
  id: '3f14c945-251c-4387-b0ad-85f1df926881',
  name: 'any-name',
  civilStatus: CivilStatusEnum.CASADO,
  cpf: 'any-cpf',
  rg: 'any-rg',
  birthDate: new Date(),
  gender: GenderEnum.MASCULINO
})
