import { Select, Stack } from "@mantine/core";
import { Dispatch } from "react";
import { ResourceById } from "types/PlayerCharacter";
import FeatDataLoader from "./FeatDataLoader";

interface FeatSelectionProps {
  feat: ResourceById;
  setFeat: Dispatch<ResourceById>;
  feats: { label: string, value: string }[]
}

export default function FeatSelection({ feat, setFeat, feats }) {
  console.log(feat)
  return (
    <Stack>
      <Select
        searchable
        label={`Select A Feat`}
        value={feat.id}
        onChange={setFeat}
        data={feats}
      />
      <FeatDataLoader id={feat.id} />
    </Stack>
  );
}
