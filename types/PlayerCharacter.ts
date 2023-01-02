export type ResourceById = {
  id: string;
};

export type NewPlayerCharacterFreeBoost = ResourceById;

export type NewPlayerCharacterAncestry = ResourceById & {
  feats: ResourceById[];
  boosts: ResourceById[];
};

export type NewPlayerCharacterBackground = ResourceById & {
  boosts: ResourceById[];
};

export type NewPlayerCharacterPlayerClass = ResourceById & {
  feat: ResourceById;
  boosts: ResourceById[];
};

export default interface NewPlayerCharacter {
  name: string;
  ancestry: NewPlayerCharacterAncestry;
  background: NewPlayerCharacterBackground;
  playerClass: NewPlayerCharacterPlayerClass;
}
