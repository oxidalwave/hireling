import prisma from "lib/prisma";
import { getSession } from "next-auth/react";
import { CreatePlayerCharacterPayload } from "./playercharacters.types";

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
          feat: true,
        },
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

export async function createPlayerCharacter(
  body: CreatePlayerCharacterPayload
) {
  const session = await getSession();
  const email = session?.user?.email;
  if (email) {
    return await prisma.playerCharacter.create({
      data: {
        ...body,
        user: { connect: { email } },
      },
    });
  } else {
    throw new Error("No session");
  }
}

export async function initNewCharacter() {
  const session = await getSession();
  const email = session?.user?.email;
  if (email) {
    return await prisma.playerCharacter.create({
      data: {
        name: "",
        user: {
          connect: { email },
        },
      },
    });
  } else {
    throw new Error("No session");
  }
}

export async function updateCharacterName(id: string, name: string) {
  return await prisma.playerCharacter.update({ where: { id }, data: { name } });
}
