import { Center, Loader } from "@mantine/core";
import { GetBackgroundByIdResponse } from "lib/backgrounds/backgrounds.types";
import { trpc } from "utils/trpc";
import BackgroundOpts from "./BackgroundOpts";

interface BackgroundOptsLoaderProps {
  background;
  setBackground;
}

export default function BackgroundOptsLoader({
  background,
  setBackground,
}: BackgroundOptsLoaderProps) {
  const resetBoosts = (d: GetBackgroundByIdResponse) => {
    const b = { ...background };
    b.boosts = d.boosts.map(() => ({ id: "" }));
    setBackground(b);
  };

  const { data } = trpc.backgroundById.useQuery(
    { id: background.id },
    { onSuccess: resetBoosts }
  );

  if (!data) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <BackgroundOpts
      background={background}
      setBackground={setBackground}
      data={data}
    />
  );
}
