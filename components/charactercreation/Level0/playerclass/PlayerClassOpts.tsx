import {
  SegmentedControlItem,
  SelectItem,
  Spoiler,
  Stack,
} from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { Dispatch } from "react";
import { NewPlayerCharacterPlayerClass } from "types/PlayerCharacter";
import Boost from "../Boost";
import FeatSelection from "components/charactercreation/feat/FeatSelection";

export interface PlayerClassOptsProps {
  playerClass: NewPlayerCharacterPlayerClass;
  setPlayerClass: Dispatch<NewPlayerCharacterPlayerClass>;
  description?: string;
  boostOptions: SegmentedControlItem[][];
  featOptions: SelectItem[];
}

export default function PlayerClassOpts({
  playerClass,
  setPlayerClass,
  description,
  boostOptions,
  featOptions,
}: PlayerClassOptsProps) {
  const updateBoost = (i: number) => (abilityId: string) => {
    let a = { ...playerClass };
    let bs = a.boosts;
    bs[i] = { id: abilityId };
    a.boosts = bs;
    setPlayerClass(a);
  };

  const updateFeat = (f: string) => {
    const pc = { ...playerClass };
    pc.feat = { id: f };
    setPlayerClass(pc);
  };

  return (
    <Stack>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
        <RichTextEditor
          value={description}
          readOnly
          id="playerClassDescription"
        />
      </Spoiler>
      {boostOptions.map((b, i) => (
        <Boost
          key={`player-class-boost-${i}`}
          choices={b}
          value={playerClass.boosts[i].id}
          onChange={updateBoost(i)}
        />
      ))}

      <FeatSelection
        feat={playerClass.feat}
        setFeat={updateFeat}
        feats={featOptions}
      />
    </Stack>
  );
}
