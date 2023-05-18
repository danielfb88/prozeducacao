import { InfrastructureProviderEnum } from '@/infrastructure/infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'
import { getPostgresDataSource } from './postgres/factories/postgres-datasource-factory'
import { ProfileRepository } from './postgres/repositories/profile.repository'

export class TypeOrmModule extends MainModule {
  static async configure (): Promise<void> {
    MainModule.addDependency({
      token: InfrastructureProviderEnum.POSTGRES_DATASOURCE,
      dependency: MainModule.useValue(await getPostgresDataSource())
    })
    MainModule.addDependency({
      token: InfrastructureProviderEnum.POSTGRES_PROFILE_REPOSITORY,
      dependency: MainModule.useFactory(
        ProfileRepository, [
          InfrastructureProviderEnum.POSTGRES_DATASOURCE
        ]
      )
    })
  }
}
