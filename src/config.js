import { config } from 'dotenv';

config();

const DB_HOST = 'banticfintech.database.windows.net'
const DB_PORT = 1433
const DB_DATABASE = 'banticfintech'
const DB_USER = 'bfadmin'
const DB_PASSWORD = 'Password123*'

export default{
    host: process.env.DB_HOST || DB_HOST,
    port: process.env.DB_PORT || DB_PORT,
    database: process.env.DB_DATABASE || DB_DATABASE, 
    user: process.env.DB_USER || DB_USER, 
    password: process.env.DB_PASSWORD || DB_PASSWORD 
}