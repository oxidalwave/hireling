import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { showNotification } from "@mantine/notifications";

type UseBackendProps = {
  path: string;
  onError?: (e: Error) => void;
  onSuccess?: (d) => void;
};

const useBackend = ({ path, onError, onSuccess }: UseBackendProps) => {
  let opts = {
    queryKey: [path],
    queryFn: () => axios.get(path).then((r) => r.data),
    onError:
      onError ??
      ((e: Error) => {
        showNotification({
          title: `There was an error fetching ${path}`,
          message: e.message,
        });
      }),
    onSuccess:
      onSuccess ??
      (() => {
        return;
      }),
  };

  return useQuery(opts);
};

export default useBackend;
