import { Alert, Loader, SegmentedControl } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch } from "react";
import { ResourceById } from "types/PlayerCharacter";
import Boost from "./Boost";

export interface FreeBoostsProps {
  count: number;
  boosts: ResourceById[];
  setBoosts: Dispatch<ResourceById[]>;
}

export default function FreeBoosts({ boosts, setBoosts, count = 4 }) {
  const { data, isLoading, error } = useQuery({
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/boosts/free?take=${count}`)
        .then((r) => r.data),
    queryKey: ["boost", "free"],
    onSuccess: (d) => {
      console.log(d);
      setBoosts(d.map(() => ({ id: "" })));
    },
    onError: (e: Error) => {
      showNotification({
        title: "Could not load Boosts",
        message: e.toString(),
      });
    },
    refetchOnWindowFocus: false,
  });

  const updateBoost = (i: number) => (a: string) => {
    let b = [...boosts];
    b[i] = { id: a };
    setBoosts(b);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Alert color="red">{error.toString()}</Alert>;
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
          key={`free-boost-${i}`}
          value={boosts[i].id}
          onChange={updateBoost(i)}
          choices={b}
        />
      ))}
    </>
  );
}
