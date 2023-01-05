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

export default skills;
