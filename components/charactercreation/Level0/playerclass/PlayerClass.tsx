import { Select, Stack } from "@mantine/core";
import PlayerClassOptsLoader from "./PlayerClassOptsLoader";

export interface PlayerClassProps {
  playerClass: { id: string; boost?: string; feat?: string };
  setPlayerClass;
  playerClasses: { label: string; value: string }[];
}

export default function PlayerClass({
  playerClass,
  setPlayerClass,
  playerClasses,
}) {
  const updatePlayerClass = (pc) => {
    setPlayerClass({ id: pc });
  };

  const val =
    playerClasses.filter((pc) => pc.value === playerClass.id)[0]?.value ?? "";

  return (
    <Stack>
      <Select
        searchable
        value={val}
        onChange={updatePlayerClass}
        data={playerClasses}
        label="Class"
      />
      {val !== "" && (
        <PlayerClassOptsLoader
          playerClass={playerClass}
          setPlayerClass={setPlayerClass}
        />
      )}
    </Stack>
  );
}
