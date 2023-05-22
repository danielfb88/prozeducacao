import { InfrastructureProviderEnum } from '@/infrastructure/infrastructure.provider.enum'
import { MainModule } from '@/main/main.module'
import { getXlsReaderService } from './factories/xls-reader-service.factory'

export class XlsReaderModule extends MainModule {
  static configure (): void {
    MainModule.addDependency({
      token: InfrastructureProviderEnum.XLS_READER_SERVICE,
      dependency: MainModule.useValue(getXlsReaderService())
    })
  }
}
