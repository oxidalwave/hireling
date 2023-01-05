const ancestryFeatures = [
  {
    _id: "YGk41WV42aTM7CQV",
    name: "Advanced Undead Benefits",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p><strong>Darkvision:</strong> You gain darkvision if you don't already have it.</p>\n<p><strong>Greater Disease and Poison Protection:</strong> Your bonus against disease and poison increases to +2. You gain poison resistance equal to half your level.</p>\n<p><strong>Paralysis and Sleep Protection:</strong> You gain a +1 circumstance bonus to saving throws (or any other defense) against effects that would make you @UUID[Compendium.pf2e.conditionitems.Paralyzed]{Paralyzed} or have the sleep trait.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "Sense",
          label: "PF2E.SensesLowLightVision",
          selector: "darkvision",
        },
        {
          key: "FlatModifier",
          predicate: [
            {
              or: ["disease", "poison"],
            },
          ],
          selector: "saving-throw",
          slug: "advanced-undead-disease-poison",
          type: "circumstance",
          value: 2,
        },
        {
          key: "FlatModifier",
          predicate: [
            {
              or: ["inflicts:paralyzed", "sleep"],
            },
          ],
          selector: "saving-throw",
          slug: "advanced-undead-paralyzed-sleep",
          type: "circumstance",
          value: 1,
        },
      ],
      source: {
        value: "Pathfinder Book of the Dead",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "AzGJN1wwLFaLJIeo",
    name: "Aquatic Adaptation",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your reptilian biology allows you to hold your breath for a long time. You gain the @UUID[Compendium.pf2e.feats-srd.Breath Control]{Breath Control} general feat as a bonus feat.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "GrantItem",
          uuid: "Compendium.pf2e.feats-srd.Breath Control",
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Character Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        selected: {
          lizardfolk: "Lizardfolk",
        },
        value: ["lizardfolk"],
      },
    },
    type: "feat",
  },
  {
    _id: "RYrY7o0i6s7KW9io",
    name: "Automaton Core",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your body contains an automaton core infused with planar quintessence that grants you power to perform various tasks and houses your soul and life energy. This life energy flows through you much like the blood of humanoids. As a result, you are a living creature. You don't have the typical construct immunities, can be affected by effects that target a living creature, and can recover Hit Points normally via positive energy. Additionally, you are not destroyed when reduced to 0 Hit Points. Instead, your life energy attempts to keep you active even in dire straits; you are knocked out and begin dying when reduced to 0 Hit Points.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Guns & Gears",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["automaton"],
      },
    },
    type: "feat",
  },
  {
    _id: "SAbzItAI4uwbdnQk",
    name: "Basic Undead Benefits",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p><strong>Necril:</strong> You know the Necril language.</p>\n<p><strong>Undead Vision:</strong> You gain low-light vision, or you gain darkvision if your ancestry already has low-light vision.</p>\n<p><strong>Negative Healing:</strong> You are damaged by positive damage and aren't healed by positive healing effects. You don't take negative damage and are healed by negative effects that heal undead.</p>\n<p><strong>Negative Survival:</strong> Unlike normal undead, you aren't destroyed when reduced to 0 Hit Points. Instead, powerful negative energy attempts to keep you from being destroyed even in dire straits. You are knocked out and begin dying when reduced to 0 Hit Points. Because you're undead, many methods of bringing someone back from dying, such as stabilize, don't benefit you. When you would die, you're destroyed rather than dead, just like other undead.</p>\n<p><strong>Immunity to Death Effects:</strong> You're immune to death effects. This keeps you from being automatically killed or from having your dying value automatically increase, but it doesn't make you immune to other parts of the spell or effect. For example, you can still take mental damage and become frightened by a phantasmal killer, you just don't instantly die from it.</p>\n<p><strong>Disease and Poison Protection:</strong> You gain a +1 circumstance bonus to saving throws (or any other defense) against disease and poison.</p>\n<p><strong>Undead Hunger:</strong> While you don't eat or drink the same food as humanoids do, you usually have thirsts and hungers related to your undead state, such as a ghoul's hunger for humanoid flesh, a zombie's craving for brains, and a vampire's desire for blood. Additionally, while you don't sleep, you enter a state of quiescence for at least 4 hours a day to recuperate, which lets your undead flesh reknit and recover naturally. Many undead choose to rest when the sun is at its highest.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "Sense",
          label: "PF2E.SensesLowLightVision",
          selector: "lowLightVision",
        },
        {
          key: "Sense",
          label: "PF2E.SensesDarkvision",
          predicate: ["self:low-light-vision:from-ancestry"],
          selector: "darkvision",
        },
        {
          key: "ActiveEffectLike",
          mode: "add",
          path: "system.traits.languages.value",
          value: "necril",
        },
        {
          key: "FlatModifier",
          predicate: [
            {
              or: ["disease", "poison"],
            },
          ],
          selector: "saving-throw",
          type: "circumstance",
          value: 1,
        },
        {
          key: "Immunity",
          type: "death-effects",
        },
      ],
      source: {
        value: "Pathfinder Book of the Dead",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "jatezR4bENwhC6GL",
    name: "Bite",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your sharp teeth and powerful jaws are fearsome weapons. You have a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          baseType: "jaws",
          category: "unarmed",
          damage: {
            base: {
              damageType: "piercing",
              dice: 1,
              die: "d6",
            },
          },
          group: "brawling",
          img: "systems/pf2e/icons/unarmed-attacks/jaws.webp",
          key: "Strike",
          label: "PF2E.Weapon.Base.jaws",
          range: null,
          slug: "jaws",
          traits: ["unarmed"],
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: The Mwangi Expanse",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["gnoll"],
      },
    },
    type: "feat",
  },
  {
    _id: "dtNsRAhCRfteA1ev",
    name: "Blunt Snout",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your small, blunt snout and labyrinthine sinus system make you resistant to phenomena that assail the nose. When you roll a saving throw against inhaled threats (such as inhaled poisons) and olfactory effects (such as xulgath stench), you get the outcome one degree of success better than the result of your roll.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "Note",
          predicate: [
            {
              or: ["inhaled", "olfactory"],
            },
          ],
          selector: "saving-throw",
          text: "When you roll a saving throw against an olfactory or inhaled effect, you get the outcome one degree of success better than the result of your roll.",
          title: "{item|name}",
        },
        {
          adjustment: {
            all: "one-degree-better",
          },
          key: "AdjustDegreeOfSuccess",
          predicate: [
            {
              or: ["olfactory", "inhaled"],
            },
          ],
          selector: "saving-throw",
          type: "save",
        },
      ],
      source: {
        value: "Pathfinder #153: Life's Long Shadows",
      },
      traits: {
        custom: "",
        rarity: "common",
        selected: {
          shoony: "Shoony",
        },
        value: ["shoony"],
      },
    },
    type: "feat",
  },
  {
    _id: "R6rcqRsBR0KIho5n",
    name: "Change Shape (Anadi)",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>As a anadi, you gain the @UUID[Compendium.pf2e.actionspf2e.Change Shape (Anadi)]{Change Shape (Anadi)} ability.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "GrantItem",
          uuid: "Compendium.pf2e.actionspf2e.Change Shape (Anadi)",
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: The Mwangi Expanse",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["anadi"],
      },
    },
    type: "feat",
  },
  {
    _id: "Ymg6WqeJqOyLJLEr",
    name: "Change Shape (Kitsune)",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>As a kitsune, you gain the @UUID[Compendium.pf2e.actionspf2e.Change Shape (Kitsune)]{Change Shape (Kitsune)} ability.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "GrantItem",
          uuid: "Compendium.pf2e.actionspf2e.Change Shape (Kitsune)",
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Ancestry Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["kitsune"],
      },
    },
    type: "feat",
  },
  {
    _id: "Eyuqu6eIaoGCjnMv",
    name: "Clan Dagger",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You get one @UUID[Compendium.pf2e.equipment-srd.Clan Dagger]{clan dagger} of your clan for free, as it was given to you at birth. Selling this dagger is a terrible taboo and earns you the disdain of other dwarves.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          adjustName: false,
          allowedDrops: {
            label: "level-0 dwarf weapon",
            predicate: ["item:level:0", "item:trait:dwarf", "item:type:weapon"],
          },
          choices: [
            {
              img: "systems/pf2e/icons/equipment/weapons/clan-dagger.webp",
              label: "PF2E.Weapon.Base.clan-dagger",
              value: "clan-dagger",
            },
            {
              img: "systems/pf2e/icons/equipment/weapons/clan-pistol.webp",
              label: "PF2E.SpecificRule.ClanWeapon.ClanPistol",
              value: "clan-pistol",
            },
          ],
          flag: "clanWeapon",
          key: "ChoiceSet",
          label: "PF2E.SpecificRule.ClanWeapon.Label",
          prompt: "PF2E.SpecificRule.ClanWeapon.Prompt",
        },
        {
          domain: "all",
          key: "RollOption",
          option: "{item|flags.pf2e.rulesSelections.clanWeapon}",
          removeUponCreate: true,
        },
        {
          key: "GrantItem",
          predicate: ["clan-dagger"],
          uuid: "Compendium.pf2e.equipment-srd.Clan Dagger",
        },
        {
          key: "GrantItem",
          nestFeat: false,
          predicate: ["clan-pistol"],
          uuid: "Compendium.pf2e.feats-srd.Clan Pistol",
        },
      ],
      source: {
        value: "Pathfinder Core Rulebook",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["dwarf"],
      },
    },
    type: "feat",
  },
  {
    _id: "NfkxFWUeG6g41e8w",
    name: "Claws",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your sharp claws offer an alternative to the fists other humanoids bring to a fight. You have a claw unarmed attack that deals [[/r {1d4}[slashing]]]{1d4 slashing damage} and has the agile and finesse traits.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          category: "unarmed",
          damage: {
            base: {
              damageType: "slashing",
              dice: 1,
              die: "d4",
            },
          },
          group: "brawling",
          key: "Strike",
          label: "PF2E.Weapon.Base.claw",
          range: null,
          traits: ["finesse", "agile", "unarmed"],
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Character Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        selected: {
          lizardfolk: "Lizardfolk",
        },
        value: ["lizardfolk"],
      },
    },
    type: "feat",
  },
  {
    _id: "mnhmhOKWLiOD0lev",
    name: "Constructed",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your synthetic body resists ailments better than those of purely biological organisms. You gain a +1 circumstance bonus to saving throws against diseases, poisons, and radiation.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "FlatModifier",
          label: "Constructed (vs. diseases, poisons, and radiation)",
          predicate: [
            {
              or: ["disease", "poison", "radiation"],
            },
          ],
          selector: "saving-throw",
          type: "circumstance",
          value: 1,
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Ancestry Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["android"],
      },
    },
    type: "feat",
  },
  {
    _id: "BHPDeqQHqi7ukCUW",
    name: "Constructed (Poppet)",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>The materials of your body resist ailments that assail the flesh. You gain a +1 circumstance bonus to saving throws against death effects, disease, and poison as well as to saving throws against effects that would give you the drained, paralyzed, or sickened conditions. Your spark of life means that you're a living creature, and you can be healed by positive energy and harmed by negative energy as normal.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "FlatModifier",
          label:
            "Constructed (vs. disease, poisons, death effects, paralysis, drained, and sickened)",
          predicate: [
            {
              or: [
                "disease",
                "poison",
                "death-effect",
                "paralyzed",
                "drained",
                "sickened",
              ],
            },
          ],
          selector: "saving-throw",
          type: "circumstance",
          value: 1,
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: The Grand Bazaar",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["poppet"],
      },
    },
    type: "feat",
  },
  {
    _id: "E28a45fUC2OkXZXY",
    name: "Constructed Body",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your physiological needs are different than those of living creatures. You don't need to eat or drink. You don't need to sleep, but you still need a daily period of rest. During this period of rest, you must enter a recuperating standby state for 2 hours, which is similar to sleeping except you are aware of your surroundings and don't take penalties for being @UUID[Compendium.pf2e.conditionitems.Unconscious]{Unconscious}. Much like with sleeping, if you go too long without entering your standby state, you become @UUID[Compendium.pf2e.conditionitems.Fatigued]{Fatigued} and can't recover until you enter standby for 2 hours.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Guns & Gears",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["automaton"],
      },
    },
    type: "feat",
  },
  {
    _id: "HHVQDp61ehcpdiU8",
    name: "Darkvision",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Core Rulebook",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "egpiSWBrNBb1Fmig",
    name: "Draconic Exemplar",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          '<p>You draw minor powers from your draconic exemplar. Choose a type of chromatic or metallic dragon to be your exemplar. This determines your scale color and appearance, and dragons sometimes look more favorably upon those kobolds who resemble them, at the GM\'s discretion. Your exemplar may also determine details of other abilities you have, using the Draconic Exemplars table.</p>\n<h3><strong>Table 1-1 Draconic Exemplars</strong></h3>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Dragon</th>\n<th>Breath Weapon Shape</th>\n<th>Damage Type</th>\n<th>Saving Throw</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Black</td>\n<td>Line</td>\n<td>Acid</td>\n<td>Reflex</td>\n</tr>\n<tr>\n<td>Blue</td>\n<td>Line</td>\n<td>Electricity</td>\n<td>Reflex</td>\n</tr>\n<tr>\n<td>Green</td>\n<td>Cone</td>\n<td>Poison</td>\n<td>Fortitude</td>\n</tr>\n<tr>\n<td>Red</td>\n<td>Cone</td>\n<td>Fire</td>\n<td>Reflex</td>\n</tr>\n<tr>\n<td>White</td>\n<td>Cone</td>\n<td>Cold</td>\n<td>Reflex</td>\n</tr>\n<tr>\n<td>Brass</td>\n<td>Line</td>\n<td>Fire</td>\n<td>Reflex</td>\n</tr>\n<tr>\n<td>Bronze</td>\n<td>Line</td>\n<td>Electricity</td>\n<td>Reflex</td>\n</tr>\n<tr>\n<td>Copper</td>\n<td>Line</td>\n<td>Acid</td>\n<td>Reflex</td>\n</tr>\n<tr>\n<td>Gold</td>\n<td>Cone</td>\n<td>Fire</td>\n<td>Reflex</td>\n</tr>\n<tr>\n<td>Silver</td>\n<td>Cone</td>\n<td>Cold</td>\n<td>Reflex</td>\n</tr>\n</tbody>\n</table>',
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          adjustName: true,
          choices: [
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Black",
              value: "black",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Blue",
              value: "blue",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Green",
              value: "green",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Red",
              value: "red",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.White",
              value: "white",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Brass",
              value: "brass",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Bronze",
              value: "bronze",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Copper",
              value: "copper",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Gold",
              value: "gold",
            },
            {
              label: "PF2E.SpecificRule.DragonDisciple.DragonChoice.Silver",
              value: "silver",
            },
          ],
          flag: "draconicExemplar",
          key: "ChoiceSet",
          prompt: "PF2E.SpecificRule.DragonDisciple.Prompt",
          rollOption: "self:feature:draconic-exemplar",
        },
      ],
      source: {
        value: "Pathfinder Advanced Player's Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["kobold"],
      },
    },
    type: "feat",
  },
  {
    _id: "uSAYmU7PO2QoOWhB",
    name: "Emotionally Unaware",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You find it difficult to understand and express complex emotions. You take a -1 circumstance penalty to Diplomacy and Performance checks, and on Perception checks to Sense Motive.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "FlatModifier",
          label: "Emotionally Unaware (to Sense Motive)",
          predicate: ["action:sense-motive"],
          selector: "perception",
          type: "circumstance",
          value: -1,
        },
        {
          key: "FlatModifier",
          selector: ["diplomacy", "performance"],
          type: "circumstance",
          value: -1,
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Ancestry Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["android"],
      },
    },
    type: "feat",
  },
  {
    _id: "QyBfftocP1i43Qrp",
    name: "Empathic Sense",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Kashrishi are able to get a vague sense of the current emotional state of others within 15 feet of them. This manifests as a general feeling of happiness, anger, or fear, without any specific details. For those with whom kashrishi have an emotional connection, physical touch can heighten this sense to greater degrees of detail and understanding, increasing with the strength of their bond. This also functions as an imprecise sense alerting you to the presence, but not the precise location, of non-mindless creatures within the area. You gain a +2 circumstance bonus on Perception checks to @UUID[Compendium.pf2e.actionspf2e.Sense Motive]{Sense Motive} against non-mindless creatures within the area of your empathic sense.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "FlatModifier",
          predicate: [
            "action:sense-motive",
            {
              lte: ["target:distance", 15],
            },
          ],
          selector: "perception",
          type: "circumstance",
          value: 2,
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Impossible Lands",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "AUlPRySCqE6o6LHH",
    name: "Eyes in Back",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You have eyes that point in several different directions and instinctively notice movement in the peripheries of your vision. When you use the Seek basic action, you can look for creatures in two areas instead of one. If precision is necessary, you can select two @Template[type:cone|distance:30]s or @Template[type:burst|distance:15]s within line of sight instead of one.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: The Mwangi Expanse",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["goloma"],
      },
    },
    type: "feat",
  },
  {
    _id: "dCp517IUFJk8JvQc",
    name: "Fangs",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You were born with a natural means for hunting and self-defense. You gain a fangs unarmed attack that deals [[/r {1d6}[piercing]]]{1d6 piercing damage}. Your fangs are in the brawling group and have the finesse and unarmed traits.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          category: "unarmed",
          damage: {
            base: {
              damageType: "piercing",
              dice: 1,
              die: "d6",
            },
          },
          group: "brawling",
          key: "Strike",
          label: "PF2E.BattleForm.Attack.Fangs",
          range: null,
          traits: ["finesse", "unarmed"],
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: The Mwangi Expanse",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["anadi"],
      },
    },
    type: "feat",
  },
  {
    _id: "jS8GamSTl8yMLL4F",
    name: "Fangs (Nagaji)",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your mouth contains either rows of hooked, needle-sharp teeth or a pair of vicious serpent fangs. You gain a fangs unarmed attack that deals 1d6 piercing damage. Your fangs are in the brawling group and have the finesse and unarmed traits.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          category: "unarmed",
          damage: {
            base: {
              damageType: "piercing",
              dice: 1,
              die: "d6",
            },
          },
          group: "brawling",
          key: "Strike",
          label: "PF2E.BattleForm.Attack.Fangs",
          predicate: [
            {
              not: "self:heritage:sacred-nagaji",
            },
          ],
          range: null,
          traits: ["finesse", "unarmed"],
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Impossible Lands",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "qKh6MxgE0cwde6mC",
    name: "Flammable",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You have weakness to fire damage equal to one-third your level (minimum 1).</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "Weakness",
          predicate: [
            {
              not: "feat:sealed-poppet",
            },
          ],
          type: "fire",
          value: "max(1,floor(@actor.level/3))",
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: The Grand Bazaar",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "8sxtjVsk9HBY5yAv",
    name: "Glowing Horn",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your horn reacts to psychic energy by softly glowing. The horn emanates dim light in a @Template[type:emanation|distance:10] until the start of your next turn whenever you use an occult action you gained from an ancestry feat, cast an innate occult spell, or Cast a Spell that has the mental trait.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: Impossible Lands",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "vPhPgzpRjYDMT9Kq",
    name: "Greater Darkvision",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white. Some forms of magical darkness, such as a 4th-level <em>@UUID[Compendium.pf2e.spells-srd.Darkness]{Darkness}</em> spell, block normal @UUID[Compendium.pf2e.ancestryfeatures.Darkvision]{Darkvision}. You, however, can see through even these forms of magical darkness.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "Sense",
          label: "PF2E.SensesGreaterDarkvision",
          selector: "greaterDarkvision",
        },
      ],
      source: {
        value: "Pathfinder Advanced Player's Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "vt67b8uoNEbskcBv",
    name: "Hydration",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>While you are an amphibious being equally as capable on land as in the water, your body requires you to return to aquatic environments at least once in a 24-hour period. You must submerge in water in order to rehydrate your water-acclimated skin.</p>\n<p>If you fail to do this, your skin begins to crack and your gills become painful. After the first 24 hours outside of water, you take a -1 status penalty to Fortitude saves. After 48 hours, you struggle to breathe air and begin to suffocate until returned to water.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Effect: Hydration]{Effect: Hydration}</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: Absalom, City of Lost Omens",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["azarketi"],
      },
    },
    type: "feat",
  },
  {
    _id: "IXyXCMBldrU5G60e",
    name: "Innate Venom",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your blood carries toxins deadly to all but yourself. You gain the @UUID[Compendium.pf2e.actionspf2e.Envenom]{Envenom} action, which can deliver minor vishkanyan venom. The save DC for your venom is equal to the higher of your class DC or spell DC.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "GrantItem",
          uuid: "Compendium.pf2e.actionspf2e.Envenom",
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Impossible Lands",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "y1EmCv2cEb5hXBwx",
    name: "Keen Eyes",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your eyes are sharp, allowing you to make out small details about concealed or even invisible creatures that others might miss. You gain a +2 circumstance bonus when using the @UUID[Compendium.pf2e.actionspf2e.Seek]{Seek} action to find @UUID[Compendium.pf2e.conditionitems.Hidden]{Hidden} or @UUID[Compendium.pf2e.conditionitems.Undetected]{Undetected} creatures within 30 feet of you. When you target an opponent that is @UUID[Compendium.pf2e.conditionitems.Concealed]{Concealed} from you or hidden from you, reduce the DC of the flat check to 3 for a concealed target or 9 for a hidden one.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "FlatModifier",
          predicate: [
            "action:seek",
            "target:within-30-feet",
            {
              or: ["target:hidden", "target:undetected"],
            },
          ],
          selector: "perception",
          type: "circumstance",
          value: 2,
        },
      ],
      source: {
        value: "Pathfinder Core Rulebook",
      },
      traits: {
        custom: "",
        rarity: "common",
        selected: {
          halfling: "Halfling",
        },
        value: ["halfling"],
      },
    },
    type: "feat",
  },
  {
    _id: "sL1hHxrHdMNIZVAd",
    name: "Land on Your Feet",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>When you fall, you take only half the normal damage and don't land @UUID[Compendium.pf2e.conditionitems.Prone]{Prone}.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Advanced Player's Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        selected: {
          catfolk: "Catfolk",
        },
        value: ["catfolk"],
      },
    },
    type: "feat",
  },
  {
    _id: "DRtaqOHXTRtGRIUT",
    name: "Low-Light Vision",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>A creature with low-light vision can see in dim light as though it were bright light, so it ignores the @UUID[Compendium.pf2e.conditionitems.Concealed]{Concealed} condition due to dim light.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Core Rulebook",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["elf", "gnome", "half-elf", "half-orc", "leshy", "shoony"],
      },
    },
    type: "feat",
  },
  {
    _id: "TRw4oBZBFZG96jKO",
    name: "Magical Strikes",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your inherent magic pervades your entire being. All your Strikes are magical, whether with unarmed attacks or weapons.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: Ancestry Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["sprite"],
      },
    },
    type: "feat",
  },
  {
    _id: "N0zhJ0whkDJPlftl",
    name: "Photosynthesis",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You gain nourishment from photosynthesis. You typically don't need to pay for food. If you go without sunlight for 1 week, you begin to starve. You can derive nourishment from specially formulated bottles of alchemical sunlight instead of natural sunlight, but these bottles cost 10 times as much as standard rations (40 sp).</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: Impossible Lands",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "Sm3tKetM6kddTio3",
    name: "Plant Nourishment",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You gain nourishment in the same way that the plants or fungi that match your body type normally do, through some combination of photosynthesis, absorbing minerals with your roots, or scavenging decaying matter. You typically do not need to pay for food. If you normally rely on photosynthesis and go without sunlight for 1 week, you begin to starve. You can derive nourishment from specially formulated bottles of sunlight instead of natural sunlight, but these bottles cost 10 times as much as standard rations (or 40 sp).</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: Character Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["leshy"],
      },
    },
    type: "feat",
  },
  {
    _id: "PtvzTm2gjdCKao4I",
    name: "Prehensile Tail",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You can use your long, flexible tail to perform Interact actions requiring a free hand, even if both hands are otherwise occupied. Your tail can't perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and you can't use it to hold items.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: Impossible Lands",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "dkZ8RxdQFJrdxwQo",
    name: "Revulsion",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>You can't voluntarily come within 10 feet of brandished garlic or a religious symbol of a non-evil deity. A creature must Interact to brandish garlic or a religious symbol for 1 round (similar to Raising a Shield). If you involuntarily come within 10 feet of an object of your revulsion, you gain the @UUID[Compendium.pf2e.conditionitems.Fleeing]{Fleeing} condition, running from the subject of your revulsion until you end an action beyond 10 feet of it. After 1 round of being exposed to the subject of your revulsion, you can attempt a @Check[type:will|dc:25] save as a single action, which has the concentrate trait. On a success, you overcome your revulsions for [[/r 1d6 #Overcome Revulsion Duration]]{1d6 rounds}, or 1 hour on a critical success.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Book of the Dead",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "qJD3PJdoSXFrZEwr",
    name: "Sharp Beak",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>With your Sharp Beak, you are never without a weapon. You have a beak unarmed attack that deals [[/r {1d6}[piercing]]]{1d6 piercing damage}. Your beak is in the brawling weapon group and has the finesse and unarmed traits.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          category: "unarmed",
          damage: {
            base: {
              damageType: "piercing",
              dice: 1,
              die: "d6",
            },
          },
          group: "brawling",
          img: "systems/pf2e/icons/unarmed-attacks/beak.webp",
          key: "Strike",
          label: "PF2E.BattleForm.Attack.Beak",
          range: null,
          slug: "beak",
          traits: ["finesse", "unarmed"],
        },
      ],
      source: {
        value: "Pathfinder Advanced Player's Guide",
      },
      traits: {
        custom: "",
        rarity: "uncommon",
        selected: {
          tengu: "Tengu",
        },
        value: ["tengu"],
      },
    },
    type: "feat",
  },
  {
    _id: "bHUrm79wJCcI7L3A",
    name: "Sunlight",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>If exposed to direct sunlight, you immediately become @UUID[Compendium.pf2e.conditionitems.Slowed]{Slowed 1}. The slowed value increases by 1 each time you end your turn in sunlight. If you lose all your actions in this way, you are destroyed. Due to your supernatural aversion to light, you don't cast shadows or show a reflection in mirrors.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Book of the Dead",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "feat",
  },
  {
    _id: "BgHrucbZ9TH92RDv",
    name: "Sunlight Healing",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>A conrasu can enter a meditative, healing state as a 10-minute activity when exposed to direct sunlight, in which case they recover 1d8 Hit Points. At 3rd level, and every 2 levels thereafter, this healing increases by 1d8. [[/r ceil(@actor.level/2))d8[healing]]]{Levelled healing}</p>\n<p>Once a conrasu has recovered Hit Points in this way, they are temporarily immune to further uses of Sunlight Healing for 1 day.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: The Mwangi Expanse",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["conrasu"],
      },
    },
    type: "feat",
  },
  {
    _id: "kMgyOI4kBIEtFvhb",
    name: "Swim",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value: "<p>Azarketi get a base Swim speed of 30.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "BaseSpeed",
          selector: "swim",
          value: 30,
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Absalom, City of Lost Omens",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["azarketi"],
      },
    },
    type: "feat",
  },
  {
    _id: "mEDTJi7d1bTEiwUD",
    name: "Unusual Anatomy",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>Your unorthodox body resists physical afflictions meant for other creatures. You gain a +1 circumstance bonus to saves against diseases and poisons.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [
        {
          key: "FlatModifier",
          predicate: [
            {
              or: ["disease", "poison"],
            },
          ],
          selector: "fortitude",
          type: "circumstance",
          value: 1,
        },
      ],
      source: {
        value: "Pathfinder Lost Omens: Ancestry Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["fleshwarp"],
      },
    },
    type: "feat",
  },
  {
    _id: "oCIO7UJqbpTkI62l",
    name: "Wings",
    system: {
      actionType: {
        value: "passive",
      },
      actions: {
        value: null,
      },
      description: {
        value:
          "<p>All strix possess powerful wings. While not all strix focus on honing their flying skills, a strong flap of their wings allows strix to travel longer distances when jumping.</p>\n<p>When Leaping horizontally, you move an additional 5 feet. You don't automatically fail your checks to High Jump or Long Jump if you don't Stride at least 10 feet first. In addition, when you make a Long Jump, you can jump a distance up to 10 feet further than your Athletics check result, though still with the normal maximum of your Speed.</p>",
      },
      featType: {
        value: "ancestryfeature",
      },
      level: {
        value: 0,
      },
      prerequisites: {
        value: [],
      },
      rules: [],
      source: {
        value: "Pathfinder Lost Omens: Ancestry Guide",
      },
      traits: {
        custom: "",
        rarity: "common",
        value: ["strix"],
      },
    },
    type: "feat",
  },
];

export default ancestryFeatures;
