import { Group, Select, Stack } from "@mantine/core";
import axios from "axios";
import DataTable from "components/common/datatable";
import { useState } from "react";

export async function getServerSideProps(ctx) {
  const playerclasses = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/api/playerclasses`)
    .then((r) => r.data);

  const sources = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}localhost:3000/api/sources?resourcetype=playerClasses`)
    .then((r) => r.data);

  return {
    props: {
      playerclasses: playerclasses.map(pc => ({
        id: pc.id,
        name: pc.name,
        source: pc.source.name
      })),
      sources: sources.map((s) => s.name),
    },
  };
}

const PlayerClassesPage = ({ playerclasses, sources }) => {
  const [source, setSource] = useState<string | null>("");

  const rowCount = 20;

  const columns = [
    { key: "name", value: "Name" },
    { key: "source", value: "Source" },
  ];

  const rowData = playerclasses
    .filter((b) => !source || b.source === source)
    .map((e) => ({
      href: `/playerclasses/${e.id}`,
      columns: [
        { key: "name", value: e.name },
        { key: "source", value: e.source },
      ],
    }));

  return (
    <Stack>
      <Group>
        <Select
          label="Source"
          clearable
          searchable
          data={sources}
          value={source}
          onChange={setSource}
        />
      </Group>
      <DataTable columns={columns} rows={rowData} rowsPerPage={rowCount} />
    </Stack>
  );
};

export default PlayerClassesPage;
