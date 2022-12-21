import { Alert, Button, Stack, Text } from "@mantine/core";
import axios from "axios";
import DataTable from "components/common/datatable";
import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Link from "next/link";

const rowsPerPage = 16;

export async function getServerSideProps(ctx) {
  const session = await unstable_getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );

  if (session) {
    const playercharacters = await axios
      .get(
        `http://localhost:3000/api/playercharacters?email=${session.user?.email}`
      )
      .then((r) => r.data);

    return {
      props: {
        playercharacters,
      },
    };
  } else {
    return { props: {} };
  }
}

export default function PlayerCharactersPage({ playercharacters }) {
  const { data: session } = useSession();

  if (session?.user) {
    const columns = [{ key: "name", value: "Name" }];

    const rowData = playercharacters.map((e) => ({
      href: `/playercharacters/${e.id}`,
      columns: [{ key: "name", value: e.name }],
    }));

    return (
      <Stack>
        <Button component={Link} href="/playercharacters/new">
          Create New Charater
        </Button>
        <DataTable columns={columns} rows={rowData} rowsPerPage={rowsPerPage} />
      </Stack>
    );
  } else {
    return <Text>Please log in to view characters</Text>;
  }
}
