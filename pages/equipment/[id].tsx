import { Card, Stack, Text, Title } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import { getEquipmentById } from "lib/equipment/equipment.service";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const equipment = await getEquipmentById(id);

  return {
    props: {
      equipment,
    },
  };
}

const EquipmentPage = ({ equipment }) => {
  return (
    <Card>
      <Stack>
        <Title order={2}>{equipment.name}</Title>
        <RichTextEditor
          value={equipment.description}
          readOnly
          id="description"
        />
        <Text ta="right">{equipment.source.name}</Text>
      </Stack>
    </Card>
  );
};

export default EquipmentPage;
