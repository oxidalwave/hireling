import { ScrollArea, Spoiler, Stack } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { Dispatch } from "react";
import { NewPlayerCharacterPlayerClass } from "types/PlayerCharacter";
import Boost from "../Boost";
import FeatSelection from "../feat/FeatSelection";

export interface PlayerClassOptsProps {
  playerClass: NewPlayerCharacterPlayerClass;
  setPlayerClass: Dispatch<NewPlayerCharacterPlayerClass>;
  description?: string;
  boostOptions: { label: string; value: string; disabled: boolean }[];
  featOptions: { label: string; value: string };
}

export default function PlayerClassOpts({
  playerClass,
  setPlayerClass,
  description,
  boostOptions,
  featOptions,
}: PlayerClassOptsProps) {
  const updateBoost = (a) => {
    let pc = { ...playerClass };
    pc.boost = { id: a };
    setPlayerClass(pc);
  };

  const updateFeat = (f) => {
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
      <Boost
        choices={boostOptions}
        value={playerClass.boost.id}
        onChange={updateBoost}
      />
      <FeatSelection
        feat={playerClass.feat.id}
        setFeat={updateFeat}
        feats={featOptions}
      />
    </Stack>
  );
}
