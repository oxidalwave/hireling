import { GetBackgroundsResponse } from "lib/backgrounds/backgrounds.types";
import { useHireling } from "lib/hooks/useQuery";
import { GetBackgroundByIdResponse } from "./backgrounds.types";

export const useBackground = (id: string) =>
  useHireling<GetBackgroundByIdResponse>("backgrounds", id);

export const useBackgrounds = () => useHireling<GetBackgroundsResponse>("backgrounds");
