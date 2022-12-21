import { Tabs } from "@mantine/core";
import Level0 from "./Level0";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";

const CharacterCreation = ({ancestries, backgrounds, playerClasses}) => (
    <Tabs defaultValue="level-0">
        <Tabs.List>
            <Tabs.Tab value="level-0">Level 0</Tabs.Tab>
            <Tabs.Tab value="level-1">Level 1</Tabs.Tab>
            <Tabs.Tab value="level-2">Level 2</Tabs.Tab>
            <Tabs.Tab value="level-3">Level 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="level-0" pt="xs">
            <Level0 ancestries={ancestries} backgrounds={backgrounds} playerClasses={playerClasses} />
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

export default CharacterCreation;
