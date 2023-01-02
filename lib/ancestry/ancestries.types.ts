import { Prisma } from "@prisma/client";

export type GetAncestryByIdResponse = Prisma.AncestryGetPayload<{
  select: {
    id: true;
    name: true;
    description: true;
    hp: true;
    size: true;
    speed: true;
    source: {
      select: {
        id: true;
        name: true;
      };
    };
    feats: {
      select: {
        feat: { select: { id: true; name: true } };
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
              select: { id: true; name: true; abbreviatedName: true };
            };
          };
        };
      };
    };
  };
}>;

export type GetAncestriesResponse = Prisma.AncestryGetPayload<{
  select: {
    id: true;
    name: true;
    source: true;
  };
}>[];
