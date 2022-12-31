import { ScrollArea } from "@mantine/core";
import RichTextEditor from "components/RichTextEditor";

interface FeatDataProps {
  description: string;
}

export default function FeatData({ description }: FeatDataProps) {
  return (
    <ScrollArea.Autosize maxHeight={240}>
      <RichTextEditor
        value={description}
        readOnly
      />
    </ScrollArea.Autosize>
  );
}
