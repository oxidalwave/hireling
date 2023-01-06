import { z } from "zod";
import { procedure } from "server/trpc";
import {
  getEquipmentById,
  getAllEquipment,
} from "lib/equipment/equipment.service";

export const equipmentById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getEquipmentById(input.id));

export const equipment = procedure.query(async () => await getAllEquipment());
