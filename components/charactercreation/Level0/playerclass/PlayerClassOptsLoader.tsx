import { Alert, Loader } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSegmentedControlDataFromBoosts } from "lib/boosts/boostUtils";
import { Dispatch } from "react";
import { NewPlayerCharacterPlayerClass } from "types/PlayerCharacter";
import { trpc } from "utils/trpc";
import PlayerClassOpts from "./PlayerClassOpts";

export interface PlayerClassOptsProps {
  playerClass: NewPlayerCharacterPlayerClass;
  setPlayerClass: Dispatch<NewPlayerCharacterPlayerClass>;
}

export default function PlayerClassOptsLoader({
  playerClass,
  setPlayerClass,
}: PlayerClassOptsProps) {
  function updatePlayerClass(d) {
    console.log(d);
    console.log(playerClass);
    const pc = { ...playerClass };
    pc.boosts = d.boosts.map(() => ({ id: "" }));
    pc.feat = { id: "" };
    setPlayerClass(pc);
  }

  const { data: playerClassData, isLoading: playerClassIsLoading } =
    trpc.playerClassById.useQuery(
      { id: playerClass.id },
      {
        onSuccess: updatePlayerClass,
        onError: showNotification,
        refetchOnWindowFocus: false,
      }
    );

  const { data: featData, isLoading: featsIsLoading } =
    trpc.classFeats.useQuery(
      { className: playerClassData?.name },
      {
        onError: showNotification,
        refetchOnWindowFocus: false,
      }
    );

  if (playerClassIsLoading || featsIsLoading) {
    return <Loader />;
  }

  if (playerClassData && featData) {
    const boostOptions = getSegmentedControlDataFromBoosts(
      playerClassData.boosts
    );

    const featOptions = featData.map((f) => ({
      value: f.id,
      label: f.name,
    }));

    return (
      <PlayerClassOpts
        playerClass={playerClass}
        setPlayerClass={setPlayerClass}
        description={playerClassData.description}
        boostOptions={boostOptions}
        featOptions={featOptions}
      />
    );
  }

  showNotification({ message: "Error generating JSX" });
  return <Alert color="red">Error generating JSX</Alert>;
}
