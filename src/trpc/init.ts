import * as Sentry from "@sentry/node";
import { auth } from "@clerk/nextjs/server";
import { cache } from 'react';
import { initTRPC, TRPCError } from "@trpc/server";
import  superjson from "superjson";
export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { userId: 'user_123' };
});

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
});

const sentryMiddleware = t.middleware(
  Sentry.trpcMiddleware({
    attachRpcInput: true,
  }),
);


// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure.use(sentryMiddleware);//thia ia the public procedure that anyone can access them

//Authenticated Procedure - calls auth () only when needed
export const authProcedure  = baseProcedure.use(async ({ next }) => {
    const { userId } = await auth();
  
    if(!userId) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
  
  return next({
    ctx:{ userId },
  });
});

//Organisation Procedure - requires userId and orgId

export const orgProcedure = baseProcedure.use(async ({ next })  => {
  const { userId , orgId } = await auth();

  if(!userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  if(!orgId) {
    throw new TRPCError ({
      code: "FORBIDDEN",
      message: "Organisation required",
    });
  }

  return next({ ctx : { userId , orgId}});
});