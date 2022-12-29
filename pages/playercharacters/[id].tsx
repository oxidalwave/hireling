import { Accordion, Card, ScrollArea, Text, Title } from "@mantine/core";
import axios from "axios";
import AbilityScores from "components/charactercreation/Level0/AbilityScores";
import RichTextEditor from "components/RichTextEditor";
import { ResourceById } from "types/PlayerCharacter";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const playercharacter = await axios
    .get(`http://localhost:3000/api/playercharacters/${id}`)
    .then((r) => r.data);

  return {
    props: {
      playercharacter,
    },
  };
}

const PlayerCharacterPage = ({ playercharacter }) => {
  const boosts: ResourceById[] = playercharacter.abilityScoreBoosts.map(
    ({ abilityScoreBoostId }) => ({ id: abilityScoreBoostId })
  );

  return (
    <Card>
      <Title>{playercharacter.name}</Title>
      <AbilityScores boosts={boosts} />

      <Title>Ancestry</Title>
      <Accordion>
        <Accordion.Item value={playercharacter.ancestry.id}>
          <Accordion.Control>{playercharacter.ancestry.name}</Accordion.Control>
          <Accordion.Panel>
            <RichTextEditor
              readOnly
              id="ancestry-description"
              value={playercharacter.ancestry.description}
            />
          </Accordion.Panel>{" "}
        </Accordion.Item>
      </Accordion>

      <Title>Background</Title>
      <Accordion>
        <Accordion.Item value={playercharacter.background.id}>
          <Accordion.Control>
            {playercharacter.background.name}
          </Accordion.Control>
          <Accordion.Panel>
            <RichTextEditor
              readOnly
              id="background-description"
              value={playercharacter.background.description}
            />
          </Accordion.Panel>{" "}
        </Accordion.Item>
      </Accordion>

      <Title>Feats</Title>
      <Accordion>
        {playercharacter.feats.map(({ feat }, i) => {
          console.log(feat);
          return (
            <Accordion.Item key={i} value={feat.id}>
              <Accordion.Control>{feat.name}</Accordion.Control>
              <Accordion.Panel>
                <RichTextEditor
                  id={`feat-description-${feat.id}`}
                  readOnly
                  value={feat.description}
                />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Card>
  );
};

export default PlayerCharacterPage;
