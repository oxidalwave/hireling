import { Prisma } from "@prisma/client";

export type GetHeritageBIdResponse = Prisma.HeritageGetPayload<{}> | null;

export type GetHertitagesResponse = Prisma.HeritageGetPayload<{}>[]
