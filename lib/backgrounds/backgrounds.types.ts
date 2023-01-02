import { Prisma } from "@prisma/client";

export type GetBackgroundByIdResponse = Prisma.BackgroundGetPayload<{
  select: {
    id: true;
    name: true;
    description: true;
    source: {
      select: {
        id: true;
        name: true;
      };
    };
    boosts: {
      select: {
        id: true;
        isBoost: true;
        abilityScores: {
          select: {
            id: true;
            abilityScore: {
              select: {
                id: true;
                name: true;
              };
            };
          };
        };
      };
    };
  };
}>;

export type GetBackgroundsResponse = Prisma.BackgroundGetPayload<{
  select: {
    id: true;
    name: true;
    source: {
      select: {
        id: true;
        name: true;
      };
    };
  };
}>[];
