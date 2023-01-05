import { z } from "zod";
import { procedure } from "server/trpc";
import {
  getPlayerClassById,
  getPlayerClasses,
} from "lib/playerclasses/playerclasses.service";

export const playerClassById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getPlayerClassById(input.id));

export const playerClasses = procedure.query(
  async () => await getPlayerClasses()
);
