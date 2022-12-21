import prisma from "lib/prisma";

export async function getPlayerCharacters() {
  return await prisma.playerCharacter.findMany();
}

export async function getPlayerCharacter(id) {
  return await prisma.playerCharacter.findUnique({ where: { id } });
}

export async function getUserPlayerCharacters(email) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    return await prisma.playerCharacter.findMany({
      where: { userId: user.id },
    });
  } else {
    return null;
  }
}

export async function createPlayerCharacter(email, body) {
  return await prisma.playerCharacter.create({
    data: {
      name: body.name,
      ancestry: { connect: { id: body.ancestry.id } },
      background: { connect: { id: body.background.id } },
      playerClass: { connect: { id: body.playerClass.id } },
      abilityScores: {
        create: ["str", "dex", "con", "int", "wis", "cha"].map((as) => ({
          score: body.abilityScores[as],
          abilityScore: {
            connect: { abbreviatedName: as },
          },
        })),
      },
      feats: {
        create: body.feats.map((f) => ({
          feat: {
            connect: {
              id: f.id,
            },
          },
        })),
      },
      user: { connect: { email } },
    },
  });
}
