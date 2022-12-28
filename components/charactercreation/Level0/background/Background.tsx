import CharacterOption from "../CharacterOption";
import BackgroundOptsLoader from "./BackgroundOptsLoader";

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
