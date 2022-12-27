import {
  Alert,
  Loader,
  ScrollArea,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";

interface AncestryOptsProps {
  ancestry: {
    id: string;
    boosts: string[];
    flaws: string[];
  };
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
      a.boosts = Array.from(
        // Set boosts to a list of empty strings the same length as the payload's boosts
        Array(getSegmentedControlDataFromBoosts(true, d.boosts).length).keys()
      ).map((i) => "");
      a.flaws = Array.from(
        // Set boosts to a list of empty strings the same length as the payload's boosts
        Array(getSegmentedControlDataFromBoosts(false, d.boosts).length).keys()
      ).map((i) => "");
      setAncestry(a);
    },
    onError: (e: Error) => {
      showNotification({
        title: "Could not load Ancestry",
        message: e.toString(),
      });
    },
    refetchOnWindowFocus: false
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

    const updateFlaw = (i, ability) => {
      let a = { ...ancestry };
      let fs = a.flaws;
      fs[i] = ability;
      a.flaws = fs;
      setAncestry(a);
    };
    
    const { description, boosts } = data;
    const boostsData = getSegmentedControlDataFromBoosts(true, boosts);
    const flawsData = getSegmentedControlDataFromBoosts(false, boosts);

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
              <SegmentedControl
                color={b ? "blue" : "dark"}
                key={`ancestry-boost-${i}`}
                value={b}
                onChange={(a) => updateBoost(i, a)}
                data={boostsData[i]}
              />
            ))}
            {ancestry.boosts.includes("") && (
              <Alert color="red">Please confirm all Boosts are selected.</Alert>
            )}
          </>
        )}
        {flawsData.length > 0 && (
          <>
            <Text>Flaws</Text>
            {ancestry.flaws.map((f, i) => (
              <SegmentedControl
                color={f ? "pink" : "dark"}
                key={`ancestry-flaw-${i}`}
                value={f}
                onChange={(a) => updateFlaw(i, a)}
                data={flawsData[i]}
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

  return <Alert color="red'">Could not generate JSX</Alert>;
}
