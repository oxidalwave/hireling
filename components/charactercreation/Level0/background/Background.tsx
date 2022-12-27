import { Select, Stack } from "@mantine/core";
import BackgroundOpts from "./BackgroundOpts";

export default function Background({ background, setBackground, backgrounds }) {
  const updateBackground = (b) => {
    const backgroundcopy = { ...background };
    backgroundcopy.id = b;
    setBackground(backgroundcopy);
  };

  const val =
    backgrounds.filter((b) => b.value === background.id)[0]?.value ?? "";

  return (
    <Stack>
      <Select
        searchable
        value={val}
        onChange={updateBackground}
        data={backgrounds}
        label="Background"
      />
      {val !== "" && (
        <BackgroundOpts background={background} setBackground={setBackground} />
      )}
    </Stack>
  );
}
