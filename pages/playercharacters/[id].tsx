import { Card } from "@mantine/core";
import axios from "axios";
import { useRouter } from "next/router";

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
  return <Card>{JSON.stringify(playercharacter)}</Card>;
};

export default PlayerCharacterPage;
