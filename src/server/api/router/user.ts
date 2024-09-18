import { StringValidation, z } from "zod";
import { Kysely, PostgresDialect } from "kysely";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Pool } from "pg";

interface Database {
  "main.user": UserTable;
  "main.message": MessageTable;
  "main.organization": OrganizationTable;
  // Add other tables as needed
}

interface UserTable {
  user_id: string;
  name: string;
  is_system_admin: boolean;
  // Add other user fields
}

interface MessageTable {
  user_id: string;
  created_at: Date;
  organization_id: string;
  // Add other user fields
}

interface OrganizationTable {
  name: string;
  organization_id: string;
  // Add other user fields
}

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || "5432"),
    }),
  }),
});

export const userRouter = createTRPCRouter({
  getUserMessages: publicProcedure.query(async () => {
    try {
      const result = await db
        .selectFrom("main.user")
        .innerJoin("main.message", "main.user.user_id", "main.message.user_id")
        .innerJoin(
          "main.organization",
          "main.organization.organization_id",
          "main.message.organization_id"
        )
        .where("main.user.is_system_admin", "=", false)
        .select([
          "main.user.user_id",
          "main.user.name",
          "main.message.created_at",
          "main.message.organization_id",
          "main.organization.name as organization_name",
        ])
        .limit(1500)
        .execute();
      console.log("Query result:", result);
      return result;
    } catch (error) {
      console.error("Error in getUserMessages:", error);
      throw error;
    }
  }),

  getSystemAdminUserMessages: publicProcedure.query(async () => {
    try {
      const result = await db
        .selectFrom("main.user")
        .innerJoin("main.message", "main.user.user_id", "main.message.user_id")
        .where("main.user.is_system_admin", "=", true)
        .select([
          "main.user.user_id",
          "main.user.name",
          "main.message.created_at",
        ])
        .execute();

      console.log("Query result:", result);
      return result;
    } catch (error) {
      console.error("Error in getSystemAdminUsers:", error);
      throw error;
    }
  }),
});
