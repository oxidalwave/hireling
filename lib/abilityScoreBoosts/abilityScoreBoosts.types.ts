import { Prisma } from "@prisma/client";

export type AbilityScoreBoost = Prisma.AbilityScoreBoostGetPayload<{
  include: { boost: true; abilityScore: true };
}>;
