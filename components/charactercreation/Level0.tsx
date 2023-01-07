import {
  TextInput,
  Stack,
  Button,
  Alert,
  Divider,
  SelectItem,
} from "@mantine/core";
import { useState } from "react";
import PlayerClass from "./Level0/playerclass/PlayerClass";
import AbilityScores from "./Level0/AbilityScores";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import {
  NewPlayerCharacterAncestry,
  NewPlayerCharacterBackground,
  NewPlayerCharacterFreeBoost,
  NewPlayerCharacterPlayerClass,
  ResourceById,
} from "types/PlayerCharacter";
import FreeBoosts from "./Level0/FreeBoosts";
import Ancestry from "./Level0/ancestry/Ancestry";
import Background from "./Level0/background/Background";
import { CreatePlayerCharacterPayload } from "lib/playercharacters/playercharacters.types";
import { useMutation } from "@tanstack/react-query";
import { trpc } from "utils/trpc";

interface Level0Props {
  ancestries: SelectItem[];
  backgrounds: SelectItem[];
  playerClasses: SelectItem[];
}

export default function Level0({
  ancestries,
  backgrounds,
  playerClasses,
}: Level0Props) {
  const [name, setName] = useState<string>("");
  const [ancestry, setAncestry] = useState<NewPlayerCharacterAncestry>({
    id: "",
    boosts: [],
    feats: [],
  });
  const [background, setBackground] = useState<NewPlayerCharacterBackground>({
    id: "",
    boosts: [],
  });
  const [playerClass, setPlayerClass] = useState<NewPlayerCharacterPlayerClass>(
    { id: "", feat: { id: "" }, boosts: [] }
  );

  const [freeBoosts, setFreeBoosts] = useState<NewPlayerCharacterFreeBoost[]>([
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
  ]);

  console.log(ancestry.boosts);
  console.log(background.boosts);
  console.log(freeBoosts);
  console.log(playerClass.boosts);
  const boosts: ResourceById[] = [
    ...ancestry.boosts,
    ...background.boosts,
    ...freeBoosts,
    ...playerClass.boosts,
  ];

  const mkPayload = () => ({
    name: name,
    ancestry: { connect: { id: ancestry.id } },
    background: { connect: { id: background.id } },
    playerClass: { connect: { id: playerClass.id } },
    abilityScoreBoosts: {
      create: boosts.map((b) => ({
        abilityScoreBoost: {
          connect: { id: b.id },
        },
      })),
    },
    feats: {
      create: [
        ...ancestry.feats.map((f) => ({ feat: { connect: { id: f.id } } })),
        { feat: { connect: { id: playerClass.feat.id } } },
      ],
    },
  });

  const { mutate } = trpc.createPlayerCharacterLEGACY.useMutation();

  const createCharacter = () => {
    const payload = mkPayload();
    console.log(payload)
    mutate(payload);
  };

  const shouldValidate = true;
  const isValid =
    name &&
    ancestry.id &&
    background.id &&
    playerClass.id &&
    !boosts.find(({ id }) => id === "");

  console.log(ancestry);
  console.log(background);

  return (
    <Stack>
      <TextInput
        label="Character Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <Divider />
      <Ancestry
        ancestry={ancestry}
        setAncestry={setAncestry}
        ancestries={ancestries}
      />
      <Divider />
      <Background
        background={background}
        setBackground={setBackground}
        backgrounds={backgrounds}
      />
      <Divider />
      <PlayerClass
        playerClass={playerClass}
        setPlayerClass={setPlayerClass}
        playerClasses={playerClasses}
      />
      <Divider />
      <FreeBoosts boosts={freeBoosts} setBoosts={setFreeBoosts} />
      <Divider />
      <AbilityScores boosts={boosts} />
      {shouldValidate && !isValid ? (
        <Alert color="red">There is an unselected input.</Alert>
      ) : (
        <Button onClick={createCharacter}>SUBMIT</Button>
      )}
    </Stack>
  );
}
