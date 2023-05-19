import { IHttpResponse } from '@/shared/interfaces/http-response.interface'
import { IUseCase } from '@/shared/interfaces/use-case.interface'
import { ok } from '../../helpers/http-helper'

export class HealthCheckController {
  constructor (
    private readonly useCase: IUseCase<void>
  ) {}

  async handle (): Promise<IHttpResponse> {
    const message = await this.useCase.execute()
    return ok({ message })
  }
}
