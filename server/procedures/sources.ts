import { z } from "zod";
import { procedure } from "server/trpc";
import {
  getSourceById,
  getSources,
  getSourceByName,
  getSourcesFor,
} from "lib/source/source.service";

export const sourceById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getSourceById(input.id));

export const sources = procedure.query(async () => await getSources());

export const sourceByName = procedure
  .input(
    z.object({
      name: z.string(),
    })
  )
  .query(async ({ input }) => await getSourceByName(input.name));

export const sourcesFor = procedure
  .input(
    z.object({
      resourseKind: z.string(),
    })
  )
  .query(async ({ input }) => await getSourcesFor(input.resourseKind));
