import { IsEnum, IsString, MaxLength, MinLength } from 'class-validator'
import { DateValidator } from '../decorators/date-validator.decorator'
import { CivilStatusEnum } from '../../shared/enum/civil-status.enum'
import { GenderEnum } from '../../shared/enum/gender.enum'

export class CreateProfileDto {
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  name: string

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  email: string

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
