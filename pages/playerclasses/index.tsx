import { Group, Select, Stack } from "@mantine/core";
import DataTable from "components/common/datatable";
import { getPlayerClasses } from "lib/playerclasses/playerclasses.service";
import { getSourcesFor } from "lib/source/source.service";
import { useState } from "react";

export async function getServerSideProps(ctx) {
  const playerclasses = await getPlayerClasses();

  const sources = await getSourcesFor("playerClasses");

  return {
    props: {
      playerclasses: playerclasses.map((pc) => ({
        id: pc.id,
        name: pc.name,
        source: pc.source.name,
      })),
      sources: sources.map((s) => s.name),
    },
  };
}

export default function PlayerClassesPage({ playerclasses, sources }) {
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
}
