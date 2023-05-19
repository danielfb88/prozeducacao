import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
import { PresentationModule } from '@/presentation/presentation.module'
import { PresentationProviderEnum } from '@/presentation/presentation.provider.enum'
import { HealthCheckController } from '@/presentation/controllers/health-check/health-check.controller'

export default (router: Router): void => {
  const controller = PresentationModule.get<HealthCheckController>(PresentationProviderEnum.HEALTH_CHECK_CONTROLLER)
  router.get('/health-check', adaptRoute(controller))
}
