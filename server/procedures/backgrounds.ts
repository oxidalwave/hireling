import { z } from "zod";
import { procedure } from "server/trpc";
import {
  getBackgroundById,
  getBackgrounds,
} from "lib/backgrounds/backgrounds.service";

export const backgroundById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getBackgroundById(input.id));

export const backgrounds = procedure.query(async () => await getBackgrounds());
