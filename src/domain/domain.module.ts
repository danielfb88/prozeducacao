import { InfrastructureProviderEnum } from '@/infrastructure/infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'
import { DomainProviderEnum } from './domain.provider.enum'
import { CreateProfileFromXlsUseCase } from './use-cases/create-profile-from-xls/create-profile-from-xls.use-case'
import { CreateProfileUseCase } from './use-cases/create-profile/create-profile.use-case'
import { DeleteProfileByIdUseCase } from './use-cases/delete-profile-by-id/delete-profile-by-id.use-case'
import { GetProfileByEmailUseCase } from './use-cases/get-profile-by-email/get-by-email.use-case'
import { HealthCheckUseCase } from './use-cases/health-check/health-check.use-case'
import { UpdateProfileUseCase } from './use-cases/update-profile/update-profile.use-case'

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

    // DeleteProfileById
    MainModule.addDependency({
      token: DomainProviderEnum.DELETE_PROFILE_BY_ID_USE_CASE,
      dependency: MainModule.useFactory(
        DeleteProfileByIdUseCase,
        [
          InfrastructureProviderEnum.LOGGER_SERVICE,
          InfrastructureProviderEnum.REDIS_SERVICE,
          InfrastructureProviderEnum.PROFILE_REPOSITORY
        ]
      )
    })

    // UpdateProfile
    MainModule.addDependency({
      token: DomainProviderEnum.UPDATE_PROFILE_USE_CASE,
      dependency: MainModule.useFactory(
        UpdateProfileUseCase,
        [
          InfrastructureProviderEnum.LOGGER_SERVICE,
          InfrastructureProviderEnum.REDIS_SERVICE,
          InfrastructureProviderEnum.PROFILE_REPOSITORY
        ]
      )
    })

    // CreateProfileFromXls
    MainModule.addDependency({
      token: DomainProviderEnum.CREATE_PROFILE__FROM_XLS_USE_CASE,
      dependency: MainModule.useFactory(
        CreateProfileFromXlsUseCase,
        [
          InfrastructureProviderEnum.LOGGER_SERVICE,
          InfrastructureProviderEnum.XLS_READER_SERVICE,
          InfrastructureProviderEnum.PROFILE_REPOSITORY
        ]
      )
    })
  }

  static get<T> (provider: DomainProviderEnum): T {
    return MainModule.get<T>(provider)
  }
}
