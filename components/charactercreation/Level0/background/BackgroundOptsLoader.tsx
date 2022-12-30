import { Alert, Loader } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BackgroundOpts from "./BackgroundOpts";

export default function BackgroundOptsLoader({ background, setBackground }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["backgrounds", background.id],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/backgrounds/${background.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      const a = { ...background };
      console.log(d);
      a.boosts = d.boosts.map(() => ({ id: "" }));
      setBackground(a);
    },
    onError: (e: Error) => {
      showNotification({
        title: "Could not load Background",
        message: e.toString(),
      });
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
    console.log(background);
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
