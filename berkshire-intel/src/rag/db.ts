import 'dotenv/config';
import { Client } from 'pg';

export const pg = new Client({
  host: process.env.PGHOST!,
  port: Number(process.env.PGPORT || 5432),
  user: process.env.PGUSER!,
  password: process.env.PGPASSWORD!,
  database: process.env.PGDATABASE!,
});

pg.connect();