import { Center, Loader } from "@mantine/core";
import { GetAncestryByIdResponse } from "lib/ancestry/ancestries.types";
import { Dispatch } from "react";
import { NewPlayerCharacterAncestry } from "types/PlayerCharacter";
import { trpc } from "utils/trpc";
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

  const { data } = trpc.ancestryById.useQuery(
    { id: ancestry.id },
    { onSuccess: resetFeatAndBoosts }
  );

  if (!data) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <AncestryOpts ancestry={ancestry} setAncestry={setAncestry} data={data} />
  );
}
