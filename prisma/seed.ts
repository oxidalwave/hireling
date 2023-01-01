import { PrismaClient } from "@prisma/client";
import axios from "axios";
const prisma = new PrismaClient();
async function main() {
  const abilityScores = [
    {
      name: "Strength",
      abbreviatedName: "str",
      description:
        "Strength measures your character’s physical power. Strength is important if your character plans to engage in hand-to-hand combat. Your Strength modifier gets added to melee damage rolls and determines how much your character can carry.",
    },
    {
      name: "Dexterity",
      abbreviatedName: "dex",
      description:
        "Dexterity measures your character’s agility, balance, and reflexes. Dexterity is important if your character plans to make attacks with ranged weapons or use stealth to surprise foes. Your Dexterity modifier is also added to your character’s AC and Reflex saving throws.",
    },
    {
      name: "Constitution",
      abbreviatedName: "con",
      description:
        "Constitution measures your character’s overall health and stamina. Constitution is an important statistic for all characters, especially those who fight in close combat. Your Constitution modifier is added to your Hit Points and Fortitude saving throws.",
    },
    {
      name: "Intelligence",
      abbreviatedName: "int",
      description:
        "Intelligence measures how well your character can learn and reason. A high Intelligence allows your character to analyze situations and understand patterns, and it means they can become trained in additional skills and might be able to master additional languages.",
    },
    {
      name: "Wisdom",
      abbreviatedName: "wis",
      description:
        "Wisdom measures your character’s common sense, awareness, and intuition. Your Wisdom modifier is added to your Perception and Will saving throws.",
    },
    {
      name: "Charisma",
      abbreviatedName: "cha",
      description:
        "Charisma measures your character’s personal magnetism and strength of personality. A high Charisma score helps you influence the thoughts and moods of others.",
    },
  ];

  for (const abilityScore of abilityScores) {
    await prisma.abilityScore.create({
      data: abilityScore,
    });
  }

  for (let i = 0; i < 16; i++) {
    await prisma.boost.create({
      data: {
        kind: "FREE",
        abilityScores: {
          create: [
            {
              abilityScore: {
                connect: { abbreviatedName: "str" },
              },
            },
            {
              abilityScore: {
                connect: { abbreviatedName: "dex" },
              },
            },
            {
              abilityScore: {
                connect: { abbreviatedName: "con" },
              },
            },
            {
              abilityScore: {
                connect: { abbreviatedName: "int" },
              },
            },
            {
              abilityScore: {
                connect: { abbreviatedName: "wis" },
              },
            },
            {
              abilityScore: {
                connect: { abbreviatedName: "cha" },
              },
            },
          ],
        },
      },
    });
  }

  const skills = [
    {
      name: "Acrobatics",
      description:
        "Acrobatics measures your ability to perform tasks requiring coordination and grace. When you use the Escape basic action, you can use your Acrobatics modifier instead of your unarmed attack modifier.",
      abilityScore: {
        connect: {
          abbreviatedName: "dex",
        },
      },
    },
    {
      name: "Arcana",
      description:
        "Arcana measures how much you know about arcane magic and creatures. Even if you’re untrained, you can Recall Knowledge.",
      abilityScore: {
        connect: {
          abbreviatedName: "int",
        },
      },
    },
    {
      name: "Athletics",
      description:
        "Athletics allows you to perform deeds of physical prowess. When you use the Escape basic action, you can use your Athletics modifier instead of your unarmed attack modifier.",
      abilityScore: {
        connect: {
          abbreviatedName: "str",
        },
      },
    },
    {
      name: "Crafting",
      description:
        "You can use this skill to create, understand, and repair items. Even if you're untrained, you can Recall Knowledge.",
      abilityScore: {
        connect: {
          abbreviatedName: "int",
        },
      },
    },
    {
      name: "Deception",
      description:
        "You can trick and mislead others using disguises, lies, and other forms of subterfuge.",
      abilityScore: {
        connect: {
          abbreviatedName: "cha",
        },
      },
    },
    {
      name: "Diplomacy",
      description: "You influence others through negotiation and flattery.",
      abilityScore: {
        connect: {
          abbreviatedName: "cha",
        },
      },
    },
    {
      name: "Intimidation",
      description: "You bend others to your will using threats.",
      abilityScore: {
        connect: {
          abbreviatedName: "cha",
        },
      },
    },
    {
      name: "Lore",
      description:
        "You have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\nYou gain a specific subcategory of the Lore skill from your background. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to Recall Knowledge, and they should never be able to fully or mainly take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by Arcana, Nature, Occultism, and Religion, or Adventuring Lore to give you all the information an adventurer needs, or Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\nIf you have multiple subcategories of Lore that could apply to a check or that would overlap with another skill in the circumstances, you can use the skill with the better skill modifier or the one you would prefer to use. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not.\nEven if you're untrained in Lore, you can use it to Recall Knowledge.",
      abilityScore: {
        connect: {
          abbreviatedName: "int",
        },
      },
    },
    {
      name: "Medicine",
      description:
        "You can patch up wounds and help people recover from diseases and poisons. Even if you’re untrained in Medicine, you can use it to Recall Knowledge.",
      abilityScore: {
        connect: {
          abbreviatedName: "wis",
        },
      },
    },
    {
      name: "Nature",
      description:
        "You know a great deal about the natural world, and you command and train animals and magical beasts. Even if you’re untrained in Nature, you can use it to Recall Knowledge.",
      abilityScore: {
        connect: {
          abbreviatedName: "wis",
        },
      },
    },
    {
      name: "Occultism",
      description:
        "You know a great deal about ancient philosophies, esoteric lore, obscure mysticism, and supernatural creatures. Even if you’re untrained in Occultism, you can use it to Recall Knowledge.",
      abilityScore: {
        connect: {
          abbreviatedName: "int",
        },
      },
    },
    {
      name: "Performance",
      description:
        "You are skilled at a form of performance, using your talents to impress a crowd or make a living.",
      abilityScore: {
        connect: {
          abbreviatedName: "cha",
        },
      },
    },
    {
      name: "Religion",
      description:
        "The secrets of deities, dogma, faith, and the realms of divine creatures both sublime and sinister are open to you. You also understand how magic works, though your training imparts a religious slant to that knowledge. Even if you’re untrained in Religion, you can use it to Recall Knowledge.",
      abilityScore: {
        connect: {
          abbreviatedName: "wis",
        },
      },
    },
    {
      name: "Society",
      description:
        "You understand the people and systems that make civilization run, and you know the historical events that make societies what they are today. Further, you can use that knowledge to navigate the complex physical, societal, and economic workings of settlements. Even if you’re untrained in Society, you can use it for the following general skill actions.",
      abilityScore: {
        connect: {
          abbreviatedName: "int",
        },
      },
    },
    {
      name: "Stealth",
      description:
        "You are skilled at avoiding detection, allowing you to slip past foes, hide, or conceal an item.",
      abilityScore: {
        connect: {
          abbreviatedName: "dex",
        },
      },
    },
    {
      name: "Survival",
      description:
        "You are adept at living in the wilderness, foraging for food and building shelter, and with training you discover the secrets of tracking and hiding your trail. Even if you’re untrained, you can still use Survival to Subsist.",
      abilityScore: {
        connect: {
          abbreviatedName: "wis",
        },
      },
    },
    {
      name: "Thievery",
      description:
        "You are trained in a particular set of skills favored by thieves and miscreants.",
      abilityScore: {
        connect: {
          abbreviatedName: "dex",
        },
      },
    },
  ];

  for (const skill of skills) {
    await prisma.skill.create({
      data: skill,
    });
  }

  const allEquipment = await axios
    .get("https://api.pathfinder2.fr/v1/pf2/equipment", {
      headers: { Authorization: process.env.SRD_API_KEY },
    })
    .then((r) => r.data);

  for (const equipment of allEquipment.results) {
    await prisma.equipment.create({
      data: {
        name: equipment.name,
        description: equipment.system.description.value,
        source: {
          connectOrCreate: {
            where: { name: equipment.system.source.value },
            create: { name: equipment.system.source.value },
          },
        },
      },
    });
  }

  const allFeats = await axios
    .get("https://api.pathfinder2.fr/v1/pf2/feat", {
      headers: { Authorization: process.env.SRD_API_KEY },
    })
    .then((r) => r.data);

  for (const feat of allFeats.results) {
    const f = await prisma.feat.create({
      data: {
        name: feat.name,
        kind: feat.system.featType.value.toUpperCase(),
        description: feat.system.description.value,
        level: feat.system.level.value,
        source: {
          connectOrCreate: {
            where: { name: feat.system.source.value },
            create: { name: feat.system.source.value },
          },
        },
      },
    });
  }

  const ancestries = await axios
    .get("https://api.pathfinder2.fr/v1/pf2/ancestry", {
      headers: { Authorization: process.env.SRD_API_KEY },
    })
    .then((r) => r.data);
  for (const ancestry of ancestries.results) {
    const feats = await axios
      .get(
        `https://api.pathfinder2.fr/v1/pf2/feat?system.featType.value=ancestry&system.traits.value=${ancestry.name}`,
        {
          headers: { Authorization: process.env.SRD_API_KEY },
        }
      )
      .then((r) => r.data);
    const apiBoosts: { value: string[] }[] = ancestry?.system?.boosts ?? [];
    const boosts: string[][] = Object.values(apiBoosts).map(
      (boost: { value: string[] }) => boost.value
    );
    const apiFlaws: { value: string[] }[] = ancestry?.system?.flaws ?? [];
    const flaws: string[][] = Object.values(apiFlaws).map(
      (flaw: { value: string[] }) => flaw.value
    );
    await prisma.ancestry.create({
      data: {
        name: ancestry.name,
        description: ancestry.system.description.value,
        hp: ancestry.system.hp,
        speed: ancestry.system.speed,
        size: ancestry.system.size,
        boosts: {
          create: [
            ...boosts.map((abilityScores: string[]) => ({
              isBoost: true,
              kind: "ANCESTRY",
              abilityScores: {
                create: abilityScores.map((abilityScore: string) => ({
                  abilityScore: {
                    connect: { abbreviatedName: abilityScore },
                  },
                })),
              },
            })),
            ...flaws.map((abilityScores: string[]) => ({
              isBoost: false,
              kind: "ANCESTRY",
              abilityScores: {
                create: abilityScores.map((abilityScore: string) => ({
                  abilityScore: {
                    connect: { abbreviatedName: abilityScore },
                  },
                })),
              },
            })),
          ],
        },
        feats: {
          create: await Promise.all(
            feats.results.map(async (feat) => ({
              feat: {
                connect: {
                  kind_name_sourceId: {
                    name: feat.name,
                    kind: feat.system.featType.value.toUpperCase(),
                    sourceId:
                      (
                        await prisma.source.findUnique({
                          where: { name: feat.system.source.value },
                        })
                      )?.id ?? "",
                  },
                },
              },
            }))
          ),
        },
        source: {
          connectOrCreate: {
            where: { name: ancestry.system.source.value },
            create: { name: ancestry.system.source.value },
          },
        },
      },
    });
  }

  const backgrounds = await axios
    .get("https://api.pathfinder2.fr/v1/pf2/background", {
      headers: { Authorization: process.env.SRD_API_KEY },
    })
    .then((r) => r.data);
  for (const background of backgrounds.results) {
    const apiBoosts: { value: string[] }[] = background?.system?.boosts ?? [];
    const boosts: string[][] = Object.values(apiBoosts).map(
      (boost: { value: string[] }) => boost.value
    );
    const apiFlaws: { value: string[] }[] = background?.system?.flaws ?? [];
    const flaws: string[][] = Object.values(apiFlaws).map(
      (flaw: { value: string[] }) => flaw.value
    );
    const b = await prisma.background.create({
      data: {
        name: background.name,
        description: background.system.description.value,
        boosts: {
          create: [
            ...boosts.map((abilityScores: string[]) => ({
              isBoost: true,
              kind: "BACKGROUND",
              abilityScores: {
                create: abilityScores.map((abilityScore: string) => ({
                  abilityScore: {
                    connect: { abbreviatedName: abilityScore },
                  },
                })),
              },
            })),
            ...flaws.map((abilityScores: string[]) => ({
              isBoost: false,
              kind: "BACKGROUND",
              abilityScores: {
                create: abilityScores.map((abilityScore: string) => ({
                  abilityScore: {
                    connect: { abbreviatedName: abilityScore },
                  },
                })),
              },
            })),
          ],
        },
        source: {
          connectOrCreate: {
            where: { name: background.system.source.value },
            create: { name: background.system.source.value },
          },
        },
      },
    });
  }

  const playerClasses = await axios
    .get("https://api.pathfinder2.fr/v1/pf2/class", {
      headers: { Authorization: process.env.SRD_API_KEY },
    })
    .then((r) => r.data);
  for (const playerClass of playerClasses.results) {
    let keyAbilities: string[] = playerClass.system.keyAbility.value;
    const feats = await axios
      .get(
        `https://api.pathfinder2.fr/v1/pf2/feat?system.featType.value=class&system.traits.value=${playerClass.name}`,
        {
          headers: { Authorization: process.env.SRD_API_KEY },
        }
      )
      .then((r) => r.data);

    const pc = await prisma.playerClass.create({
      data: {
        name: playerClass.name,
        description: playerClass.system.description.value,
        feats: {
          create: await Promise.all(
            feats.results.map(async (feat) => ({
              feat: {
                connect: {
                  kind_name_sourceId: {
                    name: feat.name,
                    kind: feat.system.featType.value.toUpperCase(),
                    sourceId:
                      (
                        await prisma.source.findUnique({
                          where: { name: feat.system.source.value },
                        })
                      )?.id ?? "",
                  },
                },
              },
            }))
          ),
        },
        boosts: {
          create: {
            isBoost: true,
            kind: "PLAYER_CLASS",
            abilityScores: {
              create: keyAbilities.map((keyAbility) => ({
                abilityScore: {
                  connect: { abbreviatedName: keyAbility },
                },
              })),
            },
          },
        },
        source: {
          connectOrCreate: {
            where: { name: playerClass.system.source.value },
            create: { name: playerClass.system.source.value },
          },
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
