import { ScrollArea, Select, Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RichTextEditor from "components/RichTextEditor";

export default function FeatSelection({ feat, setFeat, feats }) {
  const { data: featData } = useQuery({
    queryKey: ["feat", feat],
    queryFn: () =>
      axios.get(`http://localhost:3000/api/feats/${feat}`).then((r) => r.data),
  });

  return (
    <Stack>
      <Select
        searchable
        label="Class Feat"
        value={feat}
        onChange={setFeat}
        data={feats}
      />
      {featData?.description && (
        <ScrollArea.Autosize maxHeight={240}>
          <RichTextEditor
            value={featData.description}
            readOnly
            id="classFeatDescription"
          />
        </ScrollArea.Autosize>
      )}
    </Stack>
  );
}
