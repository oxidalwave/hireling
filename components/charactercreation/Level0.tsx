import { TextInput, Stack, Button, Alert } from "@mantine/core";
import { useState } from "react";
import { useSession } from "next-auth/react";
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

const Level0 = ({ ancestries, backgrounds, playerClasses }) => {
  const [name, setName] = useState<string>("");
  const [ancestry, setAncestry] = useState<NewPlayerCharacterAncestry>({
    id: "",
    boostIds: [],
  });
  const [background, setBackground] = useState<NewPlayerCharacterBackground>({
    id: "",
    boostIds: [],
  });
  const [playerClass, setPlayerClass] = useState<NewPlayerCharacterPlayerClass>(
    { id: "", featId: "", boostId: "" }
  );

  const [freeBoosts, setFreeBoosts] = useState<NewPlayerCharacterFreeBoost[]>([
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
  ]);

  const boosts: ResourceById[] = freeBoosts.filter(({ id }) => id !== "");

  const payload = {
    name,
    ancestry,
    background,
    playerClass,
  };

  const logCharacter = () => console.log(payload);

  const createCharacter = async () => {
    try {
      await axios
        .post("http://localhost:3000/api/playercharacters", payload)
        .then((r) => r.data);
    } catch (e: any) {
      showNotification(e);
    }
  };

  const shouldValidate = false;
  const isValid =
    name &&
    ancestry &&
    background &&
    playerClass &&
    !boosts.find(({ id }) => id === "");

  console.log(ancestry);

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
        ancestries={ancestries}
      />
      <Background
        background={background}
        setBackground={setBackground}
        backgrounds={backgrounds}
      />
      <PlayerClass
        playerClass={playerClass}
        setPlayerClass={setPlayerClass}
        playerClasses={playerClasses.map((pc) => ({
          label: pc.name,
          value: pc.id,
        }))}
      />
      <FreeBoosts boosts={freeBoosts} setBoosts={setFreeBoosts} />
      <AbilityScores boosts={boosts} />
      {shouldValidate && !isValid ? (
        <Alert color="red">There is an unselected input.</Alert>
      ) : (
        <Button onClick={logCharacter}>SUBMIT</Button>
      )}
    </Stack>
  );
};

export default Level0;
