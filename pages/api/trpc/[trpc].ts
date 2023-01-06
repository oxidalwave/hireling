import {
  createNextApiHandler,
  CreateNextContextOptions,
} from "@trpc/server/adapters/next";
import { NodeHTTPCreateContextFnOptions } from "@trpc/server/dist/adapters/node-http";
import { IncomingMessage } from "http";
import { getSession } from "next-auth/react";
import { appRouter } from "server/routers/_app";
import ws from "ws";

// export API handler
// @see https://trpc.io/docs/api-handler
export default createNextApiHandler({
  router: appRouter,
  createContext: async (
    opts:
      | CreateNextContextOptions
      | NodeHTTPCreateContextFnOptions<IncomingMessage, ws>
  ) => {
    return {
      session: await getSession(opts),
    };
  },
  batching: {
    enabled: true,
  },
});
