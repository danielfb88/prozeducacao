import { parse } from 'date-fns'
import { Mapper } from '../../shared/interfaces'
import { UpdateProfileDto } from '../dto/update-profile.dto'
import { IUpdateProfileResponse } from '../interfaces/update-profile.response.interface'

export class UpdateProfileMapper
implements
    Mapper<UpdateProfileDto, IUpdateProfileResponse> {
  map (value: UpdateProfileDto): IUpdateProfileResponse {
    return {
      id: value.id,
      name: value.name,
      civilStatus: value.civilStatus,
      cpf: value.cpf,
      rg: value.rg,
      birthDate: parse(value.birthDate, 'dd/MM/yyyy', new Date()),
      gender: value.gender
    }
  }
}
