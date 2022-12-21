import { ScrollArea, SegmentedControl, Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RichTextEditor from "components/RichTextEditor";
import FeatSelection from "./FeatSelection";

export interface PlayerClassOptsProps {
  playerClass: { id: string, boost?: string , featId?: string };
  setPlayerClass;
}

export default function PlayerClassOpts({ playerClass, setPlayerClass }: PlayerClassOptsProps) {
  const { data: playerClassData } = useQuery({
    queryKey: ["playerclasses", playerClass?.id || "0"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/playerclasses/${playerClass.id}`)
        .then((r) => r.data),
    onSuccess: (d) => {
      const pc = { ...playerClass };
      pc.boost = d.boost;
      setPlayerClass(pc);
    },
  });

  const { data: featData } = useQuery({
    queryKey: ["feats", playerClassData?.name],
    queryFn: () =>
      axios
        .get(
          `http://localhost:3000/api/feats?className=${playerClassData?.name}`
        )
        .then((r) => r.data),
  });

  const updateBoost = (a) => {
    let pc = { ...playerClass };
    pc.boost = a;
    setPlayerClass(pc);
  };

  const boostOptions = [
    {
      label: "Strength",
      value: "str",
      disabled: !playerClassData?.boost?.strength,
    },
    {
      label: "Dexterity",
      value: "dex",
      disabled: !playerClassData?.boost?.dexterity,
    },
    {
      label: "Constitution",
      value: "con",
      disabled: !playerClassData?.boost?.constitution,
    },
    {
      label: "Intelligence",
      value: "int",
      disabled: !playerClassData?.boost?.intelligence,
    },
    {
      label: "Wisdom",
      value: "wis",
      disabled: !playerClassData?.boost?.wisdom,
    },
    {
      label: "Charisma",
      value: "cha",
      disabled: !playerClassData?.boost?.charisma,
    },
  ];

  const feats =
    featData?.map((f) => ({
      label: f.name,
      value: f.id,
    }));

  return (
    <Stack>
      {playerClassData?.description && (
        <>
          <ScrollArea.Autosize maxHeight={240}>
            <RichTextEditor
              value={playerClassData.description}
              readOnly
              id="playerClassDescription"
            />
          </ScrollArea.Autosize>
          <SegmentedControl
            color={playerClass.boost ? "blue" : "dark"}
            key={`player-class-boost`}
            value={playerClass.boost}
            onChange={updateBoost}
            data={boostOptions}
          />
        </>
      )}
      {feats?.length > 0 && (
        <FeatSelection
          feat={playerClass.featId}
          setFeat={(f) => {
            const pc = { ...playerClass };
            pc.featId = f;
            setPlayerClass(pc);
          }}
          feats={feats}
        />
      )}
    </Stack>
  );
}
