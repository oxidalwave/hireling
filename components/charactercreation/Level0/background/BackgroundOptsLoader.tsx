import BaseLoader from "components/base.loader";
import { GetBackgroundByIdResponse } from "lib/backgrounds/backgrounds.types";
import BackgroundOpts from "./BackgroundOpts";

export default function BackgroundOptsLoader({ background, setBackground }) {
  const resetBoosts = (d: GetBackgroundByIdResponse) => {
    const b = { ...background };
    b.boosts = d.boosts.map(() => ({ id: "" }));
    setBackground(b);
  };

  return (
    <BaseLoader
      resourceKind="backgrounds"
      id={background.id}
      onSuccess={resetBoosts}
    >
      {(d) => (
        <BackgroundOpts
          background={background}
          setBackground={setBackground}
          data={d}
        />
      )}
    </BaseLoader>
  );
}
