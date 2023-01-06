import { Prisma } from "@prisma/client";
import prisma from "lib/prisma";

export async function getAbilityScoreBoostById(id: string) {
  return await prisma.abilityScoreBoost.findUnique({
    where: { id },
    include: {
      boost: true,
      abilityScore: true,
    },
  });
}

export async function getFreeAbilityScoreBoosts(take: number): Promise<
  Prisma.AbilityScoreBoostGetPayload<{
    include: { boost: true; abilityScore: true };
  }>[]
> {
  return await prisma.abilityScoreBoost.findMany({
    where: { boost: { kind: "FREE" } },
    take,
    orderBy: { id: "asc" },
    include: { boost: true, abilityScore: true },
  });
}
