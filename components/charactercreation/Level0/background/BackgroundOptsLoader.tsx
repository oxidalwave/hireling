import { Alert, Loader } from "@mantine/core";
import { useBackground } from "lib/backgrounds/backgrounds.hooks";
import BackgroundOpts from "./BackgroundOpts";

export default function BackgroundOptsLoader({ background, setBackground }) {
  const { data, isLoading, error } = useBackground(background.id, (d) => {
    console.log(d);
    const b = { ...background };
    b.boosts = d.boosts.map(() => ({ id: "" }));
    setBackground(b);
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Alert color="red">
        Could not load the Ancestry. Please check your notifications.
      </Alert>
    );
  }

  if (data) {
    return (
      <BackgroundOpts
        background={background}
        setBackground={setBackground}
        data={data}
      />
    );
  }

  return <Alert color="red'">Could not generate JSX</Alert>;
}
