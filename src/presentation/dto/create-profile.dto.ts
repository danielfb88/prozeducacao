import { IsString, MaxLength, MinLength } from 'class-validator'
import { Match } from '../decorators/match.decorator'
import { DateValidator } from '../decorators/date-validator.decorator'

export class CreateProfileDto {
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  name: string

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  email: string

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  civilStatus: string

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  cpf: string

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  rg: string

  @DateValidator()
  birthdate: Date

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  gender: string
}
