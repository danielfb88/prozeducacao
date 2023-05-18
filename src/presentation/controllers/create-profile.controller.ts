import { IHttpResponse } from '@/shared/interfaces/http-response.interface'
import { ok } from '@/presentation/helpers'
import { IUseCase } from '@/shared/interfaces'
import { RestInputValidator } from '@/presentation/decorators/rest-input-validator.decorator'
import { CreateProfileDto } from '../dto/create-profile.dto'
import { ILoggerService } from '../../shared/interfaces/logger-service.interface'
import { CreateProfileMapper } from '../mappers/create-profile.mapper'
import { ICreateProfileResponse } from '../interfaces/create-profile.response.interface'

export const CREATE_PROFILE_CONTROLLER_RECEIVED =
  'presentation.controller.create-profile.received'
export const CREATE_PROFILE_CONTROLLER_PROCESSED = 'presentation.controller.create-profile.processed'

export class CreateProfileController {
  constructor (
    private readonly useCase: IUseCase<ICreateProfileResponse>
  ) {}

  @RestInputValidator(CreateProfileDto)
  async handle (input: CreateProfileDto): Promise<IHttpResponse> {
    await this.useCase.execute(
      new CreateProfileMapper().map(input)
    )

    return ok({ message: 'SUCCESS' })
  }
}
