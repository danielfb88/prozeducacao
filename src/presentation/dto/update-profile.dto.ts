import { IsEnum, IsString, IsUUID, MaxLength, MinLength } from 'class-validator'
import { CivilStatusEnum } from '../../shared/enum/civil-status.enum'
import { GenderEnum } from '../../shared/enum/gender.enum'
import { DateValidator } from '../decorators/date-validator.decorator'

export class UpdateProfileDto {
  @IsUUID()
  id: string

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  name: string

  @IsEnum(CivilStatusEnum)
  civilStatus: CivilStatusEnum

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  cpf: string

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  rg: string

  @DateValidator()
  birthDate: string

  @IsEnum(GenderEnum)
  gender: GenderEnum
}
