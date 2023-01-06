import { z } from "zod";
import { procedure } from "server/trpc";
import { getBoost, getBoosts, getFreeBoosts } from "lib/boosts/boosts.service";

export const boostById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getBoost(input.id));

export const boostsFree = procedure
  .input(
    z.object({
      count: z.number(),
    })
  )
  .query(async ({ input }) => await getFreeBoosts(input.count));

export const boosts = procedure.query(async () => await getBoosts());
