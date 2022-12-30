export type ResourceById = {
  id: string;
};

export type NewPlayerCharacterFreeBoost = ResourceById;

export type NewPlayerCharacterAncestry = ResourceById & {
  feat: ResourceById;
  boosts: ResourceById[];
};

export type NewPlayerCharacterBackground = ResourceById & {
  boosts: ResourceById[];
};

export type NewPlayerCharacterPlayerClass = ResourceById & {
  feat: { id: string };
  boost: { id: string };
};

export default interface NewPlayerCharacter {
  name: string;
  ancestry: NewPlayerCharacterAncestry;
  background: NewPlayerCharacterBackground;
  playerClass: NewPlayerCharacterPlayerClass;
}
