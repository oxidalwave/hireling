import { Card, Stack, Text, Title } from "@mantine/core";
import { RichTextEditor } from "components/RichTextEditor";
import { getBackgroundById } from "lib/backgrounds/backgrounds.service";
import { GetBackgroundByIdResponse } from "lib/backgrounds/backgrounds.types";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const background: GetBackgroundByIdResponse | null = await getBackgroundById(
    id
  );

  return {
    props: {
      background,
    },
  };
}

export default function BackgroundPage({ background }) {
  return (
    <Card>
      <Stack>
        <Title order={2}>{background.name}</Title>
        <RichTextEditor
          value={background.description}
          readOnly={true}
          id="description"
        />
        <Text ta="right">{background.source.name}</Text>
      </Stack>
    </Card>
  );
}
