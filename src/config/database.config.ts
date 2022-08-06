import dotenv from 'dotenv'
import { DatabaseConfiguration } from '../models/config.model'

dotenv.config()
const ENV = process.env.ENV

let database;
switch (process.env.ENV) {
    case 'test':
        database = process.env.DB_NAME_TEST
        break;
    case 'production':
        database = process.env.DB_NAME
        break;
    default:
        database = process.env.DB_NAME
        break;
}

const dbConfig: DatabaseConfiguration = {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT) ?? 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database
}

export default dbConfig;