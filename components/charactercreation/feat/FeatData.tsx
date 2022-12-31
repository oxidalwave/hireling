import { ScrollArea } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";

interface FeatDataProps {
  id: string;
  description: string;
}

export default function FeatSelection({ id, description }: FeatDataProps) {
  return (
    <ScrollArea.Autosize maxHeight={240}>
      <RichTextEditor
        value={description}
        readOnly
        id={`featDescription-${id}`}
      />
    </ScrollArea.Autosize>
  );
}
