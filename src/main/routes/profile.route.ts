import { adaptRoute } from '@/main/adapters'
import { CreateProfileController } from '@/presentation/controllers/create-profile/create-profile.controller'
import { PresentationModule } from '@/presentation/presentation.module'
import { PresentationProviderEnum } from '@/presentation/presentation.provider.enum'
import { Router } from 'express'
import { GetProfileByEmailController } from '../../presentation/controllers/get-profile-by-email/get-profile-by-email.controller'

export default (router: Router): void => {
  const createProfileController = PresentationModule.get<CreateProfileController>(PresentationProviderEnum.CREATE_PROFILE_CONTROLLER)
  router.post('/profile', adaptRoute(createProfileController))

  const getProfileByEmailController = PresentationModule.get<GetProfileByEmailController>(PresentationProviderEnum.GET_PROFILE_BY_ID_CONTROLLER)
  router.get('/profile', adaptRoute(getProfileByEmailController))
}
