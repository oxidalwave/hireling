import { Loader, Stack, TextInput } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import { trpc } from "utils/trpc";

export default function NewPlayerCharacter({ id }) {
  const { data: playercharacter, refetch } = trpc.playerCharacterById.useQuery({
    id,
  });
  const { mutate } = trpc.updatePlayerCharacter.useMutation();
  const [name, setName] = useState<string>(playercharacter?.name ?? "");

  if (!playercharacter) {
    return <Loader />;
  }

  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    setName(name);
    mutate({ id, name }, { onSuccess: () => refetch() });
  };

  return (
    <Stack>
      <TextInput value={name} onChange={updateName} />
    </Stack>
  );
}
