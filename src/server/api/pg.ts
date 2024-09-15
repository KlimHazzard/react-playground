import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
import { userQueries } from "./router/user";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

const queries = userQueries(pool);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await queries.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
