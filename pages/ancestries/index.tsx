import { Alert, Group, Loader, Select, Stack } from "@mantine/core";
import DataTable from "components/common/datatable";
import { getAncestries } from "lib/ancestry/ancestries.service";
import { GetAncestriesResponse } from "lib/ancestry/ancestries.types";
import { useHireling } from "lib/hooks/useQuery";
import { getSourcesFor } from "lib/source/source.service";
import { useState } from "react";

const rowsPerPage = 16;

export async function getServerSideProps(ctx) {
  const ancestries: GetAncestriesResponse = await getAncestries();

  const sources = await getSourcesFor("ancestries");

  return {
    props: {
      ancestries: ancestries.map((b) => ({
        id: b.id,
        name: b.name,
        source: b.source.name,
      })),
      sources: sources.map((s) => s.name),
    },
  };
}

const AncestriesPage = ({ ancestries, sources }) => {
  const [source, setSource] = useState<string | null>("");

  const columns = [
    { key: "name", value: "Name" },
    { key: "source", value: "Source" },
  ];

  const rowData = ancestries
    .filter((b) => !source || b.source === source)
    .map((e) => ({
      href: `/ancestries/${e.id}`,
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
      <DataTable columns={columns} rows={rowData} rowsPerPage={rowsPerPage} />
    </Stack>
  );
};

export default AncestriesPage;
