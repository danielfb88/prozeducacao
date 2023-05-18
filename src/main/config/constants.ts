import { config } from 'dotenv'

config()
export const {
  CACHE_PASSWORD,
  CACHE_URL,
  CACHE_TTL,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ORM_LOGGING,
  HTTP_PORT,
  HTTPS_CERT_PATH,
  HTTPS_KEY_PATH,
  LOGGER_LEVEL,
  NODE_ENV,
  PROJECT_NAME
} = process.env

export const IS_DEV = /local|dev/.test(NODE_ENV)
