import {
  Card,
  Flex,
  Grid,
  Group,
  NumberInput,
  SimpleGrid,
  Text,
} from "@mantine/core";

type AbilityScoresArray = {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
};

type AbilityScoresProps = {
  boosts;
  flaws;
};

const AbilityScores = ({ boosts, flaws }: AbilityScoresProps) => {
  const getModsFor = (abilityScore: string) => {
    const boostCount = boosts.filter((b) => b === abilityScore).length;
    const flawCount = flaws.filter((f) => f === abilityScore).length;
    return 10 + boostCount * 2 - flawCount * 2;
  };

  return (
    <Card>
      <Text>Ability Scores</Text>
      <SimpleGrid cols={6}>
        <NumberInput readOnly label="Strength" value={getModsFor("str")} />
        <NumberInput readOnly label="Dexterity" value={getModsFor("dex")} />
        <NumberInput readOnly label="Constitution" value={getModsFor("con")} />
        <NumberInput readOnly label="Intelligence" value={getModsFor("int")} />
        <NumberInput readOnly label="Wisdom" value={getModsFor("wis")} />
        <NumberInput readOnly label="Charisma" value={getModsFor("cha")} />
      </SimpleGrid>
    </Card>
  );
};

export default AbilityScores;
