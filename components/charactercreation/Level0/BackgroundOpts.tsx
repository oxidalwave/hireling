import {
  Alert,
  ScrollArea,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RichTextEditor from "components/RichTextEditor";

export default function BackgroundOpts({ background, setBackground }) {
  const opts = (isBoostCheck, d) =>
    d?.boosts
      ?.filter(({ isBoost }) => isBoost === isBoostCheck)
      ?.map((as) => {
        return [
          { label: "Strength", value: "str", disabled: !as.strength },
          { label: "Dexterity", value: "dex", disabled: !as.dexterity },
          { label: "Constitution", value: "con", disabled: !as.constitution },
          { label: "Intelligence", value: "int", disabled: !as.intelligence },
          { label: "Wisdom", value: "wis", disabled: !as.wisdom },
          { label: "Charisma", value: "cha", disabled: !as.charisma },
        ];
      }) ?? [];

  const { data } = useQuery({
    queryKey: ["backgrounds", background?.id || "0"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/backgrounds/${background.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      const a = { ...background };
      a.boosts = Array.from(Array(opts(true, d).length).keys()).map((i) => "");
      a.flaws = Array.from(Array(opts(false, d).length).keys()).map((i) => "");
      setBackground(a);
    },
  });

  const updateBoost = (i, ability) => {
    let b = { ...background };
    let bs = b.boosts;
    bs[i] = ability;
    b.boosts = bs;
    setBackground(b);
  };

  const updateFlaw = (i, ability) => {
    let b = { ...background };
    let fs = b.flaws;
    fs[i] = ability;
    b.flaws = fs;
    setBackground(b);
  };

  return (
    <Stack>
      {data?.description && (
        <ScrollArea.Autosize maxHeight={240}>
          <RichTextEditor
            value={data.description}
            readOnly
            id="backgroundDescription"
          />
        </ScrollArea.Autosize>
      )}
      {opts(true, data).length > 0 && (
        <>
          <Text>Boosts</Text>
          {opts(true, data).map((b, i) => (
            <SegmentedControl
              color={background.boosts[i] ? "blue" : "dark"}
              key={`background-boost-${i}`}
              value={background.boosts[i]}
              onChange={(a) => updateBoost(i, a)}
              data={b}
            />
          ))}
          {background.boosts.includes("") && (
            <Alert color="red">Please confirm all Boosts are selected.</Alert>
          )}
        </>
      )}
      {opts(false, data).length > 0 && (
        <>
          <Text>Flaws</Text>
          {opts(false, data).map((f, i) => (
            <SegmentedControl
              color={background.flaws[i] ? "pink" : "dark"}
              key={`background-flaw-${i}`}
              value={background.flaws[i]}
              onChange={(a) => updateFlaw(i, a)}
              data={f}
            />
          ))}
          {background.flaws.includes("") && (
            <Alert color="red">Please confirm all Flaws are selected.</Alert>
          )}
        </>
      )}
    </Stack>
  );
}
