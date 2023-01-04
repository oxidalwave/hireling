import { Equipment, Prisma } from "@prisma/client";
import prisma from "lib/prisma";

function createEquipmentAndSource(
  ancestry: Omit<Equipment, "id">,
  sourceName: string
) {
  return Prisma.validator<Prisma.EquipmentCreateInput>()({
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
export async function getAllEquipment() {
  return await prisma.equipment.findMany({
    select: { id: true, name: true, source: true },
  });
}

export async function getEquipmentById(id: string) {
  return await prisma.equipment.findUnique({
    where: { id },
    include: { source: true },
  });
}

export async function createEquipment(
  equipment: Omit<Equipment, "id">,
  sourceName: string
): Promise<Equipment> {
  return await prisma.equipment.create({
    data: createEquipmentAndSource(equipment, sourceName),
  });
}

export async function updateEquipment(
  id: string,
  equipment: Omit<Equipment, "id">,
  sourceName: string
): Promise<Equipment> {
  return prisma.equipment.update({
    where: { id },
    data: createEquipmentAndSource(equipment, sourceName),
  });
}

export async function deleteEquipment(id: string): Promise<Equipment> {
  return prisma.equipment.delete({
    where: { id },
  });
}
