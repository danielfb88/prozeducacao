import { DomainProviderEnum } from '@/domain/domain.provider.enum'
import { MainModule } from '@/main/main.module'
import { CreateProfileController } from './controllers/create-profile/create-profile.controller'
import { DeleteProfileByIdController } from './controllers/delete-profile-by-id/delete-profile-by-id.controller'
import { GetProfileByEmailController } from './controllers/get-profile-by-email/get-profile-by-email.controller'
import { HealthCheckController } from './controllers/health-check/health-check.controller'
import { UpdateProfileController } from './controllers/update-profile/update-profile.controller'
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

    // DeleteProfileById
    MainModule.addDependency({
      token: PresentationProviderEnum.DELETE_PROFILE_BY_ID_CONTROLLER,
      dependency: MainModule.useFactory(
        DeleteProfileByIdController,
        [
          DomainProviderEnum.DELETE_PROFILE_BY_ID_USE_CASE
        ]
      )
    })

    // UpdateProfile
    MainModule.addDependency({
      token: PresentationProviderEnum.UPDATE_PROFILE_CONTROLLER,
      dependency: MainModule.useFactory(
        UpdateProfileController,
        [
          DomainProviderEnum.UPDATE_PROFILE_USE_CASE
        ]
      )
    })
  }

  static get<T> (provider: PresentationProviderEnum): T {
    return MainModule.get<T>(provider)
  }
}
