import { SelectItem, Tabs } from "@mantine/core";
import Level0 from "components/charactercreation/Level0";
import Level1 from "components/charactercreation/Level1";
import Level2 from "components/charactercreation/Level2";
import Level3 from "components/charactercreation/Level3";
import { entityToSelectItem } from "lib/entityToSelectItem";
import { getAllAncestries } from "lib/ancestry/ancestries.service";
import { getBackgrounds } from "lib/backgrounds/backgrounds.service";
import { getPlayerClasses } from "lib/playerclasses/playerclasses.service";

export async function getServerSideProps(ctx) {
  const [ancestries, backgrounds, playerClasses] = await Promise.all([
    getAllAncestries(),
    getBackgrounds(),
    getPlayerClasses(),
  ]);

  return {
    props: {
      ancestries: ancestries.map(entityToSelectItem),
      backgrounds: backgrounds.map(entityToSelectItem),
      playerClasses: playerClasses.map(entityToSelectItem),
    },
  };
}

interface NewPlayerCharacterPageProps {
  ancestries: SelectItem[];
  backgrounds: SelectItem[];
  playerClasses: SelectItem[];
}

export default function NewPlayerCharacterPage({
  ancestries,
  backgrounds,
  playerClasses,
}: NewPlayerCharacterPageProps) {
  return (
    <Tabs defaultValue="level-0">
      <Tabs.List>
        <Tabs.Tab value="level-0">Level 0</Tabs.Tab>
        <Tabs.Tab value="level-1">Level 1</Tabs.Tab>
        <Tabs.Tab value="level-2">Level 2</Tabs.Tab>
        <Tabs.Tab value="level-3">Level 3</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="level-0" pt="xs">
        <Level0
          ancestries={ancestries}
          backgrounds={backgrounds}
          playerClasses={playerClasses}
        />
      </Tabs.Panel>

      <Tabs.Panel value="level-1" pt="xs">
        <Level1 />
      </Tabs.Panel>

      <Tabs.Panel value="level-2" pt="xs">
        <Level2 />
      </Tabs.Panel>

      <Tabs.Panel value="level-3" pt="xs">
        <Level3 />
      </Tabs.Panel>
    </Tabs>
  );
}
