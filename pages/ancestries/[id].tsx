import { Card, Stack, Table, Text, Title } from "@mantine/core";
import { RichTextEditor } from "components/RichTextEditor";
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

export default function AncestryPage({ ancestry }) {
  return (
    <Card>
      <Stack>
        <Title order={2}>{ancestry.name}</Title>
        <RichTextEditor
          value={ancestry.description}
          readOnly={true}
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
}
