import { z } from "zod";
import { procedure } from "server/trpc";
import {
  getPlayerCharacterById,
  getPlayerCharacters,
  getUserPlayerCharacters,
} from "lib/playercharacters/playercharacters.service";

export const playerCharacterById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => await getPlayerCharacterById(input.id));

export const playerCharactersByUserId = procedure
  .input(
    z.object({
      email: z.string(),
    })
  )
  .query(async ({ input }) => await getUserPlayerCharacters(input.email));

export const playerCharacters = procedure.query(
  async () => await getPlayerCharacters()
);

const procedures = {
  playerCharacterById,
  playerCharacters,
  playerCharactersByUserId,
};
export default procedures;
