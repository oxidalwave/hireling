import {
  Alert,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import Boost from "../Boost";

export default function BackgroundOpts({ background, setBackground, data }) {
  const { description, boosts } = data;
  const boostsData = getSegmentedControlDataFromBoosts(boosts);

  const updateBoost = (ability, i) => {
    let b = { ...background };
    let bs = b.boosts;
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
      {background.boosts.length > 0 && (
        <>
          <Text>Boosts</Text>
          {background.boosts.map((id, i) => (
            <Boost
              key={`background-boost-${i}`}
              value={id}
              onChange={(a) => updateBoost(a, i)}
              choices={boostsData[i]}
              isFlaw={!boosts[i].isBoost}
            />
          ))}
          {background.boosts.find((b) => b.id === "") && (
            <Alert color="red">Please confirm all Boosts are selected.</Alert>
          )}
        </>
      )}
    </Stack>
  );
}
