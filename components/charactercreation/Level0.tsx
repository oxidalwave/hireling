import {
  TextInput,
  Stack,
  Button,
  Alert,
} from "@mantine/core";
import { useState } from "react";
import Ancestry from "components/charactercreation/Level0/ancestry/Ancestry";
import { useSession } from "next-auth/react";
import Background from "./Level0/background/Background";
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

const Level0 = ({ ancestries, backgrounds, playerClasses }) => {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [ancestry, setAncestry] = useState<NewPlayerCharacterAncestry>({
    id: "",
    boosts: []
  });
  const [background, setBackground] = useState<NewPlayerCharacterBackground>({
    id: "",
    boosts: [],
    flaws: []
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
  const flaws = [...(ancestry.flaws ?? []), ...(background.flaws ?? [])];

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
    !boosts.find(({ id }) => id === "") &&
    !flaws.find(({ id }) => id === "");

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
      <FreeBoosts boosts={freeBoosts} setBoosts={setFreeBoosts} />
      <AbilityScores boosts={[...boosts, ...flaws]} />
      {shouldValidate && !isValid ? (
        <Alert color="red">There is an unselected input.</Alert>
      ) : (
        <Button onClick={logCharacter}>SUBMIT</Button>
      )}
    </Stack>
  );
};

export default Level0;
