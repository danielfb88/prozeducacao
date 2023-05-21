import { IsUUID } from 'class-validator'

export class DeleteProfileByIdDto {
  @IsUUID()
  id: string
}
