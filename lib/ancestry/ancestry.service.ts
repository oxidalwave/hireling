import { Ancestry, Prisma } from "@prisma/client";
import prisma from "lib/prisma";

function createAncestryAndSource(
  ancestry: Omit<Ancestry, "id">,
  sourceName: string
) {
  return Prisma.validator<Prisma.AncestryCreateInput>()({
    name: ancestry.name,
    description: ancestry.description,
    hp: ancestry.hp,
    speed: ancestry.speed,
    size: ancestry.size,
    source: {
      connectOrCreate: {
        where: { name: sourceName },
        create: { name: sourceName },
      },
    },
  });
}

export async function getAncestryCount(): Promise<number> {
  return await prisma.ancestry.count();
}

export async function getAncestries(where = {}) {
  return await prisma.ancestry.findMany({
    where,
    select: {
      id: true,
      name: true,
      source: true,
    },
  });
}

export async function getAncestryById(id: string) {
  return await prisma.ancestry.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      hp: true,
      size: true,
      speed: true,
      source: true,
      feats: {
        select: {
          feat: { select: { id: true, name: true } },
        },
      },
      boosts: {
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

export async function createAncestry(ancestry, sourceName) {
  return await prisma.ancestry.create({
    data: createAncestryAndSource(ancestry, sourceName),
  });
}

export async function updateAncestry(
  id: string,
  ancestry: Omit<Ancestry, "id">,
  sourceName: string
): Promise<Ancestry> {
  return await prisma.ancestry.update({
    where: { id },
    data: createAncestryAndSource(ancestry, sourceName),
  });
}

export async function deleteAncestry(id: string) {
  return await prisma.ancestry.delete({ where: { id } });
}
