import { IHttpResponse } from '@/shared/interfaces/http-response.interface'
import { ok } from '@/presentation/helpers'
import { IUseCase } from '@/shared/interfaces/use-case.interface'

export class HealthCheckController {
  constructor (
    private readonly useCase: IUseCase<void>
  ) {}

  async handle (): Promise<IHttpResponse> {
    const message = await this.useCase.execute()
    return ok({ message })
  }
}
