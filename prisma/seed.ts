import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function initAbilityScores() {
  const abilityScores = require("./prisma/data/abilityScores.js");

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
          create: abilityScores.map(({ abbreviatedName }) => ({
            abilityScore: {
              connect: { abbreviatedName },
            },
          })),
        },
      },
    });
  }
}

async function initSkills() {
  const skills = require("./prisma/data/skills.js");

  for (const skill of skills) {
    await prisma.skill.create({
      data: skill,
    });
  }
}

async function initEquipment() {
  const allEquipment = require("./prisma/data/equipment.js");

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
}

async function loadFeats() {
  return require("./prisma/data/feats.js");
}
async function initFeats() {
  const allFeats = await loadFeats();

  for (const feat of allFeats) {
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
}

async function initAncestries() {
  const ancestries = require("./prisma/data/ancestries.js");
  const allFeats = await loadFeats();
  for (const ancestry of ancestries.results) {
    const feats = allFeats.filter(
      (f) => f.system.traits.value === ancestry.name
    );
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
}

async function initHeritages() {
  await prisma.heritage.deleteMany({});

  const heritages = require("./data/heritages.js").default;
  for (const heritage of heritages) {
    const source = await prisma.source.findUnique({
      where: { name: heritage.source.name },
    });
    if (source) {
      const h = await prisma.heritage.create({
        data: {
          name: heritage.name,
          description: heritage.description,
          ancestry: {
            connect: {
              name_sourceId: {
                name: heritage.ancestry.name,
                sourceId: source.id,
              },
            },
          },
          source: {
            connectOrCreate: {
              where: { name: heritage.source.name },
              create: { name: heritage.source.name },
            },
          },
        },
      });
    }
  }
}

async function initBackgrounds() {
  const backgrounds = require("./prisma/data/backgrounds.js").default;
  for (const background of backgrounds) {
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
}

async function initPlayerClasses() {
  const playerClasses = require("./prisma/data/playerClasses.js").default;
  const allFeats = await loadFeats();
  for (const playerClass of playerClasses) {
    let keyAbilities: string[] = playerClass.system.keyAbility.value;
    const feats = allFeats.filter(
      (f) => f.system.traits.value === playerClass.name
    );

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

async function main() {
  //await initAbilityScores();
  //await initSkills();
  //await initEquipment();
  //await initFeats();
  //await initAncestries();
  await initHeritages();
  //await initBackgrounds();
  //await initPlayerClasses();
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
