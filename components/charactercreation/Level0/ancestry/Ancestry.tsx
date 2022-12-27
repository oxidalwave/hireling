import { Card, Select, Stack } from "@mantine/core";
import AncestryOpts from "./AncestryOpts";

const Ancestry = ({ ancestry, setAncestry, ancestries }) => {
  const updateAncestry = (a) => {
    const ancestrycopy = { ...ancestry };
    ancestrycopy.id = a;
    setAncestry(ancestrycopy);
  };

  const val = ancestries.filter((a) => a.value === ancestry.id)[0]?.value ?? "";

  return (
    <Stack>
      <Select
        searchable
        value={val}
        onChange={updateAncestry}
        data={ancestries}
        label="Ancestry"
      />
      {val !== "" && (
        <AncestryOpts ancestry={ancestry} setAncestry={setAncestry} />
      )}
    </Stack>
  );
};

export default Ancestry;
