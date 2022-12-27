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

export default function BackgroundOpts({ background, setBackground }) {
  console.log(background);
  const { data, isLoading, error } = useQuery({
    queryKey: ["backgrounds", background.id],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/backgrounds/${background.id}`)
        .then((r) => r.data),
    onSuccess: ({ boosts }) => {
      const a = { ...background };
      a.boosts = Array.from(
        Array(getSegmentedControlDataFromBoosts(true, boosts).length).keys()
      ).map((i) => "");
      a.flaws = Array.from(
        Array(getSegmentedControlDataFromBoosts(false, boosts).length).keys()
      ).map((i) => "");
      setBackground(a);
    },
    onError: (e: Error) => {
      showNotification({
        title: "Could not load Background",
        message: e.toString(),
      });
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    console.log(`Loading Background ${background.id}`);
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
              id="backgroundDescription"
            />
          </ScrollArea.Autosize>
        )}
        {boostsData.length > 0 && (
          <>
            <Text>Boosts</Text>
            {background.boosts.map((b, i) => (
              <SegmentedControl
                color={b ? "blue" : "dark"}
                key={`background-boost-${i}`}
                value={b}
                onChange={(a) => updateBoost(i, a)}
                data={boostsData[i]}
              />
            ))}
            {background.boosts.includes("") && (
              <Alert color="red">Please confirm all Boosts are selected.</Alert>
            )}
          </>
        )}
        {flawsData.length > 0 && (
          <>
            <Text>Flaws</Text>
            {background.flaws.map((f, i) => (
              <SegmentedControl
                color={f ? "pink" : "dark"}
                key={`background-flaw-${i}`}
                value={f}
                onChange={(a) => updateFlaw(i, a)}
                data={flawsData[i]}
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

  return <Alert color="red'">Could not generate JSX</Alert>;
}
