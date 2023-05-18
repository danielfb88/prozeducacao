import express, { Express } from 'express'

import setupMiddlewares from '@/main/config/middlewares'
import setupModules from '@/main/config/modules'
import setupRoutes from '@/main/config/routes'
import validateEnvSchema from '@/main/config/validate-env-schema'

export const setupApp = async (): Promise<Express> => {
  validateEnvSchema()
  await setupModules()

  const app = express()
  setupMiddlewares(app)
  setupRoutes(app)

  return app
}
