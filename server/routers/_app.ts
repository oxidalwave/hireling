import { router } from "server/trpc";
import ancestryProcedures from "server/procedures/ancestries";
import { backgrounds, backgroundById } from "server/procedures/backgrounds";
import {
  abilityScoreBoostById,
  abilityScoreBoostsFree,
} from "server/procedures/abilityScoreBoosts";
import { boostById, boosts, boostsFree } from "server/procedures/boosts";
import { equipment, equipmentById } from "server/procedures/equipment";
import { featById, feats, classFeats } from "server/procedures/feats";
import sources from "server/procedures/sources";
import {
  playerClassById,
  playerClasses,
} from "server/procedures/playerClasses";
import playerCharacters from "server/procedures/playerCharacters";

export const appRouter = router({
  ...ancestryProcedures,
  backgrounds,
  backgroundById,
  abilityScoreBoostById,
  abilityScoreBoostsFree,
  boostById,
  boosts,
  boostsFree,
  equipment,
  equipmentById,
  featById,
  feats,
  classFeats,
  playerClassById,
  playerClasses,
  ...sources,
  ...playerCharacters,
});
// export type definition of API
export type AppRouter = typeof appRouter;
