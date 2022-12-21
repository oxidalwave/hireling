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

interface AncestryOptsProps {
  ancestry: {
    id: string;
    boosts: string[];
    flaws: string[];
  };
  setAncestry;
}

export default function AncestryOpts({ ancestry, setAncestry }) {
  const opts = (isBoostCheck, d) =>
    d?.boosts
      ?.filter(({ isBoost }) => isBoost === isBoostCheck)
      ?.map((as) => {
        console.log(as.abilityScores)
        return [
          { label: "Strength", value: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'str')[0]?.id ?? '', disabled: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'str').length === 0 },
          { label: "Dexterity", value: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'dex')[0]?.id ?? '', disabled: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'dex').length === 0 },
          { label: "Constitution", value: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'con')[0]?.id ?? '', disabled: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'con').length === 0 },
          { label: "Intelligence", value: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'int')[0]?.id ?? '', disabled: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'int').length === 0 },
          { label: "Wisdom", value: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'wis')[0]?.id ?? '', disabled: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'wis').length === 0 },
          { label: "Charisma", value: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'cha')[0]?.id ?? '', disabled: as.abilityScores.filter((a) => a.abilityScore.abbreviatedName === 'cha').length === 0 },
        ];
      }) ?? [];

  const { data } = useQuery({
    queryKey: ["ancestries", ancestry?.id || "0"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/ancestries/${ancestry.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      const a = { ...ancestry };
      a.boosts = Array.from(Array(opts(true, d).length).keys()).map((i) => "");
      a.flaws = Array.from(Array(opts(false, d).length).keys()).map((i) => "");
      setAncestry(a);
    },
  });

  const updateBoost = (i, ability) => {
    let a = { ...ancestry };
    let bs = a.boosts;
    bs[i] = ability;
    a.boosts = bs;
    setAncestry(a);
  };

  const updateFlaw = (i, ability) => {
    let a = { ...ancestry };
    let fs = a.flaws;
    fs[i] = ability;
    a.flaws = fs;
    setAncestry(a);
  };

  return (
    <Stack>
      {data?.description && (
        <ScrollArea.Autosize maxHeight={240}>
          <RichTextEditor
            value={data.description}
            readOnly
            id="ancestryDescription"
          />
        </ScrollArea.Autosize>
      )}
      {opts(true, data).length > 0 && (
        <>
          <Text>Boosts</Text>
          {opts(true, data).map((b, i) => (
            <SegmentedControl
              color={ancestry.boosts[i] ? "blue" : "dark"}
              key={`ancestry-boost-${i}`}
              value={ancestry.boosts[i]}
              onChange={(a) => updateBoost(i, a)}
              data={b}
            />
          ))}
          {ancestry.boosts.includes("") && (
            <Alert color="red">Please confirm all Boosts are selected.</Alert>
          )}
        </>
      )}
      {opts(false, data).length > 0 && (
        <>
          <Text>Flaws</Text>
          {opts(false, data).map((f, i) => (
            <SegmentedControl
              color={ancestry.flaws[i] ? "pink" : "dark"}
              key={`ancestry-flaw-${i}`}
              value={ancestry.flaws[i]}
              onChange={(a) => updateFlaw(i, a)}
              data={f}
            />
          ))}
          {ancestry.flaws.includes("") && (
            <Alert color="red">Please confirm all Flaws are selected.</Alert>
          )}
        </>
      )}
    </Stack>
  );
}
