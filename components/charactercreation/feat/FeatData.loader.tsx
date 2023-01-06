import { Alert, Loader } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { trpc } from "utils/trpc";
import FeatData from "./FeatData";

interface FeatDataByIdProps {
  id: string;
}

function FeatDataByIdLoader({ id }: FeatDataByIdProps) {
  console.log(id);

  const { data, isLoading } = trpc.featById.useQuery(
    { id },
    {
      onSuccess: console.log,
      onError: showNotification,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  const { description } = data;
  return <FeatData description={description} />;
}

export default function FeatDataById({ id }: FeatDataByIdProps) {
  if (id === "") {
    return <></>;
  } else {
    return <FeatDataByIdLoader id={id} />;
  }
}
