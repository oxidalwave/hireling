import { Group, Select, Stack } from "@mantine/core";
import axios from "axios";
import DataTable from "components/common/datatable";
import { useState } from "react";

const rowsPerPage = 16;

export async function getServerSideProps(ctx) {
  const equipment = await axios
    .get(`http://localhost:3000/api/equipment`)
    .then((r) => r.data);

  const sources = await axios
    .get(`http://localhost:3000/api/sources?resourcetype=equipment`)
    .then((r) => r.data);

  return {
    props: {
      equipment: equipment.map((e) => ({
        id: e.id,
        name: e.name,
        source: e.source.name,
      })),
      sources: sources.map((s) => s.name),
    },
  };
}

const EquipmentPage = ({ equipment, sources }) => {
  const [source, setSource] = useState<string | null>("");

  const columns = [
    { key: "name", value: "Name" },
    { key: "source", value: "Source" },
  ];

  const rowData = equipment
    .filter((b) => !source || b.source === source)
    .map((e) => ({
      href: `/equipment/${e.id}`,
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

export default EquipmentPage;
