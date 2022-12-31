import { useHireling } from "lib/hooks/useQuery";
import {
  GetAncestriesResponse,
  GetAncestryByIdResponse,
} from "./ancestries.types";

export const useAncestry = (id: string) =>
  useHireling<GetAncestryByIdResponse>("ancestries", id);

export const useAncestries = () =>
  useHireling<GetAncestriesResponse>("ancestries");
