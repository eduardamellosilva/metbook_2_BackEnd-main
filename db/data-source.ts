import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: 'metbook_2',
    username: 'postgres',
    password: 'postgres',
    port: 5433,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
}

export default new DataSource(dataSourceOptions);
