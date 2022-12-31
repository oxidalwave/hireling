import { Select, SelectItem, Stack } from "@mantine/core";
import { Dispatch } from "react";
import { ResourceById } from "types/PlayerCharacter";
import FeatDataById from "./FeatData.loader";

interface FeatSelectionProps {
  feat: ResourceById;
  setFeat: Dispatch<string>;
  feats: SelectItem[];
}

export default function FeatSelection({
  feat,
  setFeat,
  feats,
}: FeatSelectionProps) {
  console.log(feat);
  return (
    <Stack>
      <Select
        searchable
        label={`Select A Feat`}
        value={feat.id}
        onChange={setFeat}
        data={feats}
      />
      <FeatDataById id={feat.id} />
    </Stack>
  );
}
