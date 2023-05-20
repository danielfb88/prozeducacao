import { DomainProviderEnum } from '@/domain/domain.provider.enum'
import { MainModule } from '@/main/main.module'
import { CreateProfileController } from './controllers/create-profile/create-profile.controller'
import { GetProfileByEmailController } from './controllers/get-profile-by-email/get-profile-by-email.controller'
import { HealthCheckController } from './controllers/health-check/health-check.controller'
import { PresentationProviderEnum } from './presentation.provider.enum'

export class PresentationModule extends MainModule {
  static configure (): void {
    // HealthCheck
    MainModule.addDependency({
      token: PresentationProviderEnum.HEALTH_CHECK_CONTROLLER,
      dependency: MainModule.useFactory(
        HealthCheckController,
        [
          DomainProviderEnum.HEALTH_CHECK_USE_CASE
        ]
      )
    })

    // CreateProfile
    MainModule.addDependency({
      token: PresentationProviderEnum.CREATE_PROFILE_CONTROLLER,
      dependency: MainModule.useFactory(
        CreateProfileController,
        [
          DomainProviderEnum.CREATE_PROFILE_USE_CASE
        ]
      )
    })

    // GetProfileByEmail
    MainModule.addDependency({
      token: PresentationProviderEnum.GET_PROFILE_BY_ID_CONTROLLER,
      dependency: MainModule.useFactory(
        GetProfileByEmailController,
        [
          DomainProviderEnum.GET_PROFILE_BY_EMAIL_USE_CASE
        ]
      )
    })
  }

  static get<T> (provider: PresentationProviderEnum): T {
    return MainModule.get<T>(provider)
  }
}
