import { AbilityScore, Prisma } from "@prisma/client";

type Abbreviation = "str" | "dex" | "con" | "int" | "wis" | "cha";
const isAbilityScoreFor = (
  { abbreviatedName }: AbilityScore,
  abbreviation: Abbreviation
) => abbreviatedName === abbreviation;

const values = (abilityScores, abbreviation) =>
  abilityScores.find(({ abilityScore }) =>
    isAbilityScoreFor(abilityScore, abbreviation)
  );

export function getSegmentedControlDataFromBoosts(
  isBoostCheck: boolean,
  boosts: Prisma.BoostGetPayload<{
    include: { abilityScores: { include: { abilityScore: true } } };
  }>[]
) {
  return (
    boosts
      ?.filter(({ isBoost }) => isBoost === isBoostCheck)
      ?.map(({ abilityScores }) => {
        return [
          { label: "Strength", abbreviation: "str" },
          { label: "Dexterity", abbreviation: "dex" },
          { label: "Constitution", abbreviation: "con" },
          { label: "Intelligence", abbreviation: "int" },
          { label: "Wisdom", abbreviation: "wis" },
          { label: "Charisma", abbreviation: "cha" },
        ].map(({ label, abbreviation }) => {
          const vs = values(abilityScores, abbreviation);

          return {
            label,
            value: vs?.id ?? "",
            disabled: !vs,
          };
        });
      }) ?? []
  );
}