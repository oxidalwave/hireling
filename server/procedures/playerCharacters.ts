import { z } from "zod";
import { procedure } from "server/trpc";
import {
  createPlayerCharacter,
  getPlayerCharacterById,
  getPlayerCharacters,
  getUserPlayerCharacters,
  initNewCharacter,
  updateCharacterName,
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

export const initializePlayerCharacter = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .mutation(async () => {
    await initNewCharacter();
  });

const zConnect = z.object({
  connect: z.object({
    id: z.string(),
  }),
});
export const createPlayerCharacterLEGACY = procedure
  .input(
    z.object({
      name: z.string(),
      ancestry: zConnect,
      background: zConnect,
      playerClass: zConnect,
      abilityScoreBoosts: z.object({
        create: z.array(
          z.object({
            abilityScoreBoost: zConnect,
          })
        ),
      }),
      feats: z.object({
        create: z.array(
          z.object({
            feat: zConnect,
          })
        ),
      }),
    })
  )
  .mutation(async ({ input }) => {
    console.log(input);
    try {
      const playerCharacter = await createPlayerCharacter(input);
      console.log(playerCharacter);
      return playerCharacter;
    } catch (e) {
      console.log(e);
      throw e;
    }
  });

export const updatePlayerCharacter = procedure
  .input(z.object({ id: z.string(), name: z.string() }))
  .mutation(
    async ({ input }) => await updateCharacterName(input.id, input.name)
  );

const procedures = {
  playerCharacterById,
  playerCharacters,
  playerCharactersByUserId,
  initializePlayerCharacter,
  updatePlayerCharacter,
  createPlayerCharacterLEGACY,
};
export default procedures;
