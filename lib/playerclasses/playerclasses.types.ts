export type GetPlayerClassByIdResponse = {
  id: string;
  name: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
  boosts: {
    id: string;
    isBoost: boolean;
    abilityScores: {
      id: string;
      abilityScore: {
        id: string;
        name: string;
      };
    }[];
  }[];
};

export type GetPlayerClassesResponse = {
  id: string;
  name: string;
  source: {
    id: string;
    name: string;
  };
}[];
