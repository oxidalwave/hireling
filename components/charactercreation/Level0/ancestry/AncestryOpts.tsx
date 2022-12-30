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

  const updateBoost = (i: number) => (abilityId: string) => {
    let a = { ...ancestry };
    let bs = a.boosts;
    bs[i] = { id: abilityId };
    a.boosts = bs;
    setAncestry(a);
  };

  return (
    <Stack>
      <ScrollArea.Autosize maxHeight={240}>
        <RichTextEditor value={description} readOnly id="ancestryDescription" />
      </ScrollArea.Autosize>
      {ancestry.boosts.length > 0 && (
        <>
          <Text>Boosts</Text>
          {ancestry.boosts.map(({ id }, i) => (
            <Boost
              key={`ancestry-boost-${i}`}
              value={id}
              onChange={updateBoost(i)}
              choices={boostsData[i]}
              isFlaw={!boosts[i].isBoost}
            />
          ))}
          {ancestry.boosts.find(({ id }) => id === "") && (
            <Alert color="red">Please confirm all Boosts are selected.</Alert>
          )}
        </>
      )}
    </Stack>
  );
}
