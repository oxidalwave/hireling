import { Select, Stack } from "@mantine/core";

export interface CharacterOptionProps<T> {
  option: { id: string } & T;
  setOption;
  options: { label: string; value: string }[];
  label: string;
  children
}

export default function CharacterOption<T>({ option, setOption, options, label, children }) {
  const updateOption = (o) => {
    const copy = { ...option };
    copy.id = o;
    setOption(copy);
  };

  const val: string = options.find((o) => o.value === option.id)?.value ?? '';

  return (
    <Stack>
      <Select
        searchable
        value={val}
        onChange={updateOption}
        data={options}
        label={label}
      />
      {val !== "" && children}
    </Stack>
  );
}
