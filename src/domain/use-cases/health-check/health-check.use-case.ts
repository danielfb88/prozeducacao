import { IUseCase } from '@/shared/interfaces'
import { ILoggerService } from '@/shared/interfaces/logger-service.interface'

export class HealthCheckUseCase implements IUseCase<void> {
  constructor (
    readonly logger: ILoggerService
  ) {}

  async execute (): Promise<string> {
    const message = 'STATUS OK'
    this.logger.debug(message, HealthCheckUseCase.name)
    return message
  }
}
