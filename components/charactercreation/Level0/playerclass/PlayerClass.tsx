import { Select, Stack } from "@mantine/core";
import { Dispatch } from "react";
import { NewPlayerCharacterPlayerClass } from "types/PlayerCharacter";
import PlayerClassOptsLoader from "./PlayerClassOptsLoader";

export interface PlayerClassProps {
  playerClass: NewPlayerCharacterPlayerClass;
  setPlayerClass: Dispatch<NewPlayerCharacterPlayerClass>;
  playerClasses: { label: string; value: string }[];
}

export default function PlayerClass({
  playerClass,
  setPlayerClass,
  playerClasses,
}) {
  const updatePlayerClass = (pc) => {
    setPlayerClass({ id: pc, boost: { id: "" }, feat: { id: "" } });
  };

  return (
    <Stack>
      <Select
        searchable
        value={playerClass.id}
        onChange={updatePlayerClass}
        data={playerClasses}
        label="Class"
      />
      {playerClass.id !== "" && (
        <PlayerClassOptsLoader
          playerClass={playerClass}
          setPlayerClass={setPlayerClass}
        />
      )}
    </Stack>
  );
}
