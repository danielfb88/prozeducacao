import { IHttpResponse } from '@/shared/interfaces/http-response.interface'
import { ok, serverError } from '@/presentation/helpers'
import { IUseCase, Mapper } from '@/shared/interfaces'
import { RestInputValidator } from '@/presentation/decorators/rest-input-validator.decorator'
import { CreateProfileDto } from '../../dto/create-profile.dto'
import { CreateProfileMapper } from '../../mappers/create-profile.mapper'
import { ICreateProfileResponse } from '../../interfaces/create-profile.response.interface'

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

    if (!response) {
      serverError(new Error('Houve um problema ao salvar o perfil.'))
    }

    return ok(response)
  }
}
