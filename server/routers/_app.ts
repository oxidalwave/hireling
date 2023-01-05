import { router } from "server/trpc";
import { ancestries, ancestryById } from "server/procedures/ancestries";
import { backgrounds, backgroundById } from "server/procedures/backgrounds";
import {
  abilityScoreBoostById,
  abilityScoreBoostsFree,
} from "server/procedures/abilityScoreBoosts";
import { boostById, boosts, boostsFree } from "server/procedures/boosts";

export const appRouter = router({
  ancestries,
  ancestryById,
  backgrounds,
  backgroundById,
  abilityScoreBoostById,
  abilityScoreBoostsFree,
  boostById,
  boosts,
  boostsFree,
});
// export type definition of API
export type AppRouter = typeof appRouter;
