import prisma from "lib/prisma";

export async function getPlayerClasses() {
  return await prisma.playerClass.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      source: true,
    },
  });
}

export async function getPlayerClass(id) {
  return await prisma.playerClass.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      source: true,
      boost: {
        select: {
          id: true,
          kind: true,
          isBoost: true,
          abilityScores: {
            select: {
              id: true,
              abilityScore: {
                select: { id: true, name: true, abbreviatedName: true },
              },
            },
          },
        },
      },
    },
  });
}
