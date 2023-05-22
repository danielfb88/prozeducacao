import { RestInputValidator } from '@/presentation/decorators/rest-input-validator.decorator'
import { IUseCase, Mapper } from '@/shared/interfaces'
import { IHttpResponse } from '@/shared/interfaces/http-response.interface'
import { UpdateProfileDto } from '../../dto/update-profile.dto'
import { noContent, ok } from '../../helpers/http-helper'
import { IUpdateProfileResponse } from '../../interfaces/update-profile.response.interface'
import { UpdateProfileMapper } from '../../mappers/update-profile.mapper'

export class UpdateProfileController {
  constructor (
    private readonly useCase: IUseCase<IUpdateProfileResponse>,
    private readonly mapper: Mapper<UpdateProfileDto, IUpdateProfileResponse> = new UpdateProfileMapper()
  ) {}

  @RestInputValidator(UpdateProfileDto)
  async handle (input: UpdateProfileDto): Promise<IHttpResponse> {
    const response = await this.useCase.execute(
      this.mapper.map(input)
    )

    if (response) {
      return ok(response)
    }

    return noContent()
  }
}
