import BaseLoader from "components/base.loader";
import { Dispatch } from "react";
import { NewPlayerCharacterAncestry } from "types/PlayerCharacter";
import AncestryOpts from "./AncestryOpts";

interface AncestryOptsLoaderProps {
  ancestry: NewPlayerCharacterAncestry;
  setAncestry: Dispatch<NewPlayerCharacterAncestry>;
}

export default function AncestryOptsLoader({
  ancestry,
  setAncestry,
}: AncestryOptsLoaderProps): JSX.Element {
  const resetFeatAndBoosts = (d) => {
    console.log(d);
    const a = { ...ancestry };
    a.feat = { id: "" };
    a.boosts = d.boosts.map(() => ({ id: "" }));
    setAncestry(a);
  };

  return (
    <BaseLoader
      resourceKind="ancestries"
      id={ancestry.id}
      onSuccess={resetFeatAndBoosts}
    >
      {(d) => (
        <AncestryOpts ancestry={ancestry} setAncestry={setAncestry} data={d} />
      )}
    </BaseLoader>
  );
}
