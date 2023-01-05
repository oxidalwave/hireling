import { z } from "zod";
import { procedure } from "server/trpc";
import { getFeatById, getFeats, getClassFeats } from "lib/feats/feats.service";

export const featById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getFeatById(input.id));

export const feats = procedure.query(async () => await getFeats());

export const classFeats = procedure
  .input(z.object({ className: z.string() }))
  .query(async ({ input }) => await getClassFeats(input.className));
