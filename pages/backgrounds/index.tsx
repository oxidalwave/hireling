import { Group, Select, Stack } from "@mantine/core";
import axios from "axios";
import DataTable from "components/common/datatable";
import { useState } from "react";

const rowsPerPage = 16;

export async function getServerSideProps(ctx) {
  const backgrounds = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/api/backgrounds`)
    .then((r) => r.data);

  const sources = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/api/sources?resourcetype=backgrounds`)
    .then((r) => r.data);

  return {
    props: {
      backgrounds: backgrounds.map((b) => ({
        id: b.id,
        name: b.name,
        source: b.source.name,
      })),
      sources: sources.map((s) => s.name),
    },
  };
}

const BackgroundsPage = ({ backgrounds, sources }) => {
  const [source, setSource] = useState<string | null>("");

  const columns = [
    { key: "name", value: "Name" },
    { key: "source", value: "Source" },
  ];

  const rowData = backgrounds
    .filter((b) => !source || b.source.name === source)
    .map((b) => ({
      href: `/backgrounds/${b.id}`,
      columns: [
        { key: "name", value: b.name },
        { key: "source", value: b.source },
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

export default BackgroundsPage;
