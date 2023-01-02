import { Alert, Spoiler, Stack, Text } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { Dispatch } from "react";
import {
  NewPlayerCharacterAncestry,
  ResourceById,
} from "types/PlayerCharacter";
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

  const updateFeat = (i: number) => (featId: string) => {
    let a = { ...ancestry };
    let fs = a.feats;
    fs[i] = { id: featId };
    a.feats = fs;
    setAncestry(a);
  };

  return (
    <Stack>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
        <RichTextEditor value={description} readOnly id="ancestryDescription" />
      </Spoiler>
      {ancestry.feats.map((f: ResourceById, i: number) => (
        <FeatSelection
          key={`feat-${i}`}
          feat={f}
          setFeat={updateFeat(i)}
          feats={feats.map(({ feat }) => ({
            value: feat.id,
            label: feat.name,
          }))}
        />
      ))}
      <Text>Boosts</Text>
      <Stack>
        {ancestry.boosts.map((b: ResourceById, i: number) => (
          <Boost
            key={`ancestry-boost-${i}`}
            value={b.id}
            onChange={updateBoost(i)}
            choices={boostsData[i]}
            isFlaw={!boosts[i].isBoost}
          />
        ))}
      </Stack>
      {ancestry.boosts.find(({ id }) => id === "") && (
        <Alert color="red">Please confirm all Boosts are selected.</Alert>
      )}
    </Stack>
  );
}
