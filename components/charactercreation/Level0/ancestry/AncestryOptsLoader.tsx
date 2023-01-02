import BaseLoader from "components/base.loader";
import { GetAncestryByIdResponse } from "lib/ancestry/ancestries.types";
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
  const resetFeatAndBoosts = (d: GetAncestryByIdResponse) => {
    console.log(d);
    const a = { ...ancestry };
    a.feats = [{ id: "" }];
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
