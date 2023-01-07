import prisma from "lib/prisma";
import { getSession } from "next-auth/react";
import {
  GetPlayerClassByIdResponse,
  GetPlayerClassesResponse,
} from "./playerclasses.types";

export async function getPlayerClasses(): Promise<GetPlayerClassesResponse> {
  return await prisma.playerClass.findMany({
    where: {},
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

export async function getPlayerClassById(
  id: string
): Promise<GetPlayerClassByIdResponse | null> {
  return await prisma.playerClass.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      source: {
        select: {
          id: true,
          name: true,
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
                select: { id: true, name: true },
              },
            },
          },
        },
      },
    },
  });
}
