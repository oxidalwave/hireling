import { Alert, Loader } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { Dispatch } from "react";
import { NewPlayerCharacterPlayerClass } from "types/PlayerCharacter";
import PlayerClassOpts from "./PlayerClassOpts";

export interface PlayerClassOptsProps {
  playerClass: NewPlayerCharacterPlayerClass;
  setPlayerClass: Dispatch<NewPlayerCharacterPlayerClass>;
}

export default function PlayerClassOptsLoader({
  playerClass,
  setPlayerClass,
}: PlayerClassOptsProps) {
  const {
    data: playerClassData,
    isLoading: playerClassIsLoading,
    error: playerClassError,
  } = useQuery({
    queryKey: ["playerclasses", playerClass.id],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/playerclasses/${playerClass.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      console.log(d);
      console.log(playerClass);
      const pc = { ...playerClass };
      pc.boost = { id: '' };
      pc.feat = { id: '' };
      setPlayerClass(pc);
    },
    onError: (e: Error) => {
      showNotification({
        title: "Could not load Player Class",
        message: e.toString(),
      });
    },
    refetchOnWindowFocus: false,
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
    showNotification(playerClassError);
    return <Alert color="red">Could not load Player Class</Alert>;
  }
  if (featsError) {
    showNotification(featsError);
    return <Alert color="red">Could not load Feats</Alert>;
  }

  if (playerClassData && featData) {
    const boostOptions = getSegmentedControlDataFromBoosts([
      playerClassData.boost,
    ]);

    const featOptions = featData.map((f) => ({
      value: f.id,
      label: f.name,
    }));

    return (
      <PlayerClassOpts
        playerClass={playerClass}
        setPlayerClass={setPlayerClass}
        description={playerClassData.description}
        boostOptions={boostOptions[0]}
        featOptions={featOptions}
      />
    );
  }

  showNotification({ message: "Error generating JSX" });
  return <Alert color="red">Error generating JSX</Alert>;
}
