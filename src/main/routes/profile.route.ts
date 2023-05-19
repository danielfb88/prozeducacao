import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
import { PresentationModule } from '@/presentation/presentation.module'
import { PresentationProviderEnum } from '@/presentation/presentation.provider.enum'
import { CreateProfileController } from '@/presentation/controllers/create-profile/create-profile.controller'

export default (router: Router): void => {
  const createProfileController = PresentationModule.get<CreateProfileController>(PresentationProviderEnum.CREATE_PROFILE_CONTROLLER)
  router.post('/profile', adaptRoute(createProfileController))
}
