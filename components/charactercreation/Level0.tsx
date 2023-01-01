import {
  TextInput,
  Stack,
  Button,
  Alert,
  Divider,
  SelectItem,
} from "@mantine/core";
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
    feat: { id: "" },
  });
  const [background, setBackground] = useState<NewPlayerCharacterBackground>({
    id: "",
    boosts: [],
  });
  const [playerClass, setPlayerClass] = useState<NewPlayerCharacterPlayerClass>(
    { id: "", feat: { id: "" }, boost: { id: "" } }
  );

  const [freeBoosts, setFreeBoosts] = useState<NewPlayerCharacterFreeBoost[]>([
    { id: "" },
    { id: "" },
    { id: "" },
    { id: "" },
  ]);

  console.log(ancestry.boosts);
  const boosts: ResourceById[] = [
    ...ancestry.boosts,
    ...background.boosts,
    ...freeBoosts,
    playerClass.boost ?? { id: "" },
  ];

  const payload = {
    name,
    ancestry: { id: ancestry.id },
    background: { id: background.id },
    playerClass: { id: playerClass.id },
    boosts,
    feats: [playerClass.feat],
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

  const shouldValidate = true;
  const isValid =
    name &&
    ancestry.id &&
    background.id &&
    playerClass.id &&
    !boosts.find(({ id }) => id === "");

  console.log(ancestry);

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
