import { ScrollArea, Stack } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import Boost from "../Boost";
import FeatSelection from "../feat/FeatSelection";

export interface PlayerClassOptsProps {
  playerClass: { id: string; boost: string; featId?: string };
  setPlayerClass;
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
    pc.boost = a;
    setPlayerClass(pc);
  };

  const updateFeat = (f) => {
    const pc = { ...playerClass };
    pc.featId = f;
    setPlayerClass(pc);
  };

  return (
    <Stack>
      <ScrollArea.Autosize maxHeight={240}>
        <RichTextEditor
          value={description}
          readOnly
          id="playerClassDescription"
        />
      </ScrollArea.Autosize>
      <Boost
        choices={boostOptions}
        value={playerClass.boost}
        onChange={updateBoost}
      />
      <FeatSelection
        feat={playerClass.featId}
        setFeat={updateFeat}
        feats={featOptions}
      />
    </Stack>
  );
}
