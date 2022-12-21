import { Group, Select, Stack } from "@mantine/core";
import axios from "axios";
import DataTable from "components/common/datatable";
import { useState } from "react";

const rowsPerPage = 16;

export async function getStaticProps(ctx) {
  const backgrounds = await axios
    .get(`http://localhost:3000/api/backgrounds`)
    .then((r) => r.data);

  const sources = await axios
    .get(`http://localhost:3000/api/sources?resourcetype=backgrounds`)
    .then((r) => r.data);

  console.log(backgrounds)

  return {
    props: {
      backgrounds: backgrounds.map(b => ({
        id: b.id,
        name: b.name,
        source: b.source.name
      })),
      sources: sources.map((s) => s.name)
    },
    revalidate: 30
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
