import prisma from "lib/prisma";

export async function getBoosts(where = {}) {
  return await prisma.boost.findMany({ where });
}

export async function getBoost(id: string) {
  return await prisma.boost.findUnique({ where: { id } });
}

export async function getFreeBoosts(count: number) {
  return await prisma.boost.findMany({
    where: { kind: "FREE" },
    take: count,
    orderBy: { id: "asc" },
    select: {
      id: true,
      abilityScores: {
        select: {
          id: true,
          abilityScore: true
        }
      }
    }
  });
}
