import { SegmentedControlItem } from "@mantine/core";
import { AbilityScore, Prisma } from "@prisma/client";

type Abbreviation =
  | "Strength"
  | "Dexterity"
  | "Constitution"
  | "Intelligence"
  | "Wisdom"
  | "Charisma";
const isAbilityScoreFor = ({ name }: AbilityScore, nm: Abbreviation) =>
  name === nm;

const values = (abilityScores, abbreviation) =>
  abilityScores.find(({ abilityScore }) =>
    isAbilityScoreFor(abilityScore, abbreviation)
  );

export function getSegmentedControlDataFromBoosts(
  boosts: Prisma.BoostGetPayload<{
    include: { abilityScores: { include: { abilityScore: true } } };
  }>[]
): SegmentedControlItem[][] {
  console.log(boosts);

  return (
    boosts?.map(({ abilityScores }) => {
      return [
        "Strength",
        "Dexterity",
        "Constitution",
        "Intelligence",
        "Wisdom",
        "Charisma",
      ].map((label) => {
        const vs = values(abilityScores, label);
        return {
          label,
          value: vs?.id ?? "",
          disabled: !vs,
        };
      });
    }) ?? []
  );
}
