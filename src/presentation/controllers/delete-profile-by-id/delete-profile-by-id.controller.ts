import { RestInputValidator } from '@/presentation/decorators/rest-input-validator.decorator'
import { IUseCase } from '@/shared/interfaces'
import { IHttpResponse } from '../../../shared/interfaces/http-response.interface'
import { DeleteProfileByIdDto } from '../../dto/delete-profile-by-id.dto'
import { ok } from '../../helpers/http-helper'

export class DeleteProfileByIdController {
  constructor (
    private readonly useCase: IUseCase<{id: string}>
  ) {}

  @RestInputValidator(DeleteProfileByIdDto)
  async handle (input: DeleteProfileByIdDto): Promise<IHttpResponse> {
    await this.useCase.execute(input)
    return ok({ message: 'SUCCESS' })
  }
}
