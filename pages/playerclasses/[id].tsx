import { ActionIcon, Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconPencil } from "@tabler/icons";
import { useState } from "react";
import { RichTextEditor } from "components/RichTextEditor";
import { getPlayerClassById } from "lib/playerclasses/playerclasses.service";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const playerclass = await getPlayerClassById(id);

  return {
    props: {
      playerclass,
    },
  };
}

const PlayerClassPage = ({ playerclass }) => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const toggleReadOnly = () => setReadOnly((ro) => !ro);
  const [editedDescription, setEditedDescription] = useState<string>(
    playerclass.description
  );

  return (
    <Card>
      <Stack>
        <Group position="apart">
          <Title order={2}>{playerclass.name}</Title>
          <ActionIcon variant="outline" onClick={toggleReadOnly}>
            <IconPencil />
          </ActionIcon>
        </Group>
        <RichTextEditor
          value={editedDescription}
          onChange={setEditedDescription}
          readOnly={readOnly}
          id="description"
        />
        <Text ta="right">{playerclass.source.name}</Text>
      </Stack>
    </Card>
  );
};

export default PlayerClassPage;
