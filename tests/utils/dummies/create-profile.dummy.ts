import { ICreateProfileParams } from '../../domain/interfaces/create-profile.params.interface'
import { GenderEnum } from '../../shared/enum/gender.enum'
import { CivilStatusEnum } from '../../shared/enum/civil-status.enum'

export const getCreateProfileParamsDummy = (): ICreateProfileParams => ({
  name: 'any-name',
  cpf: 'any-cpf',
  rg: 'any-rg',
  email: 'any-email',
  birthdate: new Date(),
  gender: GenderEnum.FEMININO,
  civil_status: CivilStatusEnum.CASADO
})
