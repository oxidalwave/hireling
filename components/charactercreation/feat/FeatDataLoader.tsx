import { Alert, Loader } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FeatData from "./FeatData";

interface FeatDataLoader {
  id: string;
}

function FeatDataLoaderHandler({ id }: FeatDataLoader) {
  console.log(id);

  const { data, error, isLoading } = useQuery({
    queryKey: ["feat", id],
    queryFn: () =>
      axios.get(`http://localhost:3000/api/feats/${id}`).then((r) => r.data),
    onSuccess: console.log,
    onError: showNotification,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Alert color="red">
        Could not load the Feat. Please check your notifications.
      </Alert>
    );
  }

  const { description } = data;
  return <FeatData id={id} description={description} />;
}

export default function FeatDataLoader({ id }: FeatDataLoader) {
  if (id === "") {
    return <></>;
  } else {
    return <FeatDataLoaderHandler id={id} />;
  }
}
