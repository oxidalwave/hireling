import { z } from "zod";
import { procedure } from "server/trpc";
import {
  getAncestries,
  getAncestryById,
} from "lib/ancestry/ancestries.service";

export const ancestryById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getAncestryById(input.id));

export const ancestries = procedure.query(async () => await getAncestries());
