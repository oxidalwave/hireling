import { Alert, Spoiler, Stack, Text } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { Dispatch } from "react";
import { NewPlayerCharacterBackground } from "types/PlayerCharacter";
import Boost from "../Boost";

interface BackgroundOptsProps {
  background: NewPlayerCharacterBackground;
  setBackground: Dispatch<NewPlayerCharacterBackground>;
  data: {
    description: string;
    boosts;
  };
}

export default function BackgroundOpts({
  background,
  setBackground,
  data,
}: BackgroundOptsProps) {
  const { description, boosts } = data;
  const boostsData = getSegmentedControlDataFromBoosts(boosts);

  const updateBoost = (i: number) => (ability: string) => {
    let b = { ...background };
    let bs = b.boosts;
    bs[i] = { id: ability };
    b.boosts = bs;
    setBackground(b);
  };

  console.log(background.boosts);

  return (
    <Stack>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
        <RichTextEditor
          value={description}
          readOnly
          id="backgroundDescription"
        />
      </Spoiler>
      {background.boosts.length > 0 && (
        <>
          <Text>Boosts</Text>
          {background.boosts.map(({ id }, i: number) => (
            <Boost
              key={`background-boost-${id}`}
              value={id}
              onChange={updateBoost(i)}
              choices={boostsData[i]}
              isFlaw={!boosts[i].isBoost}
            />
          ))}
          {background.boosts.find(({ id }) => id === "") && (
            <Alert color="red">Please confirm all Boosts are selected.</Alert>
          )}
        </>
      )}
    </Stack>
  );
}
