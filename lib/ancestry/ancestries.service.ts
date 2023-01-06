import prisma from "lib/prisma";
import {
  GetAncestriesResponse,
  GetAncestryByIdResponse,
} from "./ancestries.types";

export async function getAllAncestries(
  where = {}
): Promise<GetAncestriesResponse> {
  return await prisma.ancestry.findMany({
    where,
    select: {
      id: true,
      name: true,
      source: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

const deepSelect = {
  id: true,
  name: true,
  description: true,
  hp: true,
  size: true,
  speed: true,
  source: {
    select: {
      id: true,
      name: true,
    },
  },
  feats: {
    select: {
      feat: { select: { id: true, name: true } },
    },
  },
  boosts: {
    select: {
      id: true,
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
};

export async function getAncestryById(
  id: string
): Promise<GetAncestryByIdResponse | null> {
  return await prisma.ancestry.findUnique({
    where: { id },
    select: deepSelect,
  });
}

export async function getAncestryByNameAndSourceName(
  name: string,
  sourceId: string
): Promise<GetAncestryByIdResponse | null> {

  return await prisma.ancestry.findUnique({
    where: {
      name_sourceId: {
        name,
        sourceId,
      },
    },
    select: deepSelect,
  });
}

export async function getAncestryByNameAndSourceId(
  name: string,
  sourceId: string
): Promise<GetAncestryByIdResponse | null> {
  return await prisma.ancestry.findUnique({
    where: {
      name_sourceId: {
        name,
        sourceId,
      },
    },
    select: deepSelect,
  });
}
