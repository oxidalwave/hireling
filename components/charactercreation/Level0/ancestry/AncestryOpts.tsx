import {
  Alert,
  Loader,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { NewPlayerCharacterAncestry } from "types/PlayerCharacter";
import Boost from "../Boost";

interface AncestryOptsProps {
  ancestry: NewPlayerCharacterAncestry;
  setAncestry;
}

export default function AncestryOpts({
  ancestry,
  setAncestry,
}: AncestryOptsProps): JSX.Element {
  console.log(ancestry);

  const { data, isLoading, error } = useQuery({
    queryKey: ["ancestries", ancestry.id],
    queryFn: async () =>
      await axios
        .get(`http://localhost:3000/api/ancestries/${ancestry.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      console.log(d);
      const a = { ...ancestry };
      const boosts = d.boosts;
      a.boosts = boosts.map((b) => "");
      setAncestry(a);
    },
    onError: (e: Error) => {
      showNotification({
        title: "Could not load Ancestry",
        message: e.toString(),
      });
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    console.log(`Loading Ancestry ${ancestry.id}`);
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return (
      <Alert color="red">
        Could not load the Ancestry. Please check your notifications.
      </Alert>
    );
  }

  if (data) {
    console.log(data);

    const updateBoost = (i, ability) => {
      let a = { ...ancestry };
      let bs = a.boosts;
      bs[i] = ability;
      a.boosts = bs;
      setAncestry(a);
    };

    const { description, boosts } = data;
    const boostsData = getSegmentedControlDataFromBoosts(boosts);
    console.log(ancestry);
    console.log(boostsData);

    return (
      <Stack>
        {description && (
          <ScrollArea.Autosize maxHeight={240}>
            <RichTextEditor
              value={description}
              readOnly
              id="ancestryDescription"
            />
          </ScrollArea.Autosize>
        )}
        {boostsData.length > 0 && (
          <>
            <Text>Boosts</Text>
            {ancestry.boosts.map((b, i) => (
              <Boost
                key={`ancestry-boost-${i}`}
                value={b.id}
                setValue={(a) => updateBoost(i, a)}
                choices={boostsData[i]}
                isFlaw={!boosts[i].isBoost}
              />
            ))}
            {ancestry.boosts.find((b) => b.id === "") && (
              <Alert color="red">Please confirm all Boosts are selected.</Alert>
            )}
          </>
        )}
      </Stack>
    );
  }

  return <Alert color="red'">Could not generate JSX</Alert>;
}
