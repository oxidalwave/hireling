import { Source } from "@prisma/client";
import prisma from "lib/prisma";

export async function getSourceById(id: string): Promise<Source | null> {
  return await prisma.source.findUnique({
    where: { id },
  });
}

export async function getSourceByName(name: string): Promise<Source | null> {
  return await prisma.source.findUnique({ where: { name } });
}

export async function getSources(): Promise<Source[]> {
  return await prisma.source.findMany();
}

export async function getSourcesFor(resourceType) {
  let query = {};
  query[resourceType] = { some: {} };
  return await prisma.source.findMany({ where: query });
}

export async function addSource(name: string): Promise<Source> {
  return await prisma.source.create({ data: { name } });
}

export async function updateSource(id: string, name: string): Promise<Source> {
  return await prisma.source.update({ where: { id }, data: { name } });
}

export async function getSourceOrAdd(name: string): Promise<Source> {
  return await prisma.source.upsert({
    where: { name },
    update: {},
    create: { name },
  });
}
