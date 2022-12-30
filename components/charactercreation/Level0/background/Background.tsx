import { Dispatch } from "react";
import { NewPlayerCharacterBackground } from "types/PlayerCharacter";
import CharacterOption from "../CharacterOption";
import BackgroundOptsLoader from "./BackgroundOptsLoader";
import { Select, Stack } from "@mantine/core";

interface BackgroundProps {
  background: NewPlayerCharacterBackground;
  setBackground: Dispatch<NewPlayerCharacterBackground>;
  backgrounds: { name: string; id: string }[];
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
        data={backgrounds.map((b) => ({
          label: b.name,
          value: b.id,
        }))}
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
