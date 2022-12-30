import { Alert, Loader } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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

  const { data, isLoading, error } = useQuery({
    queryKey: ["ancestries", ancestry.id],
    queryFn: async () =>
      await axios
        .get(`http://localhost:3000/api/ancestries/${ancestry.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      console.log(d);
      const a = { ...ancestry };
      a.feat = { id: "" };
      a.boosts = d.boosts.map(() => ({ id: "" }));
      setAncestry(a);
    },
    onError: (e: Error) => {
      showNotification(e);
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    showNotification(error);
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
