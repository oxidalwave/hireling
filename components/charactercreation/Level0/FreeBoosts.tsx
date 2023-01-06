import { Alert, Loader, SegmentedControl } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch } from "react";
import { ResourceById } from "types/PlayerCharacter";
import { trpc } from "utils/trpc";
import Boost from "./Boost";

export interface FreeBoostsProps {
  count: number;
  boosts: ResourceById[];
  setBoosts: Dispatch<ResourceById[]>;
}

export default function FreeBoosts({ boosts, setBoosts, count = 4 }) {
  const resetBoosts = (d) => {
    console.log(d);
    setBoosts(d.map(() => ({ id: "" })));
  };

  const updateBoost = (i: number) => (a: string) => {
    let b = [...boosts];
    b[i] = { id: a };
    setBoosts(b);
  };

  const { data } = trpc.boostsFree.useQuery(
    { count },
    { onSuccess: resetBoosts, onError: showNotification }
  );

  if (!data) {
    return <Loader />;
  }

  const d = data.map((b, i) =>
    b.abilityScores.map(({ abilityScore, id }, asi) => ({
      label: abilityScore.name,
      value: id,
    }))
  );

  const freeBoostData = data.map((b, i) => [
    {
      label: "Strength",
      value: b.abilityScores.find(
        (as) => as.abilityScore.abbreviatedName === "str"
      ).id,
    },
    {
      label: "Dexterity",
      value: b.abilityScores.find(
        (as) => as.abilityScore.abbreviatedName === "dex"
      ).id,
    },
    {
      label: "Constitution",
      value: b.abilityScores.find(
        (as) => as.abilityScore.abbreviatedName === "con"
      ).id,
    },
    {
      label: "Intelligence",
      value: b.abilityScores.find(
        (as) => as.abilityScore.abbreviatedName === "int"
      ).id,
    },
    {
      label: "Wisdom",
      value: b.abilityScores.find(
        (as) => as.abilityScore.abbreviatedName === "wis"
      ).id,
    },
    {
      label: "Charisma",
      value: b.abilityScores.find(
        (as) => as.abilityScore.abbreviatedName === "cha"
      ).id,
    },
  ]);

  console.log(boosts);

  return (
    <>
      {freeBoostData.map((b, i) => (
        <Boost
          key={`free-boost-${b.value}`}
          value={boosts[i].id}
          onChange={updateBoost(i)}
          choices={b}
        />
      ))}
    </>
  );
}
