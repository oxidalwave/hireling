import { GetBackgroundsResponse } from "lib/backgrounds/backgrounds.types";
import { useHireling } from "lib/hooks/useQuery";
import { GetBackgroundByIdResponse } from "./backgrounds.types";

export const useBackground = (
  id: string,
  onSuccess: (d: GetBackgroundByIdResponse) => void
) => useHireling<GetBackgroundByIdResponse>("backgrounds", id, onSuccess);

export const useBackgrounds = (
  onSuccess: (d: GetBackgroundsResponse) => void
) => useHireling<GetBackgroundsResponse>("backgrounds", "", onSuccess);
