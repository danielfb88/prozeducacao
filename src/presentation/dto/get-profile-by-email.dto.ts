import { IsString, MaxLength, MinLength } from 'class-validator'

export class GetProfileByEmailDto {
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  email: string
}
