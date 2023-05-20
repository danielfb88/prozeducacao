import { InfrastructureProviderEnum } from '@/infrastructure/infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'
import { DomainProviderEnum } from './domain.provider.enum'
import { CreateProfileUseCase } from './use-cases/create-profile/create-profile.use-case'
import { GetProfileByEmailUseCase } from './use-cases/get-profile-by-email/get-by-email.use-case'
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

    // GetProfileByEmail
    MainModule.addDependency({
      token: DomainProviderEnum.GET_PROFILE_BY_EMAIL_USE_CASE,
      dependency: MainModule.useFactory(
        GetProfileByEmailUseCase,
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
