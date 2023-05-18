import './module-alias'

import * as http from 'http'

import { HTTPS_CERT_PATH, HTTPS_KEY_PATH, HTTP_PORT, IS_DEV } from './main/config'

import { ServerOptions } from 'https'
import { getLoggerService } from './infrastructure/logger/winston/factories/logger-service.factory'
import path from 'path'
import { readFileSync } from 'fs'
import { setupApp } from './app'

const logger = getLoggerService()
const currentFileName = path.basename(__filename)

void setupApp().then((app) => {
  const options: ServerOptions = {}
  if (!IS_DEV) {
    options.cert = readFileSync(HTTPS_CERT_PATH).toString()
    options.key = readFileSync(HTTPS_KEY_PATH).toString()
  }
  const server = http.createServer(options, app)
  server.listen(HTTP_PORT)
  server.on('listening', () =>
    logger.info(`HTTP Server running on ${HTTP_PORT}`, currentFileName)
  )
  server.on('error', (error: NodeJS.ErrnoException) =>
    logger.error(
      `An error has occurred: ${JSON.stringify(error)}`,
      currentFileName
    )
  )
})
