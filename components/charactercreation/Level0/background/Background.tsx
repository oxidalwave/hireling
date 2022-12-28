import { Dispatch } from "react";
import { NewPlayerCharacterBackground } from "types/PlayerCharacter";
import CharacterOption from "../CharacterOption";
import BackgroundOptsLoader from "./BackgroundOptsLoader";

interface BackgroundProps {
  background: NewPlayerCharacterBackground;
  setBackground: Dispatch<NewPlayerCharacterBackground>;
  backgrounds: { name: string, id: string }[]
}

export default function Background({ background, setBackground, backgrounds }) {
  return (
    <CharacterOption
      label="Background"
      option={background}
      setOption={setBackground}
      options={backgrounds.map((b) => ({
        label: b.name,
        value: b.id,
      }))}
    >
      {background.id !== "" && (
        <BackgroundOptsLoader
          background={background}
          setBackground={setBackground}
        />
      )}
    </CharacterOption>
  );
}
