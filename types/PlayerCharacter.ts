export type Boost = { id: string }

export type NewPlayerCharacterFreeBoost = Boost;

export type NewPlayerCharacterAncestry = {
  id: string;
  boosts?: Boost[];
  flaws?: Boost[];
}

export type NewPlayerCharacterBackground = {
  id: string;
  boosts?: Boost[];
  flaws?: Boost[];
}

export type NewPlayerCharacterPlayerClass = {
  id: string;
  feat?: string;
  boost?: Boost;
}

export default interface NewPlayerCharacter {
  name: string;
  ancestry: NewPlayerCharacterAncestry;
  background: NewPlayerCharacterBackground;
  playerClass: NewPlayerCharacterPlayerClass;
}
