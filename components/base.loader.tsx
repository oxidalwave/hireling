import { Alert, Loader } from "@mantine/core";
import { useHireling } from "lib/hooks/useQuery";

interface BaseLoaderProps<T> {
  resourceKind: string;
  id?: string;
  onSuccess: (d: T) => void;
  children: (d: T) => JSX.Element;
}

export default function BaseLoader<T>({
  resourceKind,
  id,
  onSuccess,
  children,
}: BaseLoaderProps<T>) {
  const { data, isLoading, error } = useHireling(
    resourceKind,
    id ?? "",
    onSuccess
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Alert color="red">
        Could not load data. Please check your notifications.
      </Alert>
    );
  }

  if (data) {
    return children(data);
  }

  return <Alert color="red'">Could not generate JSX</Alert>;
}
