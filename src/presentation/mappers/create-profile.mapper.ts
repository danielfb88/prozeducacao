import { Mapper } from '../../shared/interfaces'
import { CreateProfileDto } from '../dto/create-profile.dto'
import { parse } from 'date-fns'
import { ICreateProfileResponse } from '../interfaces/create-profile.response.interface'

export class CreateProfileMapper
implements
    Mapper<CreateProfileDto, ICreateProfileResponse> {
  map (value: CreateProfileDto): ICreateProfileResponse {
    return {
      name: value.name,
      email: value.email,
      civilStatus: value.civilStatus,
      cpf: value.cpf,
      rg: value.rg,
      birthDate: parse(value.birthDate, 'dd/MM/yyyy', new Date()),
      gender: value.gender
    }
  }
}
