import { Alert, Group, Loader, Select, Stack } from "@mantine/core";
import DataTable from "components/common/datatable";
import { GetAncestriesResponse } from "lib/ancestry/ancestries.types";
import { useHireling } from "lib/hooks/useQuery";
import { useState } from "react";

const rowsPerPage = 16;

const AncestriesPage = ({}) => {
  const [source, setSource] = useState<string | null>("");

  const {
    data: ancestriesData,
    isLoading: isLoadingAncestries,
    error: errorAncestries,
  } = useHireling<GetAncestriesResponse>("ancestries", "", () => {});
  const {
    data: sources,
    isLoading: isLoadingSources,
    error: errorSources,
  } = useHireling<{ name: string }[]>("sources", "", () => {});

  if (isLoadingAncestries || isLoadingSources) {
    return <Loader />;
  }
  if (errorAncestries || errorSources) {
    return <Alert color="red">ERROR</Alert>;
  }

  if (ancestriesData === undefined) {
    throw Error("");
  }
  if (sources === undefined) {
    throw Error("");
  }
  const ancestries = ancestriesData.map((a) => ({
    id: a.id,
    name: a.name,
    source: a.source.name,
  }));

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
          data={sources.map((s) => s.name)}
          value={source}
          onChange={setSource}
        />
      </Group>
      <DataTable columns={columns} rows={rowData} rowsPerPage={rowsPerPage} />
    </Stack>
  );
};

export default AncestriesPage;
