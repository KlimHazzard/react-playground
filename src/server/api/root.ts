import { createTRPCRouter } from "./trpc";
import { userRouter } from "./router/user";
import { msgRouter } from "./router/msg";

export const appRouter = createTRPCRouter({
  user: userRouter,
  msg: msgRouter,
});

export type AppRouter = typeof appRouter;
