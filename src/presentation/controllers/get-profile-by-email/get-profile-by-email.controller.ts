import { RestInputValidator } from '@/presentation/decorators/rest-input-validator.decorator'
import { IUseCase } from '@/shared/interfaces'
import { IHttpResponse } from '../../../shared/interfaces/http-response.interface'
import { GetProfileByEmailDto } from '../../dto/get-profile-by-email.dto'
import { noContent, ok } from '../../helpers/http-helper'

export class GetProfileByEmailController {
  constructor (
    private readonly useCase: IUseCase<{email: string}>
  ) {}

  @RestInputValidator(GetProfileByEmailDto)
  async handle (input: GetProfileByEmailDto): Promise<IHttpResponse> {
    const response = await this.useCase.execute(input)

    if (response) {
      return ok(response)
    }

    return noContent()
  }
}
