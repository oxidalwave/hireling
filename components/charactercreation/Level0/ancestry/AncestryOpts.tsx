import { Alert, Spoiler, Stack, Text } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { Dispatch } from "react";
import { NewPlayerCharacterAncestry } from "types/PlayerCharacter";
import Boost from "../Boost";
import FeatSelection from "components/charactercreation/feat/FeatSelection";

interface AncestryOptsProps {
  ancestry: NewPlayerCharacterAncestry;
  setAncestry: Dispatch<NewPlayerCharacterAncestry>;
  data: {
    description: string;
    boosts;
    feats: { feat: { id: string; name: string } }[];
  };
}

export default function AncestryOpts({
  ancestry,
  setAncestry,
  data,
}: AncestryOptsProps) {
  console.log(ancestry);
  const { description, boosts, feats } = data;
  const boostsData = getSegmentedControlDataFromBoosts(boosts);

  const updateBoost = (i: number) => (abilityId: string) => {
    let a = { ...ancestry };
    let bs = a.boosts;
    bs[i] = { id: abilityId };
    a.boosts = bs;
    setAncestry(a);
  };

  const updateFeat = (f) => {
    let a = { ...ancestry };
    a.feat = { id: f };
    setAncestry(a);
  };

  return (
    <Stack>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
        <RichTextEditor value={description} readOnly id="ancestryDescription" />
      </Spoiler>
      <FeatSelection
        feat={ancestry.feat}
        setFeat={updateFeat}
        feats={feats.map(({ feat }) => ({ value: feat.id, label: feat.name }))}
      />
      {ancestry.boosts.length > 0 && (
        <>
          <Text>Boosts</Text>
          {ancestry.boosts.map(({ id }, i: number) => (
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
