import { Card, Stack, Text, Title } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";
import axios from "axios";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const equipment = await axios
    .get(`http://localhost:3000/api/equipment/${id}`)
    .then((r) => r.data);

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
