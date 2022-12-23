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
}: AncestryOptsProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ancestries", ancestry?.id || "0"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/ancestries/${ancestry.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      const a = { ...ancestry };
      a.boosts = Array.from(
        Array(getSegmentedControlDataFromBoosts(true, d.boosts).length).keys()
      ).map((i) => "");
      a.flaws = Array.from(
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
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Alert color="red">
        Could not load the Ancestry. Please check your notifications.
      </Alert>
    );
  }

  if (data) {
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
            {boostsData.map((b, i) => (
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
        {flawsData.length > 0 && (
          <>
            <Text>Flaws</Text>
            {flawsData.map((f, i) => (
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
}
