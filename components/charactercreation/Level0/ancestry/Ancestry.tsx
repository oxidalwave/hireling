import { Dispatch } from "react";
import { NewPlayerCharacterAncestry } from "types/PlayerCharacter";
import AncestryOptsLoader from "./AncestryOptsLoader";
import { Select, SelectItem, Stack } from "@mantine/core";

interface AncestryProps {
  ancestry: NewPlayerCharacterAncestry;
  setAncestry: Dispatch<NewPlayerCharacterAncestry>;
  ancestries: SelectItem[];
}

export default function Ancestry({
  ancestry,
  setAncestry,
  ancestries,
}: AncestryProps) {
  const updateAncestry = (id: string) => {
    setAncestry({
      id,
      boosts: [],
      feats: [],
    });
  };

  return (
    <Stack>
      <Select
        searchable
        value={ancestry.id}
        onChange={updateAncestry}
        data={ancestries}
        label="Ancestry"
      />
      {ancestry.id !== "" && (
        <AncestryOptsLoader ancestry={ancestry} setAncestry={setAncestry} />
      )}
    </Stack>
  );
}
