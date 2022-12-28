export type ResourceById = {
  id: string;
}

export type NewPlayerCharacterFreeBoost = ResourceById;

export type NewPlayerCharacterAncestry = ResourceById & {
  boostIds: string[];
}

export type NewPlayerCharacterBackground = ResourceById & {
  boostIds: string[];
}

export type NewPlayerCharacterPlayerClass = ResourceById & {
  featId: string;
  boostId: string;
}

export default interface NewPlayerCharacter {
  name: string;
  ancestry: NewPlayerCharacterAncestry;
  background: NewPlayerCharacterBackground;
  playerClass: NewPlayerCharacterPlayerClass;
}
