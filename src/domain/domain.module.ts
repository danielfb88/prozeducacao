import { DomainProviderEnum } from './domain.provider.enum'
import { InfrastructureProviderEnum } from '@/infrastructure/infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'
import { HealthCheckUseCase } from './use-cases/health-check/health-check.use-case'
import { CreateProfileUseCase } from './use-cases/create-profile/create-profile.use-case'

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

    // CreateProfile
    MainModule.addDependency({
      token: DomainProviderEnum.CREATE_PROFILE_USE_CASE,
      dependency: MainModule.useFactory(
        CreateProfileUseCase,
        [
          InfrastructureProviderEnum.LOGGER_SERVICE,
          InfrastructureProviderEnum.REDIS_SERVICE,
          InfrastructureProviderEnum.PROFILE_REPOSITORY
        ]
      )
    })
  }

  static get<T> (provider: DomainProviderEnum): T {
    return MainModule.get<T>(provider)
  }
}
