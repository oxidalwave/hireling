import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiHost = `${process.env.NEXT_PUBLIC_URL}/api`;

export function useHireling<T>(
  kind: string,
  id: string = "",
  onSuccess: (d: T) => void
) {
  return useQuery<T, Error>({
    queryKey: id === "" ? [kind] : [kind, id],
    queryFn: () => axios.get(`${apiHost}/${kind}/${id}`).then((r) => r.data),
    onError: showNotification,
    onSuccess,
    refetchOnWindowFocus: false,
  });
}
