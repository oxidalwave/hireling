import {
  Alert,
  Loader,
  LoadingOverlay,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NewPlayerCharacterAncestry } from "types/PlayerCharacter";
import AncestryOpts from "./AncestryOpts";

interface AncestryOptsLoaderProps {
  ancestry: NewPlayerCharacterAncestry;
  setAncestry;
}

export default function AncestryOptsLoader({
  ancestry,
  setAncestry,
}: AncestryOptsLoaderProps): JSX.Element {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ancestries", ancestry.id],
    queryFn: async () =>
      await axios
        .get(`http://localhost:3000/api/ancestries/${ancestry.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      console.log(d)
      const a = { ...ancestry };
      a.boostIds = d.boosts.map((a) => '');
      setAncestry(a);
    },
    onError: (e: Error) => {
      showNotification(e);
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div style={{ position: "relative" }}>
        <LoadingOverlay visible overlayBlur={2} />
        <Text>TEST</Text>
      </div>
    );
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