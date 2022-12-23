import {
  Alert,
  Loader,
  ScrollArea,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";

export default function BackgroundOpts({ background, setBackground }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["backgrounds", background?.id || "0"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/backgrounds/${background.id}`)
        .then((r) => r.data),
    onSuccess: ({ boosts }) => {
      const a = { ...background };
      a.boosts = Array.from(Array(getSegmentedControlDataFromBoosts(true, boosts).length).keys()).map((i) => "");
      a.flaws = Array.from(Array(getSegmentedControlDataFromBoosts(false, boosts).length).keys()).map((i) => "");
      setBackground(a);
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

  if (data) {
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
            {boostsData.map((b, i) => (
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
        {flawsData.length > 0 && (
          <>
            <Text>Flaws</Text>
            {flawsData.map((f, i) => (
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
}
