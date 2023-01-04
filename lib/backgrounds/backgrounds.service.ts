import { Background, Prisma } from "@prisma/client";
import { GetBackgroundsResponse } from "lib/backgrounds/backgrounds.types";
import prisma from "lib/prisma";
import { GetBackgroundByIdResponse } from "./backgrounds.types";

function createBackgroundAndSource(
  ancestry: Omit<Background, "id">,
  sourceName: string
) {
  return Prisma.validator<Prisma.BackgroundCreateInput>()({
    name: ancestry.name,
    description: ancestry.description,
    source: {
      connectOrCreate: {
        where: { name: sourceName },
        create: { name: sourceName },
      },
    },
  });
}

export async function getBackgroundCount(): Promise<number> {
  return await prisma.background.count();
}

export async function getBackgrounds(
  where = {}
): Promise<GetBackgroundsResponse> {
  return await prisma.background.findMany({
    select: {
      id: true,
      name: true,
      source: { select: { id: true, name: true } },
    },
    where,
  });
}

export async function getBackgroundById(
  id: string
): Promise<GetBackgroundByIdResponse | null> {
  return await prisma.background.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      source: { select: { id: true, name: true } },
      boosts: {
        select: {
          id: true,
          isBoost: true,
          abilityScores: {
            select: {
              id: true,
              abilityScore: {
                select: { id: true, name: true },
              },
            },
          },
        },
      },
    },
  });
}

export async function createBackground(
  background: Background,
  sourceName: string
) {
  return await prisma.background.create({
    data: createBackgroundAndSource(background, sourceName),
  });
}

export async function updateBackground(
  id: string,
  background: Omit<Background, "id">,
  sourceName: string
) {
  return await prisma.background.update({
    where: { id },
    data: createBackgroundAndSource(background, sourceName),
  });
}

export async function deleteBackground(id: string) {
  return await prisma.background.delete({ where: { id } });
}
