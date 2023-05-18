import { cors } from '@/main/middlewares'
import bodyParser from 'body-parser'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(cors)
}
