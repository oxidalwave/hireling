import { TextInput, Stack, Button, Alert } from "@mantine/core";
import { useState } from "react";
import { useSession } from "next-auth/react";
import PlayerClass from "./Level0/playerclass/PlayerClass";
import AbilityScores from "./Level0/AbilityScores";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import {
  Boost,
  NewPlayerCharacterAncestry,
  NewPlayerCharacterBackground,
  NewPlayerCharacterFreeBoost,
  NewPlayerCharacterPlayerClass,
} from "types/PlayerCharacter";
import FreeBoosts from "./Level0/FreeBoosts";
import CharacterOption from "./Level0/CharacterOption";
import BackgroundOpts from "./Level0/background/BackgroundOpts";
import Ancestry from "./Level0/ancestry/Ancestry";
import Background from "./Level0/background/Background";

const Level0 = ({ ancestries, backgrounds, playerClasses }) => {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [ancestry, setAncestry] = useState<NewPlayerCharacterAncestry>({
    id: "",
    boosts: [],
  });
  const [background, setBackground] = useState<NewPlayerCharacterBackground>({
    id: "",
    boosts: [],
  });
  const [playerClass, setPlayerClass] = useState<NewPlayerCharacterPlayerClass>(
    { id: "", feat: "", boost: { id: "" } }
  );

  const [freeBoosts, setFreeBoosts] = useState<NewPlayerCharacterFreeBoost[]>([
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
  ]);

  const boosts: Boost[] = [
    ...(ancestry.boosts ?? []),
    ...(background.boosts ?? []),
    playerClass.boost ?? { id: "" },
    ...(freeBoosts ?? []),
  ].filter(({ id }) => id !== "");

  const payload = {
    name,
    ancestry: { id: ancestry.id },
    background: { id: background.id },
    playerClass: { id: playerClass.id },
    boosts: boosts.map((id) => ({ id })),
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

  console.log(ancestry)

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
