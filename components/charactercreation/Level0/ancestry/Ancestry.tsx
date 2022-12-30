import { Dispatch } from "react";
import { NewPlayerCharacterAncestry } from "types/PlayerCharacter";
import AncestryOptsLoader from "./AncestryOptsLoader";
import { Select, Stack } from "@mantine/core";

interface AncestryProps {
  ancestry: NewPlayerCharacterAncestry;
  setAncestry: Dispatch<NewPlayerCharacterAncestry>;
  ancestries: { name: string; id: string }[];
}

export default function Ancestry({
  ancestry,
  setAncestry,
  ancestries,
}: AncestryProps) {
  const updateAncestry = (id) => {
    setAncestry({
      id,
      boosts: [],
    });
  };

  console.log(ancestry);

  return (
    <Stack>
      <Select
        searchable
        value={ancestry.id}
        onChange={updateAncestry}
        data={ancestries.map((b) => ({
          label: b.name,
          value: b.id,
        }))}
        label="Ancestry"
      />
      {ancestry.id !== "" && (
        <AncestryOptsLoader ancestry={ancestry} setAncestry={setAncestry} />
      )}
    </Stack>
  );
}
