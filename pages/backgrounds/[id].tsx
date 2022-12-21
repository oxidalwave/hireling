import { useRouter } from "next/router";
import { ActionIcon, Card, Group, Stack, Text, Title } from "@mantine/core";
import { RichTextEditor } from "components/RichTextEditor";
import { useState } from "react";
import { IconPencil } from "@tabler/icons";
import axios from "axios";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const background = await axios
    .get(`http://localhost:3000/api/backgrounds/${id}`)
    .then((r) => r.data);

  return {
    props: {
      background,
    },
  };
}

const BackgroundPage = ({ background }) => {
  const router = useRouter();
  const { id } = router.query;

  const [readOnly, setReadOnly] = useState<boolean>(true);

  const [editedDescription, setEditedDescription] = useState<string>(background.description);

  const toggleReadOnly = async () => {
    if (!readOnly) {
      await axios.put(`backgrounds/${id}`, {
        ...background,
        source: background.source.name,
        description: editedDescription,
      });
    }
    setReadOnly((ro) => !ro);
  };

  return (
    <Card>
      <Stack>
        <Group position="apart">
          <Title order={2}>{background.name}</Title>
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
        <Text ta="right">{background.source.name}</Text>
      </Stack>
    </Card>
  );
};

export default BackgroundPage;
