import knex from 'knex';
import knexConfig from '../../knexfile';
import { config } from 'dotenv';

config();

const env = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[env]);

export default db;
