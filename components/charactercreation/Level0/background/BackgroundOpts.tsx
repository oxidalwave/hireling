import {
  Alert,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { Dispatch } from "react";
import { NewPlayerCharacterBackground } from "types/PlayerCharacter";
import Boost from "../Boost";

interface BackgroundOptsProps {
  background: NewPlayerCharacterBackground;
  setBackground: Dispatch<NewPlayerCharacterBackground>;
  data;
}

export default function BackgroundOpts({ background, setBackground, data }) {
  const { description, boosts } = data;
  const boostsData = getSegmentedControlDataFromBoosts(boosts);

  const updateBoost = (i: number) => (ability: string) => {
    let b = { ...background };
    let bs = b.boostIds;
    bs[i] = ability;
    b.boosts = bs;
    setBackground(b);
  };

  return (
    <Stack>
      <ScrollArea.Autosize maxHeight={240}>
        <RichTextEditor
          value={description}
          readOnly
          id="backgroundDescription"
        />
      </ScrollArea.Autosize>
      {background.boostIds.length > 0 && (
        <>
          <Text>Boosts</Text>
          {background.boostIds.map((id: string, i: number) => (
            <Boost
              key={`background-boost-${i}`}
              value={id}
              onChange={updateBoost(i)}
              choices={boostsData[i]}
              isFlaw={!boosts[i].isBoost}
            />
          ))}
          {background.boostIds.find((b: string) => b === "") && (
            <Alert color="red">Please confirm all Boosts are selected.</Alert>
          )}
        </>
      )}
    </Stack>
  );
}
