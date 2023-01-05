import prisma from "lib/prisma";
import {
  GetHeritageBIdResponse,
  GetHertitagesResponse,
} from "./heritages.types";

export async function getHeritageById(
  id: string
): Promise<GetHeritageBIdResponse> {
  return await prisma.heritage.findUnique({ where: { id } });
}

export async function getHeritages(): Promise<GetHertitagesResponse> {
  return await prisma.heritage.findMany();
}
