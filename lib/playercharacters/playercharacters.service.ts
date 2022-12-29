import prisma from "lib/prisma";

export async function getPlayerCharacters() {
  return await prisma.playerCharacter.findMany();
}

export async function getPlayerCharacterById(id) {
  return await prisma.playerCharacter.findUnique({
    where: { id },
    select: {
      name: true,
      ancestry: true,
      background: true,
      abilityScoreBoosts: true,
      feats: {
        select: {
          feat: true
        }
      },
    },
  });
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
      abilityScoreBoosts: {
        create: body.boosts.map((b) => ({
          abilityScoreBoost: {
            connect: {
              id: b.id,
            },
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
