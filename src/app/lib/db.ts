import { Client } from 'pg';

export const getClient = () =>
  new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Required for Supabase
    },
  });
