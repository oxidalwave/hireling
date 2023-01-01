type Entity = {
  id: string;
  name: string;
};

export function entityToSelectItem({ id, name }: Entity) {
  return {
    label: name,
    value: id,
  };
}
