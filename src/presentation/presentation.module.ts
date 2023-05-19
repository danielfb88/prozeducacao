import { DomainProviderEnum } from '@/domain/domain.provider.enum'
import { MainModule } from '@/main/main.module'
import { PresentationProviderEnum } from './presentation.provider.enum'
import { CreateProfileController } from './controllers/create-profile/create-profile.controller'
import { HealthCheckController } from './controllers/health-check/health-check.controller'

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

    // Create-Profile
    MainModule.addDependency({
      token: PresentationProviderEnum.CREATE_PROFILE_CONTROLLER,
      dependency: MainModule.useFactory(
        CreateProfileController,
        [
          DomainProviderEnum.CREATE_PROFILE_USE_CASE
        ]
      )
    })
  }

  static get<T> (provider: PresentationProviderEnum): T {
    return MainModule.get<T>(provider)
  }
}
