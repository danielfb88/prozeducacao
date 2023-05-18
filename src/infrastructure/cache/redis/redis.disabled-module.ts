import { InfrastructureProviderEnum } from '@/infrastructure/infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'
import { getRedisService } from './factories/redis-service.factory'

export class RedisModule extends MainModule {
  static configure (): void {
    MainModule.addDependency({
      token: InfrastructureProviderEnum.REDIS_SERVICE,
      dependency: MainModule.useValue(getRedisService())
    })
  }
}
