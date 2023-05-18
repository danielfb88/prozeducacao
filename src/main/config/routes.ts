import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export default (app: Express): void => {
  const rootRouter = Router()
  app.use('/', rootRouter)

  const apiRouter = Router()
  app.use('/api', apiRouter)

  readdirSync(join(__dirname, '../routes')).map(async file => {
    if (!file.endsWith('.map')) {
      if (file.includes('health-check')) {
        (await import(`../routes/${file}`)).default(rootRouter)
      } else {
        (await import(`../routes/${file}`)).default(apiRouter)
      }
    }
  })
}
