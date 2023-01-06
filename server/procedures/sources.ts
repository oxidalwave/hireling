import { z } from "zod";
import { procedure } from "server/trpc";
import {
  getSourceById,
  getSources,
  getSourceByName,
  getSourcesFor,
  updateSource,
} from "lib/source/source.service";

const sourceById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getSourceById(input.id));

const sources = procedure.query(async () => await getSources());

const sourceByName = procedure
  .input(
    z.object({
      name: z.string(),
    })
  )
  .query(async ({ input }) => await getSourceByName(input.name));

const sourcesFor = procedure
  .input(
    z.object({
      resourseKind: z.string(),
    })
  )
  .query(async ({ input }) => await getSourcesFor(input.resourseKind));

const updateSourceById = procedure
  .input(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  )
  .mutation(async ({ input }) => await updateSource(input.id, input.name));

const procedures = { sourceById, sources, sourceByName, sourcesFor };
export default procedures;
