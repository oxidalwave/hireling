import CharacterOption from "../CharacterOption";
import AncestryOptsLoader from "./AncestryOptsLoader";

export default function Ancestry({ ancestry, setAncestry, ancestries }) {
  return (
    <CharacterOption
      label="Ancestry"
      option={ancestry}
      setOption={setAncestry}
      options={ancestries.map((a) => ({
        label: a.name,
        value: a.id,
      }))}
    >
      {ancestry.id !== "" && (
        <AncestryOptsLoader ancestry={ancestry} setAncestry={setAncestry} />
      )}
    </CharacterOption>
  );
}
