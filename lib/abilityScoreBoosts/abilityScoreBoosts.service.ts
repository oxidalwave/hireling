import prisma from "lib/prisma";
import { AbilityScoreBoost } from "./abilityScoreBoosts.types";

export async function getAbilityScoreBoostById(
  id: string
): Promise<AbilityScoreBoost | null> {
  return await prisma.abilityScoreBoost.findUnique({
    where: { id },
    include: {
      boost: true,
      abilityScore: true,
    },
  });
}

export async function getAllAbilityScores(): Promise<AbilityScoreBoost[]> {
  return await prisma.abilityScoreBoost.findMany({
    include: { boost: true, abilityScore: true },
  });
}

export async function getFreeAbilityScoreBoosts(
  take: number
): Promise<AbilityScoreBoost[]> {
  return await prisma.abilityScoreBoost.findMany({
    where: { boost: { kind: "FREE" } },
    take,
    orderBy: { id: "asc" },
    include: { boost: true, abilityScore: true },
  });
}
