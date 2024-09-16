import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

export const msgRouter = createTRPCRouter({
  getMsgs: publicProcedure.query(async () => {
    const query = "SELECT * FROM main.message LIMIT 10";
    const result = await pool.query(query);
    return result.rows;
  }),
});
