import { adaptRoute } from '@/main/adapters'
import { CreateProfileController } from '@/presentation/controllers/create-profile/create-profile.controller'
import { PresentationModule } from '@/presentation/presentation.module'
import { PresentationProviderEnum } from '@/presentation/presentation.provider.enum'
import { Router } from 'express'
import { DeleteProfileByIdController } from '../../presentation/controllers/delete-profile-by-id/delete-profile-by-id.controller'
import { GetProfileByEmailController } from '../../presentation/controllers/get-profile-by-email/get-profile-by-email.controller'
import { UpdateProfileController } from '../../presentation/controllers/update-profile/update-profile.controller'

export default (router: Router): void => {
  const createProfileController = PresentationModule.get<CreateProfileController>(PresentationProviderEnum.CREATE_PROFILE_CONTROLLER)
  router.post('/profile', adaptRoute(createProfileController))

  const getProfileByEmailController = PresentationModule.get<GetProfileByEmailController>(PresentationProviderEnum.GET_PROFILE_BY_ID_CONTROLLER)
  router.get('/profile', adaptRoute(getProfileByEmailController))

  const deleteProfileByIdController = PresentationModule.get<DeleteProfileByIdController>(PresentationProviderEnum.DELETE_PROFILE_BY_ID_CONTROLLER)
  router.delete('/profile', adaptRoute(deleteProfileByIdController))

  const updateProfileController = PresentationModule.get<UpdateProfileController>(PresentationProviderEnum.UPDATE_PROFILE_CONTROLLER)
  router.put('/profile', adaptRoute(updateProfileController))
}
