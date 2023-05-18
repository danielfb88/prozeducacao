import { InfrastructureProviderEnum } from './infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'

export class InfrastructureModule extends MainModule {
  static get<T> (provider: InfrastructureProviderEnum): T {
    return MainModule.get<T>(provider)
  }
}
