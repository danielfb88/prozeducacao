/* eslint-disable prefer-promise-reject-errors */
import { DataSource } from 'typeorm'
import path from 'path'
import { getLoggerService } from '@/infrastructure/logger/winston/factories/logger-service.factory'
import { dataSourceOptions } from '../config/datasource.config'

const logger = getLoggerService()
const currentFileName = path.basename(__filename)

const datasource = new DataSource(dataSourceOptions)

datasource.initialize()
  .then(async () => {
    logger.info('Connection initialized with database...', currentFileName)
  })
  .catch((error) => logger.error('Connection with database failed.', currentFileName, error))

export const getPostgresDataSource = async (delay = 3000): Promise<DataSource> => {
  if (datasource.isInitialized) return Promise.resolve(datasource)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (datasource.isInitialized) resolve(datasource)
      else reject('Failed to create connection with database')
    }, delay)
  })
}
