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

export const userRouter = createTRPCRouter({
  getAllUsers: publicProcedure.query(async () => {
    const query = "SELECT * FROM main.user";
    const result = await pool.query(query);
    return result.rows;
  }),

  getUserById: publicProcedure.input(z.number()).query(async ({ input }) => {
    const query = "SELECT * FROM main.user WHERE id = $1";
    const result = await pool.query(query, [input]);
    return result.rows[0];
  }),
});
