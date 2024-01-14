// import pkg from "pg";
import pg from "pg";

// const { Client } = pkg;
// import { Client } from "pg";

// const client = new Client(process.env.DATABASE_URL);

const client = new pg.Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
});

await client.connect();

export default client;
