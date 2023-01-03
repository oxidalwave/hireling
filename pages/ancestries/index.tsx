import { Group, Select, Stack } from "@mantine/core";
import axios from "axios";
import DataTable from "components/common/datatable";
import { useState } from "react";

const rowsPerPage = 16;

export async function getServerSideProps(ctx) {
  const ancestries = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/api/ancestries`)
    .then((r) => r.data);

  const sources = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/api/sources?resourcetype=ancestries`)
    .then((r) => r.data);

  return {
    props: {
      ancestries: ancestries.map(a => ({
        id: a.id,
        name: a.name,
        source: a.source.name
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
