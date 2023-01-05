import { z } from "zod";
import { procedure } from "server/trpc";
import {
  getAbilityScoreBoostById,
  getFreeAbilityScoreBoosts,
} from "lib/abilityScoreBoosts/abilityScoreBoosts.service";

export const abilityScoreBoostById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getAbilityScoreBoostById(input.id));

export const abilityScoreBoostsFree = procedure
  .input(
    z.object({
      count: z.number(),
    })
  )
  .query(async ({ input }) => await getFreeAbilityScoreBoosts(input.count));
