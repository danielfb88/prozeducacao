import Joi from '@hapi/joi'
import { config } from 'dotenv'
import { envSchema } from './env-schema'
import { getLoggerService } from '@/infrastructure/logger/winston/factories/logger-service.factory'
import path from 'path'

const logger = getLoggerService()
const currentFileName = path.basename(__filename)

config()
export default (): void => {
  const keys = Object.keys(envSchema)
  const obj = {}
  for (const key of keys) {
    obj[key] = process.env[key]
    logger.info(`[Validation] ENV var: ${key}`, currentFileName)
  }
  const result = Joi.object({ ...envSchema }).validate(obj)
  if (result.error) {
    logger.error(result.error.message, currentFileName)
    throw new Error(result.error.message)
  }
}
