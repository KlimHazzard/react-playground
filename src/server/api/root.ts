import { createTRPCRouter } from "./trpc";
import { userRouter } from "./router/user";
import { msgRouter } from "./router/msg";
import { n4jRouter } from "./router/neo4j";

export const appRouter = createTRPCRouter({
  user: userRouter,
  msg: msgRouter,
  neo4j: n4jRouter, // Changed from 'test' to 'neo4j'
});

export type AppRouter = typeof appRouter;
