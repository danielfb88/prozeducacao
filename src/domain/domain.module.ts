import { DomainProviderEnum } from './domain.provider.enum'
import { InfrastructureProviderEnum } from '@/infrastructure/infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'
import { HealthCheckUseCase } from './use-cases/health-check/health-check.use-case'

export class DomainModule extends MainModule {
  static configure (): void {
    // HealthCheck
    MainModule.addDependency({
      token: DomainProviderEnum.HEALTH_CHECK_USE_CASE,
      dependency: MainModule.useFactory(
        HealthCheckUseCase,
        [
          InfrastructureProviderEnum.LOGGER_SERVICE
        ]
      )
    })
  }

  static get<T> (provider: DomainProviderEnum): T {
    return MainModule.get<T>(provider)
  }
}
