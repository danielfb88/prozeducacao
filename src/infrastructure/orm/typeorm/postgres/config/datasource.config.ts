/* eslint-disable node/no-path-concat */
import { DataSourceOptions } from 'typeorm'
import path from 'path'
import { DB_DATABASE, DB_HOST, DB_PORT, POSTGRES_USER, POSTGRES_PASSWORD, ORM_LOGGING } from '@/main/config'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { Profile } from '../entities/profile.entity'

const synchronize = false
const logging = Boolean(Number(ORM_LOGGING))
const port = Number(DB_PORT)

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: DB_HOST,
  port,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: DB_DATABASE,
  synchronize,
  logging,
  namingStrategy: new SnakeNamingStrategy(),
  migrationsTableName: 'migrations',
  // entities: [path.join(__dirname), '/../**/*.entity.js'], // TODO: check latter
  // entities: [path.join('dist/src/infrastructure/orm/typeorm/postgres/entities'), '/*.entity.js'],
  entities: [`${__dirname}/../**/*.entity.js`],
  migrations: ['dist/src/infrastructure/orm/typeorm/postgres/migrations/*.js']
}
