import { useHireling } from "lib/hooks/useQuery";
import {
  GetAncestriesResponse,
  GetAncestryByIdResponse,
} from "./ancestries.types";

export const useAncestry = (
  id: string,
  onSuccess: (d: GetAncestryByIdResponse) => void
) => useHireling<GetAncestryByIdResponse>("ancestries", id, onSuccess);

export const useAncestries = (onSuccess: (d: GetAncestriesResponse) => void) =>
  useHireling<GetAncestriesResponse>("ancestries", "", onSuccess);
