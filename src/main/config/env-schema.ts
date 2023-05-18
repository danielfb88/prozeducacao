import * as Joi from '@hapi/joi'

export const envSchema = {
  CACHE_PASSWORD: Joi.string().allow(null, ''),
  CACHE_URL: Joi.string().required(),
  CACHE_TTL: Joi.string().required(),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_DATABASE: Joi.string().required(),
  ORM_LOGGING: Joi.boolean().default(false),

  GRPC_HOST: Joi.string().default('localhost'),
  GRPC_PORT: Joi.number().default(50051),

  HTTP_PORT: Joi.number().default(8443),

  HTTPS_CERT_PATH: Joi.string().allow(null, ''),
  HTTPS_KEY_PATH: Joi.string().allow(null, ''),

  LOGGER_LEVEL: Joi.string().default('info'),

  NODE_ENV: Joi.string().required(),

  PROJECT_NAME: Joi.string().required()
}
