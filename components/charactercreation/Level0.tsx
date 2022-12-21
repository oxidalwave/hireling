import {
  TextInput,
  Stack,
  Button,
  SegmentedControl,
  Alert,
} from "@mantine/core";
import { useState } from "react";
import Ancestry from "components/charactercreation/Level0/Ancestry";
import { useSession } from "next-auth/react";
import Background from "./Level0/Background";
import PlayerClass from "./Level0/PlayerClass";
import AbilityScores from "./Level0/AbilityScores";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import {
  NewPlayerCharacterAncestry,
  NewPlayerCharacterBackground,
  NewPlayerCharacterFreeBoost,
  NewPlayerCharacterPlayerClass,
} from "types/PlayerCharacter";

const Level0 = ({ ancestries, backgrounds, playerClasses }) => {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [ancestry, setAncestry] = useState<NewPlayerCharacterAncestry>({
    id: "",
  });
  const [background, setBackground] = useState<NewPlayerCharacterBackground>({
    id: "",
  });
  const [playerClass, setPlayerClass] = useState<NewPlayerCharacterPlayerClass>(
    { id: "", feat: "", boost: "" }
  );

  const [freeBoosts, setFreeBoosts] = useState<NewPlayerCharacterFreeBoost[]>([
    "",
    "",
    "",
    "",
  ]);

  const updateBoost = (i, a) => {
    let b = [...freeBoosts];
    b[i] = a;
    setFreeBoosts(b);
  };

  const boosts = [
    ...(ancestry.boosts ?? []),
    ...(background.boosts ?? []),
    playerClass.boost,
    ...freeBoosts,
  ];
  const flaws = [...(ancestry.flaws ?? []), ...(background.flaws ?? [])];

  const getScoreFor = (abilityScore: string) => {
    const boostCount = boosts.filter((b) => b === abilityScore).length;
    const flawCount = flaws.filter((f) => f === abilityScore).length;
    return 10 + boostCount * 2 - flawCount * 2;
  };

  const payload = {
    name,
    ancestry: { id: ancestry.id },
    background: { id: background.id },
    playerClass: { id: playerClass.id },
    abilityScores: {
      str: getScoreFor("str"),
      dex: getScoreFor("dex"),
      con: getScoreFor("con"),
      int: getScoreFor("int"),
      wis: getScoreFor("wis"),
      cha: getScoreFor("cha"),
    },
    feats: [{ id: playerClass.feat }],
  };

  const createCharacter = async () => {
    console.log(payload);
    try {
      await axios
        .post("http://localhost:3000/api/playercharacters", payload)
        .then((r) => r.data);
    } catch (e: any) {
      showNotification(e);
    }
  };

  const isValid =
    name &&
    ancestry &&
    background &&
    playerClass &&
    !boosts.includes("") &&
    !flaws.includes("");

  return (
    <Stack>
      <TextInput
        label="Character Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <Ancestry
        ancestry={ancestry}
        setAncestry={setAncestry}
        ancestries={ancestries.map((a) => ({
          label: a.name,
          value: a.id,
        }))}
      />
      <Background
        background={background}
        setBackground={setBackground}
        backgrounds={backgrounds.map((b) => ({
          label: b.name,
          value: b.id,
        }))}
      />
      <PlayerClass
        playerClass={playerClass}
        setPlayerClass={setPlayerClass}
        playerClasses={playerClasses.map((pc) => ({
          label: pc.name,
          value: pc.id,
        }))}
      />
      {freeBoosts.map((b, i) => (
        <SegmentedControl
          color={b ? "blue" : "dark"}
          key={`free-boost-${i}`}
          value={b}
          onChange={(a) => updateBoost(i, a)}
          data={[
            { label: "Strength", value: "str" },
            { label: "Dexterity", value: "dex" },
            { label: "Constitution", value: "con" },
            { label: "Intelligence", value: "int" },
            { label: "Wisdom", value: "wis" },
            { label: "Charisma", value: "cha" },
          ]}
        />
      ))}
      <AbilityScores boosts={boosts} flaws={flaws} />
      {isValid ? (
        <Button onClick={createCharacter}>SUBMIT</Button>
      ) : (
        <Alert color="red">There is an unselected input.</Alert>
      )}
    </Stack>
  );
};

export default Level0;
