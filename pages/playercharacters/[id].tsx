import { Card, Title } from "@mantine/core";
import axios from "axios";
import RichTextEditor from "components/RichTextEditor";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const playercharacter = await axios
    .get(`http://localhost:3000/api/playercharacters/${id}`)
    .then((r) => r.data);

  return {
    props: {
      playercharacter,
    },
  };
}

const PlayerCharacterPage = ({ playercharacter }) => {
  return (
    <Card>
      <Title>playercharacter.name</Title>
      <RichTextEditor value={JSON.stringify(playercharacter)} />
    </Card>
  );
};

export default PlayerCharacterPage;
