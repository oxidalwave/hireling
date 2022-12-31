import { Alert, Loader } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAncestry } from "lib/ancestry/ancestries.hooks";
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
  console.log(ancestry);

  const { data, isLoading, error } = useAncestry(ancestry.id, (d) => {
    console.log(d);
    const a = { ...ancestry };
    a.feat = { id: "" };
    a.boosts = d.boosts.map(() => ({ id: "" }));
    setAncestry(a);
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
      <AncestryOpts ancestry={ancestry} setAncestry={setAncestry} data={data} />
    );
  }

  return <Alert color="red'">Could not generate JSX</Alert>;
}
