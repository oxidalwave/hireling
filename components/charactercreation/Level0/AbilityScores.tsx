import {
  Alert,
  Card,
  LoadingOverlay,
  NumberInput,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { ResourceById } from "types/PlayerCharacter";
import { trpc } from "utils/trpc";

type AbilityScoresArray = {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
};

type AbilityScoresProps = {
  boosts: ResourceById[];
};

const AbilityScores = ({ boosts }: AbilityScoresProps) => {
  console.log(boosts);

  const definedBoosts = boosts.filter(({ id }) => id !== "");

  const results = trpc.useQueries((t) =>
    definedBoosts.map(({ id }) => t.abilityScoreBoostById({ id }))
  );

  if (results.find((r) => r.isLoading)) {
    return (
      <Card>
        <Text>Ability Scores</Text>
        <div style={{ position: "relative" }}>
          <LoadingOverlay visible={true} />
          <SimpleGrid cols={6}>
            <NumberInput readOnly label="Strength" value={0} />
            <NumberInput readOnly label="Dexterity" value={0} />
            <NumberInput readOnly label="Constitution" value={0} />
            <NumberInput readOnly label="Intelligence" value={0} />
            <NumberInput readOnly label="Wisdom" value={0} />
            <NumberInput readOnly label="Charisma" value={0} />
          </SimpleGrid>
        </div>
      </Card>
    );
  }

  if (results.find((r) => r.error)) {
    return <Alert color="red">Could not obtain ability score</Alert>;
  }

  const getModsFor: (abilityScoreAbbreviation: string) => number = (
    abilityScoreAbbreviation: string
  ) =>
    results.reduce(
      (p, c) =>
        c?.data?.abilityScore?.abbreviatedName === abilityScoreAbbreviation
          ? c?.data?.boost?.isBoost
            ? p + 2
            : p - 2
          : p,
      10
    );

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
