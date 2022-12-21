import prisma from "lib/prisma";

export async function getFeats() {
  return await prisma.feat.findMany();
}

export async function getClassFeats(className: string) {
  return await prisma.feat.findMany({
    where: { playerClasses: { some: { playerClass: { name: className } } } },
  });
}

export async function getFeatById(id: string) {
  return await prisma.feat.findUnique({ where: { id } });
}
