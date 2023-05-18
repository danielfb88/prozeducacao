import { InfrastructureProviderEnum } from '@/infrastructure/infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'
import { getLoggerService } from './winston/factories/logger-service.factory'

export class LoggerModule extends MainModule {
  static configure (): void {
    MainModule.addDependency({
      token: InfrastructureProviderEnum.LOGGER_SERVICE,
      dependency: MainModule.useValue(getLoggerService())
    })
  }
}
