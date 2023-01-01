import { Dispatch } from "react";
import { NewPlayerCharacterBackground } from "types/PlayerCharacter";
import CharacterOption from "../CharacterOption";
import BackgroundOptsLoader from "./BackgroundOptsLoader";
import { Select, SelectItem, Stack } from "@mantine/core";

interface BackgroundProps {
  background: NewPlayerCharacterBackground;
  setBackground: Dispatch<NewPlayerCharacterBackground>;
  backgrounds: SelectItem[];
}

export default function Background({
  background,
  setBackground,
  backgrounds,
}: BackgroundProps) {
  const updateBackground = (id) => {
    setBackground({
      id,
      boosts: [],
    });
  };

  console.log(background);

  return (
    <Stack>
      <Select
        searchable
        value={background.id}
        onChange={updateBackground}
        data={backgrounds}
        label="Background"
      />
      {background.id !== "" && (
        <BackgroundOptsLoader
          background={background}
          setBackground={setBackground}
        />
      )}
    </Stack>
  );
}
