import { Background, Prisma, Source } from "@prisma/client";
import prisma from "lib/prisma";

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

export async function getBackgrounds(where = {}) {
  return await prisma.background.findMany({
    select: { name: true, id: true, source: true },
    where,
  });
}

export async function getBackground(id): Promise<Background | null> {
  return await prisma.background.findUnique({
    where: { id },
    include: { source: true, boosts: true },
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
