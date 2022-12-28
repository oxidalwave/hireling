import { Alert, ScrollArea, Stack, Text } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { Dispatch } from "react";
import { NewPlayerCharacterAncestry } from "types/PlayerCharacter";
import Boost from "../Boost";

interface AncestryOptsProps {
  ancestry: NewPlayerCharacterAncestry;
  setAncestry: Dispatch<NewPlayerCharacterAncestry>;
  data: { description: string; boosts };
}

export default function AncestryOpts({
  ancestry,
  setAncestry,
  data,
}: AncestryOptsProps) {
  console.log(ancestry);
  const { description, boosts } = data;
  const boostsData = getSegmentedControlDataFromBoosts(boosts);

  const updateBoost = (abilityId: string, i: number) => {
    let a = { ...ancestry };
    let bs = a.boostIds;
    bs[i] = abilityId;
    a.boostIds = bs;
    setAncestry(a);
  };

  return (
    <Stack>
      <ScrollArea.Autosize maxHeight={240}>
        <RichTextEditor value={description} readOnly id="ancestryDescription" />
      </ScrollArea.Autosize>
      {ancestry.boostIds.length > 0 && (
        <>
          <Text>Boosts</Text>
          {ancestry.boostIds.map((id, i) => (
            <Boost
              key={`ancestry-boost-${i}`}
              value={id}
              onChange={(a) => updateBoost(a, i)}
              choices={boostsData[i]}
              isFlaw={!boosts[i].isBoost}
            />
          ))}
          {ancestry.boostIds.find((b) => b === "") && (
            <Alert color="red">Please confirm all Boosts are selected.</Alert>
          )}
        </>
      )}
    </Stack>
  );
}
