export type GetAncestryByIdResponse = {
  id: string;
  name: string;
  description: string;
  hp: number;
  size: string;
  speed: number;
  source: {
    id: string;
    name: string;
  };
  feats: {
    feat: {
      id: string;
      name: string;
    };
  }[];
  boosts: {
    id: string;
    isBoost: boolean;
    abilityScores: {
      abilityScore: {
        id: string;
        name: string;
        abbreviatedName: string;
      };
    }[];
  }[];
};

export type GetAncestriesResponse = {
  id: string;
  name: string;
  source: {
    id: string;
    name: string;
  };
}[];
