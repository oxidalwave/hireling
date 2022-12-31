import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiHost = "http://localhost:3000/api";

export function useHireling<T>(kind: string, id: string = "") {
  return useQuery<T, Error>({
    queryKey: id === "" ? [kind] : [kind, id],
    queryFn: () => axios.get(`${apiHost}/${kind}/${id}`).then((r) => r.data),
    onError: showNotification,
    refetchOnWindowFocus: false,
  });
}
