import { IUseCase } from '@/shared/interfaces'
import { IHttpResponse } from '@/shared/interfaces/http-response.interface'
import { noContent, ok } from '../../helpers/http-helper'

export class CreateProfileFromXlsController {
  constructor (
    private readonly useCase: IUseCase<void>
  ) {}

  async handle (): Promise<IHttpResponse> {
    const response = await this.useCase.execute()

    if (response) {
      return ok(response)
    }

    return noContent()
  }
}
