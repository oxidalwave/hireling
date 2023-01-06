import { Card, Stack, Text, Title } from "@mantine/core";
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

export default function PlayerClassPage({ playerclass }) {
  return (
    <Card>
      <Stack>
        <Title order={2}>{playerclass.name}</Title>
        <RichTextEditor
          value={playerclass.description}
          readOnly={true}
          id="description"
        />
        <Text ta="right">{playerclass.source.name}</Text>
      </Stack>
    </Card>
  );
}
