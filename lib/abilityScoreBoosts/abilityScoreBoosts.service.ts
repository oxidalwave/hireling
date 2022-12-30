import prisma from "lib/prisma";

export async function getAbilityScoreBoost(id: string) {
  return await prisma.abilityScoreBoost.findUnique({
    where: { id },
    include: {
      boost: true,
      abilityScore: true,
    },
  });
}

export async function getFreeAbilityScoreBoosts(take: number) {
  return await prisma.abilityScoreBoost.findMany({
    where: { boost: { kind: "FREE" } },
    take,
    orderBy: { id: "asc" },
    include: { boost: true, abilityScore: true },
  });
}
