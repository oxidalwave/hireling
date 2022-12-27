import { SegmentedControl } from "@mantine/core";

interface Choice {
  label: string;
  value: string;
  disabled: boolean;
}

interface BoostProps {
  choices: Choice[];
  value: string;
  setValue;
  isFlaw?: boolean
}

export default function Boost({ choices, value, setValue, isFlaw }: BoostProps) {
  const color = isFlaw ? 'pink' : 'blue';

  return <SegmentedControl
    value={value}
    onChange={setValue}
    data={choices}
    color={choices ? color : 'dark'}
  />;
}
