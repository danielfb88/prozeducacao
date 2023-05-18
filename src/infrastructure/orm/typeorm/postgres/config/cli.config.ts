import { DataSource } from 'typeorm'
/* eslint-disable node/no-path-concat */
export const dataSourceOptions = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'db_test',
  synchronize: false,
  logging: true,
  migrationsTableName: 'migrations',
  entities: [`${__dirname}/../**/*.entity.js`],
  migrations: ['dist/src/infrastructure/orm/typeorm/postgres/migrations/*.js']
})
