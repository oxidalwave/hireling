import {
  ActionIcon,
  Card,
  Group,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { RichTextEditor } from "components/RichTextEditor";
import { useState } from "react";
import { IconPencil } from "@tabler/icons";
import { getAncestryById } from "lib/ancestry/ancestries.service";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const ancestry = await getAncestryById(id);

  return {
    props: {
      ancestry,
    },
  };
}

const AncestryPage = ({ ancestry }) => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const toggleReadOnly = () => setReadOnly((ro) => !ro);
  const [editedDescription, setEditedDescription] = useState<string>(
    ancestry.description
  );

  return (
    <Card>
      <Stack>
        <Group position="apart">
          <Title order={2}>{ancestry.name}</Title>
          <ActionIcon variant="outline" onClick={toggleReadOnly}>
            <IconPencil />
          </ActionIcon>
        </Group>
        <RichTextEditor
          value={editedDescription}
          readOnly={readOnly}
          id="description"
        />
        <Table>
          <thead>
            <tr>
              <th>Initial Health Points</th>
              <th>Size</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ancestry.hp}hp</td>
              <td>{ancestry.size}</td>
              <td>{ancestry.speed} ft</td>
            </tr>
          </tbody>
        </Table>

        <Text ta="right">{ancestry.source.name}</Text>
      </Stack>
    </Card>
  );
};

export default AncestryPage;
