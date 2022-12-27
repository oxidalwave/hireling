import {
  Alert,
  Loader,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RichTextEditor from "components/RichTextEditor";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import Boost from "../Boost";
import FeatSelection from "../feat/FeatSelection";

export interface PlayerClassOptsProps {
  playerClass: { id: string; boost: string; featId?: string };
  setPlayerClass;
}

export default function PlayerClassOpts({
  playerClass,
  setPlayerClass,
}: PlayerClassOptsProps) {
  const {
    data: playerClassData,
    isLoading: playerClassIsLoading,
    error: playerClassError,
  } = useQuery({
    queryKey: ["playerclasses", playerClass?.id || "0"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/playerclasses/${playerClass.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      console.log(d);
      const pc = { ...playerClass };
      pc.boost = d.boost;
      setPlayerClass(pc);
    },
    onError: (e: Error) => {
      showNotification({
        title: "Could not load Player Class",
        message: e.toString(),
      });
    },
  });

  const {
    data: featData,
    isLoading: featsIsLoading,
    error: featsError,
  } = useQuery({
    queryKey: ["feats", playerClassData?.name],
    queryFn: () =>
      axios
        .get(
          `http://localhost:3000/api/feats?className=${playerClassData?.name}`
        )
        .then((r) => r.data),
    onError: (e: Error) => {
      showNotification({
        title: "Could not load Feat",
        message: e.toString(),
      });
    },
  });

  if (playerClassIsLoading || featsIsLoading) {
    return <Loader />;
  }

  if (playerClassError) {
    return <Alert color="red">Could not load Player Class</Alert>;
  }
  if (featsError) {
    return <Alert color="red">Could not load Feats</Alert>;
  }

  if (playerClassData && featData) {
    const updateBoost = (a) => {
      let pc = { ...playerClass };
      pc.boost = a;
      setPlayerClass(pc);
    };

    const feats = featData?.map((f) => ({
      label: f.name,
      value: f.id,
    }));

    console.log(playerClassData);
    const { description, boost } = playerClassData;
    const boostsData = getSegmentedControlDataFromBoosts(true, [boost]);

    return (
      <Stack>
        {description && (
          <>
            <ScrollArea.Autosize maxHeight={240}>
              <RichTextEditor
                value={description}
                readOnly
                id="playerClassDescription"
              />
            </ScrollArea.Autosize>
            <Boost
              choices={boostsData[0]}
              value={playerClass.boost}
              setValue={updateBoost}
            />
          </>
        )}
        {feats?.length > 0 && (
          <FeatSelection
            feat={playerClass.featId}
            setFeat={(f) => {
              const pc = { ...playerClass };
              pc.featId = f;
              setPlayerClass(pc);
            }}
            feats={feats}
          />
        )}
      </Stack>
    );
  }

  showNotification({ message: "Error generating JSX" });
  return <Alert color="red">Error generating JSX</Alert>;
}
