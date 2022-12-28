import { SegmentedControl } from "@mantine/core";

interface Choice {
  label: string;
  value: string;
  disabled: boolean;
}

interface BoostProps {
  choices: Choice[];
  value: string;
  onChange;
  isFlaw?: boolean;
}

export default function Boost({
  choices,
  value,
  onChange,
  isFlaw,
}: BoostProps) {
  const color = isFlaw ? "pink" : "blue";

  console.log(value)

  return (
    <SegmentedControl
      value={value}
      onChange={onChange}
      data={choices}
      color={value !== "" ? color : "dark"}
    />
  );
}
