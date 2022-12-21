import { PlayerClass, Source } from "@prisma/client";
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

export async function getPlayerClass(id): Promise<PlayerClass | null> {
  return await prisma.playerClass.findUnique({
    where: { id },
    include: { source: true, boost: true },
  });
}
