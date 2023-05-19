import { GenderEnum } from '@/shared/enum/gender.enum'
import { CivilStatusEnum } from '@/shared/enum/civil-status.enum'
import { ICreateProfileParams } from '../../domain/interfaces/create-profile.params.interface'

export const getCreateProfileParamDummy = (): ICreateProfileParams => ({
  name: 'any-name',
  email: 'any-email',
  civilStatus: CivilStatusEnum.CASADO,
  cpf: 'any-cpf',
  rg: 'any-rg',
  birthDate: new Date(),
  gender: GenderEnum.MASCULINO
})
