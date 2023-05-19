import { RestInputValidator } from '@/presentation/decorators/rest-input-validator.decorator'
import { IUseCase, Mapper } from '@/shared/interfaces'
import { IHttpResponse } from '@/shared/interfaces/http-response.interface'
import { CreateProfileDto } from '../../dto/create-profile.dto'
import { noContent, ok } from '../../helpers/http-helper'
import { ICreateProfileResponse } from '../../interfaces/create-profile.response.interface'
import { CreateProfileMapper } from '../../mappers/create-profile.mapper'

export class CreateProfileController {
  constructor (
    private readonly useCase: IUseCase<ICreateProfileResponse>,
    private readonly mapper: Mapper<CreateProfileDto, ICreateProfileResponse> = new CreateProfileMapper()
  ) {}

  @RestInputValidator(CreateProfileDto)
  async handle (input: CreateProfileDto): Promise<IHttpResponse> {
    const response = await this.useCase.execute(
      this.mapper.map(input)
    )

    if (response) {
      return ok(response)
    }

    return noContent()
  }
}
