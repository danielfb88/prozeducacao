import { HealthCheckController } from './controllers/health-check.controller'
import { DomainProviderEnum } from '@/domain/domain.provider.enum'
import { MainModule } from '@/main/main.module'
import { PresentationProviderEnum } from './presentation.provider.enum'

export class PresentationModule extends MainModule {
  static configure (): void {
    MainModule.addDependency({
      token: PresentationProviderEnum.HEALTH_CHECK_CONTROLLER,
      dependency: MainModule.useFactory(
        HealthCheckController,
        [
          DomainProviderEnum.HEALTH_CHECK_USE_CASE
        ]
      )
    })
  }

  static get<T> (provider: PresentationProviderEnum): T {
    return MainModule.get<T>(provider)
  }
}
