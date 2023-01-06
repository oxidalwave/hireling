import prisma from "lib/prisma";
import { AbilityScore } from "lib/abilityScores/abilityScores.types";

export async function getAbilityScoreById(
  id: string
): Promise<AbilityScore | null> {
  return await prisma.abilityScore.findUnique({ where: { id } });
}

export async function getAbilityScoreByName(
  name: string
): Promise<AbilityScore | null> {
  return await prisma.abilityScore.findUnique({ where: { name } });
}

export async function getAbilityScoreByAbbreviation(
  abbreviatedName: string
): Promise<AbilityScore | null> {
  return await prisma.abilityScore.findUnique({ where: { abbreviatedName } });
}

export async function getAllAbilityScores(): Promise<AbilityScore[]> {
  return await prisma.abilityScore.findMany();
}

export async function getStandardAbilityScores(): Promise<AbilityScore[]> {
  return await prisma.abilityScore.findMany({
    where: {
      OR: ["str", "dex", "con", "int", "wis", "cha"].map((a) => ({
        abbreviatedName: a,
      })),
    },
  });
}
