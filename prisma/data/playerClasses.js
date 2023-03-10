const playerClasses = [
  {
    _id: "XwfcJuskrhI9GIjX",
    name: "Alchemist",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "Alchemical Bombs",
          rank: 1,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>There\'s no sight more beautiful to you than a strange brew bubbling in a beaker, and you consume your ingenious elixirs with abandon. You\'re fascinated by uncovering the secrets of science and the natural world, and you\'re constantly experimenting in your lab or on the go with inventive concoctions for every eventuality. You are fearless in the face of risk, hurling explosive or toxic creations at your foes. Your unique path toward greatness is lined with alchemical brews that push your mind and body to their limits.</em></p>\n<p><strong>Key Ability: INTELLIGENCE</strong></p>\n<p>At 1st level, your class gives you an ability bonus to Intelligence</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Alchemist</h1>\n<h2>During Combat Encounters...</h2>\n<p>You lob bombs at your foes, harry your enemies, and support the rest of your party with potent elixirs. At higher levels, your mutagens warp your body into a resilient and powerful weapon.</p>\n<h2>During Social Encounters...</h2>\n<p>You provide knowledge and experience about alchemical items and related secrets, such as poisons and diseases.</p>\n<h2>While Exploring...</h2>\n<p>You keep an eye out for trouble with your bombs at the ready, while giving advice on all things alchemical and mysterious.</p>\n<h2>In Downtime...</h2>\n<p>You experiment in an alchemical lab, brewing elixirs, making bombs, and furthering your alchemical knowledge.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Enjoy tinkering with strange formulas and alchemical reagents, often with a single-minded dedication and recklessness that gives others pause.</li>\n<li>Get a kick out of wreaking havoc with the alchemical concoctions you\'ve made, and enjoy watching things burn, dissolve, freeze, and jolt.</li>\n<li>Endlessly experiment to discover new, more potent alchemical tools.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Think you\'re some kind of sorcerer or an eccentric wizard and don\'t understand that you don\'t cast spells; spellcasters who clumsily dabble in alchemy only heighten this misconception.</li>\n<li>Don\'t understand your zeal for alchemy, creativity, and invention.</li>\n<li>Assume that if you haven\'t caused a catastrophe with your experimentations, you inevitably will.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Trained in Will</p>\n<h2>Skills</h2>\n<p>Trained in Crafting</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in alchemical bombs</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in medium armor</p>\n<p>Trained in light armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in alchemist class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as an Alchemist. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, alchemy, formula book, research field, alchemist feat</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>General feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, field discovery, powerful alchemy, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Alchemical weapon expertise, general feat, iron will, perpetual infusions, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Alchemical expertise, alertness, ancestry feat, double brew, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>General feat, juggernaut, perpetual potency, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, greater field discovery, light armor expertise, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, alchemical alacrity, evasion, general feat, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Alchemical mastery, ancestry feat, perpetual perfection, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Alchemist feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, light armor mastery, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, alchemist feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Alchemist Feats</h2>\n<p>At 1st level and every even-numbered level thereafter, you gain an alchemist class feat.</p>\n<h2>Alchemy</h2>\n<p>You understand the complex interactions of natural and unnatural substances and can concoct alchemical items to meet your needs. You can do this using normal reagents and the Craft activity, or you can use special infused reagents that allow you to craft temporary items quickly and at no cost. Over time, you can create more and more alchemical items for free, and since each of them becomes more and more powerful, you advance in power dramatically, leaving behind those who don\'t understand your strange science.</p>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Alchemical Crafting]{Alchemical Crafting} feat, even if you don\'t meet that feat\'s prerequisites, and you gain the four common 1st-level alchemical formulas granted by that feat. You can use this feat to create alchemical items as long as you have the items\' formulas in your formula book.</p>\n<h3><strong>Infused Reagents</strong></h3>\n<p>You infuse reagents with your own alchemical essence, allowing you to create alchemical items at no cost. Each day during your daily preparations, you gain a number of batches of infused reagents equal to your level + your Intelligence modifier. You can use these reagents for either advanced alchemy or Quick Alchemy, described below. Together, these infused reagents have light Bulk.</p>\n<p>As soon as you make your next daily preparations, your infused reagents from the previous day\'s preparations are instantly destroyed, and nonpermanent effects of your previous day\'s infused items immediately end. While infused reagents are physical objects, they can\'t be duplicated, preserved, or created in any way other than your daily preparations. Any such artificial reagents lack the infusion and are useless for advanced alchemy or Quick Alchemy.</p>\n<h3><strong>Advanced Alchemy</strong></h3>\n<p>During your daily preparations, after producing new infused reagents, you can spend batches of those infused reagents to create infused alchemical items. You don\'t need to attempt a Crafting check to do this, and you ignore both the number of days typically required to create the items and any alchemical reagent requirements. Your advanced alchemy level is equal to your level. For each batch of infused reagents you spend, choose an alchemical item of your advanced alchemy level or lower that\'s in your formula book, and make a batch of two of that item. These items have the infused trait and remain potent for 24 hours or until your next daily preparations, whichever comes first.</p>\n<h3><strong>Quick Alchemy</strong></h3>\n<p>If you need a specific alchemical item on the fly, you can use your infused reagents to quickly create it with the Quick Alchemy action.</p>\n<h3>@UUID[Compendium.pf2e.feats-srd.Quick Alchemy]{Quick Alchemy}<span class="pf2-icon">A</span></h3>\n<p><strong>Cost</strong> 1 batch of infused reagents</p>\n<p><strong>Requirements</strong> You have @UUID[Compendium.pf2e.equipment-srd.Alchemist\'s Tools]{Alchemist\'s Tools}, the formula for the alchemical item you\'re creating, and a free hand.</p>\n<hr />\n<p>You swiftly mix up a short-lived alchemical item to use at a moment\'s notice. You create a single alchemical item of your advanced alchemy level or lower that\'s in your formula book without having to spend the normal monetary cost in alchemical reagents or needing to attempt a Crafting check. This item has the infused trait, but it remains potent only until the start of your next turn.</p>\n<h3><strong>Formula Book</strong></h3>\n<p>An alchemist keeps meticulous records of the formulas for every item they can create. You start with a standard formula book worth 10 sp or less for free. The formula book contains the formulas for two common 1st-level alchemical items of your choice, in addition to those you gained from Alchemical Crafting and your research field.</p>\n<p>Each time you gain a level, you can add the formulas for two common alchemical items to your formula book. These new formulas can be for any level of item you can create. You learn these formulas automatically, but it\'s also possible to find or buy additional formulas in settlements or from other alchemists, or to invent them with the @UUID[Compendium.pf2e.feats-srd.Inventor]{Inventor} feat.</p>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Research Field</h2>\n<p>Your inquiries into the alchemical nature of the universe have led you to focus on a particular field of research. You might have a degree from an scientific institute, correspond with other researchers in your field, or work as a genius loner. Choose a field of research.</p>\n<p>Your research field adds a number of formulas to your formulas book; these are your signature items. When using a batch of infused reagents to create your signature items using advanced alchemy, you can create three items instead of two. Each time you gain a level, you can swap one of your signature items with another formula in your formula book. This new signature item must be on your research field\'s list of possible signature items.</p>\n<p>Research fields can be found here (@UUID[Compendium.pf2e.classfeatures.Bomber]{Bomber}, @UUID[Compendium.pf2e.classfeatures.Chirurgeon]{Chirurgeon}, @UUID[Compendium.pf2e.classfeatures.Mutagenist]{Mutagenist} and @UUID[Compendium.pf2e.classfeatures.Toxicologist]{Toxicologist}).</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Field Discovery<span style="float: right;">Level 5</span></h2>\n<p>You learn a special discovery depending on your field.</p>\n<p>See specific research fields for more information.</p>\n<h2>Powerful Alchemy<span style="float: right;">Level 5</span></h2>\n<p>Alchemical items you create on the fly are particularily potent. When you use Quick Alchemy to create an infused alchemical item that allows a saving throw, you can change its DC to your class DC.</p>\n<h2>Alchemical Weapon Expertise<span style="float: right;">Level 7</span></h2>\n<p>You\'ve trained to more effectively wield the weapons you find in your lab. Your proficiency ranks for simple weapons, unarmed attacks, and alchemical bombs increase to expert.</p>\n<h2>Iron Will<span style="float: right;">Level 7</span></h2>\n<p>Your mental defenses are an iron fortress. Your proficiency rank for Will saves increases to expert.</p>\n<h2>Perpetual Infusions<span style="float: right;">Level 7</span></h2>\n<p>You have learned how to create perpetual alchemical infusions that can provide a near-infinite supply of certain simple items. You gain the ability to create two 1st-level alchemical items using Quick Alchemy without spending a batch of infused reagents. The items you can select depend on your research field and must be in your formula book.</p>\n<p>See specific research fields for more information.</p>\n<h2>Alchemical Expertise<span style="float: right;">Level 9</span></h2>\n<p>Constant practice has increased the effectiveness of your concoctions. Your proficiency rank for your alchemist class DC increases to expert.</p>\n<h2>Alertness<span style="float: right;">Level 9</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Double Brew<span style="float: right;">Level 9</span></h2>\n<p>You know your formulas so well that you can concoct two items at once. When using the Quick Alchemy action, instead of spending one batch of infused reagents to create a single item, you can spend up to two batches of infused reagents to make up to two alchemical items as described in that action. These items do not have to be the same.</p>\n<h2>Juggernaut<span style="float: right;">Level 11</span></h2>\n<p>Your body has become accustomed to physical hazards and resistant to pathogens and ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Perpetual Potency<span style="float: right;">Level 11</span></h2>\n<p>Your perpetual infusions improve, allowing you to use Quick Alchemy to create more powerful items with no cost. The items you can select depend on your research field and must be in your formula book.</p>\n<p>See specific research fields for more information.</p>\n<h2>Greater Field Discovery<span style="float: right;">Level 13</span></h2>\n<p>You learn an incredible discovery that advances your understanding of your field.</p>\n<p>See specific research fields for more information.</p>\n<h2>Light Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to dodge while wearing light or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and to 4 if you\'re legendary.</p>\n<h2>Alchemical Alacrity<span style="float: right;">Level 15</span></h2>\n<p>Your comfort in concocting items is such that you can create three at a time. When using the Quick Alchemy action, you can spend up to three batches of infused reagents to make up to three alchemical items as described in that action. These items do not have to be the same.</p>\n<h2>Evasion<span style="float: right;">Level 15</span></h2>\n<p>You\'ve learned to move quickly to avoid explosions, dragon\'s breath, and worse. Your proficiency rank for Reflex saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.</p>\n<h2>Alchemical Mastery<span style="float: right;">Level 17</span></h2>\n<p>Your alchemical concoctions are incredibly effective. Your proficiency rank for your alchemist class DC increases to master.</p>\n<h2>Perpetual Perfection<span style="float: right;">Level 17</span></h2>\n<p>You have perfected your perpetual infusions, allowing you to use Quick Alchemy to create even more powerful items at no cost. The items you can select depend on your research field and must be in your formula book.</p>\n<p>See specific research fields for more information.</p>\n<h2>Light Armor Mastery<span style="float: right;">Level 19</span></h2>\n<p>Your skill with light armor improves, increasing your ability to dodge blows. Your proficiency ranks for light armor and unarmored defense increase to master.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "0btpz": {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 7,
          name: "(Choice) Perpetual Infusions",
          uuid: "Compendium.pf2e.classfeatures.ZqwHAoIZrI1dGoqK",
        },
        "0q0he": {
          img: "systems/pf2e/icons/features/classes/light-armor-expertise.webp",
          level: 13,
          name: "Alchemist Armor Expertise (Level 13)",
          uuid: "Compendium.pf2e.classfeatures.bv3Qel8v9tpoFbw4",
        },
        "17vbv": {
          img: "systems/pf2e/icons/features/classes/alchemical-alarity.webp",
          level: 15,
          name: "Alchemical Alacrity",
          uuid: "Compendium.pf2e.classfeatures.Eood6pNPaJxuSgD1",
        },
        "4bdrn": {
          img: "systems/pf2e/icons/features/classes/alchemy.webp",
          level: 1,
          name: "Alchemy",
          uuid: "Compendium.pf2e.classfeatures.w3aS3tsvH2Ub6XMn",
        },
        "7rg3w": {
          img: "systems/pf2e/icons/features/classes/light-armor-master.webp",
          level: 19,
          name: "Alchemist Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.FiVYuIPTBzPzNP4E",
        },
        b3ohx: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Research Field",
          uuid: "Compendium.pf2e.classfeatures.cU2ofQLj7pg6wTSi",
        },
        bdpgv: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 11,
          name: "Perpetual Potency",
          uuid: "Compendium.pf2e.classfeatures.MGn2wezOr3VAdO3U",
        },
        bm730: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 9,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        enfdl: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        f4a0p: {
          img: "systems/pf2e/icons/features/classes/double-brew.webp",
          level: 9,
          name: "Double Brew",
          uuid: "Compendium.pf2e.classfeatures.76cwNLJEm4Yetnee",
        },
        j5xnl: {
          img: "systems/pf2e/icons/features/classes/alchemical-weapon-expertise.webp",
          level: 7,
          name: "Alchemical Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.4ocPy4O0OCLY0XCM",
        },
        k4a5r: {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 11,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        l170j: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 13,
          name: "(Choice) Greater Field Discovery",
          uuid: "Compendium.pf2e.classfeatures.MEwvBnT2VsO5lQ6I",
        },
        nmzo2: {
          img: "systems/pf2e/icons/features/classes/evasion.webp",
          level: 15,
          name: "Evasion",
          uuid: "Compendium.pf2e.classfeatures.MV6XIuAgN9uSA0Da",
        },
        plldb: {
          img: "systems/pf2e/icons/features/classes/alchemical-expertise.webp",
          level: 9,
          name: "Alchemical Expertise",
          uuid: "Compendium.pf2e.classfeatures.3e1PlMXmlSwKoc6d",
        },
        t9bmz: {
          img: "systems/pf2e/icons/features/classes/formula-book.webp",
          level: 1,
          name: "Formula Book",
          uuid: "Compendium.pf2e.classfeatures.XPPG7nN9pxt0sjMg",
        },
        u9it3: {
          img: "systems/pf2e/icons/features/classes/iron-will.webp",
          level: 7,
          name: "Iron Will",
          uuid: "Compendium.pf2e.classfeatures.wMyDcVNmA7xGK83S",
        },
        xtjxi: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 17,
          name: "Perpetual Perfection",
          uuid: "Compendium.pf2e.classfeatures.11nGqrSJOoGRlDjO",
        },
        xzcdr: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 5,
          name: "Field Discovery",
          uuid: "Compendium.pf2e.classfeatures.IxxPEahbqXwIXum7",
        },
        yc9ak: {
          img: "systems/pf2e/icons/features/classes/powerful-alchemy.webp",
          level: 5,
          name: "Powerful Alchemy",
          uuid: "Compendium.pf2e.classfeatures.7JK2a1D3VeWDcObo",
        },
        yy1uz: {
          img: "systems/pf2e/icons/features/classes/alchemical-mastery.webp",
          level: 17,
          name: "Alchemical Mastery",
          uuid: "Compendium.pf2e.classfeatures.eG7FBDjCdEFzW9V9",
        },
      },
      keyAbility: {
        value: ["int"],
      },
      perception: 1,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-alchemical-bomb.rank",
          value: 1,
        },
      ],
      savingThrows: {
        fortitude: 2,
        reflex: 2,
        will: 1,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 3,
        value: ["cra"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "YDRiP7uVvr9WRhOI",
    name: "Barbarian",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>Rage consumes you in battle. You delight in wreaking havoc and using powerful weapons to carve through your enemies, relying on astonishing durability without needing complicated techniques or rigid training. Your rages draw upon a vicious instinct, which you might associate with an animal, a spirit, or some part of yourself. To many barbarians, brute force is a hammer and every problem looks like a nail, whereas others try to hold back the storm of emotions inside them and release their rage only when it matters most.</em></p>\n<p><strong>Key Ability: STRENGTH</strong></p>\n<p>At 1st level, your class gives you an ability boost to Strength.</p>\n<p><strong>Hit Points: 12 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Barbarian</h1>\n<h2>During Combat Encounters...</h2>\n<p>You summon your rage and rush to the front lines to smash your way through. Offense is your best defense-you\'ll need to drop foes before they can exploit your relatively low defenses.</p>\n<h2>During Social Encounters...</h2>\n<p>You use intimidation to get what you need, especially when gentler persuasion can\'t get the job done.</p>\n<h2>While Exploring...</h2>\n<p>You look out for danger, ready to rush headfirst into battle in an instant. You climb the challenging rock wall and drop a rope for others to follow, and you wade into the risky currents to reach the hidden switch beneath the water\'s surface. If something needs breaking, you\'re up to the task!</p>\n<h2>In Downtime...</h2>\n<p>You might head to a tavern to carouse, build up the fearsome legend of your mighty deeds, or recruit followers to become a warlord in your own right.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Have a deep-seated well of anger, hatred, or frustration.</li>\n<li>Prefer a straightforward approach to one requiring patience and tedium.</li>\n<li>Engage in a regimen of intense physical fitness-and punch anyone who says this conflicts with your distaste for patience and tedium.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Rely on your courage and your strength, and trust that you can hold your own in a fight.</li>\n<li>See you as uncivilized or a boorish lout unfit for high society.</li>\n<li>Believe that you are loyal to your friends and allies and will never relent until the fight is done.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Expert in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Athletics</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in medium armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in barbarian class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Barbarian. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, rage, instinct, barbarian feat</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Deny advantage, general feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, brutality, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>General feat, juggernaut, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, lightning reflexes, raging resistance, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>General feat, mighty rage, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, greater juggernaut, medium armor expertise, skill increase, weapon fury</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater weapon specialization, indomitable will, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, heightened senses, skill increase, quick rage</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Barbarian feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>Armor of fury, devastator, general feat, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, barbarian feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Barbarian Feats</h2>\n<p>At 1st level and every even-numbered level thereafter, you gain a barbarian class feat.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level you gain a number of proficiencies that represent your basic training. These proficiencies are noted in at the start of this class.</p>\n<h2>Instinct</h2>\n<p>Your rage wells up from a dominant instinct-one you learned from a tradition or that comes naturally to you. Your instinct gives you an ability, requires you to avoid certain behaviors, grants you increased damage and resistances at higher levels, and allows you to select feats tied to your instinct.</p>\n<p>Instincts can be found here: @UUID[Compendium.pf2e.classfeatures.Animal Instinct]{Animal Instinct}, @UUID[Compendium.pf2e.classfeatures.Dragon Instinct]{Dragon Instinct}, @UUID[Compendium.pf2e.classfeatures.Fury Instinct]{Fury Instinct}, @UUID[Compendium.pf2e.classfeatures.Giant Instinct]{Giant Instinct}, @UUID[Compendium.pf2e.classfeatures.Spirit Instinct]{Spirit Instinct}, and @UUID[Compendium.pf2e.classfeatures.Superstition Instinct]{Superstition Instinct}.</p>\n<h2>Rage</h2>\n<p>You gain the Rage action, which lets you fly into a frenzy.</p>\n<h3>@UUID[Compendium.pf2e.actionspf2e.Rage]{Rage} <span class="pf2-icon">A</span></h3>\n<p><strong>Requirements</strong> You aren\'t fatigued or raging.</p>\n<hr />\n<p>You tap into your inner fury and begin raging. You gain a number of temporary Hit Points equal to your level plus your Constitution modifier. This frenzy lasts for 1 minute, until there are no enemies you can perceive, or until you fall unconscious, whichever comes first. You can\'t voluntarily stop raging. While you are raging:</p>\n<ul>\n<li>You deal 2 additional damage with melee weapons and unarmed attacks. This additional damage is halved if your weapon or unarmed attack is agile.</li>\n<li>You take a -1 penalty to AC.</li>\n<li>You can\'t use actions with the concentrate trait unless they also have the rage trait. You can Seek while raging.</li>\n</ul>\n<p>After you stop raging, you lose any remaining temporary Hit Points from Rage, and you can\'t Rage again for 1 minute.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Deny Advantage<span style="float: right;">Level 3</span></h2>\n<p>Your foes struggle to pass your defenses. You aren\'t flat-footed to hidden, undetected, or flanking creatures of your level or lower, or creatures of your level or lower using surprise attack. However, they can still help their allies flank.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Brutality<span style="float: right;">Level 5</span></h2>\n<p>Your fury makes your weapons lethal. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to expert. While raging, you gain access to the critical specialization effects for melee weapons and unarmed attacks.</p>\n<h2>Juggernaut<span style="float: right;">Level 7</span></h2>\n<p>Your body is accustomed to physical hardship and resistant to ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>Your rage helps you hit harder. You deal an additional 2 damage with weapons and unarmed attacks in which you have expert proficiency. This damage increases to 3 if you\'re a master, and 4 if you\'re legendary. You gain your instinct\'s specialization ability.</p>\n<p>See specific instincts for more information.</p>\n<h2>Lightning Reflexes<span style="float: right;">Level 9</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Raging Resistance<span style="float: right;">Level 9</span></h2>\n<p>Repeated exposure and toughened skin allow you to fend off harm. While raging, you gain resistance equal to 3 + your Constitution modifier to damage types based on your instinct.</p>\n<p>See specific instincts for more information.</p>\n<h2>Mighty Rage<span style="float: right;">Level 11</span></h2>\n<p>Your rage intensifies and lets you burst into action. Your proficiency rank for your barbarian class DC increases to expert. You gain the Mighty Rage free action.</p>\n<h3>@UUID[Compendium.pf2e.actionspf2e.Mighty Rage]{Mighty Rage} <span class="pf2-icon">F</span></h3>\n<p><strong>Trigger</strong> You use the Rage action on your turn.</p>\n<hr />\n<p>Use an action that has the rage trait. Alternatively, you can increase the actions of the triggering Rage to 2 to instead use a 2-action activity with the rage trait.</p>\n<h2>Greater Juggernaut<span style="float: right;">Level 13</span></h2>\n<p>You have a stalwart physiology. Your proficiency rank for Fortitude saves increases to legendary. When you roll a critical failure on a Fortitude save, you get a failure instead. When you roll a failure on a Fortitude save against an effect that deals damage, you halve the damage you take.</p>\n<h2>Medium Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned to defend yourself better against attacks. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to expert.</p>\n<h2>Weapon Fury<span style="float: right;">Level 13</span></h2>\n<p>Your rage makes you even more effective with the weapons you wield. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to master.</p>\n<h2>Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>The weapons you\'ve mastered become truly fearsome in your hands. Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary. You gain a greater benefit from your instinct\'s specialization ability.</p>\n<p>See specific instincts for more information.</p>\n<h2>Indomitable Will<span style="float: right;">Level 15</span></h2>\n<p>Your rage makes it difficult to control you. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2>Heightened Senses<span style="float: right;">Level 17</span></h2>\n<p>Your instinct heightens each of your senses further. Your proficiency rank for Perception increases to master.</p>\n<h2>Quick Rage<span style="float: right;">Level 17</span></h2>\n<p>You recover from your Rage quickly, and are soon ready to begin anew. After you spend a full turn without raging, you can Rage again without needing to wait 1 minute.</p>\n<h2>Armor of Fury<span style="float: right;">Level 19</span></h2>\n<p>Your training and rage deepen your connection to your armor. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to master.</p>\n<h2>Devastator<span style="float: right;">Level 19</span></h2>\n<p>Your Strikes are so devastating that you hardly care about resistance, and your barbarian abilities are unparalleled. Your proficiency rank for your barbarian class DC increases to master. Your melee Strikes ignore 10 points of a creature\'s resistance to their physical damage.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 12,
      items: {
        "23vme": {
          img: "systems/pf2e/icons/features/classes/greater-juggernaut.webp",
          level: 13,
          name: "Greater Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.TuL0UfqH14MtqYVh",
        },
        "3gwvw": {
          img: "systems/pf2e/icons/features/classes/brutality.webp",
          level: 5,
          name: "Brutality",
          uuid: "Compendium.pf2e.classfeatures.EEUTd0jAyfwTLzjk",
        },
        "7jt77": {
          img: "systems/pf2e/icons/features/classes/medium-armor-expertise.webp",
          level: 13,
          name: "Medium Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.FCEp9jjxxgRJDJV3",
        },
        "8ibv2": {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 9,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        blnv0: {
          img: "systems/pf2e/icons/features/classes/heightened-senses.webp",
          level: 17,
          name: "Heightened Senses",
          uuid: "Compendium.pf2e.classfeatures.7MhzrbOyue5GQsck",
        },
        e0sur: {
          img: "systems/pf2e/icons/features/classes/indomitable-will.webp",
          level: 15,
          name: "Indomitable Will",
          uuid: "Compendium.pf2e.classfeatures.BZnqKnqKVImjSIFE",
        },
        g3k30: {
          img: "systems/pf2e/icons/features/classes/quick-rage.webp",
          level: 17,
          name: "Quick Rage",
          uuid: "Compendium.pf2e.classfeatures.qMtyQGUllPdgpzUo",
        },
        gfxqm: {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 7,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        ihbgk: {
          img: "systems/pf2e/icons/features/classes/devastator.webp",
          level: 19,
          name: "Devastator",
          uuid: "Compendium.pf2e.classfeatures.VLiT503OLOM3vaDx",
        },
        njgcl: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Barbarian)",
          uuid: "Compendium.pf2e.classfeatures.7JjhxMFo8DMwpGx0",
        },
        o4ypa: {
          img: "systems/pf2e/icons/features/classes/weapon-fury.webp",
          level: 13,
          name: "Weapon Fury",
          uuid: "Compendium.pf2e.classfeatures.ejP4jVQkS48uKRFz",
        },
        p941e: {
          img: "systems/pf2e/icons/features/classes/deny-advantage.webp",
          level: 3,
          name: "Deny Advantage",
          uuid: "Compendium.pf2e.classfeatures.PNpmVmD21zViDtGC",
        },
        qh9xw: {
          img: "systems/pf2e/icons/features/classes/mighty-rage.webp",
          level: 11,
          name: "Mighty Rage",
          uuid: "Compendium.pf2e.classfeatures.88Q33X2a0iYPkbzd",
        },
        s5lxl: {
          img: "systems/pf2e/icons/features/classes/armor-of-fury.webp",
          level: 19,
          name: "Armor of Fury",
          uuid: "Compendium.pf2e.classfeatures.QTCIahokREpnAYDi",
        },
        spb04: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        tp5pg: {
          img: "systems/pf2e/icons/features/classes/raging-resistance.webp",
          level: 9,
          name: "Raging Resistance",
          uuid: "Compendium.pf2e.classfeatures.ie6xDX9GMEcA2Iuq",
        },
        uhbeo: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Instinct",
          uuid: "Compendium.pf2e.classfeatures.dU7xRpg4kFd01hwZ",
        },
        xvavy: {
          img: "systems/pf2e/icons/features/classes/rage.webp",
          level: 1,
          name: "Rage",
          uuid: "Compendium.pf2e.classfeatures.WZUCvxqbigXos1L9",
        },
      },
      keyAbility: {
        value: ["str"],
      },
      perception: 2,
      rules: [],
      savingThrows: {
        fortitude: 2,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 3,
        value: ["ath"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "3gweRQ5gn7szIWAv",
    name: "Bard",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "longsword, rapier, sap, shortbow, shortsword, and whip",
          rank: 1,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>You are a master of artistry, a scholar of hidden secrets, and a captivating persuader. Using powerful performances, you influence minds and elevate souls to new levels of heroics. You might use your powers to become a charismatic leader, or perhaps you might instead be a counselor, manipulator, scholar, scoundrel, or virtuoso. While your versatility leads some to consider you a beguiling ne\'erdo- well and a jack-of-all-trades, it\'s dangerous to dismiss you as a master of none.</em></p>\n<p><strong>Key Ability: CHARISMA</strong></p>\n<p>At 1st level, your class gives you an ability boost to Charisma.</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Bard</h1>\n<h2>During Combat Encounters...</h2>\n<p>You use magical performances to alter the odds in favor of your allies. You confidently alternate between attacks, healing, and helpful spells as needed.</p>\n<h2>During Social Encounters...</h2>\n<p>You persuade, prevaricate, and threaten with ease.</p>\n<h2>While Exploring...</h2>\n<p>You\'re a font of knowledge, folktales, legends, and lore that provide a deeper context and helpful reconnaissance for the group\'s adventure. Your spells and performances inspire your allies to greater discovery and success.</p>\n<h2>In Downtime...</h2>\n<p>You can earn money and prestige with your performances, gaining a name for yourself and acquiring patrons. Eventually, tales of your talents and triumphs might attract other bards to study your techniques in a bardic college.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Have a passion for your art so strong that you forge a spiritual connection with it.</li>\n<li>Take point when tact and nonviolent solutions are required.</li>\n<li>Follow your muse, whether it\'s a mysterious fey creature, a philosophical concept, a psychic force, or a deity of art or music, and with its aid learn secret lore that few others have.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Relish the opportunity to invite you to social events, either as a performer or a guest, but consider you to be something of a curiosity in their social circles.</li>\n<li>Underestimate you compared to other spellcasters, believing you are little more than a foppish minstrel and overlooking the subtle power of your magic.</li>\n<li>Respond favorably to your social charm and abilities, but remain suspicious of your beguiling magic.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Expert in Perception</p>\n<h2>Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Occultism</p>\n<p>Trained in Performance</p>\n<p>Trained in a number of additional skills equal to 4 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in the longsword, rapier, sap, shortbow, shortsword, and whip</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Spells</h2>\n<p>Trained in occult spell attacks</p>\n<p>Trained in occult spell DCs</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Bard. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, occult spellcasting, spell repertoire, composition spells, muse</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Bard feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, lightning reflexes, signature spells, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Bard feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Bard feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, expert spellcaster, general feat, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Bard feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, great fortitude, resolve, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, bard feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, bard weapon expertise, general feat, skill increase, vigilant senses</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Bard feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, light armor expertise, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Bard feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, general feat, master spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Bard feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, greater resolve, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Bard feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, legendary spellcaster, magnum opus, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, bard feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Composition Spells</h2>\n<p>You can infuse your performances with magic to create unique effects called compositions. Compositions are a special type of spell that often require you to use the Performance skill when casting them. Composition spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to perform, write a new composition, or otherwise engage your muse.</p>\n<p>Focus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don\'t require spell slots, and you can\'t cast them using spell slots. Taking feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points.</p>\n<p>You learn the <em>@UUID[Compendium.pf2e.spells-srd.Counter Performance]{Counter Performance}</em> composition spell, protecting against auditory and visual effects.</p>\n<h3><strong>Composition Cantrips</strong></h3>\n<p>Composition cantrips are special composition spells that don\'t cost Focus Points, so you can use them as often as you like. Composition cantrips are in addition to the cantrips you choose from the occult list. Generally, only feats can give you more composition cantrips. Unlike other cantrips, you can\'t swap out composition cantrips gained from bard feats at a later level, unless you swap out the specific feat via retraining. You learn the <em>@UUID[Compendium.pf2e.spells-srd.Inspire Courage]{Inspire Courage}</em> composition cantrip, which boosts your allies\' attacks, damage, and defense against fear.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Muses</h2>\n<p>As a bard, you select one muse at 1st level. This muse leads you to great things, and might be a physical creature, a deity, a philosophy, or a captivating mystery.</p>\n<p>Muses can be found here: @UUID[Compendium.pf2e.classfeatures.Maestro]{Maestro}, @UUID[Compendium.pf2e.classfeatures.Polymath]{Polymath}, @UUID[Compendium.pf2e.classfeatures.Enigma]{Enigma}, and @UUID[Compendium.pf2e.classfeatures.Warrior]{Warrior}.</p>\n<h2>Occult Spellcasting</h2>\n<p>You draw upon magic from esoteric knowledge. You can cast occult spells using the Cast a Spell activity, and you can supply material, somatic, and verbal components when casting spells. Because you\'re a bard, you can usually play an instrument for spells requiring somatic or material components, as long as it takes at least one of your hands to do so. If you use an instrument, you don\'t need a spell component pouch or another hand free. You can usually also play an instrument for spells requiring verbal components, instead of speaking.</p>\n<p>Each day, you can cast up to two 1st-level spells. You must know spells to cast them, and you learn them via the spell repertoire class feature. The number of spells you can cast each day is called your spell slots.</p>\n<p>As you increase in level as a bard, your number of spells per day increases, as does the highest level of spells you can cast, as shown on Table 3-6: Bard Spells per Day.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key ability is Charisma, your spell attack rolls and spell DCs use your Charisma modifier.</p>\n<h3><strong>Heightening Spells</strong></h3>\n<p>When you get spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell\'s level to match the spell slot. You must have a spell in your spell repertoire at the level you want to cast in order to heighten it to that level. Many spells have specific improvements when they are heightened to certain levels. The signature spells class feature lets you heighten certain spells freely.</p>\n<h3><strong>Cantrips</strong></h3>\n<p>Some of your spells are cantrips. A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is automatically heightened to half your level rounded up -- this is usually equal to the highest level of bard spell slot you have. For example, as a 1st-level bard, your cantrips are 1st-level spells, and as a 5th-level bard, your cantrips are 3rd-level spells.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* The magnum opus class feature gives you a 10th-level spell slot that works a bit differently from other spell slots.</td>\n</tr>\n</tbody>\n</table>\n<h2>Spell Repertoire</h2>\n<p>The collection of spells you can cast is called your spell repertoire. At 1st level, you learn two 1st-level occult spells of your choice and five occult cantrips of your choice. You choose these from the common spells from the occult list or from other occult spells to which you have access. You can cast any spell in your spell repertoire by using a spell slot of an appropriate spell level.</p>\n<p>You add to this spell repertoire as you increase in level. Each time you get a spell slot (see Table 3-6), you add a spell to your spell repertoire of the same level. At 2nd level, you select another 1st-level spell; at 3rd level, you select two 2nd-level spells, and so on. When you add spells, you might add a higher-level version of a spell you already have, so you can cast a heightened version of that spell.</p>\n<p>Though you gain them at the same rate, your spell slots and the spells in your spell repertoire are separate. If a feat or other ability adds a spell to your spell repertoire, it wouldn\'t give you another spell slot, and vice versa.</p>\n<h3><strong>Swapping Spells in Your Repertoire</strong></h3>\n<p>As you gain new spells in your repertoire, you might want to replace some of the spells you previously learned. Each time you gain a level and learn new spells, you can swap out one of your old spells for a different spell of the same level. This spell can be a cantrip. You can also swap out spells by retraining during downtime.</p>\n<h2>Bard Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a bard class feat.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Lightning Reflexes<span style="float: right;">Level 3</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank in Reflex saves increases to expert.</p>\n<h2>Signature Spells<span style="float: right;">Level 3</span></h2>\n<p>Experience allows you to cast some spells more flexibly. For each spell level you have access to, choose one spell of that level to be a signature spell. You don\'t need to learn heightened versions of signature spells separately; instead, you can heighten these spells freely. If you\'ve learned a signature spell at a higher level than its minimum, you can also cast all its lower-level versions without learning those separately. If you swap out a signature spell, you can choose a replacement signature spell of the same spell level at which you learned the previous spell. You can also retrain specifically to change a signature spell to a different spell of that level without swapping any spells; this takes as much time as retraining a spell normally does.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Expert Spellcaster<span style="float: right;">Level 7</span></h2>\n<p>Your proficiency ranks for occult spell attack rolls and spell DCs increase to expert.</p>\n<h2>Great Fortitude<span style="float: right;">Level 9</span></h2>\n<p>Your physique is incredibly hardy. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2>Resolve<span style="float: right;">Level 9</span></h2>\n<p>You\'ve steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success at a Will save, you get a critical success instead.</p>\n<h2>Bard Weapon Expertise<span style="float: right;">Level 11</span></h2>\n<p>You have become thoroughly adept with bardic weapons. You gain expert proficiency in simple weapons and unarmed attacks, plus the longsword, rapier, sap, shortbow, shortsword, and whip. When you critically succeed at an attack roll using one of these weapons while one of your compositions is active, you apply the critical specialization effect for that weapon.</p>\n<h2>Vigilant Senses<span style="float: right;">Level 11</span></h2>\n<p>Through your adventures, you\'ve developed keen awareness and attention to detail. Your proficiency rank for Perception increases to master.</p>\n<h2>Light Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to dodge while wearing light or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 damage if you\'re a master, and 4 damage if you\'re legendary.</p>\n<h2>Master Spellcaster<span style="float: right;">Level 15</span></h2>\n<p>You\'ve mastered the occult. Your proficiency ranks for occult spell attack rolls and spell DCs increase to master.</p>\n<h2>Greater Resolve<span style="float: right;">Level 17</span></h2>\n<p>Your unbelievable training grants you mental resiliency. Your proficiency rank for Will saves increases to legendary. When you roll a success at a Will save, you get a critical success. When you roll a critical failure at a Will save, you get a failure instead. When you roll a failure on a Will save against a damaging effect, you take half damage.</p>\n<h2>Legendary Spellcaster<span style="float: right;">Level 19</span></h2>\n<p>Your command of occult magic is the stuff of legends. Your proficiency ranks for occult spell attack rolls and spell DCs increase to legendary.</p>\n<h2>Magnum Opus<span style="float: right;">Level 19</span></h2>\n<p>You have tuned your spellcasting to the highest caliber. Add two common 10th-level occult spells to your repertoire. You gain a single 10th-level spell slot you can use to cast one of those two spells using bard spellcasting. You don\'t gain more 10th-level spells as you level up, unlike other spell slots, and you can\'t use 10th-level slots with abilities that give you more spell slots or that let you cast spells without expending spell slots.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "06b94": {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 7,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        "1da3z": {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 15,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
        "1qqwt": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "73fw3": {
          img: "systems/pf2e/icons/features/classes/vigilant-senses.webp",
          level: 11,
          name: "Vigilant Senses",
          uuid: "Compendium.pf2e.classfeatures.0npO4rPscGm0dX13",
        },
        "81u6r": {
          img: "systems/pf2e/icons/features/classes/magnum-opus.webp",
          level: 19,
          name: "Magnum Opus",
          uuid: "Compendium.pf2e.classfeatures.NjsOpWbbzUY2Hpk3",
        },
        "9uoge": {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 9,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        ed5t5: {
          img: "systems/pf2e/icons/equipment/adventuring-gear/spellbook.webp",
          level: 1,
          name: "Spell Repertoire (Bard)",
          uuid: "Compendium.pf2e.classfeatures.6FsusoMYxxjyIkVh",
        },
        en1lf: {
          img: "systems/pf2e/icons/equipment/adventuring-gear/musical-instrument-handheld.webp",
          level: 1,
          name: "Composition Spells",
          uuid: "Compendium.pf2e.classfeatures.s0VbbQJNlSgPocui",
        },
        iipml: {
          img: "systems/pf2e/icons/features/classes/great-fortitude.webp",
          level: 9,
          name: "Great Fortitude",
          uuid: "Compendium.pf2e.classfeatures.F57Na5VxfBp56kke",
        },
        oitnf: {
          img: "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
          level: 3,
          name: "Signature Spells (Level 3)",
          uuid: "Compendium.pf2e.classfeatures.VKRjmXxBFLrJK01c",
        },
        oyw8v: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Muses",
          uuid: "Compendium.pf2e.classfeatures.AIOBWGOS4nkfH3kW",
        },
        q84eq: {
          img: "systems/pf2e/icons/features/classes/light-armor-expertise.webp",
          level: 13,
          name: "Light Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.pZYkb12t5DSwtts7",
        },
        qev30: {
          img: "systems/pf2e/icons/features/classes/occult-spellcasting.webp",
          level: 1,
          name: "Occult Spellcasting",
          uuid: "Compendium.pf2e.classfeatures.fEOj0eOBe34qYdAa",
        },
        qphik: {
          img: "systems/pf2e/icons/features/classes/greater-resolve.webp",
          level: 17,
          name: "Greater Resolve",
          uuid: "Compendium.pf2e.classfeatures.5LOARurr4qWkfS9K",
        },
        tjlz3: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 3,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        usp0h: {
          img: "systems/pf2e/icons/features/classes/legendary-spellcaster.webp",
          level: 19,
          name: "Legendary Spellcaster (Level 19)",
          uuid: "Compendium.pf2e.classfeatures.Hfaa7TuLn3nE8lr3",
        },
        yjn5p: {
          img: "systems/pf2e/icons/features/classes/bard-weapon-expertise.webp",
          level: 11,
          name: "Bard Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.4lp8oG9A3zuqhPBS",
        },
      },
      keyAbility: {
        value: ["cha"],
      },
      perception: 2,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-longsword.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-rapier.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-sap.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-shortbow.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-shortsword.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-whip.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.proficiencies.traditions.occult.rank",
          value: {
            brackets: [
              {
                end: 6,
                start: 1,
                value: 1,
              },
              {
                end: 14,
                start: 7,
                value: 2,
              },
              {
                end: 18,
                start: 15,
                value: 3,
              },
              {
                start: 19,
                value: 4,
              },
            ],
            field: "actor|system.details.level.value",
          },
        },
      ],
      savingThrows: {
        fortitude: 1,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 4,
        value: ["occ", "prf"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "x8iwnpdLbfcoZkHA",
    name: "Champion",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 1,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          "<p><em>You are an emissary of a deity, a devoted servant who has taken up a weighty mantle, and you adhere to a code that holds you apart from those around you. While champions exist for every alignment, as a champion of good, you provide certainty and hope to the innocent. You have powerful defenses that you share freely with your allies and innocent bystanders, as well as holy power you use to end the threat of evil. Your devotion even attracts the attention of holy spirits who aid you on your journey.</em></p>\n<p><strong>Key Ability: STRENGTH OR DEXTERITY</strong></p>\n<p>At 1st level, your class gives you an ability boost to your choice of Strength or Dexterity.</p>\n<p><strong>Hit Points: 10 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Champion</h1>\n<h2>During Combat Encounters...</h2>\n<p>You confront enemies in hand-to-hand combat while carefully positioning yourself to protect your allies.</p>\n<h2>During Social Encounters...</h2>\n<p>You are a voice of hope, striving to reach a peaceful solution that strengthens bonds and yields good results for all.</p>\n<h2>While Exploring...</h2>\n<p>You overcome barriers both physical and spiritual, providing inspiration to your allies through your actions and-when your fellow adventurers ask for it-providing moral and ethical guidance.</p>\n<h2>In Downtime...</h2>\n<p>You spend much of your time in solemn prayer and contemplation, rigorous training, charity work, and fulfilling the tenets of your code, but that doesn't mean there isn't time to take up a craft or hobby.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Believe there is always hope that good will triumph over evil, no matter how grim the odds.</li>\n<li>Know the ends don't justify the means, since evil acts increase the power of evil.</li>\n<li>Have a strong sense of right and wrong, and grow frustrated when greed or shortsightedness breeds evil.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>See you as a symbol of hope, especially in a time of great need.</li>\n<li>Worry you secretly despise them for not living up to your impossible standard, or that you are unwilling to compromise when necessary.</li>\n<li>Know that you've sworn divine oaths of service they can trust you to keep.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Religion</p>\n<p>Trained in one skill determined by your choice of deity</p>\n<p>Trained in a number of additional skills equal to 2 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in all armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in champion class DC</p>\n<h2>Spells</h2>\n<p>Trained in divine spell attacks</p>\n<p>Trained in divine spell DCs</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Champion. Abilities gained at higher levels list the levels at which you gain them next to the features' names.</p>\n<table class=\"pf2-table\">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, champion's code, deity and cause, deific weapon, champion's reaction, devotion spells, champion feat, shield block</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Champion feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Divine ally, general feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Champion feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, skill increase, weapon expertise</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Champion feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Armor expertise, general feat, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Champion feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, champion expertise, divine smite, juggernaut, lightning reflexes, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, champion feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>Alertness, divine will, exalt, general feat, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Champion feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, armor mastery, skill increase, weapon mastery</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Champion feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater weapon specialization, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Champion feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, champion mastery, legendary armor, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Champion feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, hero's defiance, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, champion feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Champion Feats</h2>\n<p>At 1st level and every even-numbered level thereafter, you gain a champion class feat.</p>\n<h2>Champion's Code</h2>\n<p>You follow a code of conduct, beginning with tenets shared by all champions of an alignment (such as good), and continuing with tenets of your cause. Deities often add additional strictures (for instance, @UUID[Compendium.pf2e.deities.Torag]{Torag}'s champions can't show mercy to enemies of their people, making it almost impossible for them to follow the redeemer cause). Only rules for good champions appear in this book. Tenets are listed in order of importance, starting with the most important. If a situation places two tenets in conflict, you aren't in a no-win situation; instead, follow the more important tenet. For instance, as a paladin, if an evil king asked you if you're hiding refugees so he could execute them, you could lie to him, since the tenet against lying is less important than preventing harm to innocents. Trying to subvert your code by creating a situation that forces a higher tenet to override a lower tenet (for example, promising not to respect authorities and then, to keep your word, disrespecting authorities) is a violation of the champion code.</p>\n<p>If you stray from your alignment or violate your code of conduct, you lose your focus pool and divine ally until you demonstrate your repentance by conducting an <em>@UUID[Compendium.pf2e.spells-srd.Atone]{Atone}</em> ritual, but you keep any other champion abilities that don't require those class features. If your alignment shifts but is still one allowed by your deity, your GM might let you retrain your cause while still following the same deity.</p>\n<h3>@UUID[Compendium.pf2e.classfeatures.The Tenets of Good]{The Tenets of Good}</h3>\n<p>All champions of good alignment follow these tenets.</p>\n<ul>\n<li>You must never perform acts anathema to your deity or willingly commit an evil act, such as murder, torture, or the casting of an evil spell.</li>\n<li>You must never knowingly harm an innocent, or allow immediate harm to one through inaction when you know you could reasonably prevent it. This tenet doesn't force you to take action against possible harm to innocents at an indefinite time in the future, or to sacrifice your life to protect them.</li>\n</ul>\n<h3>@UUID[Compendium.pf2e.classfeatures.The Tenets of Evil]{The Tenets of Evil}</h3>\n<p>All champions of evil alignment follow these tenets.</p>\n<ul>\n<li>You must never perform acts anathema to your deity or willingly commit a purely good act, such as giving something solely out of charity, casting a good spell, or using a good item.</li>\n<li>You must never put another person's needs before your own, and you must never put your own needs before those of your deity. Though you can perform acts others might consider helpful, it must be done with the expectation that it ultimately furthers your own goals or those of your master.</li>\n</ul>\n<h2>Champion's Reaction</h2>\n<p>Your cause gives you a special reaction. See specific causes for more information.</p>\n<h2>Deific Weapon</h2>\n<p>You zealously bear your deity's favored weapon. If it's uncommon, you gain access to it. If it's an unarmed attack with a d4 damage die or a simple weapon, increase the damage die by one step (d4 to d6, d6 to d8, d8 to d10, d10 to d12).</p>\n<h2>Deity and Cause</h2>\n<p>Champions are divine servants of a deity. Choose a deity to follow; your alignment must be one allowed for followers of your deity. Actions fundamentally opposed to your deity's ideals or alignment are anathema to your faith. A few examples of acts that would be considered anathema appear in each deity's entry. You and your GM determine whether other acts are anathema.</p>\n<p>You have one of the following causes. Your cause must match your alignment exactly. Your cause determines your champion's reaction, grants you a devotion spell, and defines part of your champion's code:</p>\n<ul>\n<li>Lawful good @UUID[Compendium.pf2e.classfeatures.Paladin]{Paladin}</li>\n<li>Neutral good @UUID[Compendium.pf2e.classfeatures.Redeemer]{Redeemer}</li>\n<li>Chaotic good @UUID[Compendium.pf2e.classfeatures.Liberator]{Liberator}</li>\n<li>Lawful evil @UUID[Compendium.pf2e.classfeatures.Tyrant]{Tyrant}</li>\n<li>Neutral evil @UUID[Compendium.pf2e.classfeatures.Desecrator]{Desecrator}</li>\n<li>Chaotic evil @UUID[Compendium.pf2e.classfeatures.Antipaladin]{Antipaladin}</li>\n</ul>\n<h2>Devotion Spells</h2>\n<p>Your deity's power grants you special divine spells called devotion spells, which are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you regain 1 Focus Point by spending 10 minutes using the Refocus activity to pray to your deity or do service toward their causes.</p>\n<p>Focus spells are automatically heightened to half your level rounded up. Certain feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points. You gain a devotion spell depending on your cause, and you are trained in divine spell attack rolls and spell DCs. Your spellcasting ability is Charisma.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training, noted at the start of this class.</p>\n<h2>Shield Block</h2>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Shield Block]{Shield Block} general feat, a reaction that lets you reduce damage with your shield.</p>\n<h2>Skill Feats<span style=\"float: right;\">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Divine Ally<span style=\"float: right;\">Level 3</span></h2>\n<p>Your devotion attracts a spirit of your deity's alignment. Once you choose an ally, your choice can't be changed.</p>\n<p>The following are divine allies:</p>\n<p><strong>Blade Ally</strong> A spirit of battle dwells within your armaments. Select one weapon or @UUID[Compendium.pf2e.equipment-srd.Handwraps of Mighty Blows]{Handwraps of Mighty Blows (+1)} when you make your daily preparations. In your hands, the item gains the effect of a property rune.</p>\n<p>For a champion following the tenets of good, choose @UUID[Compendium.pf2e.equipment-srd.Disrupting]{Disrupting}, @UUID[Compendium.pf2e.equipment-srd.Ghost Touch]{Ghost Touch}, @UUID[Compendium.pf2e.equipment-srd.Returning]{Returning}, or @UUID[Compendium.pf2e.equipment-srd.Shifting]{Shifting}. For a champion following the tenets of evil, choose @UUID[Compendium.pf2e.equipment-srd.Fearsome]{Fearsome}, @UUID[Compendium.pf2e.equipment-srd.Returning]{Returning}, or @UUID[Compendium.pf2e.equipment-srd.Shifting]{Shifting}. You also gain the weapon's critical specialization effect.</p>\n<p><strong>Shield Ally</strong> A spirit of protection dwells within your shield. In your hands, the shield's Hardness increases by 2 and its HP and BT increase by half.</p>\n<p><strong>Steed Ally</strong> You gain a young animal companion as a mount. Ordinarily, your animal companion is one that has the mount special ability, such as a horse. You can select a different animal companion (GM's discretion), but this ability doesn't grant it the mount special ability.</p>\n<h2>General Feats<span style=\"float: right;\">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Skill Increases<span style=\"float: right;\">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you're untrained in, or to increase your proficiency rank in one skill in which you're already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you're already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you're already a master.</p>\n<h2>Ability Boosts<span style=\"float: right;\">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, boost four different ability scores. You can use these boosts to increase ability scores above 18. Boosting an ability score increases it by 1 if it's already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style=\"float: right;\">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Weapon Expertise<span style=\"float: right;\">Level 5</span></h2>\n<p>You've dedicated yourself to learning the intricacies of your weapons. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to expert.</p>\n<h2>Armor Expertise<span style=\"float: right;\">Level 7</span></h2>\n<p>You have spent so much time in armor that you know how to make the most of its protection. Your proficiency ranks for light, medium, and heavy armor, as well as for unarmored defense, increase to expert. You gain the armor specialization effects of medium and heavy armor.</p>\n<h2>Weapon Specialization<span style=\"float: right;\">Level 7</span></h2>\n<p>You've learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you're a master, and to 4 if you're legendary.</p>\n<h2>Champion Expertise<span style=\"float: right;\">Level 9</span></h2>\n<p>Prayers strengthen your divine power. Your proficiency ranks for your champion class DC and divine spell attack rolls and DCs increase to expert.</p>\n<h2>Divine Smite<span style=\"float: right;\">Level 9</span></h2>\n<p>Your champion's reaction improves.</p>\n<p>See specific causes for more information.</p>\n<h2>Juggernaut<span style=\"float: right;\">Level 9</span></h2>\n<p>Your body is accustomed to physical hardship and resistant to ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Lightning Reflexes<span style=\"float: right;\">Level 9</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Alertness<span style=\"float: right;\">Level 11</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Divine Will<span style=\"float: right;\">Level 11</span></h2>\n<p>Your faith grants mastery of your will. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2>Exalt<span style=\"float: right;\">Level 11</span></h2>\n<p>Your champion's reaction exalts nearby allies, allowing them to benefit as well.</p>\n<p>See specific causes for more information.</p>\n<h2>Armor Mastery<span style=\"float: right;\">Level 13</span></h2>\n<p>Your skill with armor improves, helping you avoid more blows. Your proficiency ranks for light, medium, and heavy armor, as well as for unarmored defense, increase to master.</p>\n<h2>Weapon Mastery<span style=\"float: right;\">Level 13</span></h2>\n<p>You fully understand your weapons. Your proficiency ranks for simple and martial weapons and unarmed attacks increase to master.</p>\n<h2>Greater Weapon Specialization<span style=\"float: right;\">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you're an expert, 6 if you're a master, and 8 if you're legendary.</p>\n<h2>Champion Mastery<span style=\"float: right;\">Level 17</span></h2>\n<p>You've mastered your arsenal of champion techniques and divine spells. Your proficiency ranks for your champion class DC and for divine spell attack rolls and spell DCs increase to master.</p>\n<h2>Legendary Armor<span style=\"float: right;\">Level 17</span></h2>\n<p>You shield yourself with steel as easily as with faith. Your proficiency ranks for light, medium, and heavy armor, as well as for unarmored defense, increase to legendary.</p>\n<h2>Hero's Defiance<span style=\"float: right;\">Level 19</span></h2>\n<p>You can defy fate and continue fighting as long as you have divine energy. You gain the <em>@UUID[Compendium.pf2e.spells-srd.Hero's Defiance]{Hero's Defiance}</em> devotion spell.</p>",
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 10,
      items: {
        "06620": {
          img: "systems/pf2e/icons/features/classes/armor-expertise.webp",
          level: 7,
          name: "Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.x5jaCJxsmD5sx3KB",
        },
        "0drpq": {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 9,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        "0yuhb": {
          img: "systems/pf2e/icons/features/classes/deity.webp",
          level: 1,
          name: "Deity and Cause",
          uuid: "Compendium.pf2e.classfeatures.ehL7mnkqxN5wIkgu",
        },
        "2k5lc": {
          img: "systems/pf2e/icons/features/classes/champion-code.webp",
          level: 1,
          name: "Champion's Code",
          uuid: "Compendium.pf2e.classfeatures.fykh5pE99O3I2sOI",
        },
        "371js": {
          img: "systems/pf2e/icons/features/classes/deific-weapon.webp",
          level: 1,
          name: "Deific Weapon",
          uuid: "Compendium.pf2e.classfeatures.FeBsYn2mHfMVDZvw",
        },
        "467es": {
          img: "systems/pf2e/icons/features/classes/legendary-armor.webp",
          level: 17,
          name: "Legendary Armor",
          uuid: "Compendium.pf2e.classfeatures.voiSCh7ZXA2ogwiC",
        },
        "4s92m": {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 1,
          name: "Champion's Reaction",
          uuid: "Compendium.pf2e.classfeatures.sXVX4ARUuo8Egrz5",
        },
        "5u86v": {
          img: "systems/pf2e/icons/features/classes/devotion-spells.webp",
          level: 1,
          name: "Devotion Spells",
          uuid: "Compendium.pf2e.classfeatures.Q1VfQZp49hkhY0HY",
        },
        "5z8hr": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "6ye0b": {
          img: "systems/pf2e/icons/features/classes/shield-block.webp",
          level: 1,
          name: "Shield Block",
          uuid: "Compendium.pf2e.classfeatures.eZNCckLzbH3GyncH",
        },
        "967sh": {
          img: "systems/pf2e/icons/features/classes/champion-mastery.webp",
          level: 17,
          name: "Champion Mastery",
          uuid: "Compendium.pf2e.classfeatures.z5G0o04uV65zyxDB",
        },
        d0us1: {
          img: "systems/pf2e/icons/features/classes/divine-will.webp",
          level: 11,
          name: "Divine Will",
          uuid: "Compendium.pf2e.classfeatures.xygfZopqXBJ6dKBA",
        },
        gzf67: {
          img: "systems/pf2e/icons/features/classes/champion-expertise.webp",
          level: 9,
          name: "Champion Expertise",
          uuid: "Compendium.pf2e.classfeatures.VgmfNKtQLgBaNi5r",
        },
        h4ydl: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Level 15)",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        ht0g6: {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 9,
          name: "Divine Smite",
          uuid: "Compendium.pf2e.classfeatures.3XK573A7GH1rrLgO",
        },
        l74fn: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 9,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        m8rj4: {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 5,
          name: "Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.9XLUh9iMepZesdmc",
        },
        pgk3u: {
          img: "systems/pf2e/icons/features/classes/armor-mastery.webp",
          level: 13,
          name: "Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.CGB1TczFhQhdQxml",
        },
        qqwd4: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 11,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        r4pcs: {
          img: "systems/pf2e/icons/features/classes/heros-defiance.webp",
          level: 19,
          name: "Hero's Defiance",
          uuid: "Compendium.pf2e.classfeatures.LzB6X9vOaq3wq1FZ",
        },
        rwf2s: {
          img: "systems/pf2e/icons/features/classes/weapon-mastery.webp",
          level: 13,
          name: "Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.i6563IU7x4L9oRgC",
        },
        tlo7a: {
          img: "systems/pf2e/icons/features/classes/divine-ally.webp",
          level: 3,
          name: "Divine Ally",
          uuid: "Compendium.pf2e.classfeatures.ERwuazupczhUSZ73",
        },
        w0m0r: {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 11,
          name: "Exalt",
          uuid: "Compendium.pf2e.classfeatures.uptzvOLrZ3fctrl2",
        },
      },
      keyAbility: {
        value: ["dex", "str"],
      },
      perception: 1,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.proficiencies.traditions.divine.rank",
          value: 1,
        },
      ],
      savingThrows: {
        fortitude: 2,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 2,
        value: ["rel"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "EizrWvUPMS67Pahd",
    name: "Cleric",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "Deity's favored weapon",
          rank: 1,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 0,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>Deities work their will upon the world in infinite ways, and you serve as one of their most stalwart mortal servants. Blessed with divine magic, you live the ideals of your faith, adorn yourself with the symbols of your church, and train diligently to wield your deity\'s favored weapon. Your spells might protect and heal your allies, or they might punish foes and enemies of your faith, as your deity wills. Yours is a life of devotion, spreading the teachings of your faith through both word and deed.</em></p>\n<p><strong>Key Ability: WISDOM</strong></p>\n<p>At 1st level, your class gives you an ability boost to Wisdom.</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Cleric</h1>\n<h2>During Combat Encounters...</h2>\n<p>If you\'re a warpriest, you balance between casting spells and attacking with weapons- typically the favored weapon of your deity. If you\'re a cloistered cleric, you primarily cast spells. Most of your spells can boost, protect, or heal your allies. Depending on your deity, you get extra spells to heal your allies or harm your enemies.</p>\n<h2>During Social Encounters...</h2>\n<p>You might make diplomatic overtures or deliver impressive speeches. Because you\'re wise, you also pick up on falsehoods others tell.</p>\n<h2>While Exploring...</h2>\n<p>You detect nearby magic and interpret any religious writing you come across. You might also concentrate on a protective spell for your allies in case of attack. After a battle or hazard, you might heal anyone who was hurt.</p>\n<h2>In Downtime...</h2>\n<p>You might perform services at a temple, travel to spread the word of your deity, research scripture, celebrate holy days, or even found a new temple.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Visit the temples and holy places sacred to your faith, and have an immediate affinity with other worshippers of your deity.</li>\n<li>Know the teachings of your religion\'s holy texts and how they apply to a dilemma.</li>\n<li>Cooperate with your allies, provided they don\'t ask you to go against divine will.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Find your devotion impressive, even if they don\'t understand it.</li>\n<li>Expect you to heal their wounds.</li>\n<li>Rely on you to interact with other religious figures.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Religion</p>\n<p>Trained in one skill determined by your choice of deity</p>\n<p>Trained in a number of additional skills equal to 2 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in the favored weapon of your deity. If your deity\'s favored weapon is uncommon, you also gain access to that weapon.</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Untrained in all armor, though your doctrine might alter this</p>\n<p>Trained in unarmored defense</p>\n<h2>Spells</h2>\n<p>Trained in divine spell attacks</p>\n<p>Trained in divine spell DCs</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Cleric. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, deity, divine spellcasting, divine font, doctrine</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, second doctrine, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, alertness, ancestry feat, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, general feat, skill increase, third doctrine</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, resolve, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, fourth doctrine, general feat, lightning reflexes, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, divine defense, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, fifth doctrine, general feat, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Cleric feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>Final doctrine, general feat, miraculous spell, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, cleric feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Deity</h2>\n<p>As a cleric, you are a mortal servitor of a deity you revere above all others. Your alignment must be one allowed by your deity, as listed in their entry. Your deity grants you the trained proficiency rank in one skill and with the deity\'s favored weapon. If the favored weapon is uncommon, you also get access to that weapon.</p>\n<p>Your deity also adds spells to your spell list. You can prepare these just like you can any spell on the divine spell list, once you can prepare spells of their level as a cleric. Some of these spells aren\'t normally on the divine list, but they\'re divine spells if you prepare them this way.</p>\n<p>A list of all deities can be found in the Deities compendium.</p>\n<h3><strong>Anathema</strong></h3>\n<p>Acts fundamentally opposed to your deity\'s alignment or ideals are anathema to your faith. Learning or casting spells, committing acts, and using items that are anathema to your deity remove you from your deity\'s good graces.</p>\n<p>If you perform enough acts that are anathema to your deity, or if your alignment changes to one not allowed by your deity, you lose the magical abilities that come from your connection to your deity. The class features that you lose are determined by the GM, but they likely include your divine font and all divine spellcasting. These abilities can be regained only if you demonstrate your repentance by conducting an <em>@UUID[Compendium.pf2e.spells-srd.Atone]{Atone}</em> ritual.</p>\n<h2>Divine Font</h2>\n<p>Through your deity\'s blessing, you gain additional spells that channel either the life force called positive energy or its counterforce, negative energy. When you prepare your spells each day, you can prepare additional <em>@UUID[Compendium.pf2e.spells-srd.Heal]{Heal}</em> or <em>@UUID[Compendium.pf2e.spells-srd.Harm]{Harm}</em> spells, depending on your deity. The divine font spell your deity provides is listed in the Divine Font entry for your deity; if both are listed, you can choose between <em>heal</em> or <em>harm</em>. Once you choose, you can\'t change your choice short of an ethical shift or divine intervention.</p>\n<p><strong>Healing Font</strong> You gain additional spell slots each day at your highest level of cleric spell slots. You can prepare only <em>heal</em> spells in these slots, and the number of slots is equal to 1 plus your Charisma modifier.</p>\n<p><strong>Harmful Font</strong> You gain additional spell slots each day at your highest level of cleric spell slots. You can prepare only <em>harm</em> spells in these slots, and the number of slots is equal to 1 plus your Charisma modifier.</p>\n<h2>Divine Spellcasting</h2>\n<p>Your deity bestows on you the power to cast divine spells. You can cast divine spells using the Cast a Spell activity, and you can supply material, somatic, and verbal components when casting spells. Because you\'re a cleric, you can usually hold a divine focus (such as a religious symbol) for spells requiring material components instead of needing to use a spell component pouch.</p>\n<p>At 1st level, you can prepare two 1st-level spells and five cantrips each morning from the common spells on the divine spell list or from other divine spells to which you gain access and learn via @UUID[Compendium.pf2e.actionspf2e.Learn a Spell]{Learn a Spell}. Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare is called your spell slots.</p>\n<p>As you increase in level as a cleric, the number of spells you can prepare each day increases, as does the highest level of spell you can cast, as shown in Table 3-9: Cleric Spells per Day.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or your enemies to roll against your spell DC (typically by attempting a saving throw). Since your key ability is Wisdom, your spell attack rolls and spell DCs use your Wisdom modifier.</p>\n<h3><strong>Heightening Spells</strong></h3>\n<p>When you get spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell\'s level, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain levels.</p>\n<h3><strong>Cantrips</strong></h3>\n<p>A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up-this is usually equal to the highest level of spell you can cast as a cleric. For example, as a 1st-level cleric, your cantrips are 1st-level spells, and as a 5th-level cleric, your cantrips are 3rd-level spells.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>2*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>3*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>3</td>\n<td>2*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>3</td>\n<td>3*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>2*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2*</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3*</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2*</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3*</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*???</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*???</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* Your divine font gives you additional <em>heal</em> or <em>harm</em> spells of this level. The number is equal to 1 + your Charisma modifier.\n<p>??? The miraculous spell class feature gives you a 10th-level spell slot that works a bit differently from other spell slots.</p>\n</td>\n</tr>\n</tbody>\n</table>\n<h2>Doctrine</h2>\n<p>Even among followers of the same deity, there are numerous doctrines and beliefs, which sometimes vary wildly between clerics. At 1st level, you select a doctrine and gain the benefits of its first doctrine. The doctrines presented in this book are cloistered cleric and warpriest. Each doctrine grants you initial benefits at 1st level. At 3rd, 7th, 11th, 15th, and 19th levels, you gain the benefits granted by your doctrine\'s second, third, fourth, fifth, and final doctrines respectively.</p>\n<p>Doctrines can be found here (@UUID[Compendium.pf2e.classfeatures.Cloistered Cleric]{Cloistered Cleric} and @UUID[Compendium.pf2e.classfeatures.Warpriest]{Warpriest}).</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training, noted at the start of this class.</p>\n<h2>Cleric Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a cleric class feat.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase to either become trained in one skill you\'re untrained in, or become an expert in one skill in which you\'re already trained.</p>\n<p>You can use any of these skill increases you gain at 7th level or higher to become a master in a skill in which you\'re already an expert, and any of these skill increases you gain at 15th level or higher to become legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Alertness<span style="float: right;">Level 5</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Resolve<span style="float: right;">Level 9</span></h2>\n<p>You\'ve steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success at a Will save, you get a critical success instead.</p>\n<h2>Lightning Reflexes<span style="float: right;">Level 11</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Divine Defense<span style="float: right;">Level 13</span></h2>\n<p>Your training and your deity protect you from harm. Your proficiency rank in unarmored defense increases to expert.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and to 4 if you\'re legendary.</p>\n<h2>Miraculous Spell<span style="float: right;">Level 19</span></h2>\n<p>You\'re exalted by your deity and gain truly incredible spells. You gain a single 10th-level spell slot and can prepare a spell in that slot using divine spellcasting. You don\'t gain more 10th-level spells as you level up, though you can take the @UUID[Compendium.pf2e.feats-srd.Maker of Miracles]{Maker of Miracles} feat to gain a second slot.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "5ydlu": {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 9,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        "765ut": {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 3,
          name: "Second Doctrine",
          uuid: "Compendium.pf2e.classfeatures.OnfrrwCfDFCFw0tc",
        },
        "7gkd0": {
          img: "systems/pf2e/icons/features/classes/divine-font.webp",
          level: 1,
          name: "Divine Font",
          uuid: "Compendium.pf2e.classfeatures.gblTFUOgolqFS9v4",
        },
        ckmdj: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 11,
          name: "Fourth Doctrine",
          uuid: "Compendium.pf2e.classfeatures.o8nHreMyiLi64rZz",
        },
        cwo2e: {
          img: "systems/pf2e/icons/features/classes/deity.webp",
          level: 1,
          name: "Deity",
          uuid: "Compendium.pf2e.classfeatures.DutW12WMFPHBoLTH",
        },
        dic6f: {
          img: "systems/pf2e/icons/features/classes/divine-spellcasting.webp",
          level: 1,
          name: "Divine Spellcasting (Cleric)",
          uuid: "Compendium.pf2e.classfeatures.AvNbdGSOTWNRgcxs",
        },
        ilsvf: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Doctrine",
          uuid: "Compendium.pf2e.classfeatures.tyrBwBTzo5t9Zho7",
        },
        m28zo: {
          img: "systems/pf2e/icons/features/classes/anathema(cleric).webp",
          level: 1,
          name: "Anathema (Cleric)",
          uuid: "Compendium.pf2e.classfeatures.UV1HlClbWCNcaKBZ",
        },
        oj8f7: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "First Doctrine",
          uuid: "Compendium.pf2e.classfeatures.Qejo7FUWQtPTpgWH",
        },
        ozqxv: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 5,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        r47we: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 15,
          name: "Fifth Doctrine",
          uuid: "Compendium.pf2e.classfeatures.Zb7DuGbFoLEp0H1K",
        },
        uzcka: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 7,
          name: "Third Doctrine",
          uuid: "Compendium.pf2e.classfeatures.gxNxfN9OBlQ1icus",
        },
        vmpzh: {
          img: "systems/pf2e/icons/features/classes/miraculous-spell.webp",
          level: 19,
          name: "Miraculous Spell",
          uuid: "Compendium.pf2e.classfeatures.3uf31A91h3ywmlqm",
        },
        vpn62: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 11,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        xe44z: {
          img: "systems/pf2e/icons/features/classes/divine-defense.webp",
          level: 13,
          name: "Divine Defense",
          uuid: "Compendium.pf2e.classfeatures.0mJTp4LdEHBLInoe",
        },
        z2puy: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 19,
          name: "Final Doctrine",
          uuid: "Compendium.pf2e.classfeatures.urBGOPrUwBmkixAo",
        },
        zrd25: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
      },
      keyAbility: {
        value: ["wis"],
      },
      perception: 1,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.proficiencies.traditions.divine.rank",
          value: 1,
        },
      ],
      savingThrows: {
        fortitude: 1,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 2,
        value: ["rel"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "7s57JDCaiYYCAdFx",
    name: "Druid",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>The power of nature is impossible to resist. It can bring ruin to the stoutest fortress in minutes, reducing even the mightiest works to rubble, burning them to ash, burying them beneath an avalanche of snow, or drowning them beneath the waves. It can provide endless bounty and breathtaking splendor to those who respect it - and an agonizing death to those who take it too lightly. You are one of those who hear nature\'s call. You stand in awe of the majesty of its power and give yourself over to its service.</em></p>\n<p><strong>Key Ability: WISDOM</strong></p>\n<p>At 1st level, your class gives you an ability boost to Wisdom.</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Druid</h1>\n<h2>During Combat Encounters...</h2>\n<p>You call upon the forces of nature to defeat your enemies and protect your allies. You cast spells that draw upon primal magic to protect yourself and your friends, heal their wounds, or summon deadly animals to fight at your side. Depending on your bond to nature, you might call upon powerful elemental magic or change shape into a terrifying beast.</p>\n<h2>During Social Encounters...</h2>\n<p>You represent balance and a reasoned approach to problems, looking for solutions that not only are best for the natural world, but also allow the creatures within it to live in harmony and peace. You often propose compromises that allow both sides to gain what they truly need, even if they can\'t have all that they desire.</p>\n<h2>While Exploring...</h2>\n<p>Your nature skills are invaluable. You track down enemies, navigate the wilderness, and use spells to detect magical auras around you. You might even ask wild animals to lend their extraordinary senses and scouting abilities to your group.</p>\n<h2>In Downtime...</h2>\n<p>You might craft magic items or potions. Alternatively, your tie to nature might lead you to tend a wilderness area, befriending beasts and healing the wounds caused by civilization. You might even teach sustainable farming and animal husbandry techniques that allow others to subsist off the land without harming the natural balance.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Have a deep and meaningful respect for the power of nature.</li>\n<li>Be in constant awe of the natural world, eager to share it with others but wary of their influence upon it.</li>\n<li>Treat plants and animals as allies, working with them to reach your goals.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>View you as a representative of nature, and are sure you can control it.</li>\n<li>Assume you\'re a recluse who avoids society and cities and prefers to live in the wild.</li>\n<li>Consider you a mystic, similar to a priest, but answering only to the forces of nature.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Nature</p>\n<p>Trained in one skill determined by your druidic order</p>\n<p>Trained in a number of additional skills equal to 2 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in medium armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Spells</h2>\n<p>Trained in primal spell attacks</p>\n<p>Trained in primal spell DCs</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Druid. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, primal spellcasting, anathema, Druidic language, druidic order, Shield Block, wild empathy</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Druid feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, alertness, general feat, great fortitude, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Druid feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, lightning reflexes, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Druid feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, expert spellcaster, general feat, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Druid feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, druid feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, druid weapon expertise, general feat, resolve, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Druid feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, medium armor expertise, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Druid feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, general feat, master spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Druid feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Druid feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, legendary spellcaster, primal hierophant, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, druid feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Anathema</h2>\n<p>As stewards of the natural order, druids find affronts to nature anathema. If you perform enough acts that are anathema to nature, you lose your magical abilities that come from the druid class, including your primal spellcasting and the benefits of your order. These abilities can be regained only if you demonstrate your repentance by conducting an <em>@UUID[Compendium.pf2e.spells-srd.Atone]{Atone}</em> ritual.</p>\n<p>The following acts are anathema to all druids:</p>\n<ul>\n<li>Using metal armor or shields.</li>\n<li>Despoiling natural places.</li>\n<li>Teaching the Druidic language to non-druids.</li>\n</ul>\n<p>Each druidic order also has additional anathema acts, detailed in the order\'s entry.</p>\n<p>See specific orders for more information.</p>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Druidic Language</h2>\n<p>You know Druidic, a secret language known to only druids, in addition to any languages you know through your ancestry. Druidic has its own alphabet. Teaching the Druidic language to non-druids is anathema.</p>\n<h2>Druidic Order</h2>\n<p>Upon becoming a druid, you align yourself with a druidic order, which grants you a class feat, an order spell (see below), and an additional trained skill tied to your order. While you\'ll always be a member of your initial order, it\'s not unheard of for a druid to request to study with other orders in search of greater understanding of the natural world, and PC druids are among the most likely to blend the powers of different orders.</p>\n<p>Order spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to commune with local nature spirits or otherwise tend to the wilderness in a way befitting your order.</p>\n<p>Focus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don\'t require spell slots to cast, and you can\'t cast them using spell slots. Selecting druid feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 points.</p>\n<p>Orders can be found here (@UUID[Compendium.pf2e.classfeatures.Animal Order]{Animal}, @UUID[Compendium.pf2e.classfeatures.Leaf Order]{Leaf}, @UUID[Compendium.pf2e.classfeatures.Storm Order]{Storm}, and @UUID[Compendium.pf2e.classfeatures.Wild Order]{Wild}).</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level you gain a number of proficiencies, representing your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Primal Spellcasting</h2>\n<p>The power of the wild world flows through you. You can cast primal spells using the Cast a Spell activity, and you can supply material, somatic, and verbal components when casting spells. Because you\'re a druid, you can usually hold a primal focus (such as holly and mistletoe) for spells requiring material components instead of needing to use a spell component pouch.</p>\n<p>At 1st level, you can prepare two 1st-level spells and five cantrips each morning from the common spells on the primal spell list or from other primal spells to which you gain access and learn via @UUID[Compendium.pf2e.actionspf2e.Learn a Spell]{Learn a Spell}. Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare is called your spell slots.</p>\n<p>As you increase in level as a druid, the number of spells you can prepare each day increases, as does the highest level of spell you can cast, as shown in Table 3-11: Druid Spells per Day.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key ability is Wisdom, your spell attack rolls and spell DCs use your Wisdom modifier.</p>\n<h3><strong>Heightening Spells</strong></h3>\n<p>When you gain spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell\'s level, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain levels.</p>\n<h3><strong>Cantrips</strong></h3>\n<p>A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up-this is usually equal to the highest level of druid spell slot you have. For example, as a 1st-level druid, your cantrips are 1st-level spells, and as a 5th-level druid, your cantrips are 3rd-level spells.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* The primal hierophant class feature gives you a 10th-level spell slot that works a bit differently from other spell slots.</td>\n</tr>\n</tbody>\n</table>\n<h2>Shield Block</h2>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Shield Block]{Shield Block} general feat, a reaction that lets you reduce damage with your shield.</p>\n<h2>Wild Empathy</h2>\n<p>You have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case.</p>\n<h2>Druid Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every even-numbered level, you gain a druid class feat.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Alertness<span style="float: right;">Level 3</span></h2>\n<p>Experience has made you increasingly aware of threats around you, and you react more quickly to danger. Your proficiency rank for Perception increases to expert.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Great Fortitude<span style="float: right;">Level 3</span></h2>\n<p>Your physique is incredibly hardy. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Lightning Reflexes<span style="float: right;">Level 5</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Expert Spellcaster<span style="float: right;">Level 7</span></h2>\n<p>Your command of primal forces has deepened, empowering your spells. Your proficiency ranks for primal spell attack rolls and spell DCs increase to expert.</p>\n<h2>Druid Weapon Expertise<span style="float: right;">Level 11</span></h2>\n<p>You have become thoroughly familiar with the weapons of your trade. Your proficiency ranks for all simple weapons and unarmed attacks increase to expert.</p>\n<h2>Resolve<span style="float: right;">Level 11</span></h2>\n<p>You\'ve steeled your mind with incredible resolve. Your proficiency rank for Will saves increases to master. When you roll a success at a Will save, you get a critical success instead.</p>\n<h2>Medium Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned to defend yourself better against attacks. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to expert.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and to 4 if you\'re legendary.</p>\n<h2>Master Spellcaster<span style="float: right;">Level 15</span></h2>\n<p>Primal magic answers your command. Your proficiency ranks for primal spell attack rolls and spell DCs increase to master.</p>\n<h2>Legendary Spellcaster<span style="float: right;">Level 19</span></h2>\n<p>You have developed an unparalleled rapport with the magic of nature. Your proficiency ranks for primal spell attack rolls and spell DCs increase to legendary.</p>\n<h2>Primal Hierophant<span style="float: right;">Level 19</span></h2>\n<p>You command the most potent forces of primal magic and can cast a spell of truly incredible power. You gain a single 10th-level spell slot and can prepare a spell in that slot using primal spellcasting. Unlike with other spell slots, you don\'t gain more 10th-level spells as you level up, though you can take the @UUID[Compendium.pf2e.feats-srd.Hierophant\'s Power]{Hierophant\'s Power} feat to gain a second slot.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "3nzxp": {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 5,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        "426dn": {
          img: "systems/pf2e/icons/features/classes/druid-weapon-expertise.webp",
          level: 11,
          name: "Druid Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.Ra32tlqBxHzT6fzN",
        },
        "5borr": {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 11,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        "5zf6s": {
          img: "systems/pf2e/icons/features/classes/anathema(druid).webp",
          level: 1,
          name: "Anathema (Druid)",
          uuid: "Compendium.pf2e.classfeatures.nfBn8QB6HVdzpTFV",
        },
        "6cq7c": {
          img: "systems/pf2e/icons/features/classes/medium-armor-expertise.webp",
          level: 13,
          name: "Medium Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.FCEp9jjxxgRJDJV3",
        },
        "80cqf": {
          img: "systems/pf2e/icons/features/classes/wild-empathy.webp",
          level: 1,
          name: "Wild Empathy",
          uuid: "Compendium.pf2e.classfeatures.d5BFFHXFJYKs5LXr",
        },
        ai1ej: {
          img: "systems/pf2e/icons/features/classes/druidic-language.webp",
          level: 1,
          name: "Druidic Language",
          uuid: "Compendium.pf2e.classfeatures.RiAGlnnp4S21BAG3",
        },
        bic0m: {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 15,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
        cfonk: {
          img: "systems/pf2e/icons/features/classes/great-fortitude.webp",
          level: 3,
          name: "Great Fortitude",
          uuid: "Compendium.pf2e.classfeatures.F57Na5VxfBp56kke",
        },
        g63pa: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Druidic Order",
          uuid: "Compendium.pf2e.classfeatures.8STJEFVJISujgpMR",
        },
        ibknd: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 3,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        ifwyc: {
          img: "systems/pf2e/icons/features/classes/legendary-spellcaster.webp",
          level: 19,
          name: "Legendary Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.Hfaa7TuLn3nE8lr3",
        },
        ixkp9: {
          img: "systems/pf2e/icons/features/classes/shield-block.webp",
          level: 1,
          name: "Shield Block",
          uuid: "Compendium.pf2e.classfeatures.eZNCckLzbH3GyncH",
        },
        jfaqa: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        qvz7x: {
          img: "systems/pf2e/icons/features/classes/primal-spellcasting.webp",
          level: 1,
          name: "Primal Spellcasting",
          uuid: "Compendium.pf2e.classfeatures.b8pnRxGuNzG0buuh",
        },
        ycbpi: {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 7,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        zird8: {
          img: "systems/pf2e/icons/features/classes/primal-hierophant.webp",
          level: 19,
          name: "Primal Hierophant",
          uuid: "Compendium.pf2e.classfeatures.nzgb43mQmLgaqDoQ",
        },
      },
      keyAbility: {
        value: ["wis"],
      },
      perception: 1,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.proficiencies.traditions.primal.rank",
          value: {
            brackets: [
              {
                end: 6,
                start: 1,
                value: 1,
              },
              {
                end: 14,
                start: 7,
                value: 2,
              },
              {
                end: 18,
                start: 15,
                value: 3,
              },
              {
                start: 19,
                value: 4,
              },
            ],
            field: "actor|system.details.level.value",
          },
        },
      ],
      savingThrows: {
        fortitude: 1,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 2,
        value: ["nat"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "8zn3cD6GSmoo1LW4",
    name: "Fighter",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 1,
        martial: 2,
        other: {
          name: "",
          rank: 0,
        },
        simple: 2,
        unarmed: 2,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 1,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>Fighting for honor, greed, loyalty, or simply the thrill of battle, you are an undisputed master of weaponry and combat techniques. You combine your actions through clever combinations of opening moves, finishing strikes, and counterattacks whenever your foes are unwise enough to drop their guard. Whether you are a knight, mercenary, sharpshooter, or blade master, you have honed your martial skills into an art form and perform devastating critical attacks on your enemies.</em></p>\n<p><strong>Key Ability: STRENGTH OR DEXTERITY</strong></p>\n<p>At 1st level, your class gives you an ability boost to your choice of Strength or Dexterity.</p>\n<p><strong>Hit Points: 10 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Fighter</h1>\n<h2>During Combat Encounters...</h2>\n<p>You strike with unmatched accuracy and use specialized combat techniques. A melee fighter stands between allies and enemies, attacking foes who try to get past. A ranged fighter delivers precise shots from a distance.</p>\n<h2>During Social Encounters...</h2>\n<p>You can be an intimidating presence. This can be useful when negotiating with enemies, but is sometimes a liability in more genteel interactions.</p>\n<h2>While Exploring...</h2>\n<p>You keep up your defenses in preparation for combat, and keep an eye out for hidden threats. You also overcome physical challenges in your way, breaking down doors, lifting obstacles, climbing adeptly, and leaping across pits.</p>\n<h2>In Downtime...</h2>\n<p>You might perform manual labor or craft and repair armaments. If you know techniques you no longer favor, you might train yourself in new ones. If you\'ve established your reputation, you might build an organization or a stronghold of your own.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Know the purpose and quality of every weapon and piece of armor you own.</li>\n<li>Recognize that the danger of an adventurer\'s life must be balanced out with great revelry or ambitious works.</li>\n<li>Have little patience for puzzles or problems that require detailed logic or study.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Find you intimidating until they get to know you-and maybe even after they get to know you.</li>\n<li>Expect you\'re all brawn and no brains.</li>\n<li>Respect your expertise in the art of warfare and value your opinion on the quality of armaments.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Expert in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Trained in Will</p>\n<h2>Skills</h2>\n<p>Trained in your choice of Acrobatics or Athletics</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Expert in simple weapons</p>\n<p>Expert in martial weapons</p>\n<p>Trained in advanced weapons</p>\n<p>Expert in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in all armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in fighter class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Fighter. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, attack of opportunity, fighter feat, shield block</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Bravery, general feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, fighter weapon mastery, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Battlefield surveyor, general feat, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, combat flexibility, juggernaut, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>Armor expertise, fighter expertise, general feat, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, skill increase, weapon legend</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, evasion, general feat, greater weapon specialization, improved flexibility, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, armor mastery, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Fighter feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, skill increase, versatile legend</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, fighter feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Attack of Opportunity</h2>\n<p>Ever watchful for weaknesses, you can quickly attack foes that leave an opening in their defenses. You gain the Attack of Opportunity reaction.</p>\n<p>@UUID[Compendium.pf2e.actionspf2e.Attack of Opportunity]{Attack of Opportunity} <span class="pf2-icon">R</span></p>\n<p><strong>Trigger</strong> A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it\'s using.</p>\n<hr />\n<p>You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn\'t count toward your multiple attack penalty, and your multiple attack penalty doesn\'t apply to this Strike.</p>\n<h2>Fighter Feats</h2>\n<p>At 1st level and every even-numbered level thereafter, you gain a fighter class feat.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Shield Block</h2>\n<p>You gain the @UUID[Compendium.pf2e.feats-srd.Shield Block]{Shield Block} general feat, a reaction that lets you reduce damage with your shield.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Bravery<span style="float: right;">Level 3</span></h2>\n<p>Having faced countless foes and the chaos of battle, you have learned how to stand strong in the face of fear and keep on fighting. Your proficiency rank for Will saves increases to expert. When you roll a success at a Will save against a fear effect, you get a critical success instead. In addition, anytime you gain the frightened condition, reduce its value by 1.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Fighter Weapon Mastery<span style="float: right;">Level 5</span></h2>\n<p>Hours spent training with your preferred weapons, learning and developing new combat techniques, have made you particularly effective with your weapons of choice. Choose one weapon group. Your proficiency rank increases to master with the simple and martial weapons in that group, and to expert with the advanced weapons in that group. You gain access to the critical specialization effects of all weapons for which you have master proficiency.</p>\n<h2>Battlefield Surveyor<span style="float: right;">Level 7</span></h2>\n<p>Whether taking stock of an enemy army or simply standing guard, you excel at observing your foes. Your proficiency rank for Perception increases to master. In addition, you gain a +2 circumstance bonus to Perception checks for initiative, making you faster to react during combat.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and to 4 if you\'re legendary.</p>\n<h2>Combat Flexibility<span style="float: right;">Level 9</span></h2>\n<p>Through your experience in battle, you can prepare your tactics to suit different situations. When you make your daily preparations, you gain one fighter feat of 8th level or lower that you don\'t already have. You can use that feat until your next daily preparations. You must meet all of the feat\'s other prerequisites.</p>\n<h2>Juggernaut<span style="float: right;">Level 9</span></h2>\n<p>Your body is accustomed to physical hardship and resistant to ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Armor Expertise<span style="float: right;">Level 11</span></h2>\n<p>You have spent so much time wearing armor that you know how to make the most of its protection. Your proficiency rank for light, medium, and heavy armor, as well as for unarmored defense, increase to expert. You gain the armor specialization effects of medium and heavy armor.</p>\n<h2>Fighter Expertise<span style="float: right;">Level 11</span></h2>\n<p>You\'ve practiced your techniques to make them harder to resist. Your proficiency rank for your fighter class DC increases to expert.</p>\n<h2>Weapon Legend<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned fighting techniques that apply to all armaments, and you\'ve developed unparalleled skill with your favorite weapons. Your proficiency ranks for simple and martial weapons and unarmed attacks increase to master. Your proficiency rank for advanced weapons increases to expert. You can select one weapon group and increase your proficiency ranks to legendary for all simple and martial weapons in that weapon group, and to master for all advanced weapons in that weapon group.</p>\n<h2>Evasion<span style="float: right;">Level 15</span></h2>\n<p>You\'ve learned to move quickly to avoid explosions, a dragon\'s breath, and worse. Your proficiency rank for Reflex saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.</p>\n<h2>Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2>Improved Flexibility<span style="float: right;">Level 15</span></h2>\n<p>Your extensive experience gives you even greater ability to adapt to each day\'s challenges. When you use combat flexibility, you can gain two fighter feats instead of one. While the first feat must still be 8th level or lower, the second feat can be up to 14th level, and you can use the first feat to meet the prerequisites of the second feat. You must meet all of the feats\' prerequisites.</p>\n<h2>Armor Mastery<span style="float: right;">Level 17</span></h2>\n<p>Your skill with armor improves, increasing your ability to prevent blows. Your proficiency ranks for light, medium, and heavy armor, as well as for unarmored defense, increase to master.</p>\n<h2>Versatile Legend<span style="float: right;">Level 19</span></h2>\n<p>You are nigh-unmatched with any weapon. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to legendary, and your proficiency rank for advanced weapons increases to master. Your proficiency rank for your fighter class DC increases to master.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 10,
      items: {
        "0c3e5": {
          img: "systems/pf2e/icons/features/classes/weapon-legend.webp",
          level: 13,
          name: "Weapon Legend",
          uuid: "Compendium.pf2e.classfeatures.F5VenhIQMDkeGvmV",
        },
        "2jey6": {
          img: "systems/pf2e/icons/features/classes/fighter-expertise.webp",
          level: 11,
          name: "Fighter Expertise",
          uuid: "Compendium.pf2e.classfeatures.bAaI7h937Nr3g93U",
        },
        "9c5ay": {
          img: "systems/pf2e/icons/features/classes/armor-expertise.webp",
          level: 11,
          name: "Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.x5jaCJxsmD5sx3KB",
        },
        e1e4m: {
          img: "systems/pf2e/icons/features/classes/shield-block.webp",
          level: 1,
          name: "Shield Block",
          uuid: "Compendium.pf2e.classfeatures.eZNCckLzbH3GyncH",
        },
        enizk: {
          img: "systems/pf2e/icons/features/classes/improved-flexibility.webp",
          level: 15,
          name: "Improved Flexibility",
          uuid: "Compendium.pf2e.classfeatures.W2rwudMNcAxs8VoX",
        },
        ij943: {
          img: "systems/pf2e/icons/features/classes/battlefield-surveyor.webp",
          level: 7,
          name: "Battlefield Surveyor",
          uuid: "Compendium.pf2e.classfeatures.TIvzBALymvb56L79",
        },
        lakjk: {
          img: "systems/pf2e/icons/features/classes/bravery.webp",
          level: 3,
          name: "Bravery",
          uuid: "Compendium.pf2e.classfeatures.GJKJafDGuX4BeAeN",
        },
        lphi1: {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 9,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        q0xyz: {
          img: "systems/pf2e/icons/features/classes/armor-mastery.webp",
          level: 17,
          name: "Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.CGB1TczFhQhdQxml",
        },
        r6269: {
          img: "systems/pf2e/icons/features/classes/attack-of-opportunity.webp",
          level: 1,
          name: "Attack of Opportunity",
          uuid: "Compendium.pf2e.classfeatures.hmShTfPOcTaKgbf4",
        },
        r6jbx: {
          img: "systems/pf2e/icons/features/classes/evasion.webp",
          level: 15,
          name: "Evasion",
          uuid: "Compendium.pf2e.classfeatures.MV6XIuAgN9uSA0Da",
        },
        txlgu: {
          img: "systems/pf2e/icons/features/classes/combat-flexibility.webp",
          level: 9,
          name: "Combat Flexibility",
          uuid: "Compendium.pf2e.classfeatures.8g6HzARbhfcgilP8",
        },
        u1d1r: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        u8k07: {
          img: "systems/pf2e/icons/features/classes/fighter-weapon-mastery.webp",
          level: 5,
          name: "Fighter Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.gApJtAdNb9ST4Ms9",
        },
        vis8d: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Level 15)",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        x98c2: {
          img: "systems/pf2e/icons/features/classes/versatile-legend.webp",
          level: 19,
          name: "Versatile Legend",
          uuid: "Compendium.pf2e.classfeatures.0H2LxtiZTJ275pSD",
        },
      },
      keyAbility: {
        value: ["dex", "str"],
      },
      perception: 2,
      rules: [],
      savingThrows: {
        fortitude: 2,
        reflex: 2,
        will: 1,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 3,
        value: [],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "Z9li154CPNmun29Q",
    name: "Gunslinger",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "Simple Firearms, Martial Firearms",
          rank: 2,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>While some fear projectile weapons, you savor the searing flash, wild kick, and cloying smoke that accompanies a gunshot, or snap of the cable and telltale thunk of your crossbow just before your bolt finds purchase. Ready to draw a bead on an enemy at every turn, you rely on your reflexes, steady hand, and knowledge of your weapons to riddle your foes with holes.</em></p>\n<p><strong>Key Ability: DEXTERITY</strong></p>\n<p>At 1st level, your class gives you an ability boost to Dexterity.</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Gunslinger</h1>\n<h2>During Combat Encounters...</h2>\n<p>You strike from range with your firearms, seeking to defeat your opponents before they can pose a true threat. Depending on your choice of weapon, you might prefer to strike your opponent from a hidden position before they ever realize you\'re there, dash through a frenzied melee with pistols blazing, or glide effortlessly across the battlefield, waiting for the perfect moment to end the conflict with a single, well-placed shot.</p>\n<h2>During Social Encounters...</h2>\n<p>You have a keen eye and can see things coming from farther than most. You might not be the life of the party, but your companions know to pay attention when your subtle nod or concerned grunt indicates that something\'s amiss.</p>\n<h2>While Exploring...</h2>\n<p>You scout the group\'s position for incoming threats and help search for secret doors and @UUID[Compendium.pf2e.conditionitems.Hidden]{Hidden} passages, keeping a weather eye out for unexpected threats.</p>\n<h2>In Downtime...</h2>\n<p>You might craft ammunition or keep your complex weapons clean and maintained, and you might look for work that matches your unique talents, such as working as a blacksmith, engineer, or part of the local watch. You might wander from town to town, or stay put for a spell to enjoy the silence that lingers between gunfights.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Seek out areas of great conflict where your unique choice of weaponry can help build your reputation.</li>\n<li>Explore new horizons, trusting your honed senses and deadly weapon to keep you safe.</li>\n<li>Demonstrate extensive knowledge about various types of guns and ammunition, along with curiosity about the latest in gun technology.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Assume that since you know how your gun works, you must also understand how to resolve other mechanical challenges.</li>\n<li>Underestimate you at first glance, thinking you rely on your gun because you lack any other skills.</li>\n<li>Respect your eternal vigilance, unyielding grit, and excellent aim.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Expert in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Trained in Will</p>\n<h2>Skills</h2>\n<p>Trained in one or more skills determined by your gunslinger\'s way</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Expert in simple firearms and crossbows</p>\n<p>Expert in martial firearms and crossbows</p>\n<p>Trained in advanced firearms and crossbows</p>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in medium armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in gunslinger class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as a gunslinger. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, gunslinger\'s way, initial deed, gunslinger feat, singular expertise</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>General feat, skill increase, stubborne</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, gunslinger weapon mastery, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>General feat, skill increase, vigilant senses, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Advanced deed, ancestry feat, gunslinger expertise, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>Evasion, general feat, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, gunslinging legend, medium armor expertise, skill increase</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater deed, greater weapon specialization, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, juggernaut, shootist\'s edge, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Gunslinger feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, incredible senses, medium armor mastery, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, gunslinger feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Gunslinger\'s Way</h2>\n<p>All gunslingers have a particular way they follow, a combination of philosophy and combat style that defines both how they fight and the weapons they excel with. At 1st level, your way grants you an initial deed, a unique reload action called a slinger\'s reload, and proficiency with a particular skill. You also gain advanced and greater deeds at later levels, as well as access to way-specific feats. The gunslinger ways are described in detail on page 108. The following ways are presented in this book.</p>\n<p><strong>Way of the Drifter</strong> You wander across the battlefield, equally at home in and out of the fray.</p>\n<p><strong>Way of the Pistolero</strong> You carefully maintain your distance at a duelist\'s 10 paces with pistol in hand.</p>\n<p><strong>Way of the Sniper</strong> You practice a methodical style of shooting, striking from far cover.</p>\n<p><strong>Way of the Vanguard</strong> You rely on a brutal combat style that uses heavy weapons and explosive attacks.</p>\n<h2>Gunslinger Feats</h2>\n<p>At 1st level and every even-numbered level, you gain a gunslinger class feat.</p>\n<h2>Singular Expertise</h2>\n<p>You have particular expertise with guns and crossbows that grants you greater proficiency with them and the ability to deal more damage. You gain a +1 circumstance bonus to damage rolls with firearms and crossbows.</p>\n<p>This intense focus on firearms and crossbows prevents you from reaching the same heights with other weapons. Your proficiency with unarmed attacks and with weapons other than firearms and crossbows can\'t be higher than trained, even if you gain an ability that would increase your proficiency in one or more other weapons to match your highest weapon proficiency (such as the weapon expertise feats many ancestries have). If you have gunslinger weapon mastery, the limit is expert, and if you have gunslinging legend, the limit is master.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every even-numbered level, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you\'re already an expert, and at 15th level, you can use them to become legendary in a skill in which you\'re already a master.</p>\n<h2>Stubborn<span style="float: right;">Level 3</span></h2>\n<p>You don\'t like being told what to do, and you don\'t give up. Your proficiency rank for Will saves increases to expert. When you fail, but don\'t critically fail, a Will save against an effect that would give you the controlled condition, you can attempt a second save against the effect at the start of your next turn. On a successful second save, the controlled condition ends, though any other effects remain. As normal, failing this second save doesn\'t allow you to attempt a third save on the subsequent turn.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Gunslinger Weapon Mastery<span style="float: right;">Level 5</span></h2>\n<p>You fully understand the best way to utilize your unique weapons. Your proficiency rank increases to master with simple and martial firearms and crossbows. Your proficiency rank for advanced firearms and crossbows, simple weapons, martial weapons, and unarmed attacks increases to expert. You gain access to the critical specialization effects for firearms and crossbows.</p>\n<h2>Vigilant Senses<span style="float: right;">Level 7</span></h2>\n<p>Through your adventures, you\'ve developed keen awareness and attention to detail. Your proficiency rank for Perception increases to master.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and 4 if you\'re legendary.</p>\n<h2>Advanced Deed<span style="float: right;">Level 9</span></h2>\n<p>You\'ve learned a powerful new technique of your chosen way. You gain the advanced deed ability of the way you chose at 1st level.</p>\n<h2>Gunslinger Expertise<span style="float: right;">Level 9</span></h2>\n<p>Your special shots become harder for opponents to predict or resist. Your proficiency rank for your gunslinger class DC increases to expert.</p>\n<h2>Evasion<span style="float: right;">Level 11</span></h2>\n<p>You\'ve learned to move quickly to avoid explosions, dragon\'s breath, and worse. Your proficiency rank for Reflex saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.</p>\n<h2>Gunslinging Legend<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned unique techniques for wielding firearms and crossbows that give you unmatched skill in their use. Your proficiency rank increases to legendary with simple and martial firearms and crossbows and to master with advanced firearms and crossbows. Your proficiency rank for simple weapons, martial weapons, and unarmed attacks increases to expert.</p>\n<h2>Medium Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned to defend yourself better against attacks. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to expert.</p>\n<h2>Greater Deed<span style="float: right;">Level 15</span></h2>\n<p>You\'ve mastered the pinnacle technique of your chosen way. You gain the greater deed ability of the way you chose at 1st level.</p>\n<h2>Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2>Juggernaut<span style="float: right;">Level 17</span></h2>\n<p>Your body has become accustomed to physical hazards and resistant to ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Shootist\'s Edge<span style="float: right;">Level 17</span></h2>\n<p>You make shots others find impossible. Your proficiency rank for your gunslinger class DC increases to master. When using a ranged weapon in which you have master or greater proficiency, you ignore the penalty for attacking within the weapon\'s second and third range increments.</p>\n<h2>Incredible Senses<span style="float: right;">Level 19</span></h2>\n<p>You notice things that most people can\'t detect. Your proficiency rank for Perception increases to legendary.</p>\n<h2>Medium Armor Mastery<span style="float: right;">Level 19</span></h2>\n<p>Your skill with light and medium armor improves, increasing your ability to dodge or absorb blows. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to master.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "0f5gd": {
          img: "systems/pf2e/icons/features/classes/evasion.webp",
          level: 11,
          name: "Evasion",
          uuid: "Compendium.pf2e.classfeatures.MV6XIuAgN9uSA0Da",
        },
        "182it": {
          img: "systems/pf2e/icons/features/classes/shootists-edge.webp",
          level: 17,
          name: "Shootist's Edge",
          uuid: "Compendium.pf2e.classfeatures.RkofVX55ciXZyfAA",
        },
        "1qqd9": {
          img: "systems/pf2e/icons/features/classes/gunslinger-expertise.webp",
          level: 9,
          name: "Gunslinger Expertise",
          uuid: "Compendium.pf2e.classfeatures.aKr6OE8vI2BsJzf1",
        },
        "5m24f": {
          img: "systems/pf2e/icons/features/classes/greater-deed.webp",
          level: 15,
          name: "Greater Deed",
          uuid: "Compendium.pf2e.classfeatures.yc9RuXXxmZ9YidH6",
        },
        "5vutv": {
          img: "systems/pf2e/icons/features/classes/advanced-deed.webp",
          level: 9,
          name: "Advanced Deed",
          uuid: "Compendium.pf2e.classfeatures.3JLW5vPshsJf3nCY",
        },
        "6sihc": {
          img: "systems/pf2e/icons/features/classes/medium-armor-expertise.webp",
          level: 13,
          name: "Medium Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.FCEp9jjxxgRJDJV3",
        },
        "8ndxn": {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Gunslinger's Way",
          uuid: "Compendium.pf2e.classfeatures.LDqVxLKrwEqSegiu",
        },
        bskyv: {
          img: "systems/pf2e/icons/features/classes/medium-armor-mastery.webp",
          level: 19,
          name: "Medium Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.cGMSYAErbUG5E8X2",
        },
        emlsp: {
          img: "systems/pf2e/icons/features/classes/gunslinging-legend.webp",
          level: 13,
          name: "Gunslinging Legend",
          uuid: "Compendium.pf2e.classfeatures.ULOAZWZEokbJC6Rq",
        },
        g7b2s: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        gfou8: {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 3,
          name: "Stubborn",
          uuid: "Compendium.pf2e.classfeatures.Wpdeh6EkcAKA60oH",
        },
        gpkfl: {
          img: "systems/pf2e/icons/features/classes/singular-expertise.webp",
          level: 1,
          name: "Singular Expertise",
          uuid: "Compendium.pf2e.classfeatures.vXbk7Nm1TOTTUNvF",
        },
        kh0qp: {
          img: "systems/pf2e/icons/features/classes/gunslinger-weapon-mastery.webp",
          level: 5,
          name: "Gunslinger Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.9nRT8aq05Fy2D3i3",
        },
        pi0ik: {
          img: "systems/pf2e/icons/features/classes/incredible-sense.webp",
          level: 19,
          name: "Incredible Senses",
          uuid: "Compendium.pf2e.classfeatures.nLwPMPLRne1HnL00",
        },
        rqnn0: {
          img: "systems/pf2e/icons/features/classes/vigilant-senses.webp",
          level: 7,
          name: "Vigilant Senses",
          uuid: "Compendium.pf2e.classfeatures.0npO4rPscGm0dX13",
        },
        uq3mi: {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 17,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        zmmy3: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Level 15)",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
      },
      keyAbility: {
        value: ["dex"],
      },
      perception: 2,
      rules: [
        {
          definition: [
            "item:category:simple",
            {
              or: ["item:group:firearm", "item:tag:crossbow"],
            },
          ],
          key: "MartialProficiency",
          label: "PF2E.SpecificRule.MartialProficiency.SimpleFirearmsCrossbows",
          slug: "simple-firearms-crossbows",
          value: 2,
        },
        {
          definition: [
            "item:category:martial",
            {
              or: ["item:group:firearm", "item:tag:crossbow"],
            },
          ],
          key: "MartialProficiency",
          label:
            "PF2E.SpecificRule.MartialProficiency.MartialFirearmsCrossbows",
          slug: "martial-firearms-crossbows",
          value: 2,
        },
        {
          definition: [
            "item:category:advanced",
            {
              or: ["item:group:firearm", "item:tag:crossbow"],
            },
          ],
          key: "MartialProficiency",
          label:
            "PF2E.SpecificRule.MartialProficiency.AdvancedFirearmsCrossbows",
          slug: "advanced-firearms-crossbows",
          value: 1,
        },
      ],
      savingThrows: {
        fortitude: 2,
        reflex: 2,
        will: 1,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Guns & Gears",
      },
      trainedSkills: {
        additional: 3,
        value: [],
      },
      traits: {
        custom: "",
        rarity: "uncommon",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "30qVs46dVNflgQNx",
    name: "Inventor",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          "<p><em>Any tinkerer can follow a diagram to make a device, but you invent the impossible! Every strange contraption you dream up is a unique experiment pushing the edge of possibility, a mysterious machine that seems to work for only you. You're always on the verge of the next great breakthrough, and every trial and tribulation is another opportunity to test and tune. If you can dream it, you can build it.</em></p>\n<p><strong>Key Ability: INTELLIGENCE</strong></p>\n<p>At 1st level, your class gives you an ability boost to Intelligence.</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Inventor</h1>\n<h2>During Combat Encounters...</h2>\n<p>You rely on your inventions as much as possible, testing their functionalities under a variety of conditions. You don't set out to achieve anything as banal as simply winning a fight; you seek to collect valuable data that can be used to improve your creations!</p>\n<h2>During Social Encounters...</h2>\n<p>You provide useful context when discussing a variety of academic topics, particularly when speaking about those subjects related to crafting and invention. You might often look for opportunities to acquire patronage to fund some of your more expensive or unorthodox experiments. After all, the materials needed to assemble your inventions don't pay for themselves!</p>\n<h2>While Exploring...</h2>\n<p>You study the design and construction of the environments you explore ardently, making note of clever traps, ingenious mechanisms, or especially keen architecture you come across for later.</p>\n<h2>In Downtime...</h2>\n<p>You brainstorm new designs, bringing them to fruition through careful crafting and meticulous attention to detail. You might also modify previous inventions to adjust for data you've collected in the field. You might work as a local smith or tinker where your skills are needed, or you might keep a workshop on the edge of town where the clank and clatter of your experiments attracts less attention.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Enjoy creating new things the world has never seen before.</li>\n<li>Be willing to take a chance on a theory, testing to see if your hypothesis proves accurate. If not, you probably record the results to try again later.</li>\n<li>Wear clothes spattered with oil and grime, or venture off on excited and technical tangents when asked simple questions.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Marvel at your inventions and the variety of unbelievable wonder they can bring.</li>\n<li>Believe that you're a genius whose work is beyond understanding.</li>\n<li>Worry that your inventions might backfire or explode.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Crafting</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in medium armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in inventor class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as an Inventor. Abilities gained at higher levels list the levels at which you gain them next to the features' names.</p>\n<table class=\"pf2-table\">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, overdrive, innovation, explode, peerless inventor, shield block, inventor feat</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Expert overdrive, general feat, reconfigure, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, inventor weapon expertise, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Breakthrough innovation, general feat, lightning reflexes, master overdrive, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, inventive expertise, offensive boost, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>General feat, medium armor expertise, resolve, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Alertness, ancestry feat, complete reconfiguration, inventor weapon mastery, skill increase</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater weapon specialization, legendary overdrive, revolutionary innovation, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, inventive mastery, juggernaut, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Inventor feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, infinite invention, medium armor mastery, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, inventor feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Overdrive</h2>\n<p>You have a bevy of smaller devices of your own invention, from muscle stimulants to concussive pistons. When it's necessary, you can throw them into overdrive to assist you in combat.</p>\n<h2>Innovation</h2>\n<p>While you're always creating inventions, there's one that represents your preeminent work, the one that you hope- with refinement-might change the world. Choose one of the below innovations. Your innovation's level is equal to your level. If your innovation is destroyed, you can spend 1 day of downtime and attempt a Crafting check with a high DC for your level; on a success, you rebuild it. An innovation only works due to your constant maintenance and tinkering, and therefore has no market Price.</p>\n<p>The innovations you can choose from in this book are as follows.</p>\n<h3>Armor</h3>\n<p>Your innovation is a cutting-edge suit of medium armor with a variety of attached gizmos and devices. Choose one of the sets of statistics on Table 2-2: Innovation Armor Statistics for your innovation armor (or choose another set of innovation armor statistics to which you have access).</p>\n<p>Your innovation armor can have fundamental and property runes added to it in the same way as ordinary armor. Because of the unique features of your innovation, everyone except you is untrained in it, even if they would normally be trained (or better) in medium armor. Choose one initial armor modification to apply to your innovation, either from the following or from other initial armor modifications to which you have access.</p>\n<ul>\n<li><strong>Harmonic Oscillator</strong> You designed your armor to inaudibly thrum at just the right frequency to create interference against force and sound waves. You gain resistance equal to 3 + half your level to force and sonic damage. When under the effects of Overdrive, the resistance increases by 2.</li>\n<li><strong>Metallic Reactance</strong> The metals in your armor are carefully alloyed to ground electricity and protect from acidic chemical reactions. You gain resistance equal to 3 + half your level to acid and electricity damage. When under the effects of Overdrive, the resistance increases by 2.</li>\n<li><strong>Muscular Exoskeleton (Power Suit Only)</strong> Your armor supports your muscles with a carefully crafted exoskeleton. When you send your armor into overdrive, the exoskeleton supplements your feats of athletics as well. When under the effects of Overdrive, you gain a +1 circumstance bonus to Athletics checks; if you're a master in Crafting, this increases to a +2 circumstance bonus.</li>\n<li><strong>Otherworldly Protection</strong> Just because you use science doesn't mean you can't build your armor with carefully chosen materials and gizmos designed to protect against otherworldly attacks. You gain resistance equal to 3 + half your level to negative damage, or to positive damage if you have negative healing (such as if you're a dhampir). You gain the same amount of resistance to any types of alignment damage-good, evil, chaotic, lawful-that can damage you (note that creatures don't take a given type of alignment damage unless they are of the opposing alignment; for instance, you can take evil damage only if you are good in alignment).</li>\n<li><strong>Phlogistonic Regulator</strong> A layer of insulation within your armor protects you from rapid temperature fluctuations. You gain resistance equal to half your level to cold and fire damage. When under the effects of Overdrive, the resistance increases by 2.</li>\n<li><strong>Speed Boosters</strong> You have boosters in your armor that increase your Speed. You gain a +5-foot status bonus to your Speed, which increases to a +10-foot status bonus when under the effects of Overdrive.</li>\n<li><strong>Subtle Dampeners (Subterfuge Suit Only)</strong> You've designed your armor to help you blend in and dampen noise slightly. When you send your armor into overdrive, the dampeners increase their effect, improving your Stealth. When under the effects of Overdrive, you gain a +1 circumstance bonus to Stealth checks. If you're a master in Crafting, this increases to a +2 circumstance bonus.</li>\n</ul>\n<table class=\"pf2-table\">\n<tbody>\n<tr>\n<th>Medium Armor</th>\n<th>AC Bonus</th>\n<th>Dex Cap</th>\n<th>Check Penalty</th>\n<th>Speed Penalty</th>\n<th>Strength</th>\n<th>Bulk</th>\n<th>Group</th>\n<th>Armor Traits</th>\n</tr>\n<tr>\n<td>Power Suit</td>\n<td>+4</td>\n<td>+1</td>\n<td>-2</td>\n<td>-5 feet</td>\n<td>16</td>\n<td>2</td>\n<td>composite</td>\n<td>-</td>\n</tr>\n<tr>\n<td>Subterfuge Suit</td>\n<td>+1</td>\n<td>+4</td>\n<td>-1</td>\n<td>-</td>\n<td>10</td>\n<td>1</td>\n<td>composite</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3>Construct</h3>\n<p>Your innovation is a mechanical creature, such as a clockwork construct made of cogs and gears. It's a prototype construct companion, and you can adjust most of its base statistics by taking feats at higher levels, such as Advanced Companion. If you use the Overdrive action, your construct gains the same Overdrive benefits you do, and it also takes the same amount of fire damage on a critical failure.</p>\n<p>You know how to spend additional time directing, controlling, or programming your construct innovation for a more complex plan of action. You can spend 2 actions to Command instead of 1 when commanding your construct companion; your construct companion can then use an additional action (normally 3 actions, rather than 2).</p>\n<p>Choose one initial construct modification to apply to your innovation, either from the following or from other initial construct modifications to which you have access. These modifications alter the construct's abilities or form.</p>\n<ul>\n<li><strong>Accelerated Mobility</strong> Actuated legs, efficient gears in the wheels or treads, or add-on boosters make your construct faster. Your innovation's Speed increases to 40 feet.</li>\n<li><strong>Amphibious Construction</strong> Increased buoyancy, rudders, and a means of propulsion like a fluked tail or powerful propeller make your construct able to travel in water. Your innovation gains a swim Speed of 25 feet.</li>\n<li><strong>Increased Size</strong> You built your construct innovation bigger than most. Your construct is Large. If you have this modification and your construct innovation becomes an advanced construct companion or otherwise gains the ability to become Large, you can immediately change increased size to a different initial construct modification.</li>\n<li><strong>Manual Dexterity</strong> Your construct innovation has articulated hands or similar appendages with significant manual dexterity. It can perform manipulate actions with up to two of its limbs. As normal for a companion, it still can't wield weapons or held items that don't have the companion trait, and it can't activate items.</li>\n<li><strong>Projectile Launcher</strong> Your construct has a mounted dart launcher, embedded cannon, or similar armament. Your innovation gains a ranged unarmed attack that deals 1d4 bludgeoning or piercing damage (you choose when you pick this modification). The attack has the propulsive trait and a range increment of 30 feet.</li>\n<li><strong>Sensory Array</strong> Additional sensory devices give your innovation low-light vision and darkvision, as well as imprecise tremorsense out to a range of 30 feet.</li>\n<li><strong>Wonder Gears</strong> You map specialized skills into your construct's crude intelligence. Your innovation becomes trained in Intimidation, Stealth, and Survival.</li>\n</ul>\n<h3>Weapon</h3>\n<p>Your innovation is an impossible-looking weapon augmented by numerous unusual mechanisms. It begins with the same statistics as a level 0 common simple or martial weapon of your choice, or another level 0 simple or martial weapon to which you have access. You can instead use the statistics of a 1st-level common simple or martial weapon of your choice, or another 1st-level simple or martial weapon to which you have access, but you must pay the monetary Price for the weapon. An innovation weapon can have fundamental and property runes added to it in the same way as an ordinary weapon. Because of the unique features of your innovation, everyone except you is untrained in it, even if they would normally be trained (or better) in simple or martial weapons. If you use the Overdrive action, you can choose to change the additional damage from Overdrive to fire damage. Choose one initial weapon modification to apply to your innovation, either from the following or from other initial weapon modifications to which you have access. These modifications grant additional weapon traits, sometimes with extra abilities. A modification might give your weapon the versatile trait with a damage type that the weapon could already deal, either from its base damage type or from an existing versatile trait. In that case, if you select that modification, you can instead choose to give the weapon the versatile trait for a different damage type: bludgeoning, piercing, or slashing.</p>\n<ul>\n<li><strong>Blunt Shot (Ranged Only)</strong> Your weapon innovation can file the edges off your ammunition and adjust the blunt force of the shot to deliver a bludgeoning attack when necessary, as well as to avoid striking a lethal blow with an otherwise deadly shot. Your innovation gains the nonlethal and versatile B traits. You can choose whether to apply the nonlethal trait on each attack with your innovation.</li>\n<li><strong>Complex Simplicity (Simple Weapon Only)</strong> Increase your innovation's weapon damage die by one step (d4 to d6, d6 to d8, d8 to d10, d10 to d12). In addition, it gains one of the following traits of your choice: versatile B, versatile P, or versatile S.</li>\n<li><strong>Dynamic Weighting (One-handed Melee Weapon Only; Can't Have the Agile, Attached, or Free-hand Trait)</strong> Your weapon's modified weight distribution can increase power in exchange for taking more hands to wield. Your innovation gains the two-hand trait, with a damage die one size higher than the weapon's normal weapon damage die size (for instance, a longsword would gain the two-hand d10 trait). Your innovation also gains the versatile B trait.</li>\n<li><strong>Entangling Form (Melee Only)</strong> You've altered your weapon to including tangling wires or straps, or to have a flexible construction. Your innovation gains the grapple and trip traits.</li>\n<li><strong>Hampering Spikes (Melee Only)</strong> You've added long, snagging spikes to your weapon, which you can use to impede your foes' movement. Your innovation gains the hampering and versatile P traits.</li>\n<li><strong>Hefty Composition (Melee Only)</strong> Blunt surfaces and sturdy construction make your weapon hefty and mace-like. Your innovation gains the shove and versatile B traits.</li>\n<li><strong>Modular Head</strong> You've constructed a multi-purpose, adjustable striking surface for your weapon, or you've made special ammunition you can swiftly alter. Your innovation gains the modular trait for bludgeoning, piercing, and slashing. When you Interact to use the modular trait, you can also choose to give the weapon the nonlethal trait if it doesn't currently have it, or to remove that trait if it's currently nonlethal.</li>\n<li><strong>Pacification Tools (Melee Only)</strong> Softer materials make your weapon suited to knock out instead of kill, and special protrusions let you catch weapons and disarm your foes. Your innovation gains the disarm and nonlethal traits. You can choose whether to apply the nonlethal trait on each attack with your innovation.</li>\n<li><strong>Razor Prongs (Melee Only)</strong> You can knock down and slash your foes with sharp, curved blades added to your weapon. Your innovation gains the trip and versatile S traits.</li>\n<li><strong>Segmented Frame</strong> Hinges, clamps, and telescoping parts make your innovation collapsible and adjustable. It gains the modular trait for bludgeoning, piercing, and slashing. You can Interact to collapse the item down to light Bulk or to return it to your normal form. When it's collapsed to light Bulk, it has the concealable trait, which grants you a +2 circumstance bonus to Stealth checks and DCs to hide or conceal the weapon.</li>\n</ul>\n<h2>Explode</h2>\n<p>Your innovation is a creation barely held together by your own engineering, always on the edge of completely falling apart. Though this adds risk, it also means you can coax it to perform far beyond its design specifications using special unstable actions. See the definition of the unstable trait and how it affects your innovation.</p>\n<p>While inventors can learn various unstable actions over their career, all at least know how to make their innovation Explode.</p>\n<h2>Peerless Inventor</h2>\n<p>You are constantly inventing, and your skill at crafting is unimpeachable. You gain the Inventor skill feat, even if you don't meet its prerequisites.</p>\n<h2>Shield Block</h2>\n<p>You gain the Shield Block general feat, a reaction that lets you reduce damage with your shield.</p>\n<h2>Inventor Feats</h2>\n<p>At 1st level and every even-numbered level, you gain an inventor class feat. Some features and feats use an assortment of gizmos you keep on your person. For simplicity, these are left abstract, but if you are deprived of your gear for some reason, you might lose access to many feats and features, subject to GM discretion.</p>\n<h2>Skill Feats<span style=\"float: right;\">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Expert Overdrive<span style=\"float: right;\">Level 3</span></h2>\n<p>You've increased your skill in crafting, and you can put your devices into a more powerful state of overdrive. You become an expert in Crafting, and on a successful use of Overdrive, you increase the additional damage by 1.</p>\n<h2>General Feats<span style=\"float: right;\">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Reconfigure<span style=\"float: right;\">Level 3</span></h2>\n<p>You've become an expert in all crafts and are always adjusting your inventions. You can attempt to change the modifications on your innovation by spending 1 day of downtime tinkering with it and attempting a Crafting check, with a high DC for your level. On a success, you can change one modification you've chosen for your innovation to a different modification of the same kind (initial, breakthrough, or revolutionary).</p>\n<p>If you have any modification feats, on a successful check you can choose to instead retrain a modification feat to a different modification feat. The new feat has to meet the standard restrictions for retraining.</p>\n<h2>Skill Increases<span style=\"float: right;\">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase to either become trained in one skill you're untrained in, or become an expert in one skill in which you're already trained.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you're already an expert, and at 15th level, you can use them to become legendary in a skill in which you're already a master.</p>\n<h2>Ability Boosts<span style=\"float: right;\">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it's already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style=\"float: right;\">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Inventor Weapon Expertise<span style=\"float: right;\">Level 5</span></h2>\n<p>You develop tricks for using your weapons more effectively. Your proficiency ranks for simple and martial weapons and unarmed attacks increase to expert.</p>\n<p>If you have a weapon innovation, you gain access to the critical specialization effect with your innovation.</p>\n<h2>Breakthrough Innovation<span style=\"float: right;\">Level 7</span></h2>\n<p>You've made a breakthrough in your field of study and discovered a powerful new way to enhance your innovation. Choose a breakthrough modification of your innovation's type to apply to your innovation. You can choose an initial modification of your innovation's type instead if you prefer.</p>\n<h3>Breakthrough Armor Modifications</h3>\n<ul>\n<li><strong>Antimagic Plating</strong> Whether you used some clever adaptation of the magic-negating skymetal known as noqual or created magical protections of your own design, you've strengthened your armor against magic. While wearing the armor, you gain a +1 circumstance bonus to all saving throws against spells and to AC against spells. Against spells that target the armor directly (like heat metal), you instead gain a +4 circumstance bonus to all saving throws and to AC.</li>\n<li><strong>Camouflage Pigmentation (Subterfuge Suit Only)</strong> You've modified your armor's exterior to let you blend into your surroundings with ease, as long as you stay still. While wearing your armor, you can Hide even without cover or concealment, as the pigmentation shifts to match your surroundings.</li>\n<li><strong>Dense Plating</strong> You have encased your armor in robust plating. While wearing your armor, you gain resistance to slashing damage equal to half your level.</li>\n<li><strong>Enhanced Resistance</strong> You've improved upon your initial modification's ability to resist damage. The resistance from your initial armor modification adds your full level, instead of half your level (for instance, phlogistonic regulator's resistance would increase to your level). If you have more than one initial modification that gives resistance, choose which one this applies to.</li>\n<li><strong>Heavy Construction (Power Suit Only)</strong> You've expanded your innovation into a heavy bulwark, and your groundbreaking design ensures you don't take any of the drawbacks for such heavy defenses. Your innovation becomes heavy armor, and your proficiency in your innovation armor (but no other heavy armor) advances to be equal to your proficiency in medium armor. If your Strength score is at least 16, you remove the Speed penalty entirely instead of reducing it to -5 feet. The armor's adjusted statistics are: AC Bonus +5; Dex Cap +1; Check Penalty -2; Speed Penalty -10 feet; Strength 16; Bulk 3; Group composite; Armor Traits bulwark.</li>\n<li><strong>Hyper Boosters</strong> You've improved your speed boosters' power through a breakthrough that significantly increases the energy flow without risking exploding. You gain a +10-foot status bonus to your Speed, which increases to a +20-foot status bonus when you're in Overdrive. If you're legendary in Crafting, it instead increases to a +30-foot status bonus when you're in Overdrive. You must have the speed boosters modification to select this modification.</li>\n<li><strong>Layered Mesh</strong> You've woven an incredibly powerful network of interlocking mesh around your armor, which catches piercing attacks and diffuses them. While wearing your armor, you gain resistance to piercing damage equal to half your level.</li>\n<li><strong>Tensile Absorption</strong> You've enhanced the tensile capabilities of your armor, enabling it to bend with bludgeoning attacks. While wearing your armor, you gain resistance to bludgeoning damage equal to half your level.</li>\n</ul>\n<h3>Breakthrough Construct Modifications</h3>\n<ul>\n<li><strong>Advanced Weaponry</strong> You've powered up your construct's weaponry. Choose one of your construct's unarmed attacks to gain your choice of one initial weapon modification, chosen from the list on page 18 or from other initial weapon modifications to which you have access. The unarmed attack must meet any requirements for the chosen traits (such as being a melee attack for entangling form), and since it's an unarmed attack, it can never meet certain requirements, such as being a simple weapon for complex simplicity.</li>\n<li><strong>Antimagic Construction</strong> Whether you used some clever adaptation of the magic-negating skymetal known as noqual or created magical protections entirely of your own devising, you've made your innovation highly resilient to spells. Your construct innovation gains a +2 circumstance bonus to all saving throws and AC against spells.</li>\n<li><strong>Climbing Limbs</strong> With appendages that can claw or create suction, your construct becomes a capable climber. Your innovation gains a climb Speed equal to half its land Speed.</li>\n<li><strong>Durable Construction</strong> Your innovation is solidly built; it can take significant punishment before being destroyed. Increase its maximum HP by your level.</li>\n<li><strong>Marvelous Gears</strong> Your innovation gains expert proficiency in Intimidation, Stealth, and Survival. For any of these skills in which it was already an expert (because of being an advanced construct companion, for example), it gains master proficiency instead. If you have the revolutionary innovation class feature, these proficiencies improve to master, or legendary if your construct innovation was already an expert. You must have the wonder gears modification to select this modification.</li>\n<li><strong>Turret Configuration</strong> Your innovation can transform from a mobile construct to a stationary turret. Your construct companion can transform as a single action, which has the manipulate trait, turning into a turret in its space (or transforming back from a turret into its normal configuration). While it's a turret, your innovation is @UUID[Compendium.pf2e.conditionitems.Immobilized]{Immobilized}, but the damage die from its projectile launcher increases to 1d6 and the range increment increases to 60 feet. You must have the projectile launcher modification to select this modification.</li>\n</ul>\n<h3>Breakthrough Weapon Modifications</h3>\n<ul>\n<li><strong>Advanced Rangefinder (Ranged Only)</strong> A carefully tuned scope or targeting device makes your weapon especially good at hitting weak points. Your innovation gains the backstabber trait and increases its range increment by 10 feet.</li>\n<li><strong>Aerodynamic Construction (Melee Only)</strong> You carefully engineer the shape of your weapon to maintain its momentum in attacks against successive targets. Your innovation gains the sweep trait and the versatile S trait.</li>\n<li><strong>Inconspicuous Appearance (Melee Only)</strong> Your innovation is built for easy concealment and surprise attacks. It gains the backstabber and versatile P traits. If the weapon has light Bulk, it also gains the concealable trait.</li>\n<li><strong>Integrated Gauntlet (One-Handed Weapon Only; Can't Have the Two-Hand Trait)</strong> Combining your weapon with a gauntlet, you make it so you can quickly switch between attacking with your weapon and tinkering using your hands. Your innovation gains the free-hand trait.</li>\n<li><strong>Manifold Alloy</strong> You've devised several alloys that contain useful properties of various metals, and you replace a number of parts of your weapon or its ammunition with pieces from these alloys. Your weapon innovation is cold iron and silver. This means you deal more damage to a variety of supernatural creatures, such as demons, devils, and fey.</li>\n<li><strong>Rope Shot (Ranged Only)</strong> Your weapon can shoot projectiles that split into simple ropes or nets around your foes' legs to trip your targets, and you can climb using the grappling hooks built into the weapon. Your weapon innovation gains the climbing and ranged trip traits.</li>\n<li><strong>Tangle Line (Thrown Only)</strong> Your weapon has an extensible line that you can use to knock your enemies over and quickly recall the weapon back to your hand. Your innovation gains the ranged trip trait and the tethered trait.</li>\n</ul>\n<h2>Lightning Reflexes<span style=\"float: right;\">Level 7</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Master Overdrive<span style=\"float: right;\">Level 7</span></h2>\n<p>Your mastery of invention and crafting enhances your Overdrive even further. You become a master in Crafting, and on a successful Overdrive, you increase the additional damage by a total of 2, replacing the increase from expert overdrive.</p>\n<h2>Weapon Specialization<span style=\"float: right;\">Level 7</span></h2>\n<p>You've learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you're a master, and 4 if you're legendary.</p>\n<h2>Inventive Expertise<span style=\"float: right;\">Level 9</span></h2>\n<p>Through innovation and experimentation, you've made your inventions more effective and reliable. Your proficiency rank for your inventor class DC increases to expert.</p>\n<h2>Offensive Boost<span style=\"float: right;\">Level 9</span></h2>\n<p>You've made additions to your innovation to upgrade your offensive capabilities. Your improvements make any Strikes that rely on your innovation deal an additional 1d6 damage, with a type determined by the boost you choose. If your innovation is armor, the boost applies to your melee unarmed Strikes and to your melee Strikes with one weapon you choose during daily preparations; if your innovation is a construct, the boost applies to your construct companion's Strikes; and if your innovation is a weapon, the boost applies to your Strikes with your innovation. You can spend downtime to switch to a different boost in the same way as switching your modification. Choose one of the following boosts, with the damage type in parentheses.</p>\n<ul>\n<li><strong>Chill (Cold)</strong> Your innovation rapidly absorbs heat, creating an intense chill.</li>\n<li><strong>Ignition (Fire)</strong> Your innovation shoots out jets of searing flame.</li>\n<li><strong>Jolt (Electricity)</strong> Your innovation jolts foes with charges of electricity.</li>\n<li><strong>Momentum (Bludgeoning)</strong> Your innovation slams into foes with added momentum.</li>\n<li><strong>Saws (Slashing)</strong> Your innovation reveals spinning sawblades during your attacks.</li>\n<li><strong>Spike (Piercing)</strong> Your innovation reveals wicked spikes during your attacks.</li>\n<li><strong>Vitriol (Acid)</strong> Your innovation releases spurts of caustic acid.</li>\n</ul>\n<h2>Medium Armor Expertise<span style=\"float: right;\">Level 11</span></h2>\n<p>You've learned to better defend yourself against attacks. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to expert. If you have a medium or heavy armor innovation, you gain access to the critical specialization effect with your armor innovation.</p>\n<h2>Resolve<span style=\"float: right;\">Level 11</span></h2>\n<p>You've steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2>Alertness<span style=\"float: right;\">Level 13</span></h2>\n<p>Your attention to detail lets you remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Complete Reconfiguration<span style=\"float: right;\">Level 13</span></h2>\n<p>When it comes to crafting and tinkering, you've become incredibly adept at changing your modifications to adjust your innovation's functionality. When you spend downtime to reconfigure your innovation and succeed at your Crafting check, you can swap any number of modifications, swap your offensive boost, or retrain any number of modification feats, rather than one. You still must swap a modification only with one of the same type (initial, breakthrough, or revolutionary).</p>\n<h2>Inventor Weapon Mastery<span style=\"float: right;\">Level 13</span></h2>\n<p>You fully understand your weapons. Your proficiency ranks for simple and martial weapons and unarmed attacks increase to master.</p>\n<h2>Greater Weapon Specialization<span style=\"float: right;\">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you're an expert, 6 if you're a master, and 8 if you're legendary.</p>\n<h2>Legendary Overdrive<span style=\"float: right;\">Level 15</span></h2>\n<p>Your peerless inventing and Crafting ability has supercharged your Overdrives. You become legendary in Crafting, and on a successful Overdrive, you increase the additional damage by a total of 3, replacing the increase from master overdrive.</p>\n<h2>Revolutionary Innovation<span style=\"float: right;\">Level 15</span></h2>\n<p>You are an unparalleled genius and have discovered a technique that will revolutionize your chosen field-or at least for the time being, your innovation! Choose a revolutionary modification to apply to your innovation. You can also choose an initial or breakthrough modification of the same type instead, if you prefer.</p>\n<h3>Revolutionary Armor Modifications</h3>\n<ul>\n<li><strong>Automated Impediments</strong> Your armor uses electromagnetic fields, subharmonic distortions, or other techniques to make it difficult for those close to you to move unless you allow it. While wearing your armor, all spaces adjacent to you are difficult terrain for your enemies.</li>\n<li><strong>Energy Barrier</strong> Your armor's defenses ablate any kind of energy coming your way. While wearing your armor, you gain resistance to all energy damage (acid, cold, electricity, fire, force, negative, positive, and sonic damage) equal to 2 + half your level. You must have the harmonic oscillator, metallic reactance, or phlogistonic regulator modification to select this modification.</li>\n<li><strong>Incredible Resistance</strong> You've improved upon your breakthrough modification's ability to resist damage. Choose one of the following breakthrough modifications your innovation has: dense plating, layered mesh, or tensile absorption. Increase the resistance you gain from that modification to be equal to your level, instead of half your level.</li>\n<li><strong>Multisensory Mask (Subterfuge Suit Only)</strong> You've built a multisensory mask over your armor that protects you by distorting your figure from all senses, leaving behind only a hazy image, muffled sounds, and so forth. While wearing the armor, you gain concealment against all creatures, even if they are using a nonvisual precise sense, such as a bat's echolocation. As normal for effects that leave your location obvious, you can't use this concealment to Hide or Sneak. If you use a hostile action, the concealment ends until you restore the mask as a single action, which has the manipulate trait.</li>\n<li><strong>Perfect Fortification (Power Suit Only)</strong> You've outfitted your armor with such heavy fortifications that deadly attacks often lose their edge. Each time you're critically hit while wearing the armor, attempt a @Check[type:flat|dc:13|showDC:owner] check. On a success, it becomes a normal hit. This isn't cumulative with fortification runes or other abilities that reduce critical hits with a flat check. Additionally, you gain resistance 2 + half your level against precision damage.</li>\n<li><strong>Physical Protections</strong> Your armor has so many adjustments and precautions that it can guard against all physical damage. While wearing your armor, you gain resistance to all physical damage (bludgeoning, piercing, and slashing damage, as well as persistent bleed damage) equal to half your level. You must have the dense plating, layered mesh, or tensile absorption breakthrough modification to select this modification.</li>\n<li><strong>Rune Capacity</strong> Whether you've done some dabbling in orichalcum alloys or found another engineering solution, you've built your innovation in such a way that it can hold an additional property rune. Your innovation can have one more property rune than a normal item of its kind (to a maximum of four property runes with a +3 potency armor).</li>\n</ul>\n<h3>Revolutionary Construct Modifications</h3>\n<ul>\n<li><strong>Flight Chassis</strong> You fit your construct with a means of flight, such as adding rotors or rebuilding it with wings and a lightweight construction. Your innovation gains a fly Speed of 25 feet.</li>\n<li><strong>Miracle Gears</strong> As you perfect your innovation's cortex, it becomes much more intelligent. Its Intelligence modifier increases by 2, and it learns a language of your choice from among the languages you know. Your construct gains the ability to use actions that require greater Intelligence, like Coerce and Decipher Writing. Finally, your construct becomes legendary in two Intelligence- or Charisma-based skills of your choice. You must have the marvelous gears modification to select this modification.</li>\n<li><strong>Resistant Coating</strong> Your innovation is hard to damage by any means. It gains resistance 5 to all damage (except adamantine).</li>\n<li><strong>Runic Keystone</strong> You've incorporated a device similar to a runestone into your innovation, allowing it to hold a property rune, even though it isn't a weapon or suit of armor. An armor property rune affects your innovation itself if it would affect the wearer of the armor. A weapon property rune grants whatever properties it would normally grant to a weapon to your innovation's unarmed attacks, following all the requirements as normal (for instance, a vorpal rune would only apply to slashing melee unarmed attacks); if the rune affects only ranged attacks, it has no effect unless your innovation has a built-in ranged attack (from the projectile launcher initial modification, for example). If the rune would affect the physical shape or appearance of the weapon or armor itself, like glamered, the rune has no effect when etched into your construct.</li>\n<li><strong>Wall Configuration</strong> Your innovation can transform from a mobile construct to a stationary battlefield emplacement. It can unfold as a 2-action activity that has the manipulate trait, changing from its usual form into a thin, straight wall of metal and gears up to 10 feet tall and 30 feet long. The wall must extend through your innovation's original space. While your construct is a wall, it can't take any actions except to use the same activity to transform back, and it can't defend itself easily, making it @UUID[Compendium.pf2e.conditionitems.Flat-Footed]{Flat-Footed} and giving it an additional -2 status penalty to its AC. The wall blocks line of sight and effect unless your innovation has half its maximum HP or fewer, at which point holes in the wall allow creatures to see through and attack with cover, and Tiny creatures to slip through.</li>\n</ul>\n<h3>Revolutionary Weapon Modifications</h3>\n<ul>\n<li><strong>Attack Refiner</strong> Your weapon makes minute recalibrations after every missed attack to ensure the next lands true. Your innovation gains the backswing and shove traits.</li>\n<li><strong>Deadly Strike</strong> Through precise calculation, you've found the perfect shape for your weapon to deal extreme damage on a well-placed strike. Your innovation gains the deadly d8 trait. If your innovation was already deadly, it increases its deadly die to d12 instead of gaining deadly d8.</li>\n<li><strong>Enhanced Damage</strong> You've made your innovation more powerful than other weapons of its kind. Increase your innovation's weapon damage die by one step (d4 to d6, d6 to d8, d8 to d10, d10 to d12). As normal, you can't increase your die by more than one size, so this modification isn't cumulative with complex simplicity.</li>\n<li><strong>Extensible Weapon (Melee only)</strong> You've found a way to construct your weapon so that it can extend while leaving its balance unchanged. Your innovation gains the reach trait. If the weapon already had the reach trait, it increases your reach by an additional 10 feet, instead of the usual additional 5 feet.</li>\n<li><strong>Impossible Alloy</strong> Other inventors claim it's not even technically possible, but you've managed to create several metal alloys that seem to work for only you. These alloys can damage opponents vulnerable to any one of the seven skymetals. Your innovation is treated as all seven skymetals (abysium, adamantine, djezet, inubrix, noqual, orichalcum, and siccatite). This means you deal more damage to a variety of creatures, though you don't apply any of the other special effects for weapons made of those skymetals.</li>\n<li><strong>Momentum Retainer (Melee only)</strong> A special weighted device lets your weapon retain more of its momentum when you attack. Your innovation gains the forceful and versatile B traits.</li>\n<li><strong>Omnirange Stabilizers (Ranged only)</strong> You've modified your innovation to be dangerous and effective at any range. If your innovation had the volley trait, remove the volley trait. Otherwise, increase your innovation's range increment by 50 feet or an amount equal to the weapon's base range increment, whichever is more.</li>\n<li><strong>Rune Capacity</strong> Whether you've dabbled with orichalcum or found another engineering solution, you've built your innovation in such a way that it can hold an additional property rune. Your innovation can have one more property rune than a normal item of its kind (to a maximum of four property runes with a +3 potency weapon).</li>\n</ul>\n<h2>Inventive Mastery<span style=\"float: right;\">Level 17</span></h2>\n<p>Your inventions are incredibly effective. Your proficiency rank for your inventor class DC increases to master.</p>\n<h2>Juggernaut<span style=\"float: right;\">Level 17</span></h2>\n<p>Your body is accustomed to physical hardship and resistant to ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Infinite Invention<span style=\"float: right;\">Level 19</span></h2>\n<p>Your ability to adjust your innovation has reached impossible heights, and you can use these skills to make major adjustments in your spare time. During your daily preparations, you automatically fix your innovation if it's destroyed or broken, and you can change to a different innovation (armor, construct, weapon, or other type you have access to) and change your modifications and offensive boost.</p>\n<p>If you have any feats that had your previous innovation as a prerequisite, you can't use them until you retrain the feats as normal. However, it takes you only 1 day of downtime to retrain such a feat into a feat that has your new innovation as a prerequisite, instead of 1 week.</p>\n<h2>Medium Armor Mastery<span style=\"float: right;\">Level 19</span></h2>\n<p>Your skill with armor improves, helping you avoid more blows. Your proficiency ranks for light and medium armor, as well as for unarmored defense, increase to master.</p>",
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "1doue": {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 5,
          name: "Inventor Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.0NyPgi6UACMTmAGE",
        },
        "43sk5": {
          img: "systems/pf2e/icons/features/classes/peerless-inventor.webp",
          level: 1,
          name: "Peerless Inventor",
          uuid: "Compendium.pf2e.classfeatures.JH6um0St37UrjLNG",
        },
        "5aavk": {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 13,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        "5prut": {
          img: "systems/pf2e/icons/features/classes/medium-armor-expertise.webp",
          level: 11,
          name: "Medium Armor Expertise (Inventor)",
          uuid: "Compendium.pf2e.classfeatures.esyKPSDbFQPB4lhq",
        },
        "72ph9": {
          img: "systems/pf2e/icons/features/classes/complete-reconfiguration.webp",
          level: 13,
          name: "Complete Reconfiguration",
          uuid: "Compendium.pf2e.classfeatures.j0klWHkH3AxUAgok",
        },
        "796tt": {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 9,
          name: "Offensive Boost",
          uuid: "Compendium.pf2e.classfeatures.F8oXHnu9iNTcpXbJ",
        },
        "7aqni": {
          img: "systems/pf2e/icons/features/classes/master-overdrive.webp",
          level: 7,
          name: "Master Overdrive",
          uuid: "Compendium.pf2e.classfeatures.SXv9bJFbntDOMRIL",
        },
        cqq8h: {
          img: "systems/pf2e/icons/features/classes/medium-armor-mastery.webp",
          level: 19,
          name: "Medium Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.cGMSYAErbUG5E8X2",
        },
        d0g4j: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Level 15)",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        ebysz: {
          img: "systems/pf2e/icons/features/classes/revolutionary-innovation.webp",
          level: 15,
          name: "Revolutionary Innovation",
          uuid: "Compendium.pf2e.classfeatures.tXbadIT3LzwuSR19",
        },
        f46jt: {
          img: "systems/pf2e/icons/features/classes/inventive-mastery.webp",
          level: 17,
          name: "Inventive Mastery",
          uuid: "Compendium.pf2e.classfeatures.Uu8VnpAo3XZZEKPd",
        },
        g4pqo: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        havjj: {
          img: "systems/pf2e/icons/features/classes/shield-block.webp",
          level: 1,
          name: "Shield Block",
          uuid: "Compendium.pf2e.classfeatures.eZNCckLzbH3GyncH",
        },
        hu0ip: {
          img: "systems/pf2e/icons/features/classes/breakthrough-innovation.webp",
          level: 7,
          name: "Breakthrough Innovation",
          uuid: "Compendium.pf2e.classfeatures.78HIjRbGoONMpF31",
        },
        ihpyc: {
          img: "systems/pf2e/icons/features/classes/inventive-expertise.webp",
          level: 9,
          name: "Inventive Expertise",
          uuid: "Compendium.pf2e.classfeatures.mQVC1iDyNi2tfsF8",
        },
        ijovo: {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 17,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        lp0v8: {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 11,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        n7f3b: {
          img: "systems/pf2e/icons/features/classes/legendary-overdrive.webp",
          level: 15,
          name: "Legendary Overdrive",
          uuid: "Compendium.pf2e.classfeatures.o1omL2LdHvjEwh3P",
        },
        ng6mg: {
          img: "systems/pf2e/icons/features/classes/infinite-invention.webp",
          level: 19,
          name: "Infinite Invention",
          uuid: "Compendium.pf2e.classfeatures.rOaLbipkComjc6qh",
        },
        ouhy4: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 7,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        p0u0x: {
          img: "systems/pf2e/icons/features/classes/explode.webp",
          level: 1,
          name: "Explode",
          uuid: "Compendium.pf2e.classfeatures.pEm1RTNuzzQVKkR0",
        },
        paomt: {
          img: "systems/pf2e/icons/features/classes/overdrive.webp",
          level: 1,
          name: "Overdrive",
          uuid: "Compendium.pf2e.classfeatures.oP5zM5Yu41xcx3iu",
        },
        ptf4a: {
          img: "systems/pf2e/icons/features/classes/reconfigure.webp",
          level: 3,
          name: "Reconfigure",
          uuid: "Compendium.pf2e.classfeatures.J46wcNqKXvtokBD1",
        },
        tkc99: {
          img: "systems/pf2e/icons/features/classes/expert-overdrive.webp",
          level: 3,
          name: "Expert Overdrive",
          uuid: "Compendium.pf2e.classfeatures.YMKxN56w617BYwu4",
        },
        wg9yw: {
          img: "systems/pf2e/icons/features/classes/weapon-mastery.webp",
          level: 13,
          name: "Inventor Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.mJpPaoVlNmTK47x1",
        },
        y9fo7: {
          img: "systems/pf2e/icons/features/classes/innovation.webp",
          level: 1,
          name: "Innovation",
          uuid: "Compendium.pf2e.classfeatures.jIAgXe2FetAKBwt7",
        },
      },
      keyAbility: {
        value: ["int"],
      },
      perception: 1,
      rules: [],
      savingThrows: {
        fortitude: 2,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Guns & Gears",
      },
      trainedSkills: {
        additional: 3,
        custom: "",
        value: ["cra"],
      },
      traits: {
        custom: "",
        rarity: "uncommon",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "4wrSCyX6akmyo7Wj",
    name: "Investigator",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>You seek to uncover the truth, doggedly pursuing leads to reveal the plots of devious villains, discover ancient secrets, or unravel other mysteries. Your analytical mind quickly formulates solutions to complicated problems and your honed senses identify even the most obscure clues. Wielding knowledge as a weapon, you study the creatures and dangers you encounter to exploit their weaknesses.</em></p>\n<p><strong>KEY ABILITY: INTELLIGENCE</strong></p>\n<p>At 1st level, your class gives you an ability boost to Intelligence.</p>\n<p><strong>HIT POINTS</strong> 8 plus your Constitution modifier</p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Investigator</h1>\n<h2>During Combat Encounters...</h2>\n<p>Your keen insights regarding your foes make you more dangerous than your physical strength would suggest. After spending a moment to study your enemies, your perceptiveness allows you to act quickly, striking them where it hurts most.</p>\n<p>You often assist tougher members of your party, wisely protecting yourself while providing vital aid.</p>\n<h2>During Social Encounters...</h2>\n<p>Few can stand up against your scrutiny. You might not be the most charming, but you see things for what they really are and develop an understanding of a social situation rapidly. Every conversation is an investigation, after all, and you never know what you might uncover!</p>\n<h2>While Exploring...</h2>\n<p>You look for clues in your environment. You often prove yourself to be a valuable ally by serving as a party scout, analyzing the intricacies of puzzles or mysterious phenomena, and pursuing leads that could reveal beneficial information.</p>\n<h2>In Downtime</h2>\n<p>You study up on subjects new and old, make new allies you can share information with, and pursue hobbies that keep your active mind satisfied. You might make a bit of coin on the side working as a private detective or consulting with the local constabulary.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Start asking questions-including several that are quite involved-immediately after you\'re presented with a conundrum.</li>\n<li>Strive to uncover the deeper meanings behind anything you encounter and to identify the social machinations that truly drive events behind the scenes.</li>\n<li>Get so involved in a case that you ignore other matters, deeming them trivial.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Find the cascades of information you spout forth extremely helpful, if difficult to fully comprehend.</li>\n<li>Get a bit annoyed that you\'re such a know-it-all.</li>\n<li>Rely on you to solve mysteries, puzzles, or other challenges requiring intellectual curiosity and reasoning.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Expert in Perception</p>\n<h2>Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Society</p>\n<p>Trained in one or more skills determined by your methodology</p>\n<p>Trained in a number of additional skills equal to 4 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple and martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in investigator class DC</p>\n<h1>Class Features</h1>\n<p>You gain these abilities as an investigator. Abilities gained at higher levels list the level at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, on the case, Devise a Strategen, methodology, investigator feat, strategic strike 1d6</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>3</td>\n<td>General feat, keen recollection, skill increase, skill lesson</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, skill increase, skillful lesson, strategic strike 2d6, weapon expertise</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>7</td>\n<td>General feat, skill increase, skillful lesson, vigilant senses, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, great fortitude, investigator expertise, skill increase, skillful lesson, strategic strike 3d6</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>11</td>\n<td>Deductive improvisation, general feat. resolve, skill increase, skillful lesson</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, incredible senses, light armor expertise, skill increase, skillful lesson, strategic strike 4d6, weapon mastery</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, evastion, general feat, greater weapon specialization, skill increase, skillful lesson</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, greater resolve, skill increase, skillful lesson, strategic strike 5d6</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Investigator feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, light armor mastery, master detective, skill increase, skillful lesson</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, Investigator feat, skill feat, skill increase</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to what you get from your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>On the Case</h2>\n<p>As an investigator, you think of your adventures as cases waiting to be solved. You gain one activity and one reaction you can use to investigate cases: @UUID[Compendium.pf2e.actionspf2e.Pursue a Lead]{Pursue a Lead} and @UUID[Compendium.pf2e.actionspf2e.Clue In]{Clue In}.</p>\n<h2>Devise a Strategem</h2>\n<p>You can play out a battle in your head, using brains rather than brawn to execute an attack.</p>\n<p>@UUID[Compendium.pf2e.actionspf2e.Devise a Stratagem]{Devise a Strategem}</p>\n<h2>Methodology</h2>\n<p>Your studies have made you savvy in many areas,; but one in particular drew your intense interest.</p>\n<p>Choose a methodology. The methodologies presented in this book are as follow:</p>\n<p>@UUID[Compendium.pf2e.classfeatures.Alchemical Sciences Methodology]{Alchemical Sciences Methodology}</p>\n<p>@UUID[Compendium.pf2e.classfeatures.Empiricism Methodology]{Empiricism Methology}</p>\n<p>@UUID[Compendium.pf2e.classfeatures.Forensic Medicine Methodology]{Forensic Medicine Methodology}</p>\n<p>@UUID[Compendium.pf2e.classfeatures.Interrogation Methodology]{Interrogation Methodology}</p>\n<h2>Investigator Feats</h2>\n<p>At 1st level and every even-numbered level, you gain an investigator class feat.</p>\n<h2>Strategic Strike</h2>\n<p>When you strike carefully and with forethought, you deal a telling blow. When making a Strike that adds your Intelligence modifier on your attack roll due to Devising a Stratagem, you deal an additional 1d6 precision damage.</p>\n<p>As your investigator level increases, so too does the deadliness of your strategic strike. Increase the number of dice by one at 5th, 9th, 13th, and 17th levels.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Skill Increases<span style="float: right;">Level 2</span></h2>\n<p>You gain more skill increases than members of other classes. At 2nd level and every level thereafter, you gain a skill increase. You can use this increase to either become trained in one skill you\'re untrained in or to become an expert in one skill in which you\'re already trained.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you\'re already an expert, and at 15th level, you can use them to become legendary in a skill in which you\'re already a master.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Keen Recollection <span style="float: right;">Level 3</span></h2>\n<p>You can recall pertinent facts on topics that aren\'t your specialty. Your proficiency bonus to untrained skill checks to Recall Knowledge is equal to your level instead of +0.</p>\n<h2>Skillful Lessons<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every odd-numbered level thereafter, you gain a skill feat. This feat must be for an Intelligence-, Wisdom-, or Charisma-based skill, or for the skill you gained from your methodology.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Weapon Expertise<span style="float: right;">Level 5</span></h2>\n<p>You\'ve dedicated yourself to learning the intricacies of your weapons. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to expert.</p>\n<h2>Vigilant Senses<span style="float: right;">Level 7</span></h2>\n<p>Through your adventures, you\'ve developed keen awareness and attention to detail. Your proficiency rank in Perception increases to master.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You can inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master and 4 if you\'re legendary.</p>\n<h2>Great Fortitude<span style="float: right;">Level 9</span></h2>\n<p>Your physique is incredibly hardy. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2>Investigator Expertise<span style="float: right;">Level 9</span></h2>\n<p>You\'ve refined your investigative techniques to an exceptional degree. Your circumstance bonus from Pursue a Lead increases to +2. Your proficiency rank for your investigator class DC increases to expert.</p>\n<h2>Deductive Improvisation<span style="float: right;">Level 11</span></h2>\n<p>You use your skills at deduction to perform whatever task is necessary to solve the case. You can attempt any check that requires you to be trained in a skill, even if you\'re untrained in it; you can attempt any check that requires you to have expert proficiency in a skill so long as you\'re trained in it; and you can attempt any check that requires you to have master proficiency in a skill as long as you have expert proficiency in it.</p>\n<h2>Resolve<span style="float: right;">Level 11</span></h2>\n<p>You\'ve steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2>Incredible Senses<span style="float: right;">Level 13</span></h2>\n<p>You notice things that are almost impossible for an ordinary person to detect. Your proficiency rank for Perception increases to legendary.</p>\n<h2>Light Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to dodge while wearing light or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.</p>\n<h2>Weapon Mastery<span style="float: right;">Level 13</span></h2>\n<p>You fully understand your weapons. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to master.</p>\n<h2>Evasion<span style="float: right;">Level 15</span></h2>\n<p>You\'ve learned to move quickly to avoid explosions, a dragon\'s breath, and worse. Your proficiency rank for Reflex saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.</p>\n<h2>Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2>Greater Resolve<span style="float: right;">Level 17</span></h2>\n<p>Your unbelievable training grants you mental resiliency. Your proficiency rank for Will saves increases to legendary. When you roll a success on a Will save, you get a critical success. When you roll a critical failure on a Will save, you get a failure instead. When you fail a Will save against a damaging effect, you take half damage.</p>\n<h2>Light Armor Mastery<span style="float: right;">Level 19</span></h2>\n<p>Your skill with light armor improves, increasing your ability to dodge blows. Your proficiency ranks for light armor and unarmored defense increase to master.</p>\n<h2>Master Detective<span style="float: right;">Level 19</span></h2>\n<p>As a master detective, you can solve any case and find all the clues available. If you\'re pursuing the subject of a lead and you enter a new location that includes another clue toward solving the mystery, the GM informs you of the existence of the clue and its type: an object, person, spell effect, or the like. When you find the clue, the GM informs you that you\'ve done so. If there is more than one clue in the location, the GM chooses one to inform you about. When you find any of the clues in that location, the GM informs you that you\'ve done so, even if it wasn\'t the clue they\'d chosen or there are other clues you haven\'t found. Your proficiency rank for your investigator class DC increases to master.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "0abc3": {
          img: "systems/pf2e/icons/features/classes/deductive-improvisation.webp",
          level: 11,
          name: "Deductive Improvisation",
          uuid: "Compendium.pf2e.classfeatures.malYpr0CYL4fDGhr",
        },
        "3ss71": {
          img: "systems/pf2e/icons/features/classes/evasion.webp",
          level: 15,
          name: "Evasion",
          uuid: "Compendium.pf2e.classfeatures.MV6XIuAgN9uSA0Da",
        },
        "71q10": {
          img: "systems/pf2e/icons/features/classes/incredible-sense.webp",
          level: 13,
          name: "Incredible Senses",
          uuid: "Compendium.pf2e.classfeatures.nLwPMPLRne1HnL00",
        },
        fofuw: {
          img: "systems/pf2e/icons/features/classes/on-the-case.webp",
          level: 1,
          name: "On the Case",
          uuid: "Compendium.pf2e.classfeatures.6FasgIXUJ1X8ekRn",
        },
        gvvwp: {
          img: "systems/pf2e/icons/features/classes/weapon-mastery.webp",
          level: 13,
          name: "Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.i6563IU7x4L9oRgC",
        },
        j15np: {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 5,
          name: "Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.9XLUh9iMepZesdmc",
        },
        lqbki: {
          img: "systems/pf2e/icons/features/classes/keen-recollection.webp",
          level: 3,
          name: "Keen Recollection",
          uuid: "Compendium.pf2e.classfeatures.DZWQspPi4IkfXV2E",
        },
        ly271: {
          img: "systems/pf2e/icons/features/classes/vigilant-senses.webp",
          level: 7,
          name: "Vigilant Senses",
          uuid: "Compendium.pf2e.classfeatures.0npO4rPscGm0dX13",
        },
        mb94u: {
          img: "systems/pf2e/icons/features/classes/light-armor-master.webp",
          level: 19,
          name: "Light Armor Mastery (Level 19)",
          uuid: "Compendium.pf2e.classfeatures.SHpjmM4A3Sw4GgDz",
        },
        o89io: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Methodology",
          uuid: "Compendium.pf2e.classfeatures.uhHg9BXBiHpL5ndS",
        },
        oktpj: {
          img: "systems/pf2e/icons/features/classes/investigator-expertise.webp",
          level: 9,
          name: "Investigator Expertise",
          uuid: "Compendium.pf2e.classfeatures.PFvB79O2VFdiAeSj",
        },
        qfhwe: {
          img: "systems/pf2e/icons/features/classes/great-fortitude.webp",
          level: 9,
          name: "Great Fortitude",
          uuid: "Compendium.pf2e.classfeatures.F57Na5VxfBp56kke",
        },
        qwerc: {
          img: "systems/pf2e/icons/features/classes/master-detective.webp",
          level: 19,
          name: "Master Detective",
          uuid: "Compendium.pf2e.classfeatures.flEx8eY0NinF9XZU",
        },
        rz4r2: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Level 15)",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        sesh2: {
          img: "systems/pf2e/icons/features/classes/greater-resolve.webp",
          level: 17,
          name: "Greater Resolve",
          uuid: "Compendium.pf2e.classfeatures.5LOARurr4qWkfS9K",
        },
        skjy3: {
          img: "systems/pf2e/icons/features/classes/devise-a-stratagem.webp",
          level: 1,
          name: "Devise a Stratagem",
          uuid: "Compendium.pf2e.classfeatures.lgo65ldX7WkXC8Ir",
        },
        u3nsr: {
          img: "systems/pf2e/icons/features/classes/strategic-strike.webp",
          level: 1,
          name: "Strategic Strike",
          uuid: "Compendium.pf2e.classfeatures.2Fe4YZCvAr9Yf6w7",
        },
        vv9fi: {
          img: "systems/pf2e/icons/features/classes/skillful-lessons.webp",
          level: 3,
          name: "Skillful Lessons",
          uuid: "Compendium.pf2e.classfeatures.dmK1wya8GBi9MmCB",
        },
        vxchn: {
          img: "systems/pf2e/icons/features/classes/light-armor-expertise.webp",
          level: 13,
          name: "Light Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.pZYkb12t5DSwtts7",
        },
        xvwjc: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        y1tah: {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 11,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
      },
      keyAbility: {
        value: ["int"],
      },
      perception: 2,
      rules: [],
      savingThrows: {
        fortitude: 1,
        reflex: 2,
        will: 2,
      },
      skillFeatLevels: {
        value: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
      },
      skillIncreaseLevels: {
        value: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
      },
      source: {
        value: "Pathfinder Advanced Player's Guide",
      },
      trainedSkills: {
        additional: 4,
        value: ["soc"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "HQBA9Yx2s8ycvz3C",
    name: "Magus",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>Combining the physicality and technique of a warrior with the ability to cast arcane magic, you seek to perfect the art of fusing spell and strike. While the hefty tome you carry reflects hours conducting arcane research, your enemies need no reminder of your training. They recognize it as you take them down.</em></p>\n<p><strong>Key Ability: STRENGTH OR DEXTERITY</strong></p>\n<p>At 1st level, your class gives you an ability boost to your choice of Strength or Dexterity.</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Magus</h1>\n<h2>During Combat Encounters...</h2>\n<p>You channel spells through your weapon or body to hit enemies with a powerful attack and spell combination. Because your spells per day are limited, you often rely on trusty, carefully chosen cantrips and focus spells. When necessary, you know how to win a fight without magic.</p>\n<h2>During Social Encounters...</h2>\n<p>Your education and breadth of experience make you knowledgeable about many subjects. You can contribute information related to your scholarly pursuits, especially about magic.</p>\n<h2>While Exploring...</h2>\n<p>Your flexibility means you might look for magical auras, remain on guard, or even sneak around. Your ability to fill different niches means that your role often depends on the talents of the other members of your group.</p>\n<h2>In Downtime...</h2>\n<p>You split your time between magical pursuits, like researching spells and crafting items, and martial practice, such as retraining combat abilities to learn new techniques.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Continually refine your spell and item selections to suit your personal style, or prepare battle plans and spell lists for a variety of situations.</li>\n<li>Socialize with scholars of magic and veteran combatants alike, seeking out masters to teach you new techniques.</li>\n<li>Overreach with ambitious plans that pull you in too many directions at once.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Wonder how you can keep on top of two disparate disciplines at the same time.</li>\n<li>Believe you have a broad enough skill set to take care of yourself in most situations.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Arcana</p>\n<p>Trained in a number of additional skills equal to 2 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in medium armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Spells</h2>\n<p>Trained in arcane spell attacks</p>\n<p>Trained in arcane spell DCs</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Magus. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, arcane spellcasting, arcane cascade, conflux spells, hybrid study, spellstrike</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, lightning reflexes, skill increase, weapon expertise</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, general feat, skill increase, studious spells, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, alertness, ancestry feat, expert spellcaster, resolve, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, general feat, medium armor expertise, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, skill increase, weapon mastery</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, general feat, greater weapon specialization, juggernaut, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, master spellcaster, medium armor mastery, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Magus feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>Double spellstrike, general feat, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, Magus feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Arcane Spellcasting</h2>\n<p>You study spells so you can combine them with your attacks or solve problems that strength of arms alone can\'t handle. You can cast arcane spells using the Cast a Spell activity, and you can supply material, somatic, and verbal components when casting spells. Because you\'re a magus, you can draw replacement sigils with the tip of your weapon or your free hand for spells requiring material components, replacing them with somatic components instead of needing a material component pouch. At 1st level, you can prepare one 1st-level spell and five cantrips each morning from the spells in your spellbook (see below). Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare is called your spell slots. As you increase in level as a magus, your number of spell slots and the highest level of spells you can cast from spell slots increase, shown in Table 2-2: Magus Spells per Day. Because you split your focus between physical training and magical scholarship, you have no more than two spell slots of your highest level and, if you can cast 2nd-level spells or higher, two spell slots of 1 level lower than your highest spell level. Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Your spell attack rolls and spell DCs use your Intelligence modifier.</p>\n<h3>Heightening Spells</h3>\n<p>When you get spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell\'s level, heightening it to match the spell slot. Many spells have specific improvements when they\'re heightened to certain levels.</p>\n<h3>Cantrips</h3>\n<p>A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up-this is usually equal to the highest level of spell you can cast as a magus. For example, as a 1st-level magus, your cantrips are 1st-level spells, and as a 5th-level magus, your cantrips are 3rd-level spells.</p>\n<h3>Spellbook</h3>\n<p>Every arcane spell has a written version, usually recorded in a spellbook. You start with a spellbook worth 10 sp or less, which you receive for free and must study to prepare your spells each day. The spellbook contains your choice of eight arcane cantrips and four 1st-level arcane spells. You choose these from the common spells on the arcane spell list or from other arcane spells you gain access to. Your spellbook\'s form and name are up to you. It might be anything from a sturdy book with a secure latch entitled Theses on the Stratagems of Supernatural Warfare to a tattered collection of training pamphlets with your name scrawled on the cover.</p>\n<p>Each time you gain a level, you add two more arcane spells to your spellbook, of any level of spell you can cast. You can also use the Arcana skill to add other spells that you find in your adventures. Though you lose some lower spell slots as you increase in level, you keep the spells in your spellbook and can prepare them in your higher-level slots as normal.</p>\n<p>If you have a spellbook from multiple sources (such as being a magus with the Wizard Dedication feat), you can use the same spellbook for all your spells.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>-</td>\n<td>-*</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>-</td>\n<td>-*</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-*</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* The studious spells class feature gives you extra slots of this level for specific spells.</td>\n</tr>\n</tbody>\n</table>\n<h2>Spellstrike</h2>\n<p>You\'ve learned the fundamental magus technique that lets you combine magical and physical attacks together. You gain the Spellstrike activity.</p>\n<h3>Spellstrike Specifics</h3>\n<p>Though the base Spellstrike rules cover most spells, various modifications apply to more complicated spells when loaded into your fist, blade, or other attack.</p>\n<p><strong>One Target</strong> The spell targets only the target of your Strike, even if it normally allows more targets. Some feats let you affect more creatures.</p>\n<p><strong>Reach</strong> The coupled spell affects the target using the reach of the weapon or unarmed attack you make your Spellstrike with. For instance, shocking grasp would affect a creature beyond the reach of your hand if you used a weapon with reach, and ray of frost would affect only a creature in your weapon\'s reach, even though the spell\'s range is longer.</p>\n<p><strong>Ancillary Effects</strong> Your spell still has any non-targeted effects that might affect creatures other than the target, as well as any ongoing effects starting from the moment you hit with the Strike. For example, acid splash would still deal its splash damage to creatures other than the target and tanglefoot\'s circumstance penalty would last for its normal duration. The spell takes effect after the Strike deals damage; if the Strike has other special effects, the GM determines whether they happen before or after the spell.</p>\n<p><strong>Multiple Defenses</strong> Any additional rolls after the initial spell attack still happen normally, such as the Fortitude save attempted by the target of a disintegrate spell. Similarly, a spell that allows you to attack with it again on subsequent rounds would only combine a Strike with its initial attack roll, not with any later ones.</p>\n<p><strong>Invalid or Immune Target</strong> If the target you hit wouldn\'t be a valid target for the spell, the spell is still expended but doesn\'t affect the target. If the target is immune to your attack but not the spell, it can still be affected by the spell.</p>\n<p><strong>Variable Actions</strong> Some spells have different effects based on the number of actions you spend to cast them. You choose whether to use the effects of the 1- or 2-action version of the spell when you use Spellstrike. A spell has to take exactly 1 or 2 actions; you can\'t use Spellstrike with a spell that takes a free action, reaction, or 3 or more actions.</p>\n<p><strong>Metamagic</strong> You typically can\'t use metamagic with Spellstrike because metamagic requires the next action you take to be Cast a Spell, and Spellstrike is a combined activity that doesn\'t qualify.</p>\n<h2>Arcane Cascade</h2>\n<p>After you wield magic, you can enter a special stance to make your attacks more effective.</p>\n<h2>Hybrid Study</h2>\n<p>Your extensive physical training and carefully chosen magic combine to form a unique and dangerous fighting style that\'s more than the sum of its parts. You choose one field of hybrid study to represent your particular combination of skills. Your hybrid study gives you a special ability, usually tied to Spellstrike or Arcane Cascade, and it determines your initial conflux spell. The hybrid studies presented in this book are as follows.</p>\n<h3>Inexorable Iron</h3>\n<p>Once you begin along a path, nothing can stop you from reaching its end. You transform the mass of a greataxe, greatsword, or polearm into an unstoppable force to augment your own striking power or keep you standing on the battlefield. When you enter Arcane Cascade stance and at the start of each of your turns while you\'re in that stance, if you\'re wielding a melee weapon in two hands, you gain temporary Hit Points equal to half your level (minimum 1 temporary HP).</p>\n<p><strong>Conflux Spell</strong> thunderous strike</p>\n<h3>Laughing Shadow</h3>\n<p>Magic is freeing, a means to your ends, and you can use it to go where you want, do as you please, and avoid the consequences. You are a laughing shadow of spell and blade, always one step ahead of your foes, always with a trick up your sleeve.</p>\n<p>While in Arcane Cascade stance, you gain a +5-foot status bonus to your Speeds, or a +10-foot bonus if you\'re unarmored. If you have a free hand while in the stance and are attacking a @UUID[Compendium.pf2e.conditionitems.Flat-Footed]{Flat-Footed} creature, you increase the extra damage to 3, to 5 if you have weapon specialization, or to 7 if you have greater weapon specialization. You must have your other hand completely free; the extra damage doesn\'t apply if you have a free-hand weapon or other item in that hand, even if you would normally be able to use the hand for other things.</p>\n<p><strong>Conflux Spell</strong> dimensional assault</p>\n<h3>Sparkling Targe</h3>\n<p>You\'ve studied the applications of magic, training yourself to perform not just offensive maneuvers but defensive tactics as well. When magic flows through you, your shield can block impossible things, even a dragon\'s breath or a magic missile.</p>\n<p>You gain the Shield Block general feat.</p>\n<p>When you\'re in Arcane Cascade stance with your shield raised, your circumstance bonus to AC from your shield also applies to your saves against spells and other magical effects. In addition, damage you take as a result of a spell or magical effect while you\'re in Arcane Cascade can trigger your Shield Block reaction, even if the damage isn\'t physical. When blocking damage in this way, increase your shield\'s Hardness by an amount equal to the extra damage from Arcane Cascade (typically 1, but 2 if you have weapon specialization, or 3 if you have greater weapon specialization). These benefits apply whether you\'re using an actual shield, the shield spell, or something else that works like a shield (such as a raised tome if you have the Raise a Tome feat).</p>\n<p><strong>Conflux Spell</strong> shielding strike</p>\n<h3>Starlit Span</h3>\n<p>With magic, the sky\'s the limit, and you can\'t be bound by the confines of physical proximity. Your power reaches as far as your senses can perceive, transcending the space between you and your target even with spells that normally require direct physical contact.</p>\n<p>When you use Spellstrike, you can make a ranged weapon or ranged unarmed Strike, as long as the target is within the first range increment of your ranged weapon or ranged unarmed attack. You can deliver the spell even if its range is shorter than the range increment of your ranged attack.</p>\n<p><strong>Conflux Spell</strong> shooting star</p>\n<h3>Twisting Tree</h3>\n<p>The staff is perhaps one of the simplest of weapons, but this simplicity belies its elegance and versatility. To you, a staff is casting implement and martial weapon alike-the foundation of a fighting style.</p>\n<p>While you wield a staff in one hand, the staff adjusts in shape and weight, gaining the agile trait and increasing its damage die size to 1d6. While you wield a staff in both hands, it lengthens, twists, and reshapes, gaining the parry, reach, and trip traits. While you\'re in Arcane Cascade stance, you can Interact or Release to change your grip on the weapon as a free action when you Strike with your staff, including Strikes made in a Spellstrike. This happens before you roll your attack roll. You can also Interact to change your grip on the staff as a free action triggered at the end of your turn.</p>\n<p><strong>Conflux Spell</strong> spinning staff</p>\n<h2>Conflux Spells</h2>\n<p>You learn a conflux spell from your hybrid study, and you can cast additional conflux spells by selecting certain feats. Conflux spells are magus-specific spells created for combat and are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to both study your spellbook and perform a physical regimen.</p>\n<p>Focus spells are automatically heightened to half your level rounded up. Focus spells don\'t require spell slots, nor can you cast them using spell slots. Taking feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 points.</p>\n<h2>Magus Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every even-numbered level thereafter, you gain a magus class feat.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, boost four different ability scores. You can use these boosts to increase ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Lightning Reflexes<span style="float: right;">Level 5</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Weapon Expertise<span style="float: right;">Level 5</span></h2>\n<p>You\'ve dedicated yourself to learning the intricacies of your weapons. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to expert.</p>\n<h2>Studious Spells<span style="float: right;">Level 7</span></h2>\n<p>Your hybrid study grants you additional spells that can enhance your power in combat. You gain two special 2nd-level studious spell slots, which can be used to prepare spider climb, true strike, water breathing, and an additional spell depending on your hybrid study. You add any spells from this class feature to your spellbook. At 11th level, the extra slots increase to 3rd level and you add haste and an additional spell depending on your hybrid study. At 13th level, the extra slots increase to 4th level and you add fly and an additional spell depending on your hybrid study.</p>\n<p><strong>Laughing Shadow</strong> 7th: mirror image; 11th: shift blame; 13th: dimension door</p>\n<p><strong>Sparkling Targe</strong> 7th: resist energy; 11th: warding aggression; 13th: stoneskin</p>\n<p><strong>Starlit Span</strong> 7th: darkvision; 11th: wall of wind; 13th: freedom of movement</p>\n<p><strong>Inexorable Iron</strong> 7th: enlarge; 11th: earthbind; 13th: dimensional anchor</p>\n<p><strong>Twisting Tree</strong> 7th: magic mouth; 11th: slow; 13th: blink</p>\n<h2>Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You can inflict greater injuries with your favored weapons. You deal 2 additional damage with weapons and unarmed attacks in which you\'re an expert. This damage increases to 3 if you\'re a master, and 4 if you\'re legendary.</p>\n<h2>Alertness<span style="float: right;">Level 9</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Expert Spellcaster<span style="float: right;">Level 9</span></h2>\n<p>Your fundamental understanding of magic improves, making your spells harder to resist. Your proficiency ranks for arcane spell attack rolls and spell DCs increase to expert.</p>\n<h2>Resolve<span style="float: right;">Level 9</span></h2>\n<p>You\'ve steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2>Medium Armor Expertise<span style="float: right;">Level 11</span></h2>\n<p>You\'ve learned to defend yourself better against incoming attacks. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to expert.</p>\n<h2>Weapon Mastery<span style="float: right;">Level 13</span></h2>\n<p>You fully understand your weapons. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to master.</p>\n<h2>Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2>Juggernaut<span style="float: right;">Level 15</span></h2>\n<p>Your body is accustomed to physical hardship and resistant to a wide range of ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Master Spellcaster<span style="float: right;">Level 17</span></h2>\n<p>You fortify your spells with masterful prowess. Your proficiency ranks for arcane spell attack rolls and spell DCs increase to master.</p>\n<h2>Medium Armor Mastery<span style="float: right;">Level 17</span></h2>\n<p>Your skill with light and medium armor improves, increasing your ability to avoid blows. Your proficiency ranks for light and medium armor, as well as for unarmed defense, increase to master.</p>\n<h2>Double Spellstrike<span style="float: right;">Level 19</span></h2>\n<p>You can extend the magic of spells you store with Spellstrike. After you make a Spellstrike with a spell cast from a spell slot, you retain an echo of the spell, stored in your body. The next time you Spellstrike, you can cast the same spell again without expending a spell slot.</p>\n<p>If you choose to cast a different spell with Spellstrike, or you go 1 minute without using the stored spell, the stored spell dissipates harmlessly.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "31b86": {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 5,
          name: "Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.9XLUh9iMepZesdmc",
        },
        "5q48r": {
          img: "systems/pf2e/icons/features/classes/archwizards-spellcraft.webp",
          level: 1,
          name: "Arcane Spellcasting (Magus)",
          uuid: "Compendium.pf2e.classfeatures.wXaz41gwqNtTn6tf",
        },
        "8jtpc": {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 5,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        bq0rq: {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 1,
          name: "Conflux Spells",
          uuid: "Compendium.pf2e.classfeatures.FkbFgmoVz5lHhSMo",
        },
        e0xpi: {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 9,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        enge3: {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 17,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
        jbg78: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Hybrid Study",
          uuid: "Compendium.pf2e.classfeatures.FTeIs1Z1Qeli4BIF",
        },
        jg9zn: {
          img: "systems/pf2e/icons/features/classes/medium-armor-expertise.webp",
          level: 11,
          name: "Medium Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.FCEp9jjxxgRJDJV3",
        },
        k9o6o: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        lsnm7: {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 1,
          name: "Arcane Cascade",
          uuid: "Compendium.pf2e.classfeatures.09iL38CZZEa0q0Mt",
        },
        nkff5: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Level 15)",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        p6ina: {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 17,
          name: "Medium Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.cGMSYAErbUG5E8X2",
        },
        se5i8: {
          img: "systems/pf2e/icons/features/classes/weapon-mastery.webp",
          level: 13,
          name: "Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.i6563IU7x4L9oRgC",
        },
        tgkm3: {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 19,
          name: "Double Spellstrike",
          uuid: "Compendium.pf2e.classfeatures.VmPIJomEdmgGrCMS",
        },
        tkzi2: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 9,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        uoxoe: {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 9,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        vcf45: {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 1,
          name: "Spellstrike",
          uuid: "Compendium.pf2e.classfeatures.KVj5ofUwu3VJSrVw",
        },
        x3em9: {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 15,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        zn731: {
          img: "systems/pf2e/icons/default-icons/feat.svg",
          level: 7,
          name: "Studious Spells",
          uuid: "Compendium.pf2e.classfeatures.6HCI2iHyBZAr7a4P",
        },
      },
      keyAbility: {
        value: ["dex", "str"],
      },
      perception: 1,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.proficiencies.traditions.arcane.rank",
          value: {
            brackets: [
              {
                end: 8,
                start: 1,
                value: 1,
              },
              {
                end: 16,
                start: 9,
                value: 2,
              },
              {
                start: 17,
                value: 3,
              },
            ],
            field: "actor|system.details.level.value",
          },
        },
      ],
      savingThrows: {
        fortitude: 2,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Secrets of Magic",
      },
      trainedSkills: {
        additional: 2,
        custom: "",
        value: ["arc"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "YPxpk9JbMnKjbNLc",
    name: "Monk",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 0,
        medium: 0,
        unarmored: 2,
      },
      description: {
        value:
          '<p><em>The strength of your fist flows from your mind and spirit. You seek perfection-honing your body into a flawless instrument and your mind into an orderly bastion of wisdom. You\'re a fierce combatant renowned for martial arts skills and combat stances that grant you unique fighting moves. While the challenge of mastering many fighting styles drives you to great heights, you also enjoy meditating on philosophical questions and discovering new ways to obtain peace and enlightenment.</em></p>\n<p><strong>Key Ability: STRENGTH OR DEXTERITY</strong></p>\n<p>At 1st level, your class gives you an ability boost to your choice of Strength or Dexterity.</p>\n<p><strong>Hit Points: 10 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Monk</h1>\n<h2>During Combat Encounters...</h2>\n<p>You speed into the fray, dodging or leaping past obstacles with acrobatic maneuvers. You strike opponents in a rapid flurry of attacks, using your bare fists or wielding specialized weapons that you mastered during your monastic training. Stances let you change up your combat style for different situations, and ki abilities allow you to perform mystic feats like healing yourself and soaring through the air.</p>\n<h2>During Social Encounters...</h2>\n<p>Your perceptiveness lets you see through falsehoods, and your philosophical training provides insight into any situation.</p>\n<h2>While Exploring...</h2>\n<p>You climb up walls, dodge traps, overcome obstacles, and leap over pits. You usually stay toward the outside of the group to protect more vulnerable members, and you\'re well suited to looking for danger or moving stealthily.</p>\n<h2>In Downtime...</h2>\n<p>You diligently exercise, eat healthy foods, meditate, and study various philosophies. You might also take up a craft that you strive to perfect.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Maintain a regimen of physical training and meditation.</li>\n<li>Face adversity with a calm and measured approach, never panicking or succumbing to despair.</li>\n<li>Look to the future for ways you can improve, while remaining at peace with your present self.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Marvel at your feats of physical prowess.</li>\n<li>Think you\'re more than a bit uptight, given your vows and tenets.</li>\n<li>Come to you for philosophical advice.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in a number of skills equal to 4 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Untrained in all armor</p>\n<p>Expert in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in monk class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Monk. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, flurry of blows, monk feat, powerful fist</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Monk feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>General feat, incredible movement +10 feet, mystic strikes, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Monk feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, alertness, ancestry feat, expert strikes, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Monk feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>General feat, incredible movement +15 feet, path to perfection, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Monk feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, metal strikes, monk expertise, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, monk feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>General feat, incredible movement +20 feet, second path to perfection, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Monk feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, graceful mastery, master strikes, skill increase</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Monk feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater weapon specialization, incredible movement +25 feet, skill increase, third path to perfection</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Monk feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Adamantine strikes, ancestry feat, graceful legend, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Monk feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, incredible movement +30 feet, perfected form, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, monk feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Flurry of Blows</h2>\n<p>You can attack rapidly with fists, feet, elbows, knees, and other unarmed attacks. You gain the Flurry of Blows action.</p>\n<p>@UUID[Compendium.pf2e.actionspf2e.Flurry of Blows]{Flurry of Blows} <span class="pf2-icon">A</span></p>\n<hr />\n<p>Make two unarmed Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to the Strikes normally. As it has the flourish trait, you can use Flurry of Blows only once per turn.</p>\n<h2>Ki Spells</h2>\n<p>By tapping into a supernatural inner reserve called ki, you can create magical effects. Certain feats grant you special spells called ki spells, which are a type of focus spell. It costs 1 Focus Point to cast a focus spell. When you gain your first ki spell, you also gain a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you regain 1 Focus Point by spending 10 minutes using the @UUID[Compendium.pf2e.actionspf2e.Refocus]{Refocus} activity to meditate in order to reach inner peace.</p>\n<p>Focus spells are automatically heightened to half your level rounded up. Taking feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 points.</p>\n<p>When you first gain a ki spell, decide whether your ki spells are divine or occult spells. You are trained in spell attack rolls and spell DCs of that tradition, and your key spellcasting ability is Wisdom.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies representing your basic training, which are noted at the start of this class.</p>\n<h2>Monk Feats</h2>\n<p>At 1st level and every even-numbered level thereafter, you gain a monk class feat.</p>\n<h2>Powerful Fist</h2>\n<p>You know how to wield your fists as deadly weapons. The damage die for your fist increases to 1d6 instead of 1d4. Most people take a -2 circumstance penalty when making a lethal attack with nonlethal unarmed attacks, because they find it hard to use their fists with deadly force. You don\'t take this penalty when making a lethal attack with your fist or any other unarmed attacks.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Incredible Movement<span style="float: right;">Level 3</span></h2>\n<p>You move like the wind. You gain a +10-foot status bonus to your Speed whenever you\'re not wearing armor. The bonus increases by 5 feet for every 4 levels you have beyond 3rd.</p>\n<h2>Mystic Strikes<span style="float: right;">Level 3</span></h2>\n<p>Focusing your will into your physical attacks imbues them with mystical energy. Your unarmed attacks become magical, allowing them to get past resistances to non-magical attacks. However, you still need an item such as @UUID[Compendium.pf2e.equipment-srd.Handwraps of Mighty Blows]{Handwraps of Mighty Blows (+1)} to gain an item bonus to attack rolls or increase your attacks\' weapon damage dice.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase to either become trained in one skill you\'re untrained in, or become an expert in one skill in which you\'re already trained.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you\'re already an expert, and at 15th level, you can use them to become legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Alertness<span style="float: right;">Level 5</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Expert Strikes<span style="float: right;">Level 5</span></h2>\n<p>You\'ve practiced martial arts and have now surpassed your former skill. Your proficiency ranks for unarmed attacks and simple weapons increase to expert.</p>\n<h2>Path to Perfection<span style="float: right;">Level 7</span></h2>\n<p>You have progressed along your own path to enlightenment. Choose your Fortitude, Reflex, or Will saving throw. Your proficiency rank for the chosen saving throw increases to master. When you roll a success on the chosen saving throw, you get a critical success instead.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and 4 if you\'re legendary.</p>\n<h2>Metal Strikes<span style="float: right;">Level 9</span></h2>\n<p>You can adjust your body to make unarmed attacks infused with the mystic energy of rare metals. Your unarmed attacks are treated as cold iron and silver. This allows you to deal more damage to a variety of supernatural creatures, such as demons, devils, and fey.</p>\n<h2>Monk Expertise<span style="float: right;">Level 9</span></h2>\n<p>Your proficiency rank for your monk class DC increases to expert. If you have ki spells, your proficiency rank for spell attacks and spell DCs with the tradition of magic you use for your ki spells increases to expert.</p>\n<h2>Second Path to Perfection<span style="float: right;">Level 11</span></h2>\n<p>You\'ve learned to find perfection in every success. Choose a different saving throw than the one you chose for your path to perfection. Your proficiency rank for the chosen saving throw increases to master. If you roll a success with the chosen saving throw, you instead critically succeed.</p>\n<h2>Graceful Mastery<span style="float: right;">Level 13</span></h2>\n<p>You move with perpetual grace in battle, eluding and turning aside blows. Your proficiency rank for unarmored defense increases to master.</p>\n<h2>Master Strikes<span style="float: right;">Level 13</span></h2>\n<p>You have honed your skill in using your body as a weapon. Your proficiency ranks for unarmed attacks and simple weapons increase to master.</p>\n<h2>Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2>Third Path to Perfection<span style="float: right;">Level 15</span></h2>\n<p>You have made great progress in your personal studies of enlightenment. Choose one of the saving throws you selected for path to perfection or second path to perfection. Your proficiency rank for the chosen type of save increases to legendary. When you roll a critical failure on the chosen type of save, you get a failure instead. When you roll a failure on the chosen type of save against an effect that deals damage, you take half damage.</p>\n<h2>Adamantine Strikes<span style="float: right;">Level 17</span></h2>\n<p>When you focus your will into your limbs, your blows are as unyielding as the hardest of metals. Your unarmed attacks are treated as adamantine.</p>\n<h2>Graceful Legend<span style="float: right;">Level 17</span></h2>\n<p>Your sublime movement grants you unparalleled protection and offense. Your proficiency rank for unarmored defense increases to legendary, and your proficiency rank for your monk class DC increases to master. If you have ki spells, your proficiency rank for spell attack rolls and spell DCs with the tradition of magic you use for your ki spells increases to master.</p>\n<h2>Perfected Form<span style="float: right;">Level 19</span></h2>\n<p>You have purged incompetence from your techniques. On your first Strike of your turn, if you roll lower than 10, you can treat the attack roll as a 10. This is a fortune effect.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 10,
      items: {
        "1fw9s": {
          img: "systems/pf2e/icons/features/classes/mystic-strikes.webp",
          level: 3,
          name: "Mystic Strikes",
          uuid: "Compendium.pf2e.classfeatures.D2AE8RfMlZ3D1FuV",
        },
        "2yqet": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "3ohvk": {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 11,
          name: "Second Path to Perfection",
          uuid: "Compendium.pf2e.classfeatures.y6qnbUc8y0815QNE",
        },
        "4ru9g": {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Level 15)",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        "8tl8t": {
          img: "systems/pf2e/icons/features/classes/incredible-movement.webp",
          level: 3,
          name: "Incredible Movement",
          uuid: "Compendium.pf2e.classfeatures.Cq6NjvcKZOMySBVj",
        },
        ai4sq: {
          img: "systems/pf2e/icons/features/classes/expert-strikes.webp",
          level: 5,
          name: "Expert Strikes",
          uuid: "Compendium.pf2e.classfeatures.VgZIutWjFl8oZQFi",
        },
        bgd0f: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 5,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        c8q3r: {
          img: "systems/pf2e/icons/features/classes/flurry-of-blows.webp",
          level: 1,
          name: "Flurry of Blows",
          uuid: "Compendium.pf2e.classfeatures.NLHHHiAcdnZ5ohc2",
        },
        dzcvw: {
          img: "systems/pf2e/icons/features/classes/graceful-legend.webp",
          level: 17,
          name: "Graceful Legend",
          uuid: "Compendium.pf2e.classfeatures.JWDfzYub3JfuEtth",
        },
        iqbky: {
          img: "systems/pf2e/icons/features/classes/powerful-fist.webp",
          level: 1,
          name: "Powerful Fist",
          uuid: "Compendium.pf2e.classfeatures.SB8UJ8rZmvbcBweJ",
        },
        k3mxz: {
          img: "systems/pf2e/icons/features/classes/graceful-mastery.webp",
          level: 13,
          name: "Graceful Mastery",
          uuid: "Compendium.pf2e.classfeatures.95LI24ZSx0d4qfKX",
        },
        t4zic: {
          img: "systems/pf2e/icons/features/classes/monk-expertise.webp",
          level: 9,
          name: "Monk Expertise",
          uuid: "Compendium.pf2e.classfeatures.lxImO5D0qWp0gXFB",
        },
        udbeu: {
          img: "systems/pf2e/icons/features/classes/metal-strikes.webp",
          level: 9,
          name: "Metal Strikes",
          uuid: "Compendium.pf2e.classfeatures.CoRfFkisEsHE1e43",
        },
        xcxpa: {
          img: "systems/pf2e/icons/features/classes/adamantine-strikes.webp",
          level: 17,
          name: "Adamantine Strikes",
          uuid: "Compendium.pf2e.classfeatures.5cthRUkRqRtduVvN",
        },
        z0s0v: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 7,
          name: "Path to Perfection",
          uuid: "Compendium.pf2e.classfeatures.1K6m6AVmn3r8XZ9d",
        },
        zeyz5: {
          img: "systems/pf2e/icons/features/classes/perfected-form.webp",
          level: 19,
          name: "Perfected Form",
          uuid: "Compendium.pf2e.classfeatures.KmTfg7Sg5va4yU00",
        },
        zgtbz: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 15,
          name: "Third Path to Perfection",
          uuid: "Compendium.pf2e.classfeatures.haoTkr2U5k7kaAKN",
        },
        zl9gg: {
          img: "systems/pf2e/icons/features/classes/master-strikes.webp",
          level: 13,
          name: "Master Strikes",
          uuid: "Compendium.pf2e.classfeatures.0iidKkzC2yy13lIf",
        },
      },
      keyAbility: {
        value: ["dex", "str"],
      },
      perception: 1,
      rules: [],
      savingThrows: {
        fortitude: 2,
        reflex: 2,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 4,
        value: [],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "pWHx4SXcft9O2udP",
    name: "Oracle",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>Your conduit to divine power eschews the traditional channels of prayer and servitude-you instead glean divine truths that extend beyond any single deity. You understand the great mysteries of the universe embodied in overarching concepts that transcend good and evil or chaos and law, whether because you perceive the common ground across multiple deities or circumvent their power entirely.</em></p>\n<p><em>You explore one of these mysteries and draw upon its power to cast miraculous spells, but that power comes with a terrible price: a curse that grows stronger the more you draw upon it. Your abilities are a double-edged sword, which you might uphold as an instrument of the divine or view as a curse from the gods.</em></p>\n<p><strong>Key Ability: CHARISMA</strong></p>\n<p>At 1st level, your class gives you an ability bonus to Charisma</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Oracle</h1>\n<h2>During Combat Encounters...</h2>\n<p>You draw upon your mystery to empower yourself in combat, balancing miraculous effects with the increasing severity of your curse as conflicting divine demands overtax your physical body. You cast spells to aid your allies and devastate your foes, or depending on your mystery, you might wade into battle yourself.</p>\n<h2>During Social Encounters...</h2>\n<p>You rely upon the insights drawn from your mystery. You might leverage your curse to intimidate people or hide its effects to better blend in.</p>\n<h2>While Exploring...</h2>\n<p>You recenter yourself to bring the terrible metaphysical conflicts causing your curse back under control so you can draw upon your mystery\'s power again later. You remain aware of supernatural forces acting around you, perhaps peeking into the future to gain insights.</p>\n<h2>In Downtime...</h2>\n<p>You might seek to learn more about your mystery and the divine wellsprings that fuel your power. Associating with others interested in the subject of your mystery can make it easier to live with your curse. You could associate with an organized religion or even start your own faithful following devoted to your mystery.</p>\n<h2>You Might...</h2>\n<ul>\n<li>View your oracular powers as a blessing, a curse, or both.</li>\n<li>Push yourself to the limits of what you can withstand to work great acts of magic.</li>\n<li>Rely on magical items to provide a pool of safer and more reliable magic.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Don\'t realize your spellcasting draws upon divine power and instead believe you command stranger-and possibly evil-powers.</li>\n<li>Assume you performed some terrible transgression to become cursed by the gods.</li>\n<li>Admire your determination and the sacrifices you make to perform wondrous acts.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Religion</p>\n<p>Trained in one or more skills determined by your mystery</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Spells</h2>\n<p>Trained in divine spell attack rolls</p>\n<p>Trained in divine spell DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as an Oracle. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, divine spellcasting, spell repertoire, mystery</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, expert spellcaster, general feat, resolve, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, magical fortitude, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, alertness, general feat, major curse, skill increase, weapon expertise</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, light armor expertise, lightning reflexes, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, general feat, master spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, extreme curse, greater resolve, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Oracle feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, legendary spellcaster, oracular clarity, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, oracle feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Divine Spellcasting</h2>\n<p>Your mystery provides you with divine magical power. You can cast spells using the @UUID[Compendium.pf2e.actionspf2e.Cast a Spell]{Cast a Spell} activity, and you can supply material, somatic, and verbal components when casting spells. Your unconventional access to this divine power means you can usually replace material components with somatic components, so you don\'t need to use a material component pouch when casting spells.</p>\n<p>At 1st level, you can cast up to two 1st-level spells per day. You must know spells to cast them, and you learn them via the spell repertoire class feature. The number of spells you can cast each day is called your spell slots. As you increase in level as an oracle, your number of spells per day increases, as does the highest level of spells you can cast, as shown on Table 2-3: Oracle Spells per Day.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key ability is Charisma, your spell attack rolls and spell DCs use your Charisma modifier.</p>\n<h3><strong>Heightening Spells</strong></h3>\n<p>When you get spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. To cast a heightened spell, you must have the heightened version in your repertoire; for example, you can\'t cast a 3rd-level version of a spell that is only in your repertoire at 1st level. Many spells have specific improvements when they are heightened to certain levels. The signature spells class feature lets you heighten certain spells freely.</p>\n<h3><strong>Cantrips</strong></h3>\n<p>A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up-this is usually equal to the highest level of spell you can cast as an oracle. For example, as a 1st-level oracle, your cantrips are 1st-level spells, and as a 5th-level oracle, your cantrips are 3rd-level spells.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* Your oracular class feature gives you a 10th-level spell slot that works differently from other spell slots.</td>\n</tr>\n</tbody>\n</table>\n<h2>Spell Repertoire</h2>\n<p>The collection of spells you can cast is called your spell repertoire. At 1st level, you learn two 1st-level spells of your choice and five cantrips of your choice. You choose these from the common spells from the divine spell list, or from other divine spells to which you have access. You can cast any spell in your spell repertoire by using a spell slot of an appropriate spell level.</p>\n<p>You add to this spell repertoire as you increase in level. Each time you get a spell slot (see Table 2-3), you add a spell of the same level to your spell repertoire. At 2nd level, you select another 1st-level spell; at 3rd level, you select two 2nd-level spells, and so on. When you add spells, you might add a higher-level version of a spell you already have, so you can cast a heightened version of that spell.</p>\n<p>Though you gain them at the same rate, your spell slots and the spells in your spell repertoire are separate. If a feat or other ability adds a spell to your spell repertoire, it wouldn\'t give you another spell slot, and vice versa.</p>\n<p><strong>Swapping Spells in Your Repertoire</strong></p>\n<p>As you gain new spells in your repertoire, you might want to replace some of the spells you previously learned. Each time you gain a level and learn new spells, you can swap out one of your old spells for a different spell of the same level. You can also instead swap a cantrip. You can also swap out spells by retraining during downtime.</p>\n<h2>Mystery</h2>\n<p>An oracle wields divine power, but not from a single divine being. This power could come from a potent concept or ideal, the attention of multiple divine entities whose areas of concern all touch on that subject, or a direct and dangerous conduit to raw divine power. This is the oracle\'s mystery, a source of divine magic not beholden to any deity.</p>\n<p>Choose the mystery that empowers your magic. Your mystery grants you special spells called revelation spells and might later grant you divine domain spells. It dictates the effects of your oracular curse, adds an additional cantrip to your repertoire, and gives you one or more trained skills. Drawing insight and power from the collective divine influences that fuel your magic also provides you with a special benefit.</p>\n<p>The following oracle mysteries are presented in this book.</p>\n<ul>\n<li>@UUID[Compendium.pf2e.classfeatures.Ancestors]{Ancestors}: Voices of past generations teach and haunt you.</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Battle]{Battle}: You embody the virtues upheld by heroes of legend.</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Bones]{Bones}: Death always seems near, and the dead speak to you.</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Cosmos]{Cosmos}: You draw power from the stars and the spaces between.</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Flames]{Flames}: You dance with fire and do your best to remain unscorched by it.</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Life]{Life}: The teeming energies of life flow through you out into the world.</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Lore]{Lore}: You gain access to unparalleled, overwhelming knowledge.</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Tempest]{Tempest}: Wind, waves, and storms rage at your beck and call.</li>\n</ul>\n<p><strong>Revelation Spells</strong></p>\n<p>The powers of your mystery manifest in the form of revelation spells, which are a type of focus spell. Casting a revelation spell costs 1 Focus Point and increases the effects of your oracular curse. You start with a focus pool of 2 Focus Points. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the @UUID[Compendium.pf2e.actionspf2e.Refocus]{Refocus}activity to reconcile the conflicting or unconventional nature of your divine mystery.</p>\n<p>Focus spells are automatically heightened to half your level rounded up. Focus spells don\'t require spell slots, and you can\'t cast them using spell slots. Taking feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points.</p>\n<p>Revelation spells have the cursebound trait, unlike other focus spells. This trait means they increase the severity of your oracular curse (see below) when cast. You can\'t cast a cursebound spell if you don\'t have an oracular curse.</p>\n<p>You learn two revelation spells at 1st level. The first is an initial revelation spell determined by your mystery. The second is an initial domain spell you select from one of the domains associated with your mystery, which you cast as a revelation spell, causing it to gain the cursebound trait.</p>\n<p><strong>Oracular Curse</strong></p>\n<p>Drawing on multiple disparate sources of power inevitably places an incredible stress on your body, manifesting as a supernatural curse. The more revelation spells you cast, the worse the effects of your curse, but these increasingly conflicting energies can also provide you with divine benefits.</p>\n<p>The specific effects of your curse are tied to your mystery, but all curses follow the same progression. A curse continually gives you a mild but constant reminder that you carry otherworldly power. As you cast revelation spells, your curse intensifies, first to a minor effect and then to a moderate effect.</p>\n<p>Your curse progresses to its minor stage the first time you finish casting a revelation spell after your daily preparations. Once your minor curse has manifested, it remains in effect until you rest for 8 hours and again make your daily preparations. If you cast a revelation spell while your minor curse is in effect, you progress to the moderate curse effect immediately after you finish Casting the Spell. The minor effect continues to affect you, though some moderate curse effects might alter the specifics of your minor curse. At higher levels, you can cast more revelation spells, progressing your curse to its major stage and then an extreme stage; these stronger curses are cumulative with the effects of the lower stages and can alter them. When you Refocus while under the effects of your moderate or stronger curse, you reduce your curse\'s severity to minor in addition to regaining a Focus Point.</p>\n<p>Drawing upon your mystery\'s power while your curse is at its worst causes an irreconcilable conflict between you and the sources of your power. Immediately after casting a revelation spell while under the moderate effect of your curse, you are overwhelmed. While overwhelmed, you can\'t Cast or Sustain any revelation spells-you effectively lose access to those spells. You can still Refocus to reduce the effects of your curse and regain a Focus Point, but doing so doesn\'t allow you to cast further revelation spells. These effects last until you rest for 8 hours and make your daily preparations, at which point your curse returns to its basic state. At higher levels, you can grow to withstand your curse\'s major and even extreme effects, enabling you to cast more revelation spells without becoming overwhelmed.</p>\n<p>Your curse has the curse, divine, and necromancy traits. You can\'t mitigate, reduce, or remove the effects of your oracular curse by any means other than Refocusing and resting for 8 hours. For example, if your curse makes creatures @UUID[Compendium.pf2e.conditionitems.Concealed]{Concealed} from you, you can\'t negate that concealed condition through a magic item or spell, such as <em>@UUID[Compendium.pf2e.spells-srd.True Strike]{True Strike}</em> (though you would still benefit from the other effects of that item or spell). Likewise, <em>@UUID[Compendium.pf2e.spells-srd.Remove Curse]{Remove Curse}</em> and similar spells don\'t affect your curse at all.</p>\n<h2>Oracle Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain an oracle class feat.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Signature Spells<span style="float: right;">Level 3</span></h2>\n<p>Experience enables you to cast some spells more flexibly. For each spell level you have access to, choose one spell of that level to be a signature spell. You don\'t need to learn heightened versions of signature spells separately; instead, you can heighten these spells freely. If you\'ve learned a signature spell at a higher level than its minimum, you can also cast all its lower-level versions without learning those separately. If you swap out a signature spell, you can replace it with any spell you could have chosen when you first selected it (i.e., of the same spell level or lower). You can also retrain specifically to change a signature spell to a different spell of that level without swapping any spells; this takes as much time as retraining a spell normally does.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Expert Spellcaster<span style="float: right;">Level 7</span></h2>\n<p>The intricacy of your divine power has grown clearer over time. Your proficiency ranks for divine spell attack rolls and spell DCs increase to expert.</p>\n<h2>Resolve<span style="float: right;">Level 7</span></h2>\n<p>You\'ve steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2>Magical Fortitude<span style="float: right;">Level 9</span></h2>\n<p>Magical power has improved your body\'s resiliency. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2>Alertness<span style="float: right;">Level 11</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Major Curse<span style="float: right;">Level 11</span></h2>\n<p>You\'ve learned to better balance the conflicting powers wreaking havoc on your body. Immediately after completing the casting of a revelation spell while you are affected by your moderate curse, your curse progresses to its major effect, rather than overwhelming you. This effect lasts until you Refocus, which reduces your curse to its minor effect. If you cast a revelation spell while under the effects of your major curse, you are overwhelmed by your curse.</p>\n<p>In addition, increase the number of Focus Points in your focus pool from 2 to 3. If you spend at least 2 Focus Points before you again Refocus, you recover 2 Focus Points when you Refocus instead of 1.</p>\n<h2>Weapon Expertise<span style="float: right;">Level 11</span></h2>\n<p>You\'ve dedicated yourself to learning the intricacies of your weapons. Your proficiency ranks for simple weapons and unarmed attacks increase to expert.</p>\n<h2>Light Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to dodge while wearing light or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.</p>\n<h2>Lightning Reflexes<span style="float: right;">Level 13</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and to 4 if you\'re legendary.</p>\n<h2>Master Spellcaster<span style="float: right;">Level 15</span></h2>\n<p>You truly understand the deep and complex divine power within your mystery. Your proficiency ranks for divine spell attack rolls and spell DCs increase to master.</p>\n<h2>Extreme Curse<span style="float: right;">Level 17</span></h2>\n<p>You have mastered a perilous balance between the conflicting divine powers of your mystery, gaining the power to change your fate, but straining both body and soul. When you cast a revelation spell while affected by your major curse, your curse intensifies to an extreme effect instead of overwhelming you. All mysteries share the same effects for their extreme curse.</p>\n<p>When affected by your extreme curse, you become @UUID[Compendium.pf2e.conditionitems.Doomed]{Doomed 2} (or increase your doomed condition by 2 if you were already doomed). Once every 10 minutes, when you fail an attack roll, skill or Perception check, or saving throw, you can reroll it and use the second result. The reroll has the fortune trait and doesn\'t require you to spend an action, meaning you can use the reroll even if you can\'t act. These effects are in addition to all the effects of your major curse, and they can\'t be removed by any means until you Refocus to reduce your curse to its minor effect.</p>\n<p>If you cast a revelation spell while under the effects of this extreme curse, you are overwhelmed by your curse, and you remain doomed 2 even if you Refocus.</p>\n<p>Additionally, if you spend at least 3 Focus Points before you again Refocus, you recover 3 Focus Points when you Refocus instead of 1.</p>\n<h2>Greater Resolve<span style="float: right;">Level 17</span></h2>\n<p>Your unbelievable training grants you mental resiliency. Your proficiency rank for Will saves increases to legendary. When you roll a success on a Will save, you get a critical success instead. When you roll a critical failure on a Will save, you get a failure instead. When you fail a Will save against a damaging effect, you take half damage.</p>\n<h2>Legendary Spellcaster<span style="float: right;">Level 19</span></h2>\n<p>You can harness divine power at a level few others can match. Your proficiency ranks for divine spell attack rolls and spell DCs increase to legendary.</p>\n<h2>Oracular Clarity<span style="float: right;">Level 19</span></h2>\n<p>You now fully grasp the nature of the divine power behind your mystery, allowing you to work magic akin to miracles. Add two common 10th-level divine spells to your repertoire. You gain a single 10th-level spell slot you can use to cast one of those two spells using oracle spellcasting. You don\'t gain more 10th-level spells as you level up, unlike other spell slots, and you can\'t use 10th-level slots with abilities that give you more spell slots or that let you cast spells without expending spell slots. You can take the @UUID[Compendium.pf2e.feats-srd.Oracular Providence]{Oracular Providence} feat to gain a second slot.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "2lr3d": {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 7,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        "4qdk7": {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Mystery",
          uuid: "Compendium.pf2e.classfeatures.PRJYLksQEwT39bTl",
        },
        "5449e": {
          img: "systems/pf2e/icons/equipment/adventuring-gear/spellbook.webp",
          level: 1,
          name: "Spell Repertoire (Oracle)",
          uuid: "Compendium.pf2e.classfeatures.cFe6vFb3gSDyNeS9",
        },
        "66mj3": {
          img: "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
          level: 3,
          name: "Signature Spells",
          uuid: "Compendium.pf2e.classfeatures.VKRjmXxBFLrJK01c",
        },
        "68tsw": {
          img: "systems/pf2e/icons/features/classes/legendary-spellcaster.webp",
          level: 19,
          name: "Legendary Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.Hfaa7TuLn3nE8lr3",
        },
        "6ygi2": {
          img: "systems/pf2e/icons/features/classes/oracular-clarity.webp",
          level: 19,
          name: "Oracular Clarity",
          uuid: "Compendium.pf2e.classfeatures.571c1aGnvNVwfF6b",
        },
        "7gbv8": {
          img: "systems/pf2e/icons/features/classes/oracle-curse.webp",
          level: 1,
          name: "Oracular Curse",
          uuid: "Compendium.pf2e.classfeatures.ibX2EhKkyUtbOHLj",
        },
        "7lbdz": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "9dhwz": {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 11,
          name: "Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.9XLUh9iMepZesdmc",
        },
        am0mt: {
          img: "systems/pf2e/icons/features/classes/revelation-spells.webp",
          level: 1,
          name: "Revelation Spells",
          uuid: "Compendium.pf2e.classfeatures.NXUOtO9NytHQurlg",
        },
        d7d3y: {
          img: "systems/pf2e/icons/features/classes/light-armor-expertise.webp",
          level: 13,
          name: "Light Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.pZYkb12t5DSwtts7",
        },
        dmnaw: {
          img: "systems/pf2e/icons/features/classes/major-curse.webp",
          level: 11,
          name: "Major Curse",
          uuid: "Compendium.pf2e.classfeatures.rrzItB68Er0DzKx7",
        },
        dvsdr: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 11,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        hi0gi: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 13,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        jtk8p: {
          img: "systems/pf2e/icons/features/classes/extreme-curse.webp",
          level: 17,
          name: "Extreme Curse",
          uuid: "Compendium.pf2e.classfeatures.F4brPlp1tHGUqyuI",
        },
        k3rbd: {
          img: "systems/pf2e/icons/features/classes/magical-fortitude.webp",
          level: 9,
          name: "Magical Fortitude",
          uuid: "Compendium.pf2e.classfeatures.70jqXP2eS4tRZ0Ok",
        },
        n1uo5: {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 7,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        oiyzz: {
          img: "systems/pf2e/icons/features/classes/divine-spellcasting.webp",
          level: 1,
          name: "Divine Spellcasting (Oracle)",
          uuid: "Compendium.pf2e.classfeatures.7AVspOB6ITNzGFZi",
        },
        rlujn: {
          img: "systems/pf2e/icons/features/classes/greater-resolve.webp",
          level: 17,
          name: "Greater Resolve",
          uuid: "Compendium.pf2e.classfeatures.5LOARurr4qWkfS9K",
        },
        wpam7: {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 15,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
      },
      keyAbility: {
        value: ["cha"],
      },
      perception: 1,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.proficiencies.traditions.divine.rank",
          value: {
            brackets: [
              {
                end: 6,
                start: 1,
                value: 1,
              },
              {
                end: 14,
                start: 7,
                value: 2,
              },
              {
                end: 18,
                start: 15,
                value: 3,
              },
              {
                start: 19,
                value: 4,
              },
            ],
            field: "actor|system.details.level.value",
          },
        },
      ],
      savingThrows: {
        fortitude: 1,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Advanced Player's Guide",
      },
      trainedSkills: {
        additional: 3,
        value: ["rel"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "Inq4gH3P5PYjSQbD",
    name: "Psychic",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 0,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>The mind can perceive truths hidden to fine-tuned instruments, house more secrets than any tome, and move objects and hearts more deftly than any lever. By delving into both the conscious and subconscious aspects of your inner self, you have awoken to the might of psychic magic, allowing you to cast spells not through incantations or gestures but by the power of your will alone. While the thin line between your mind and reality means that a single errant thought could have unintended consequences for yourself and your companions, you know that anything is possible, if you can imagine it.</em></p>\n<p><strong>Key Ability: INTELLIGENCE OR CHARISMA</strong></p>\n<p>At 1st level, your class gives you an ability boost to Intelligence or Charisma, as determined by your choice of subconscious mind.</p>\n<p><strong>Hit Points: 6 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Psychic</h1>\n<h2>During Combat Encounters...</h2>\n<p>You rely on your collection of psychic cantrips as a mainstay, choosing where and when to amplify them for maximum effect. You weave your more conventional spells into the fray where more complex magic is needed, unleashing your mind\'s full potential in a blaze of power when the time is right.</p>\n<h2>During Social Encounters...</h2>\n<p>You navigate situations guided by the source of your subconscious power. If your power springs from your personality, you might maneuver with empathy and sociability; if it\'s more cerebral, you might provide a steady logical front.</p>\n<h2>While Exploring...</h2>\n<p>You keep your mind\'s eye open for the many paranormal threats that those who are less sensitive might not detect. Typically, you either scan for magic or investigate for psychic impressions, veiled thoughts, and wandering spirits.</p>\n<h2>In Downtime...</h2>\n<p>You strive to learn more about the depths of the mind, seeking out new spells and phenomena to uncover, knowing that as you gain a deeper understanding of yourself, you can access more of the power within. You test the limits of your adaptability by retraining to fit your evolving understanding of your potential.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Show a preference for learning, meditation, dreams, or other intangible manifestations of thought over the immediacy of the physical world.</li>\n<li>Learn new things about yourself, just when you thought you knew it all.</li>\n<li>Think of your psychic magic as so much a part of you that you use it even when normal methods suffice, perhaps preferring to communicate via mental messages or levitating an object to a companion at the opposite end of a table.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Are awed by your mental abilities, especially when your psyche is unleashed.</li>\n<li>Have difficulty understanding that the magic you perform with your mind comes from the same source as more conventional spellcasting.</li>\n<li>Wonder if you might be a monster in disguise, possessed by spirits, chosen by the gods, or have some other unusual reason for your strange powers.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Occultism</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Untrained in all armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Spells</h2>\n<p>Trained in occult spell attack rolls</p>\n<p>Trained in occult spell DCs</p>\n<h1>Class Features</h1>\n<p>You gain these abilities as a psychic. Abilities gained at higher levels list the level at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, psychic spellcasting, spell repertoire, psi cantrips and psi amps, Unleash Psyche, subconscious mind, conscious mind</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, signature spells, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, clarity of focus, precognitive reflexes, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, expert spellcaster, general feat, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, great fortitude, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, extrasensory perception, general feat, skill increase, walls of will, weapon expertise</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, personal barrier, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, general feat, master spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, fortress of will, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Psychic feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, infinite mind, legendary spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, psychic feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Psychic Spellcasting</h2>\n<p>You access the vast well of power that resides within your own mind, calling forth psychic magic with nothing but thought and will. You can cast occult spells using the Cast a Spell activity. You alter some of the standard spell components when casting spells you know from your psychic spellcasting. Instead of speaking, you substitute any verbal components with a special mental component determined by your subconscious mind class feature. This represents how you exert your mind toward your intended effect. Any of these components impart the concentrate trait to the spell you\'re casting. You also substitute any material components with somatic components, though these tend to be simple movements of the hand or head compared to those used by other spellcasters. Your spells still have clear and noticeable visual and auditory manifestations, as normal for a spellcaster.</p>\n<p>Each day, you can cast one 1st-level spell. You must know spells to cast them, and you learn them via the spell repertoire class feature. The number of spells you can cast each day is called your spell slots.</p>\n<p>As you increase in level as a psychic, your number of spells per day increases, as does the highest level of spells you can cast, as shown on Table 2: Psychic Spells per Day.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key ability is determined by your subconscious mind, your spell attack rolls and spell DCs use the modifier for the ability stated in your subconscious mind.</p>\n<h3><strong>Heightening Spells</strong></h3>\n<p>When you get spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell\'s level to match the spell slot. You must have a spell in your spell repertoire at the level you want to cast to heighten it to that level. Many spells have specific improvements when heightened to certain levels. The signature spells class feature lets you heighten certain spells freely.</p>\n<h3><strong>Cantrips</strong></h3>\n<p>Some of your spells are cantrips. A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is automatically heightened to half your level rounded up-this is usually equal to the highest level of psychic spell slot you have. For example, as a 1st-level psychic, your cantrips are 1st-level spells, and as a 5th-level psychic, your cantrips are 3rd-level spells.</p>\n<p>As a psychic, you get the ability to improve some of your cantrips with special benefits and psi amps. Over the course of your career, your choice of conscious mind class feature gives you extra cantrips, benefits and psi amps for cantrips, and a collection of unique psi cantrips.</p>\n<h2>Spell Repertoire</h2>\n<p>The collection of spells you can cast is called your spell repertoire. At 1st level, you learn one 1st-level occult spell of your choice and three occult cantrips of your choice. You choose these from the common spells from the occult list or from other occult spells to which you have access. You can cast any spell in your spell repertoire by using a spell slot of an appropriate spell level. Your choice of conscious mind also grants you additional spells in your repertoire, starting with an additional 1st-level spell and two cantrips listed in your conscious mind, which you cast as psi cantrips (see below).</p>\n<p>You add to this spell repertoire as you increase in level. Each time you get a spell slot (see Table 2), you add a spell to your spell repertoire of the same level. At 2nd level, you select another 1st-level spell; at 3rd level, you select one 2nd-level spell, and so on. When you add spells, you might add a higher-level version of a spell you already have, so you can cast a heightened version of that spell. Your conscious mind also adds additional spells to your repertoire as you gain spells of higher levels.</p>\n<p>Though you gain them at the same rate, your spell slots and the spells in your spell repertoire are separate. If a feat or other ability adds a spell to your spell repertoire, such as the spells you gain from your conscious mind, it wouldn\'t give you another spell slot, and vice versa.</p>\n<h3><strong>Swapping Spells in your Repertoire</strong></h3>\n<p>As you gain new spells in your repertoire, you might want to replace some of the spells you previously learned. Each time you gain a level and learn new spells, you can swap out one of your old spells for a different spell of the same level. This spell can be a cantrip. You can also swap out spells by retraining during downtime.</p>\n<table class="pf2-table"><caption>Psychic Spells per Day</caption>\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>3*</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>3*</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>3*</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>1???</td>\n</tr>\n<tr>\n<td>20</td>\n<td>3*</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2</td>\n<td>2???</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* Your conscious mind gives you three additional cantrips with amps. One cantrip is unique to your conscious mind.\n<p>??? The infinite mind class feature gives you a 10th-level spell slot that works a bit differently from other spell slots.</p>\n</td>\n</tr>\n</tbody>\n</table>\n<h2>Psi Cantrips and Amps</h2>\n<p>The magic of your mind manifests as psi cantrips, which you can modify by spending Focus Points. Like other cantrips, you can cast psi cantrips as often as you like, and they are automatically heightened to half your level rounded up. Your psi cantrips are in addition to the cantrips you choose from the occult list as part of your psychic spellcasting. Generally, only feats can give you more psi cantrips. Unlike other cantrips, you can\'t swap out psi cantrips gained from psychic feats at a later level, unless you swap out the specific feat via retraining. At 1st level, you learn three psi cantrips determined by your choice of conscious mind; one is a unique psi cantrip and two are common cantrips, typically from the occult spellcasting tradition, that you always cast as psi cantrips. You automatically gain more psi cantrips as you progress in your career as a psychic.</p>\n<p>You start with a focus pool of 2 Focus Points. However, unlike other spellcasters, you don\'t gain focus spells that cost Focus Points to cast. Instead, you use your Focus Points to boost or modify your psi cantrips by applying amps???specialized thoughtforms that alter the expression of your psychic power. Each of your psi cantrips has a special amp heading. Whenever you cast a psi cantrip, you can amp it by spending 1 Focus Point to add the amp effect. You can also gain additional amps through feats, allowing you to substitute a psi cantrip\'s normal amp effect for another one. You choose which amp to use, if you choose to use any, each time you cast a psi cantrip. Unless otherwise noted, you can apply only one amp to a given psi cantrip.</p>\n<p>You refill your focus pool during your daily preparations, and you can regain Focus Points by spending 10 minutes using the Refocus activity to explore your mind, whether via meditation, practicing a craft or activity that gives you the mental space to self-reflect, or talking through your thoughts and feelings with yourself or another. If you\'ve spent Focus Points only to amp psi cantrips or fuel psychic abilities since the last time you Refocused, you regain 2 Focus Points when you Refocus, up to your maximum of 2. If you\'ve spent Focus Points on focus spells or abilities other than those from the psychic class (for instance, to cast a focus spell you gained from an archetype), you regain only 1 Focus Point.</p>\n<h2>Unleash Psyche</h2>\n<p>When one thins the barrier between their inner mind and the outer world, one can unleash true psychic power. However, the mind wasn\'t meant to tap its full strength for long, leading to backlash once your unleashed psyche ends.</p>\n<h3>Link Unleash Psyche Action here</h3>\n<h3>Subconscious Mind</h3>\n<p>A psychic\'s power is born in the depths of their psyche, far from the surface. Your subconscious mind might represent the way your power comes to you naturally, or it may be a framework you use to safely access the infinite potential of your mind. Either way, your subconscious mind fundamentally shapes how you access and wield psychic magic. Choose a subconscious mind from the options starting on page 15, or options from other sources to which you have access. This choice will determine your key ability, special spellcasting components you use, and an action you can take while you have Unleashed your Psyche. The following options are presented in this book.</p>\n<p><strong>Emotional Acceptance (Cha):</strong> Throwing yourself headlong into your emotions is what lets you access your power.</p>\n<p><strong>Gathered Lore (Int):</strong> Tutors taught you specific axioms and lessons to help you harness your mind.</p>\n<p><strong>Precise Discipline (Int):</strong> Meticulously aligning your thoughts brings your mental power into reality.</p>\n<p><strong>Wandering Reverie (Cha):</strong> Your imagination fuels your magic through instinct and free association.</p>\n<h3>Conscious Mind</h3>\n<p>Whatever the subconscious source of a psychic\'s power, all find that a specific external manifestation of their magic comes most easily to them. This conscious outward expression adds several additional spells to your spell repertoire and grants you three psi cantrips. Two of these cantrips are common spells, though you gain an extra benefit with them that other spellcasters don\'t get, and the last is unique to your conscious mind. You also get two more unique psi cantrips at higher levels. Choose a conscious mind from the options starting on page 16, or options from other sources to which you have access.</p>\n<p>The following options are presented in this book.</p>\n<p><strong>The Distant Grasp:</strong> Manipulate physical objects with telekinesis.</p>\n<p><strong>The Infinite Eye:</strong> Observe the world and weaponize your knowledge.</p>\n<p><strong>The Oscillating Wave:</strong> Redistribute thermal energy to create blazing heat and bone-chilling cold.</p>\n<p><strong>The Silent Whisper:</strong> Tap into the thoughts of those around you to soothe or influence.</p>\n<p><strong>The Tangible Dream:</strong> Weave your imagination into creations of force and light.</p>\n<p><strong>The Unbound Step:</strong> Bend and traverse space with teleportation and phasing.</p>\n<h2>Psychic Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every even-numbered level, you gain a psychic class feat.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Signature Spells<span style="float: right;">Level 3</span></h2>\n<p>You\'ve learned to cast some of your spells more flexibly. For each spell level you have access to, choose one spell of that level to be a signature spell. You don\'t need to learn heightened versions of signature spells separately; instead, you can heighten these spells freely. If you\'ve learned a signature spell at a higher level than its minimum, you can also cast all its lower-level versions without learning those separately. If you swap out a signature spell, you can choose a replacement signature spell of the same spell level at which you learned the previous spell. You can also retrain specifically to change a signature spell to a different spell of that level without swapping any spells; this takes as much time as retraining a spell normally does.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Clarity of Focus<span style="float: right;">Level 5</span></h2>\n<p>Your deepening connection to your mind grants you more power to fuel your psi amps. Increase the number of Focus Points in your focus pool by 1. This ability doesn\'t change the number of Focus Points you regain when you Refocus. As normal, this ability can\'t increase the size of your focus pool above 3 points.</p>\n<h2>Precognitive Reflexes<span style="float: right;">Level 5</span></h2>\n<p>Minor precognition ensures you can react to threats slightly before they occur. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Expert Spellcaster<span style="float: right;">Level 7</span></h2>\n<p>Self-reflection has brought you greater knowledge of yourself and, with it, psychic power. Your proficiency ranks for occult spell attack rolls and spell DCs increase to expert.</p>\n<h2>Great Fortitude<span style="float: right;">Level 9</span></h2>\n<p>Your mind holds your body to a subconscious mental image of yourself. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2>Extrasensory Perception<span style="float: right;">Level 11</span></h2>\n<p>Minor applications of clairvoyance let you know when danger is near. Your proficiency rank for Perception increases to expert.</p>\n<h2>Walls of Will<span style="float: right;">Level 11</span></h2>\n<p>Your practiced mind resists external influence. Your proficiency rank for Will saves increases to master. When you succeed at a Will save, you get a critical success instead.</p>\n<h2>Weapon Expertise<span style="float: right;">Level 11</span></h2>\n<p>Training and magic have improved your weapon technique. Your proficiency rank for simple weapons and unarmed attacks increases to expert.</p>\n<h2>Personal Barrier<span style="float: right;">Level 13</span></h2>\n<p>Subtle telekinetic fields dampen and deflect incoming blows. Your proficiency rank in unarmored defense increases to expert.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>As you touch a weapon, you glimpse the hands that made and wielded it, teaching you how to inflict greater injuries. You deal [[/r {2}[additional]]]{2 additional Damage} with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and 4 if you\'re legendary.</p>\n<h2>Master Spellcaster<span style="float: right;">Level 15</span></h2>\n<p>You\'ve gained access to the deepest corners of your own mind. Your proficiency ranks for occult spell attack rolls and spell DCs increase to master.</p>\n<h2>Fortress of Will<span style="float: right;">Level 17</span></h2>\n<p>Your trained mind is as a fortress that none can breach. Your proficiency rank for Will saves increases to legendary. When you critically fail a Will save, you get a failure instead. When you fail a Will save against a damaging effect, you take half damage.</p>\n<h2>Infinite Mind<span style="float: right;">Level 19</span></h2>\n<p>Anything you can imagine is now within the realm of possibility. Add two common 10th-level occult spells to your repertoire; you gain a single 10th-level spell slot you can use to cast one of those two spells using psychic spellcasting. You don\'t gain more 10th-level spells as you level up, unlike other spell slots, and you can\'t use 10th-level slots with abilities that give you more spell slots or that let you cast spells without expending spell slots. You can take the Mind over Matter psychic feat to gain a second slot.</p>\n<h2>Legendary Spellcaster<span style="float: right;">Level 19</span></h2>\n<p>As your training reaches its peak, you understand not just your own mind, but the collective unconscious from which all psychic power stems. Your proficiency ranks for occult spell attack rolls and spell DCs increase to legendary.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 6,
      items: {
        "0x9ff": {
          img: "systems/pf2e/icons/features/classes/personal-barrier.webp",
          level: 13,
          name: "Personal Barrier",
          uuid: "Compendium.pf2e.classfeatures.MtHLCQGD6OW98WC2",
        },
        "2vjmk": {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 7,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        "362nc": {
          img: "systems/pf2e/icons/features/classes/unleash-psyche.webp",
          level: 1,
          name: "Unleash Psyche",
          uuid: "Compendium.pf2e.classfeatures.HwUps0waR29bwlTI",
        },
        "4aeg4": {
          img: "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
          level: 3,
          name: "Signature Spells",
          uuid: "Compendium.pf2e.classfeatures.VKRjmXxBFLrJK01c",
        },
        "5iq7q": {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Conscious Mind",
          uuid: "Compendium.pf2e.classfeatures.0fv6NVMZZ0peGL9e",
        },
        "62vs3": {
          img: "systems/pf2e/icons/features/classes/psychic-spellcasting.webp",
          level: 1,
          name: "Psychic Spellcasting",
          uuid: "Compendium.pf2e.classfeatures.iXwqJyBsjJNrKJae",
        },
        "6eomt": {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 11,
          name: "Psychic Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.kLschzVZFoe3U63C",
        },
        azay0: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Subconscious Mind",
          uuid: "Compendium.pf2e.classfeatures.79ZetrRF6S01P4Vf",
        },
        c5qsu: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Psychic Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.a58MGVX2L589sC9g",
        },
        dy3iq: {
          img: "systems/pf2e/icons/features/classes/infinite-mind.webp",
          level: 19,
          name: "Infinite Mind",
          uuid: "Compendium.pf2e.classfeatures.mZwD2brwXlyR9RAR",
        },
        hl328: {
          img: "systems/pf2e/icons/features/classes/walls-of-will.webp",
          level: 11,
          name: "Walls of Will",
          uuid: "Compendium.pf2e.classfeatures.Kf9lSN6pVS2Hy4KI",
        },
        i90rt: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 5,
          name: "Precognitive Reflexes",
          uuid: "Compendium.pf2e.classfeatures.Ftz5jVa9X6aXybkC",
        },
        jzyth: {
          img: "systems/pf2e/icons/features/classes/clarity-of-focus.webp",
          level: 5,
          name: "Clarity of Focus",
          uuid: "Compendium.pf2e.classfeatures.k9MeSdp2DbGd1hFz",
        },
        k84cn: {
          img: "systems/pf2e/icons/features/classes/legendary-spellcaster.webp",
          level: 19,
          name: "Legendary Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.Hfaa7TuLn3nE8lr3",
        },
        o827f: {
          img: "systems/pf2e/icons/equipment/adventuring-gear/spellbook.webp",
          level: 1,
          name: "Spell Repertoire (Psychic)",
          uuid: "Compendium.pf2e.classfeatures.1mMdsSIVsyyqNr2t",
        },
        ob1jw: {
          img: "systems/pf2e/icons/features/classes/fortress-of-will.webp",
          level: 17,
          name: "Fortress of Will",
          uuid: "Compendium.pf2e.classfeatures.Hw6Ji7Fgx0XkVkac",
        },
        pshsr: {
          img: "systems/pf2e/icons/features/classes/vigilant-senses.webp",
          level: 11,
          name: "Extrasensory Perception",
          uuid: "Compendium.pf2e.classfeatures.wOl7EeF7S6i753Ef",
        },
        ryf7k: {
          img: "systems/pf2e/icons/features/classes/great-fortitude.webp",
          level: 9,
          name: "Great Fortitude (Psychic)",
          uuid: "Compendium.pf2e.classfeatures.zAe95Uk5IPIT23K1",
        },
        v1k6k: {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 15,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
        wrk9s: {
          img: "systems/pf2e/icons/features/classes/psy-cantrips-and-amps.webp",
          level: 1,
          name: "Psi Cantrips and Amps",
          uuid: "Compendium.pf2e.classfeatures.1tyNn9sduyexXLfL",
        },
      },
      keyAbility: {
        value: ["cha", "int"],
      },
      perception: 1,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.proficiencies.traditions.occult.rank",
          value: {
            brackets: [
              {
                end: 6,
                start: 1,
                value: 1,
              },
              {
                end: 14,
                start: 7,
                value: 2,
              },
              {
                end: 18,
                start: 15,
                value: 3,
              },
              {
                start: 19,
                value: 4,
              },
            ],
            field: "actor|system.details.level.value",
          },
        },
      ],
      savingThrows: {
        fortitude: 1,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Dark Archive",
      },
      trainedSkills: {
        additional: 3,
        custom: "",
        value: ["occ"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "Yix76sfxrIlltSTJ",
    name: "Ranger",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>Some rangers believe civilization wears down the soul, but still needs to be protected from wild creatures. Others say nature needs to be protected from the greedy, who wish to tame its beauty and plunder its treasures. You could champion either goal, or both. You might be a scout, tracker, or hunter of fugitives or beasts, haunting the edge of civilization or exploring the wilds. You know how to live off the land and are skilled at spotting and taking down both opportune prey and hated enemies.</em></p>\n<p><strong>Key Ability: STRENGTH OR DEXTERITY</strong></p>\n<p>At 1st level, your class gives you an ability boost to your choice of Strength or Dexterity.</p>\n<p><strong>Hit Points: 10 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Ranger</h1>\n<h2>During Combat Encounters...</h2>\n<p>You can single out particular foes to hunt, making you better at defeating them. You target and brutalize your chosen foe with either a bow or melee weapons, while supporting your allies with your skills.</p>\n<h2>During Social Encounters...</h2>\n<p>When you speak, it\'s with the voice of practical experience, especially involving wilderness exploration.</p>\n<h2>While Exploring...</h2>\n<p>You guide your allies through the wilderness or follow tracks. You keep an eye out for trouble, constantly alert for danger even when it\'s not overt.</p>\n<h2>In Downtime...</h2>\n<p>You craft weapons and train animals in preparation for your next venture. If you prefer to get outside, you might go on hunts or scout nearby areas to better understand your environment.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Respect the raw power of nature and understand how to make the best of its bounty.</li>\n<li>Enjoy the thrill of the hunt.</li>\n<li>Scout out ahead of the party, reconnoitering dangers before combat begins.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Call upon you to protect them from the wilds or the encroachment of civilization.</li>\n<li>Expect you to be a quiet or taciturn loner.</li>\n<li>Think there is something dangerous and wild about you.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Expert in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Trained in Will</p>\n<h2>Skills</h2>\n<p>Trained in Nature</p>\n<p>Trained in Survival</p>\n<p>Trained in a number of additional skills equal to 4 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in medium armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in ranger class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Ranger. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, hunt prey, hunter\'s edge, ranger feat</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>General feat, iron will, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, ranger weapon expertise, skill increase, trackless step</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Evasion, general feat, skill increase, vigilant senses, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, nature\'s edge, ranger expertise, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>General feat, juggernaut, medium armor expertise, skill increase, wild stride</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, skill increase, weapon mastery</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater weapon specialization, improved evasion, incredible senses, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, masterful hunter, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Ranger feat, skill feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, second skin, skill increase, swift prey</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, ranger feat, skill feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to what you get from your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Hunt Prey</h2>\n<p>When you focus your attention on a single foe, you become unstoppable in your pursuit. You gain the Hunt Prey action.</p>\n<h3>@UUID[Compendium.pf2e.actionspf2e.Hunt Prey]{Hunt Prey} <span class="pf2-icon">A</span></h3>\n<hr />\n<p>You designate a single creature as your prey and focus your attacks against that creature. You must be able to see or hear the prey, or you must be tracking the prey during exploration.</p>\n<p>You gain a +2 circumstance bonus to Perception checks when you Seek your prey and a +2 circumstance bonus to Survival checks when you Track your prey. You also ignore the penalty for making ranged attacks within your second range increment against the prey you\'re hunting.</p>\n<p>You can have only one creature designated as your prey at a time. If you use Hunt Prey against a creature when you already have a creature designated, the prior creature loses the designation and the new prey gains the designation. Your designation lasts until your next daily preparations.</p>\n<h2>Hunter\'s Edge</h2>\n<p>You have trained for countless hours to become a more skilled hunter and tracker, gaining an additional benefit when you Hunt Prey depending on the focus of your training. Choose a hunter\'s edge.</p>\n<p>Hunter\'s edges can be found here (@UUID[Compendium.pf2e.classfeatures.Flurry]{Flurry}, @UUID[Compendium.pf2e.classfeatures.Outwit]{Outwit} and @UUID[Compendium.pf2e.classfeatures.Precision]{Precision}).</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Ranger Feats</h2>\n<p>At 1st level and every even-numbered level, you gain a ranger class feat.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Iron Will<span style="float: right;">Level 3</span></h2>\n<p>Your training has hardened your resolve. Your proficiency rank for Will saves increases to expert.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase to either become trained in one skill, or become an expert in one skill in which you\'re already trained.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you\'re already an expert, and at 15th level, you can use them to become legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Ranger Weapon Expertise<span style="float: right;">Level 5</span></h2>\n<p>You\'ve dedicated yourself to learning the intricacies of your weapons. Your proficiency ranks for simple, martial weapons, and unarmed attacks increases to expert. You gain access to the critical specialization effects of all such weapons and unarmed attacks when attacking your hunted prey.</p>\n<h2>Trackless Step<span style="float: right;">Level 5</span></h2>\n<p>When you move through natural terrains, you are difficult to track. You always gain the benefits of the Cover Tracks action in such terrains, without moving at half your Speed.</p>\n<h2>Evasion<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned to move quickly to avoid explosions, dragons\' breath, and worse. Your proficiency rank for Reflex saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.</p>\n<h2>Vigilant Senses<span style="float: right;">Level 7</span></h2>\n<p>Through your adventuring, you\'ve developed keen awareness and attention to detail. Your proficiency rank for Perception increases to master.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and to 4 if you\'re legendary.</p>\n<h2>Nature\'s Edge<span style="float: right;">Level 9</span></h2>\n<p>You always find the weak points in your foes\' defenses when they\'re on unfavorable terrain. Enemies are flat-footed to you if they\'re in natural difficult terrain or in difficult terrain resulting from a snare.</p>\n<h2>Ranger Expertise<span style="float: right;">Level 9</span></h2>\n<p>You\'ve practiced your techniques to make them harder to resist. Your proficiency rank for your ranger class DC increases to expert.</p>\n<h2>Juggernaut<span style="float: right;">Level 11</span></h2>\n<p>Your body is accustomed to physical hardship and resistant to ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Medium Armor Expertise<span style="float: right;">Level 11</span></h2>\n<p>You\'ve learned to defend yourself better against attacks. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to expert.</p>\n<h2>Wild Stride<span style="float: right;">Level 11</span></h2>\n<p>You move quickly through obstacles, whether they\'re tumbled stone, tangled undergrowth, or sucking mud. You can ignore the effects of non-magical difficult terrain. As normal for ignoring difficult terrain, this also lets you treat the hindrances of greater difficult terrain as those of difficult terrain.</p>\n<h2>Weapon Mastery<span style="float: right;">Level 13</span></h2>\n<p>You fully understand the intricacies of your weapons. Your proficiency ranks for simple, martial weapons, and unarmed attacks increase to master.</p>\n<h2>Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2>Improved Evasion<span style="float: right;">Level 15</span></h2>\n<p>Your ability to elude danger is matchless. Your proficiency rank for Reflex saves increases to legendary. When you roll a critical failure on a Reflex save, you get a failure instead. When you roll a failure on a Reflex save against a damaging effect, you take half damage.</p>\n<h2>Incredible Senses<span style="float: right;">Level 15</span></h2>\n<p>You notice things almost impossible for an ordinary person to detect. Your proficiency rank for Perception increases to legendary.</p>\n<h2>Masterful Hunter<span style="float: right;">Level 17</span></h2>\n<p>You have honed your abilities as a hunter to incredible levels. Your proficiency rank for your ranger class DC increases to master. When using a ranged weapon that you have master proficiency in, you can ignore the penalty if attacking your hunted prey within the weapon\'s second and third range increments.</p>\n<p>If you have master proficiency in Perception, you gain a +4 circumstance bonus to Perception checks when you Seek your prey, and if you have master proficiency in Survival, you gain a +4 circumstance bonus to Survival checks when you Track your prey. You also gain an additional benefit depending on your hunter\'s edge.</p>\n<p>See specific hunter\'s edges for more information.</p>\n<h2>Second Skin<span style="float: right;">Level 19</span></h2>\n<p>Your armor has become akin to a second skin for you. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to master. When wearing light or medium armor, you can rest normally, rather than receiving poor rest that leaves you fatigued.</p>\n<h2>Swift Prey<span style="float: right;">Level 19</span></h2>\n<p>You size up your prey with only a glance. You can use Hunt Prey as a free action if it\'s your first action of your turn.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 10,
      items: {
        "07lzm": {
          img: "systems/pf2e/icons/features/classes/masterful-hunter.webp",
          level: 17,
          name: "Masterful Hunter",
          uuid: "Compendium.pf2e.classfeatures.RVZC4wVy5B5W2OeS",
        },
        "3k9vv": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "7gij8": {
          img: "systems/pf2e/icons/features/classes/natures-end.webp",
          level: 9,
          name: "Nature's Edge",
          uuid: "Compendium.pf2e.classfeatures.j2R64kwUgEJ1TudD",
        },
        "86ooy": {
          img: "systems/pf2e/icons/features/classes/trackless-step.webp",
          level: 5,
          name: "Trackless Step",
          uuid: "Compendium.pf2e.classfeatures.PeZi7E9lI4vz8EGY",
        },
        "8er6c": {
          img: "systems/pf2e/icons/features/classes/incredible-sense.webp",
          level: 15,
          name: "Incredible Senses",
          uuid: "Compendium.pf2e.classfeatures.nLwPMPLRne1HnL00",
        },
        "9412w": {
          img: "systems/pf2e/icons/features/classes/medium-armor-expertise.webp",
          level: 11,
          name: "Medium Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.FCEp9jjxxgRJDJV3",
        },
        bhe5z: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Hunter's Edge",
          uuid: "Compendium.pf2e.classfeatures.mzkkj9LEWjJPBhaq",
        },
        bucqx: {
          img: "systems/pf2e/icons/features/classes/improved-evasion.webp",
          level: 15,
          name: "Improved Evasion",
          uuid: "Compendium.pf2e.classfeatures.L5D0NwFXdLiVSnk5",
        },
        bv3vc: {
          img: "systems/pf2e/icons/features/classes/swift-prey.webp",
          level: 19,
          name: "Swift Prey",
          uuid: "Compendium.pf2e.classfeatures.bBGb1LcffXEqar0p",
        },
        djh8f: {
          img: "systems/pf2e/icons/features/classes/second-skin.webp",
          level: 19,
          name: "Second Skin",
          uuid: "Compendium.pf2e.classfeatures.phwQ2MrDZ13D2HxC",
        },
        e3ees: {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 11,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        eekwl: {
          img: "systems/pf2e/icons/features/classes/evasion.webp",
          level: 7,
          name: "Evasion",
          uuid: "Compendium.pf2e.classfeatures.MV6XIuAgN9uSA0Da",
        },
        eha1f: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization (Level 15)",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        iyqmb: {
          img: "systems/pf2e/icons/features/classes/wild-stride.webp",
          level: 11,
          name: "Wild Stride",
          uuid: "Compendium.pf2e.classfeatures.RlwE99yKnhq8FUuy",
        },
        jhhhl: {
          img: "systems/pf2e/icons/features/classes/ranger-weapon-expertise.webp",
          level: 5,
          name: "Ranger Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.QhoW8ivPvYmWzyEZ",
        },
        lzbwg: {
          img: "systems/pf2e/icons/features/classes/vigilant-senses.webp",
          level: 7,
          name: "Vigilant Senses",
          uuid: "Compendium.pf2e.classfeatures.0npO4rPscGm0dX13",
        },
        nvyh4: {
          img: "systems/pf2e/icons/features/classes/weapon-mastery.webp",
          level: 13,
          name: "Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.i6563IU7x4L9oRgC",
        },
        q4kx8: {
          img: "systems/pf2e/icons/features/classes/iron-will.webp",
          level: 3,
          name: "Iron Will",
          uuid: "Compendium.pf2e.classfeatures.wMyDcVNmA7xGK83S",
        },
        s7kqn: {
          img: "systems/pf2e/icons/features/classes/hunt-prey.webp",
          level: 1,
          name: "Hunt Prey",
          uuid: "Compendium.pf2e.classfeatures.0nIOGpHQNHsKSFKT",
        },
        upgl9: {
          img: "systems/pf2e/icons/features/classes/ranger-expertise.webp",
          level: 9,
          name: "Ranger Expertise",
          uuid: "Compendium.pf2e.classfeatures.5likl5SAxQPrQ3KF",
        },
      },
      keyAbility: {
        value: ["dex", "str"],
      },
      perception: 2,
      rules: [],
      savingThrows: {
        fortitude: 2,
        reflex: 2,
        will: 1,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 4,
        value: ["nat", "sur"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "LO9STvskJemPkiAI",
    name: "Rogue",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "Rapier, Sap, Shortbow, and Shortsword",
          rank: 1,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>You are skilled and opportunistic. Using your sharp wits and quick reactions, you take advantage of your opponents\' missteps and strike where it hurts most. You play a dangerous game, seeking thrills and testing your skills, and likely don\'t care much for any laws that happen to get in your way. While the path of every rogue is unique and riddled with danger, the one thing you all share in common is the breadth and depth of your skills.</em></p>\n<p><strong>Key Ability: DEXTERITY OR OTHER</strong></p>\n<p>At 1st level, your class gives you an ability boost to Dexterity or an option from rogue\'s racket.</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1 class="title">Roleplaying the Rogue</h1>\n<h2 class="title">During Combat Encounters...</h2>\n<p>You move about stealthily so you can catch foes unawares. You\'re a precision instrument, more useful against a tough boss or distant spellcaster than against rank-and-file soldiers.</p>\n<h2 class="title">During Social Encounters...</h2>\n<p>Your skills give you multiple tools to influence your opposition. Pulling cons and ferreting out information are second nature to you.</p>\n<h2 class="title">While Exploring...</h2>\n<p>You sneak to get the drop on foes and scout for danger or traps. You\'re a great asset, since you can disable traps, solve puzzles, and anticipate dangers.</p>\n<h2 class="title">In Downtime...</h2>\n<p>You might pick pockets or trade in illegal goods. You can also become part of a thieves\' guild, or even found one of your own.</p>\n<h2 class="title">You Might...</h2>\n<ul>\n<li>Hone your skills through intense practice, both on your own and out in the world.</li>\n<li>Know where to attain illicit goods.</li>\n<li>Skirt or break the law because you think it\'s meaningless or have your own code.</li>\n</ul>\n<h2 class="title">Others Probably...</h2>\n<ul>\n<li>Find you charming or fascinating, even if they think they know better than to trust you.</li>\n<li>Come to you when they need someone who is willing to take risks or use questionable methods.</li>\n<li>Suspect you\'re motivated primarily by greed.</li>\n</ul>\n<h1 class="title">Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2 class="title">Perception</h2>\n<p>Expert in Perception</p>\n<h2 class="title">Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Expert in Will</p>\n<h2 class="title">Skills</h2>\n<p>Trained in Stealth</p>\n<p>Trained in one or more skills determined by your rogue\'s racket</p>\n<p>Trained in a number of additional skills equal to 7 plus your Intelligence modifier</p>\n<h2 class="title">Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in the rapier, sap, shortbow, and shortsword</p>\n<p>Trained in unarmed attacks</p>\n<h2 class="title">Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in unarmored defense</p>\n<h2 class="title">Class DC</h2>\n<p>Trained in rogue class DC</p>\n<h1 class="title">Class Features</h1>\n<p>You gain these features as a Rogue. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, rogue\'s racket, sneak attack 1d6, surprise attack, rogue feat, skill feat</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Deny advantage, general feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, skill feat, skill increase, sneak attack 2d6, weapon tricks</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Evasion, general feat, skill feat, skill increase, vigilant senses, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, debilitating strike, great fortitude, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>11</td>\n<td>General feat, rogue expertise, skill feat, skill increase, sneak attack 3d6</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, improved evasion, incredible senses, light armor expertise, master tricks, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, double debilitation, general feat, greater weapon specialization, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, skill feat, skill increase, slippery mind, sneak attack 4d6</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Rogue feat, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, light armor mastery, master strike, skill feat, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, rogue feat, skill feat, skill increase</td>\n</tr>\n</tbody>\n</table>\n<h2 class="title">Ancestry and Background</h2>\n<p>In addition to what you get from your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2 class="title">Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2 class="title">Rogue Feats</h2>\n<p>At 1st level and every even-numbered level, you gain a rogue class feat.</p>\n<h2 class="title">Rogue\'s Racket</h2>\n<p>As you started on the path of the rogue, you began to develop your own style to pursue your illicit activities. Your racket shapes your rogue techniques and the way you approach a job, while building your reputation in the criminal underworld for a certain type of work. A client with deep pockets might even hire a team of rogues for a particular heist, each specializing in a different racket, in order to cover all the bases. Choose a rogue\'s racket.</p>\n<p>Rackets can be found here:</p>\n<ul>\n<li>@UUID[Compendium.pf2e.classfeatures.Eldritch Trickster]{Eldritch Trickster Racket},</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Mastermind]{Mastermind Racket},</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Ruffian]{Ruffian Racket},</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Scoundrel]{Scoundrel Racket}, and</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Thief]{Thief Racket}</li>\n</ul>\n<h2 class="title">Skill Feats</h2>\n<p>You gain skill feats more often than others. At 1st level and every level thereafter, you gain a skill feat.</p>\n<h2 class="title">Sneak Attack</h2>\n<p>When your enemy can\'t properly defend itself, you take advantage to deal extra damage. If you Strike a creature that has the @UUID[Compendium.pf2e.conditionitems.Flat-Footed]{Flat-Footed} condition with an agile or finesse melee weapon, an agile or finesse unarmed attack, or a ranged weapon attack, you deal an extra 1d6 precision damage. For a ranged attack with a thrown melee weapon, that weapon must also be agile or finesse.</p>\n<p>As your rogue level increases, so does the number of damage dice for your sneak attack. Increase the number of dice by one at 5th, 11th, and 17th levels.</p>\n<h2 class="title">Surprise Attack</h2>\n<p>You spring into combat faster than foes can react. On the first round of combat, if you roll Deception or Stealth for initiative, creatures that haven\'t acted are flat-footed to you.</p>\n<h2 class="title">Skill Increases<span style="float: right;">Level 2</span></h2>\n<p>You gain more skill increases than members of other classes. At 2nd level and every level thereafter, you gain a skill increase. You can use this increase to either become trained in one skill you\'re untrained in, or to become an expert in one skill in which you\'re already trained.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you\'re already an expert, and at 15th level, you can use them to become legendary in a skill in which you\'re already a master.</p>\n<h2 class="title">Deny Advantage<span style="float: right;">Level 3</span></h2>\n<p>As someone who takes advantage of others\' defenses, you are careful not to leave such openings yourself. You aren\'t flat-footed to hidden, undetected, or flanking creatures of your level or lower, or creatures of your level or lower using surprise attack. However, they can still help their allies flank.</p>\n<h2 class="title">General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2 class="title">Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2 class="title">Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the initial ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2 class="title">Weapon Tricks<span style="float: right;">Level 5</span></h2>\n<p>You have become thoroughly familiar with the tools of your trade. You gain expert proficiency in simple weapons and unarmed attacks, as well as the rapier, sap, shortbow, and shortsword. When you critically succeed at an attack roll against a flat-footed creature while using an agile or finesse simple weapon or any of the listed weapons, you apply the critical specialization effect for the weapon you\'re wielding.</p>\n<h2 class="title">Evasion<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned to move quickly to avoid explosions, dragons\' breath, and worse. Your proficiency rank for Reflex saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.</p>\n<h2 class="title">Vigilant Senses<span style="float: right;">Level 7</span></h2>\n<p>Through your adventures, you\'ve developed keen awareness and attention to detail. Your proficiency rank for Perception increases to master.</p>\n<h2 class="title">Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 damage if you\'re a master, and 4 damage if you\'re legendary.</p>\n<h2 class="title">Debilitating Strikes<span style="float: right;">Level 9</span></h2>\n<p>When taking advantage of an opening, you both hinder and harm your foe. You gain the Debilitating Strike free action.</p>\n<h3 class="title">@UUID[Compendium.pf2e.actionspf2e.Debilitating Strike]{Debilitating Strike} <span class="pf2-icon">F</span></h3>\n<p><strong>Trigger</strong> Your Strike hits a flat-footed creature and deals damage.</p>\n<hr />\n<p>You apply one of the following debilitations, which lasts until the end of your next turn.</p>\n<p><strong>Debilitation</strong> The target takes a -10-foot status penalty to its Speeds.</p>\n<p><strong>Debilitation</strong> The target becomes enfeebled 1.</p>\n<h2 class="title">Great Fortitude<span style="float: right;">Level 9</span></h2>\n<p>Your physique is incredibly hardy. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2 class="title">Rogue Expertise<span style="float: right;">Level 11</span></h2>\n<p>Your techniques are now harder to resist. Your proficiency rank for your rogue class DC increases to expert.</p>\n<h2 class="title">Improved Evasion<span style="float: right;">Level 13</span></h2>\n<p>You elude danger to a degree that few can match. Your proficiency rank for Reflex saves increases to legendary. When you roll a critical failure on a Reflex save, you get a failure instead. When you roll a failure on a Reflex save against a damaging effect, you take half damage.</p>\n<h2 class="title">Incredible Senses<span style="float: right;">Level 13</span></h2>\n<p>You notice things almost impossible for an ordinary person to detect. Your proficiency rank for Perception increases to legendary.</p>\n<h2 class="title">Light Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to dodge while wearing light or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.</p>\n<h2 class="title">Master Tricks<span style="float: right;">Level 13</span></h2>\n<p>You\'ve mastered a rogue\'s fighting moves. Your proficiency ranks increase to master for all simple weapons and unarmed attacks plus the rapier, sap, shortbow, and shortsword.</p>\n<h2 class="title">Double Debilitation<span style="float: right;">Level 15</span></h2>\n<p>Your opportunistic attacks are particularly detrimental. When you use Debilitating Strike, you can apply two debilitations simultaneously; removing one removes both.</p>\n<h2 class="title">Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2 class="title">Slippery Mind<span style="float: right;">Level 17</span></h2>\n<p>You play mental games and employ cognitive tricks to throw off mind-altering effects. Your proficiency rank for Will saves increases to master. When you roll a success at a Will save, you get a critical success instead.</p>\n<h2 class="title">Light Armor Mastery<span style="float: right;">Level 19</span></h2>\n<p>Your skill with light armor improves, increasing your ability to dodge blows. Your proficiency ranks for light armor and unarmored defense increase to master.</p>\n<h2 class="title">Master Strike<span style="float: right;">Level 19</span></h2>\n<p>You can incapacitate an unwary foe with a single strike. Your proficiency rank for your rogue class DC increases to master. You gain the Master Strike free action.</p>\n<h3 class="title">@UUID[Compendium.pf2e.actionspf2e.Master Strike]{Master Strike} <span class="pf2-icon">F</span></h3>\n<p><strong>Trigger</strong> Your Strike hits a flat-footed creature and deals damage.</p>\n<hr />\n<p>The target attempts a Fortitude save at your class DC. It then becomes temporarily immune to your Master Strike for 1 day.</p>\n<hr />\n<p><strong>Critical Success</strong> The target is unaffected.</p>\n<p><strong>Success</strong> The target is enfeebled 2 until the end of your next turn.</p>\n<p><strong>Failure</strong> The target is paralyzed for 4 rounds.</p>\n<p><strong>Critical Failure</strong> The target is paralyzed for 4 rounds, knocked unconscious for 2 hours, or killed (your choice).</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "0kdn2": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "1nwhg": {
          img: "systems/pf2e/icons/features/classes/weapon-tricks.webp",
          level: 5,
          name: "Weapon Tricks",
          uuid: "Compendium.pf2e.classfeatures.v8UNEJR5IDKi8yqa",
        },
        "1zn3l": {
          img: "systems/pf2e/icons/features/classes/light-armor-master.webp",
          level: 19,
          name: "Light Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.SHpjmM4A3Sw4GgDz",
        },
        "2xl4q": {
          img: "systems/pf2e/icons/features/classes/master-tricks.webp",
          level: 13,
          name: "Master Tricks",
          uuid: "Compendium.pf2e.classfeatures.myvcir1LEkaVxOlE",
        },
        "4al2i": {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        "517c6": {
          img: "systems/pf2e/icons/features/classes/great-fortitude.webp",
          level: 9,
          name: "Great Fortitude",
          uuid: "Compendium.pf2e.classfeatures.F57Na5VxfBp56kke",
        },
        "6ddtr": {
          img: "systems/pf2e/icons/features/classes/light-armor-expertise.webp",
          level: 13,
          name: "Light Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.pZYkb12t5DSwtts7",
        },
        "8tar0": {
          img: "systems/pf2e/icons/features/classes/incredible-sense.webp",
          level: 13,
          name: "Incredible Senses",
          uuid: "Compendium.pf2e.classfeatures.nLwPMPLRne1HnL00",
        },
        cifjd: {
          img: "systems/pf2e/icons/features/classes/rogue-expertise.webp",
          level: 11,
          name: "Rogue Expertise",
          uuid: "Compendium.pf2e.classfeatures.f3Dh32EU4VsHu01b",
        },
        e9ikq: {
          img: "systems/pf2e/icons/features/classes/sneak-attack.webp",
          level: 1,
          name: "Sneak Attack",
          uuid: "Compendium.pf2e.classfeatures.j1JE61quDxdge4mg",
        },
        g1dmk: {
          img: "systems/pf2e/icons/features/classes/improved-evasion.webp",
          level: 13,
          name: "Improved Evasion",
          uuid: "Compendium.pf2e.classfeatures.L5D0NwFXdLiVSnk5",
        },
        hg9s4: {
          img: "systems/pf2e/icons/features/classes/slippery-mind.webp",
          level: 17,
          name: "Slippery Mind",
          uuid: "Compendium.pf2e.classfeatures.xmZ7oeTDcQVXegUP",
        },
        i70zj: {
          img: "systems/pf2e/icons/features/classes/vigilant-senses.webp",
          level: 7,
          name: "Vigilant Senses",
          uuid: "Compendium.pf2e.classfeatures.0npO4rPscGm0dX13",
        },
        nilrb: {
          img: "systems/pf2e/icons/features/classes/debilitating-strikes.webp",
          level: 9,
          name: "Debilitating Strikes",
          uuid: "Compendium.pf2e.classfeatures.9SruVg2lZpNaYLOB",
        },
        odz8x: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Rogue's Racket",
          uuid: "Compendium.pf2e.classfeatures.uGuCGQvUmioFV2Bd",
        },
        pfjze: {
          img: "systems/pf2e/icons/features/classes/double-debilitation.webp",
          level: 15,
          name: "Double Debilitation",
          uuid: "Compendium.pf2e.classfeatures.W1FkMHYVDg3yTU5r",
        },
        qx6de: {
          img: "systems/pf2e/icons/features/classes/surprice-attack.webp",
          level: 1,
          name: "Surprise Attack",
          uuid: "Compendium.pf2e.classfeatures.w6rMqmGzhUahdnA7",
        },
        sjjee: {
          img: "systems/pf2e/icons/features/classes/deny-advantage.webp",
          level: 3,
          name: "Deny Advantage",
          uuid: "Compendium.pf2e.classfeatures.PNpmVmD21zViDtGC",
        },
        thypm: {
          img: "systems/pf2e/icons/features/classes/master-strike.webp",
          level: 19,
          name: "Master Strike",
          uuid: "Compendium.pf2e.classfeatures.SUUdWG0t33VKa5q4",
        },
        xn3fx: {
          img: "systems/pf2e/icons/features/classes/evasion.webp",
          level: 7,
          name: "Evasion",
          uuid: "Compendium.pf2e.classfeatures.MV6XIuAgN9uSA0Da",
        },
      },
      keyAbility: {
        value: ["cha", "dex", "int", "str"],
      },
      perception: 2,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-rapier.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-sap.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-shortbow.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-shortsword.rank",
          value: 1,
        },
      ],
      savingThrows: {
        fortitude: 1,
        reflex: 2,
        will: 2,
      },
      skillFeatLevels: {
        value: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
      },
      skillIncreaseLevels: {
        value: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 7,
        value: ["ste"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "15Yc1r6s9CEhSTMe",
    name: "Sorcerer",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 0,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>You didn\'t choose to become a spellcaster-you were born one. There\'s magic in your blood, whether a divinity touched one of your ancestors, a forebear communed with a primal creature, or a powerful occult ritual influenced your line. Self-reflection and study allow you to refine your inherent magical skills and unlock new, more powerful abilities. The power in your blood carries a risk, however, and you constantly face the choice of whether you\'ll rise to become a master spellcaster or fall into destruction.</em></p>\n<p><strong>Key Ability: CHARISMA</strong></p>\n<p>At 1st level, your class gives you an ability boost to Charisma.</p>\n<p><strong>Hit Points: 6 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1 class="title">Roleplaying the Sorcerer</h1>\n<h2 class="title">During Combat Encounters...</h2>\n<p>You use spells to injure your enemies, influence their minds, and hamper their movements. You might be too vulnerable to get into melee combat, or your bloodline might give you abilities that help you hold your own in a brawl. While your magic is powerful, to conserve your best spells-or when you\'ve used them all up-you also rely on cantrips.</p>\n<h2 class="title">During Social Encounters...</h2>\n<p>Your natural charisma makes you good at interacting with people.</p>\n<h2 class="title">While Exploring...</h2>\n<p>You detect the magic around you, finding treasures and warning your adventuring group of magical traps. When the group encounters mysteries or problems related to your bloodline, you try to solve them.</p>\n<h2 class="title">In Downtime...</h2>\n<p>You craft magic items or scribe scrolls. Your bloodline might drive you to research your ancestry or associate with affiliated people or creatures.</p>\n<h2 class="title">You Might...</h2>\n<ul>\n<li>Have a strong independent streak, and whether you embrace or reject your magical heritage, you long to distinguish yourself both as a spellcaster and as an individual.</li>\n<li>View your lineage with fascination, fear, or something in between-anything from wholehearted acceptance to vehement rejection.</li>\n<li>Rely on magic items, such as scrolls and wands, to supplement your limited selection of spells.</li>\n</ul>\n<h2 class="title">Others Probably...</h2>\n<ul>\n<li>Marvel at your ability to create magic from thin air and view your abilities with equal parts admiration and mistrust.</li>\n<li>Consider you less dedicated than studious wizards, devoted clerics, and other practitioners of magic, since power comes to you naturally.</li>\n<li>Assume you\'re as unpredictable as the magic you bring forth, even if your personality proves otherwise.</li>\n</ul>\n<h1 class="title">Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2 class="title">Perception</h2>\n<p>Trained in Perception</p>\n<h2 class="title">Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2 class="title">Skills</h2>\n<p>Trained in one or more skills determined by your bloodline</p>\n<p>Trained in a number of additional skills equal to 2 plus your Intelligence modifier</p>\n<h2 class="title">Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2 class="title">Defenses</h2>\n<p>Untrained in all armor</p>\n<p>Trained in unarmored defense</p>\n<h2 class="title">Spells</h2>\n<p>Trained in spell attack rolls of your spellcasting tradition, as indicated by your bloodline</p>\n<p>Trained in spell DCs of your spellcasting tradition, as indicated by your bloodline</p>\n<h1 class="title">Class Features</h1>\n<p>You gain these features as a Sorcerer. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, bloodline, sorcerer spellcasting, spell repertoire</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, signature spells, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, magical fortitude, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, expert spellcaster, general feat, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, lightning reflexes, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, alertness, general feat, weapon expertise, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, defensive robes, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, general feat, master spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Skill feat, sorcerer feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>Bloodline paragon, general feat, legendary spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, skill feat, sorcerer feat</td>\n</tr>\n</tbody>\n</table>\n<h2 class="title">Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2 class="title">Bloodline</h2>\n<p>Choose a bloodline that gives you your spellcasting talent. This choice determines the type of spells you cast and the spell list you choose them from, additional spells you learn, and additional trained skills. You also gain Focus Points and special focus spells based on your bloodline. The bloodlines presented in this book are as follows.</p>\n<ul>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Aberrant]{Aberrant}</strong> A strange and unknowable influence gives you occult spells.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Angelic]{Angelic}</strong> Holy grace bestows divine spells upon you.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Demonic]{Demonic}</strong> A sinful corruption gives you divine spells.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Diabolic]{Diabolic}</strong> A bond with devils gives you divine spells.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Draconic]{Draconic}</strong> The blood of dragons grants you arcane spells.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Elemental]{Elemental}</strong> The power of the elements manifests in you as primal spells.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Fey]{Fey}</strong> Influence from the fey gives you primal spells.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Genie]{Genie}</strong> Through lineage, magic, or wishes made real, the blood of a noble genie flows through your veins.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Hag]{Hag}</strong> The blight of a hag has given you occult spells.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Imperial]{Imperial}</strong> An ancient power grants you arcane spells.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Nymph]{Nymph}</strong> One of your ancestors was inspired by a nymph, or perhaps was a nymph themself, and now the beauty of nature lives in you.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Psychopomp]{Psychopomp}</strong> For good or ill, your ancestors\' deeds drew the attention of psychopomps, or you might somehow count one in your family tree. The presence of these shepherds of souls and enemies of undeath has left an indelible mark on you.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Shadow]{Shadow}</strong> Whether due to a velstrac\'s manipulations or a planar jaunt gone horribly wrong, your bloodline was infused with a vein of shadow.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Bloodline: Undead]{Undead}</strong> The touch of death gives you divine spells.\n</li>\n</ul>\n<h2 class="title">Bloodline Spells</h2>\n<p>Your bloodline grants you bloodline spells, special spells unique to your lineage. Bloodline spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity. Unlike other characters, you don\'t need to do anything specific to Refocus, as the power flowing through your veins naturally replenishes your focus pool.</p>\n<p>Focus spells are automatically heightened to half your level rounded up. Focus spells don\'t require spell slots, nor can you cast them using spell slots. Taking feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 points. The full rules can be found here.</p>\n<h3>Reading A Bloodline Entry</h3>\n<p>A bloodline entry contains the following information:</p>\n<p><strong>Spell List</strong> You use this magical tradition and spell list.</p>\n<p><strong>Bloodline Skills</strong> You become trained in the listed skills.</p>\n<p><strong>Granted Spells</strong> You automatically add the spells listed here to your spell repertoire, as described in the Spell Repertoire class feature. At 1st level, you gain a cantrip and a 1st-level spell. You learn the other spells on the list as soon as you gain the ability to cast sorcerer spells of that level.</p>\n<p><strong>Bloodline Spells</strong> You automatically gain the initial bloodline spell at 1st level and can gain more by selecting the Advanced Bloodline and Greater Bloodline feats.</p>\n<p><strong>Blood Magic</strong> Whenever you cast a bloodline spell using Focus Points or a granted spell from your bloodline using a spell slot, you gain a blood magic effect. If the blood magic offers a choice, make it before resolving the spell. The blood magic effect occurs after resolving any checks for the spell\'s initial effects and, against a foe, applies only if the spell is a successful attack or the foe fails its saving throw. If the spell has an area, you must designate yourself or one target in the area when you cast the spell to be the target of the blood magic effect. All references to spell level refer to the level of the spell you cast.</p>\n<h2 class="title">Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training, noted at the start of this class.</p>\n<h2 class="title">Sorcerer Spellcasting</h2>\n<p>Your bloodline provides you with incredible magical power. You can cast spells using the Cast a Spell activity, and you can supply material, somatic, and verbal components when casting spells. Because you\'re a sorcerer, you can usually replace material components with somatic components, so you don\'t need to use a spell component pouch.</p>\n<p>Each day, you can cast up to three 1st-level spells. You must know spells to cast them, and you learn them via the spell repertoire class feature. The number of spells you can cast each day is called your spell slots.</p>\n<p>As you increase in level as a sorcerer, your number of spells per day increases, as does the highest level of spells you can cast, as shown on Table 3-17: Sorcerer Spells per Day.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key ability is Charisma, your spell attack rolls and spell DCs use your Charisma modifier.</p>\n<h3 class="title"><strong>Heightening Spells</strong></h3>\n<p>When you get spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell\'s level to match the spell slot. You must have a spell in your spell repertoire at the level you want to cast in order to heighten it to that level. Many spells have specific improvements when they are heightened to certain levels. The signature spells class feature lets you heighten certain spells freely.</p>\n<h3 class="title"><strong>Cantrips</strong></h3>\n<p>A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up-this is usually equal to the highest level of spell you can cast as a sorcerer. For example, as a 1st-level sorcerer, your cantrips are 1st-level spells, and as a 5th-level sorcerer, your cantrips are 3rd-level spells.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>4</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>4</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>3</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>1*</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>4</td>\n<td>1*</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* The bloodline paragon class feature gives you a 10th-level spell slot that works a bit differently from other spell slots.</td>\n</tr>\n</tbody>\n</table>\n<h2 class="title">Spell Repertoire</h2>\n<p>The collection of spells you can cast is called your spell repertoire. At 1st level, you learn two 1st-level spells of your choice and four cantrips of your choice, as well as an additional spell and cantrip from your bloodline. You choose these from the common spells from the tradition corresponding to your bloodline, or from other spells from that tradition to which you have access. You can cast any spell in your spell repertoire by using a spell slot of an appropriate spell level.</p>\n<p>You add to this spell repertoire as you increase in level. Each time you get a spell slot (see Table 3-17), you add a spell of the same level to your spell repertoire. When you gain access to a new level of spells, your first new spell is always your bloodline spell, but you can choose the other spells you gain. At 2nd level, you select another 1st-level spell; at 3rd level, you gain a new bloodline spell and two other 2nd-level spells, and so on. When you add spells, you might select a higher-level version of a spell you already have so that you can cast a heightened version of that spell.</p>\n<p>Though you gain them at the same rate, your spell slots and the spells in your spell repertoire are separate. If a feat or other ability adds a spell to your spell repertoire, it wouldn\'t give you another spell slot, and vice versa.</p>\n<h3 class="title">Swapping Spells in your Repertoire</h3>\n<p>As you gain new spells in your spell repertoire, you might want to replace some of the spells you previously learned. Each time you gain a level and learn new spells, you can swap out one of your old spells for a different spell of the same level. This spell can be a cantrip, but you can\'t swap out bloodline spells. You can also swap out spells by retraining during downtime.</p>\n<h2 class="title">Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2 class="title">Sorcerer Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every even-numbered level, you gain a sorcerer class feat.</p>\n<h2 class="title">General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2 class="title">Signature Spells<span style="float: right;">Level 3</span></h2>\n<p>You\'ve learned to cast some of your spells more flexibly. For each spell level you have access to, choose one spell of that level to be a signature spell. You don\'t need to learn heightened versions of signature spells separately; instead, you can heighten these spells freely. If you\'ve learned a signature spell at a higher level than its minimum, you can also cast all its lower-level versions without learning those separately. If you swap out a signature spell, you can choose a replacement signature spell of the same spell level at which you learned the previous spell. You can also retrain specifically to change a signature spell to a different spell of that level without swapping any spells; this takes as much time as retraining a spell normally does.</p>\n<h2 class="title">Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use an increase to either become trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you\'re already an expert, and at 15th level, you can use them to become legendary in a skill in which you\'re already a master.</p>\n<h2 class="title">Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2 class="title">Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2 class="title">Magical Fortitude<span style="float: right;">Level 5</span></h2>\n<p>Magical power has improved your body\'s resiliency. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2 class="title">Expert Spellcaster<span style="float: right;">Level 7</span></h2>\n<p>Your inherent magic responds easily and powerfully to your command. Your proficiency ranks for spell attack rolls and spell DCs for spells of your bloodline\'s tradition increase to expert.</p>\n<h2 class="title">Lightning Reflexes<span style="float: right;">Level 9</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2 class="title">Alertness<span style="float: right;">Level 11</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2 class="title">Weapon Expertise<span style="float: right;">Level 11</span></h2>\n<p>You\'ve improved your combat skill. Your proficiency rank for simple weapons and unarmed attacks increase to expert.</p>\n<h2 class="title">Defensive Robes<span style="float: right;">Level 13</span></h2>\n<p>The flow of magic and your defensive training combine to help you get out of the way before an attack. Your proficiency rank in unarmored defense increases to expert.</p>\n<h2 class="title">Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned to inflict grave wounds with your most practiced weapons. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and 4 if you\'re legendary.</p>\n<h2 class="title">Master Spellcaster<span style="float: right;">Level 15</span></h2>\n<p>You have achieved mastery over the magic in your blood. Your proficiency ranks for spell attack rolls and spell DCs for spells of your bloodline\'s tradition increase to master.</p>\n<h2 class="title">Resolve<span style="float: right;">Level 17</span></h2>\n<p>You\'ve steeled you mind with resolve. Your proficiency rank for Will saves increase to master. When you roll a success at a Will save, you get a critical success instead.</p>\n<h2 class="title">Bloodline Paragon<span style="float: right;">Level 19</span></h2>\n<p>You have perfected the magic in your bloodline. Add two common 10th-level spells of your tradition to your repertoire. You gain a single 10th-level spell slot you can use to cast these spells, using sorcerer spellcasting. Unlike other spell slots, you don\'t gain more 10th-level spells as you level up, and they can\'t be used for abilities that let you cast spells without expending spell slots or abilities that give you more spell slots. You can take the @UUID[Compendium.pf2e.feats-srd.Bloodline Perfection]{Bloodline Perfection} sorcerer feat to gain a second slot.</p>\n<h2 class="title">Legendary Spellcaster<span style="float: right;">Level 19</span></h2>\n<p>You demonstrate prodigious talent for spellcasting. Your proficiency ranks for spell attack rolls and spell DCs for spells of your bloodline\'s tradition increase to legendary.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 6,
      items: {
        "2dihl": {
          img: "systems/pf2e/icons/equipment/adventuring-gear/spellbook.webp",
          level: 1,
          name: "Spell Repertoire (Sorcerer)",
          uuid: "Compendium.pf2e.classfeatures.lURKSJZAGKVD6cH9",
        },
        "4r1hh": {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 17,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        "5wsjn": {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 11,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        "7nvmf": {
          img: "systems/pf2e/icons/features/classes/bloodline-paragon.webp",
          level: 19,
          name: "Bloodline Paragon",
          uuid: "Compendium.pf2e.classfeatures.feCnVrPPlKhl701x",
        },
        b6ose: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 9,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        ds47l: {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 11,
          name: "Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.9XLUh9iMepZesdmc",
        },
        erm0v: {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 7,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        i55qe: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        jx0fg: {
          img: "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
          level: 1,
          name: "Sorcerer Spellcasting",
          uuid: "Compendium.pf2e.classfeatures.gmnx7e1g08bppbqt",
        },
        pryw9: {
          img: "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
          level: 3,
          name: "Signature Spells",
          uuid: "Compendium.pf2e.classfeatures.VKRjmXxBFLrJK01c",
        },
        q2jao: {
          img: "systems/pf2e/icons/features/classes/defensive-robes.webp",
          level: 13,
          name: "Defensive Robes",
          uuid: "Compendium.pf2e.classfeatures.gU7epgcPSm0TD1UK",
        },
        q8nk5: {
          img: "systems/pf2e/icons/features/classes/legendary-spellcaster.webp",
          level: 19,
          name: "Legendary Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.Hfaa7TuLn3nE8lr3",
        },
        qimsg: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Bloodline",
          uuid: "Compendium.pf2e.classfeatures.2goYo6VNbwC6aKF1",
        },
        r346v: {
          img: "systems/pf2e/icons/features/classes/bloodline-spells.webp",
          level: 1,
          name: "Bloodline Spells",
          uuid: "Compendium.pf2e.classfeatures.H6ziAPvCipTPG8SH",
        },
        tr1s2: {
          img: "systems/pf2e/icons/features/classes/magical-fortitude.webp",
          level: 5,
          name: "Magical Fortitude",
          uuid: "Compendium.pf2e.classfeatures.70jqXP2eS4tRZ0Ok",
        },
        zmu64: {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 15,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
      },
      keyAbility: {
        value: ["cha"],
      },
      perception: 1,
      rules: [],
      savingThrows: {
        fortitude: 1,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 2,
        value: [],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "YtOm245r8GFSFYeD",
    name: "Summoner",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 0,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          "<p><em>You can magically beckon a powerful being called an eidolon to your side, serving as the mortal conduit that anchors it to the world. Whether your eidolon is a friend, a servant, or even a personal god, your connection to it marks you as extraordinary, shaping the course of your life dramatically.</em></p>\n<p><strong>Key Ability: CHARISMA</strong></p>\n<p>At 1st level, your class gives you an ability boost to Charisma.</p>\n<p><strong>Hit Points: 10 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Summoner</h1>\n<h2>During Combat Encounters...</h2>\n<p>You and your eidolon fight together as one. You can rely on your eidolon for mundane challenges, saving your spells for when they're needed most.</p>\n<h2>During Social Encounters...</h2>\n<p>Your powerful personality allows you to take the lead when negotiating. You and your eidolon might engage with others in different ways, but even if your guardian remains silent, its presence reminds those around you of your power.</p>\n<h2>While Exploring...</h2>\n<p>Whether you remain on alert for the presence of strange magic or keep an eye out for trouble, you and your eidolon act together to cover more ground, pool your knowledge, and leverage each other's abilities.</p>\n<h2>In Downtime...</h2>\n<p>You might attempt to learn more about the nature of your eidolon and delve deeper into the secrets of its magical tradition to Learn a Spell, Craft magic items with your eidolon's help, or make allies using your social skills.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Rely on your eidolon to accomplish physical tasks while you handle the mental ones.</li>\n<li>Develop attitudes and mannerisms in line with your eidolon's way of thinking, even as your nature shapes its behavior.</li>\n<li>Consider your eidolon a close friend, a guiding figure, a protector, or a rival bound to you.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Feel safe with you (and your eidolon) at their side.</li>\n<li>Expect that since you know information about your eidolon, you might know details about other sorts of strange monsters.</li>\n<li>View you with awe or fear because of the powerful, strange creature that accompanies you.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in one or more skills determined by your eidolon</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in unarmored defense</p>\n<h2>Spells</h2>\n<p>Trained in spell attack rolls of your spellcasting tradition, determined by your eidolon</p>\n<p>Trained in spell DCs of your spellcasting tradition, determined by your eidolon</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Summoner. Abilities gained at higher levels list the levels at which you gain them next to the features' names.</p>\n<table class=\"pf2-table\">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, eidolon, evolution feat, link spells, spell repertoire, summoner spellcasting</td>\n</tr>\n<tr>\n<td>2</td>\n<td>skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, shared vigilance, skill increase, unlimited signature spells</td>\n</tr>\n<tr>\n<td>4</td>\n<td>skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, eidolon unarmed expertise, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, eidolon symbiosis, eidolon weapon specialization, general feat, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, expert spellcaster, shared reflexes, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, eidolon defensive expertise, general feat, simple weapon expertise, skill increase, twin juggernauts</td>\n</tr>\n<tr>\n<td>12</td>\n<td>skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, defensive robes, eidolon unarmed mastery, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, greater eidolon specialization, general feat, shared resolve, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, eidolon transcendence, master spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>skill feat, Summoner feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, eidolon defensive mastery, instant manifestation, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, skill feat, Summoner feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Eidolon</h2>\n<p>You have a connection with a powerful and usually otherworldly entity called an eidolon, and you can use your life force as a conduit to manifest this ephemeral entity into the mortal world. Magic also flows through this conduit from your eidolon into you, so your eidolon determines the type of spells you cast and the spell list you choose from (as described in Summoner Spellcasting on page 54).</p>\n<p>Choose a type of eidolon from the options starting on page 59 and other eidolons you have access to. When you choose your eidolon, you also determine its appearance and general form, within the parameters for that particular type of eidolon. Once you establish your eidolon's type and general appearance, these features can't be changed later, except by selecting special evolution feats that can cause your eidolon to develop new features.</p>\n<p>Your magical connection with your eidolon takes the form of a sigil on each of your bodies. As long as your eidolon is manifested, the sigil glows with light and can't be covered or disguised via any means; it will shine through clothing, appear over cloaks, and remain unaffected by obfuscating magic. This, combined with the way that the two of you clearly act in tandem, makes it readily apparent to an intelligent observer that the two of you are connected in some way, even if the person has never encountered a summoner before.</p>\n<p>You bring your eidolon into reality with the Manifest Eidolon action.</p>\n<p>Your eidolon is no mere minion. It doesn't have the minion or summoned trait, and the two of you work together and coordinate your actions. You and your eidolon share your actions and multiple attack penalty. Each round, you can use any of your actions (including reactions and free actions) for yourself or your eidolon.</p>\n<p>You coordinate your actions with your eidolon more efficiently when you Act Together. Your connection with your eidolon allows you to communicate with it telepathically at all times, even when it isn't manifested. You also gain the Share Senses action.</p>\n<p>Lastly, the connection between you and your eidolon means you both share a single pool of Hit Points. Damage taken by either you or the eidolon reduces your Hit Points, while healing either of you recovers your Hit Points. Like with your actions, if you and your eidolon are both subject to the same effect that affects your Hit Points, you apply those effects only once (applying the greater effect, if applicable). For instance, if you and your eidolon get caught in an area effect that would heal or damage you both, only the greater amount of healing or damage applies.</p>\n<h3>Gear and your Eidolon</h3>\n<p>Your eidolon can't wear or use magic items, except for items with the eidolon trait. An eidolon can have up to two items invested. Your eidolon's link to you means it can benefit from certain magic items invested by you.</p>\n<ul>\n<li>Your eidolon gains item bonuses to Perception and skills from any magical items that you have invested.</li>\n<li>Your eidolon increases its item bonus to AC based on your armor's armor potency rune or bracers of armor. It also gains an item bonus to its saves from the resilient rune on your armor or from your bracers of armor. Other permanent items that grant or increase item bonuses to AC and saves might convey a similar benefit, as determined by the GM.</li>\n<li>Your eidolon's Strikes benefit from the fundamental and property runes on your handwraps of mighty blows. Alternatively, you can Invest a magic weapon (even though magic weapons can't normally be Invested) to share its fundamental and property runes with your eidolon. You share these benefits only while you're holding the weapon, and you can have no more than one weapon invested in this way at a time. In either case, the eidolon gains only the benefits that can apply to its attacks, with the same limitations noted in handwraps of mighty blows.</li>\n</ul>\n<h3>Lost and Altered Actions</h3>\n<p>If you or your eidolon becomes slowed, stunned, quickened, or otherwise affected by something that changes the actions you gain at the start of each turn, it affects your shared actions. However, if you are both subject to such an effect, apply only the more severe one. For instance, if you or your eidolon were @UUID[Compendium.pf2e.conditionitems.Slowed]{Slowed 1}, you would start your turn with one fewer action, but if you were both slowed 1, you would still lose only one action, rather than adding the two slowed effects together. However, if you were slowed 1 and your eidolon @UUID[Compendium.pf2e.conditionitems.Slowed]{Slowed 2}, you'd have two fewer actions, because that's the more severe effect. If only one of you becomes restricted in how you can spend your actions, that restriction doesn't automatically extend to the other; for example, if your eidolon became @UUID[Compendium.pf2e.conditionitems.Immobilized]{Immobilized} or petrified, it wouldn't be able to move, but you could still use your actions to move. The GM resolves any situation that's unclear.</p>\n<p>You, as the player, control both your summoner and your eidolon, and the two are generally considered to cooperate unless you decide for them not to. While a summoner's link with an eidolon is a partnership, ultimately the eidolon is linked to you, not the other way around. If there's ever a conflict of who should act, you win out over your eidolon. This means that if the eidolon comes under an effect that would take its actions out of your control, such as the @UUID[Compendium.pf2e.conditionitems.Confused]{Confused} or controlled condition, you can use all of your shared actions so your eidolon doesn't have any actions remaining to cause trouble (as long as you are able to act). However, if you came under such an effect, you would simply use all of your shared actions, preventing your eidolon from acting.</p>\n<h2>Summoner Spellcasting</h2>\n<p>Your link to your eidolon grants you limited magic connected to your eidolon's nature. You can cast spells using the Cast a Spell activity, and you can supply material, somatic, and verbal components when casting spells. Because of the magic you draw from your eidolon, you can usually replace material components with somatic components, so you don't need a material component pouch.</p>\n<p>Each day, you can cast one 1st-level spell and five cantrips. You must know spells to cast them, and you learn them via the spell repertoire class feature. The number of spells you can cast each day is called your spell slots.</p>\n<p>As you increase in level as a summoner, the magical link with your eidolon grants you additional, more powerful spell slots. Your total number of spell slots and the highest level of spells you can cast are shown in Table 2-4: Summoner Spells per Day. Because of the way you draw magic from your connection to your eidolon, you begin to lose lower-level spell slots once you reach 5th level. The maximum number of spell slots you get from the summoner class is four, starting when you reach 4th level.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key ability is Charisma, your spell attack rolls and spell DCs use your Charisma modifier. Details on calculating these statistics appear on page 447 of the Core Rulebook.</p>\n<h3>Heightening Spells</h3>\n<p>When you gain spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell's level, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain levels.</p>\n<h3>Cantrips</h3>\n<p>A cantrip is a special type of spell that doesn't use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up-this is usually equal to the highest level of spell you can cast as a summoner. For example, as a 1st-level summoner, your cantrips are 1st-level spells, and as a 5th-level summoner, your cantrips are 3rd-level spells.</p>\n<h3>Spell Repertoire</h3>\n<p>The collection of spells you can cast is called your spell repertoire. At 1st level, you learn two 1st-level spells of your choice and five cantrips of your choice. You choose these from the common spells from the tradition corresponding to your eidolon, or from other spells from that tradition to which you have access. You can cast any spell in your spell repertoire by using a spell slot of an appropriate spell level. Your spell slots and the spells in your spell repertoire are separate. If a feat or other ability adds a spell to your spell repertoire, it doesn't give you another spell slot, and vice versa.</p>\n<p>You add to this spell repertoire as you increase in level. Each time you get a spell slot (see Table 2-4: Summoner Spells per Day), you add a spell of the same level to your spell repertoire. At 2nd level, you select another 1st-level spell. At 3rd level, you add the first 2nd-level spell to your repertoire. At 4th level you gain your second and your spell repertoire reaches its maximum size of five spells.</p>\n<p>At 5th level, in addition to adding two 3rd-level spells to your repertoire, you lose your lowest level of spell slots. Any time you lose a level of spell slots, you lose two spells in your repertoire as well. These can come from spells you already know or out of the number of new spells you're learning. On levels in which you don't change your spell slots, you can swap out multiple spells, as described below.</p>\n<h3>Swapping Spells in Your Repertoire</h3>\n<p>As you gain new spells in your repertoire, you might want to replace some of the spells you previously learned. Each time you gain a level and learn new spells, you can swap out one of your old spells for a different spell of the same level. If it's a level at which you lose a set of lower-level slots, you can replace the two in either order. You can also instead swap a cantrip. You can also swap out spells by retraining during downtime.</p>\n<p>At 6th level and every even level thereafter, you can swap out any number of your spells for different spells of a level you can cast. When you do, you must keep at least one spell you can cast with your lowest level of spell slots so you don't end up with slots you can't use. For instance, at 6th level you would need to keep at least one 2nd-level spell, but all your other spells could be 3rd level.</p>\n<table class=\"pf2-table\">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>2</td>\n<td>1</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>2</td>\n<td>2</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h2>Link Spells</h2>\n<p>Your connection to your eidolon allows you to cast link spells, special spells that have been forged through your shared connection with your eidolon. Link spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to specifically connect with your eidolon, such as by having a heart-to-heart conversation, playing together, or meditating in unison on the nature of your bond.</p>\n<p>Focus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don't require spell slots, and you can't cast them using spell slots. Taking feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points. The full rules for focus spells appear on page 300 of the Core Rulebook.</p>\n<p>You learn the evolution surge link spell, which allows you to grant your eidolon one of several useful benefits.</p>\n<h3>Link Cantrips</h3>\n<p>Link cantrips are special link spells that don't cost Focus Points, so you can cast them as often as you like. Link cantrips are in addition to the cantrips you choose from your tradition's spell list. Generally, only feats can give you more link cantrips. Unlike other cantrips, you can't swap out link cantrips gained from summoner feats at a later level, unless you swap out the specific feat via retraining.</p>\n<p>You learn the boost eidolon link cantrip, which briefly improves your eidolon's capabilities, allowing it to attack with greater power.</p>\n<h2>Evolution Feat</h2>\n<p>Evolution feats are a special type of summoner class feat that allow you to customize your eidolon through your shared link. You gain an evolution feat for your eidolon at 1st level, representing the differences that make it unique from other eidolons of its type. If you retrain this feat, the feat you replace it with must also be an evolution feat.</p>\n<h2>Skill Feats<span style=\"float: right;\">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Summoner Feats<span style=\"float: right;\">Level 2</span></h2>\n<p>At 2nd level and every even-numbered level thereafter, you gain a summoner class feat.</p>\n<h2>General Feats<span style=\"float: right;\">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Shared Vigilance<span style=\"float: right;\">Level 3</span></h2>\n<p>You and your eidolon work together to remain alert to threats around you, allowing you to perceive far more together than you could individually. Your proficiency rank in Perception and your eidolon's proficiency rank in Perception increase to expert.</p>\n<h2>Skill Increases<span style=\"float: right;\">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you're untrained in, or to increase your proficiency rank in one skill in which you're already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you're already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you're already a master.</p>\n<h2>Unlimited Signature Spells<span style=\"float: right;\">Level 3</span></h2>\n<p>All of your spells are signature spells. That means that if you know a spell, you can heighten it freely by casting it from a higher-level spell slot, up to the maximum level of spell you can cast. You can similarly cast any of its lower-level versions without learning them separately.</p>\n<h2>Ability Boosts<span style=\"float: right;\">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, boost four different ability scores. You can use these boosts to increase ability scores above 18. Boosting an ability score increases it by 1 if it's already 18 or above, or by 2 if it starts out below 18.</p>\n<p>Your eidolon also gets four ability boosts at these levels. The eidolon's ability boosts follow the same rules as yours.</p>\n<h2>Ancestry Feats<span style=\"float: right;\">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Eidolon Unarmed Expertise<span style=\"float: right;\">Level 5</span></h2>\n<p>Your eidolon becomes more capable of using its unarmed attacks. Its proficiency rank for unarmed attacks increases to expert.</p>\n<h2>Eidolon Symbiosis<span style=\"float: right;\">Level 7</span></h2>\n<p>Your connection with your eidolon strengthens, granting your eidolon access to a new ability depending on its type, as described in Eidolon Abilities in each eidolon's entry.</p>\n<h2>Eidolon Weapon Specialization<span style=\"float: right;\">Level 7</span></h2>\n<p>Your eidolon has learned how to inflict greater injuries with its unarmed attacks. It deals 2 additional damage with unarmed attacks in which it's an expert. This damage increases to 3 if it's a master, and 4 if it's legendary.</p>\n<h2>Expert Spellcaster<span style=\"float: right;\">Level 9</span></h2>\n<p>As your connection to your eidolon deepens, the power of your spells increases. Your proficiency ranks for spell attack rolls and spell DCs for spells of your eidolon's tradition increase to expert.</p>\n<h2>Shared Reflexes<span style=\"float: right;\">Level 9</span></h2>\n<p>You and your eidolon boost each other's reflexes, allowing you both to roll away from danger. Your proficiency rank for Reflex saves and your eidolon's proficiency rank for Reflex saves increase to expert.</p>\n<h2>Eidolon Defensive Expertise<span style=\"float: right;\">Level 11</span></h2>\n<p>Your eidolon increases its ability to avoid attacks. Its proficiency rank for unarmored defense increases to expert.</p>\n<h2>Simple Weapon Expertise<span style=\"float: right;\">Level 11</span></h2>\n<p>Training and magic improved your weapon technique. Your proficiency rank for simple weapons and unarmed attacks increases to expert.</p>\n<h2>Twin Juggernauts<span style=\"float: right;\">Level 11</span></h2>\n<p>You and your eidolon fight off physical hardship together with your shared life force. Your proficiency rank for Fortitude saves and your eidolon's proficiency rank for Fortitude saves increase to master. When you roll a success on a Fortitude save, you get a critical success instead. When your eidolon rolls a success on a Fortitude save, it gets a critical success instead.</p>\n<h2>Defensive Robes<span style=\"float: right;\">Level 13</span></h2>\n<p>The flow of magic around you increases your ability to avoid attacks. Your proficiency rank in unarmored defense increases to expert.</p>\n<h2>Eidolon Unarmed Mastery<span style=\"float: right;\">Level 13</span></h2>\n<p>Your eidolon truly masters its unarmed attacks, reaching greater heights. Its proficiency rank for unarmed attacks increases to master.</p>\n<h2>Weapon Specialization<span style=\"float: right;\">Level 13</span></h2>\n<p>You've learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you're a master, and 4 if you're legendary.</p>\n<h2>Greater Eidolon Specialization<span style=\"float: right;\">Level 15</span></h2>\n<p>Your eidolon's damage from weapon specialization increases to 4 with unarmed attacks in which it's an expert, 6 if it's a master, and 8 if it's legendary.</p>\n<h2>Shared Resolve<span style=\"float: right;\">Level 15</span></h2>\n<p>You and your eidolon steel your mind together against effects that threaten you, each protecting the others' minds from danger. Your and your eidolon's proficiency ranks for Will saves increase to master. When you roll a success on a Will save, you get a critical success instead. When your eidolon rolls a success on a Will save, it gets a critical success instead.</p>\n<h2>Eidolon Transcendence<span style=\"float: right;\">Level 17</span></h2>\n<p>Your connection with your eidolon approaches its peak, granting your eidolon access to a powerful new ability depending on its type, as described in Eidolon Abilities in each eidolon's entry. This ability also increases one of the eidolon's ability scores by 2.</p>\n<h2>Master Spellcaster<span style=\"float: right;\">Level 17</span></h2>\n<p>Your connection to your eidolon is strong enough to grant you mastery over associated spells. Your proficiency ranks for spell attack rolls and spell DCs for spells of your eidolon's tradition increase to master.</p>\n<h2>Eidolon Defensive Mastery<span style=\"float: right;\">Level 19</span></h2>\n<p>Your eidolon's form becomes particularly difficult to assail. Its proficiency rank for unarmored defense increases to master.</p>\n<h2>Instant Manifestation<span style=\"float: right;\">Level 19</span></h2>\n<p>You can manifest your eidolon with incredible speed. You can use Manifest Eidolon as a single action, instead of a three-action activity.</p>",
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 10,
      items: {
        "0669p": {
          img: "systems/pf2e/icons/features/classes/eidolon.webp",
          level: 1,
          name: "Eidolon",
          uuid: "Compendium.pf2e.classfeatures.qOEpe596B0UjhcG0",
        },
        "1xme9": {
          img: "systems/pf2e/icons/features/classes/eidolon-defensive-expertise.webp",
          level: 11,
          name: "Eidolon Defensive Expertise",
          uuid: "Compendium.pf2e.classfeatures.2CZPYoyWih6zYTcb",
        },
        "2x8il": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "3wf5r": {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 9,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        "3zc6y": {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 11,
          name: "Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.9XLUh9iMepZesdmc",
        },
        "4jbpz": {
          img: "systems/pf2e/icons/features/classes/instant-manifestation.webp",
          level: 19,
          name: "Instant Manifestation",
          uuid: "Compendium.pf2e.classfeatures.H0iWhiyP0QqgmAKs",
        },
        "4mev6": {
          img: "systems/pf2e/icons/features/classes/shared-vigilance.webp",
          level: 3,
          name: "Shared Vigilance",
          uuid: "Compendium.pf2e.classfeatures.QiMlJ33kNEoyh1M0",
        },
        "65k1a": {
          img: "systems/pf2e/icons/features/classes/eidolon-unarmed-mastery.webp",
          level: 13,
          name: "Eidolon Unarmed Mastery",
          uuid: "Compendium.pf2e.classfeatures.NIzHfVcVMhDmvA49",
        },
        "826s9": {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 15,
          name: "Shared Resolve",
          uuid: "Compendium.pf2e.classfeatures.eZPfHVz14j42jCnS",
        },
        "94ch1": {
          img: "systems/pf2e/icons/features/classes/unlimited-signature-spells.webp",
          level: 3,
          name: "Unlimited Signature Spells",
          uuid: "Compendium.pf2e.classfeatures.P34Jx6i4GJGoqTtG",
        },
        ahde7: {
          img: "systems/pf2e/icons/features/classes/evolution-feat.webp",
          level: 1,
          name: "Evolution Feat",
          uuid: "Compendium.pf2e.classfeatures.IPcdQAwJk0aZe5mg",
        },
        bqrgn: {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 11,
          name: "Twin Juggernauts",
          uuid: "Compendium.pf2e.classfeatures.q1Y12Pg2gQg2FJPR",
        },
        g50u2: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Eidolon Specialization",
          uuid: "Compendium.pf2e.classfeatures.B5SyM7qHrU0gTGR0",
        },
        g64e0: {
          img: "systems/pf2e/icons/features/classes/defensive-robes.webp",
          level: 13,
          name: "Defensive Robes",
          uuid: "Compendium.pf2e.classfeatures.gU7epgcPSm0TD1UK",
        },
        in8hs: {
          img: "systems/pf2e/icons/features/classes/summoner-spellcasting.webp",
          level: 1,
          name: "Summoner Spellcasting",
          uuid: "Compendium.pf2e.classfeatures.gWcN75VNpSZ4FqNb",
        },
        oig4n: {
          img: "systems/pf2e/icons/features/classes/eidolon-unarmed-expertise.webp",
          level: 5,
          name: "Eidolon Unarmed Expertise",
          uuid: "Compendium.pf2e.classfeatures.pda6iUaU9waXId5Q",
        },
        okzqp: {
          img: "systems/pf2e/icons/features/classes/eidolon-symbiosis.webp",
          level: 7,
          name: "Eidolon Symbiosis",
          uuid: "Compendium.pf2e.classfeatures.skQBrwRwJW2K6ACj",
        },
        ongtl: {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 17,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
        pz5oe: {
          img: "systems/pf2e/icons/features/classes/eidolon-weapon-specialization.webp",
          level: 7,
          name: "Eidolon Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.oCnyGRvkfjTsZXcX",
        },
        q00uy: {
          img: "systems/pf2e/icons/features/classes/eidolon-transcendence.webp",
          level: 17,
          name: "Eidolon Transcendence",
          uuid: "Compendium.pf2e.classfeatures.nCE9DzkugRefREqT",
        },
        vbbxr: {
          img: "systems/pf2e/icons/features/classes/eidolon-defensive-mastery.webp",
          level: 19,
          name: "Eidolon Defensive Mastery",
          uuid: "Compendium.pf2e.classfeatures.0WvI8KM5m0SaZ3MH",
        },
        vlybx: {
          img: "systems/pf2e/icons/equipment/adventuring-gear/spellbook.webp",
          level: 1,
          name: "Spell Repertoire (Summoner)",
          uuid: "Compendium.pf2e.classfeatures.Ju2Tp5s5iBB76tQO",
        },
        vr2ao: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 9,
          name: "Shared Reflexes",
          uuid: "Compendium.pf2e.classfeatures.dZNAXTQovlWVvAyX",
        },
        xf0v4: {
          img: "systems/pf2e/icons/features/classes/link-spells.webp",
          level: 1,
          name: "Link Spells",
          uuid: "Compendium.pf2e.classfeatures.wguqw300DB5XdD8W",
        },
      },
      keyAbility: {
        value: ["cha"],
      },
      perception: 1,
      rules: [],
      savingThrows: {
        fortitude: 2,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Secrets of Magic",
      },
      trainedSkills: {
        additional: 3,
        value: [],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "uJ5aCzlw34GGdWjp",
    name: "Swashbuckler",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>Many warriors rely on brute force, weighty armor, or cumbersome weapons. For you, battle is a dance where you move among foes with style and grace. You dart among combatants with flair and land powerful finishing moves with a flick of the wrist and a flash of the blade, all while countering attacks with elegant ripostes that keep enemies off balance. Harassing and thwarting your foes lets you charm fate and cheat death time and again with aplomb and plenty of flair.</em></p>\n<p><strong>Key Ability: DEXTERITY</strong></p>\n<p>At 1st level, your class gives you an ability boost to Dexterity.</p>\n<p><strong>Hit Points: 10 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1 class="title">Roleplaying the Swashbuckler</h1>\n<h2 class="title">During Combat Encounters...</h2>\n<p>You show off to gain panache, leveraging your flair to build up to powerful finishing moves. You stay nimble, moving into the best position to perform your maneuvers while dodging enemy blows and responding with swift ripostes. Depending on your swashbuckler\'s style, you might dance among your foes; slip past their defenses; or beguile, distract, or frighten them.</p>\n<h2 class="title">During Social Encounters...</h2>\n<p>You are equally likely to charm or intimidate others-or both. You might be an adept socialite, or you might create distractions for others who do the talking.</p>\n<h2 class="title">While Exploring...</h2>\n<p>You keep a careful eye on your surroundings and other people, always prepared to leap into action with bravado and flair. You interact with the environment in bold, sweeping strokes rather than skulking to avoid detection.</p>\n<h2 class="title">In Downtime...</h2>\n<p>You might carouse at the tavern, repair and maintain your armaments, or train to learn new techniques. To maintain your impressive reputation, you might build an organization in your name or establish a following of admirers.</p>\n<h2 class="title">You Might...</h2>\n<ul>\n<li>Portray yourself as a heroic daredevil or a roguish braggart, knowing you can live up to the image you present.</li>\n<li>Hold yourself in high esteem, confident in your abilities and your reputation.</li>\n<li>Practice your skills and maneuvers regularly to ensure you never grow rusty.</li>\n</ul>\n<h2 class="title">Others Probably...</h2>\n<ul>\n<li>Admire your theatrics, bravado, and skill with a blade.</li>\n<li>Find you arrogant unless they know you well enough to appreciate your style.</li>\n<li>Underestimate how much of a threat you pose until they face the end of your deadly blade.</li>\n</ul>\n<h1 class="title">Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2 class="title">Perception</h2>\n<p>Expert in Perception</p>\n<h2 class="title">Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Expert in Reflex</p>\n<p>Expert in Will</p>\n<h2 class="title">Skills</h2>\n<p>Trained in Acrobatics</p>\n<p>Trained in one skill determined by your swashbuckler\'s style</p>\n<p>Trained in a number of additional skills equal to 4 plus your Intelligence modifier</p>\n<h2 class="title">Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2 class="title">Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in unarmored defense</p>\n<h2 class="title">Class DC</h2>\n<p>Trained in swashbuckler class DC</p>\n<h1 class="title">Class Features</h1>\n<p>You gain these features as a Fighter. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, panache, swashbuckler\'s style, precise strike (2d6), confident finisher, swashbuckler feat</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>General feat, great fortitude, opportune riposte, skill increase, stylish trick, vivacious speed +10 feet</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, precise strike (3d6), skill increase, weapon expertise</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>Evasion, general feat, skill increase, stylish trick, vivacious speed +15 feet, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, exemplary finish, precise strike (4d6), skill increase, swashbuckler expertise</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>Continuous flair, general feat, skill increase, vigilant senses, vivacious speed +20 feet</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, improved evasion, light armor expertise, precise strike (5d6), skill increase, weapon mastery</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater weapon specialization, keen flair, skill increase, stylish trick, vivacious speed +25 feet</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, precise strike (6d6), resolve, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Skill feat, swashbuckler feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>Eternal confidence, general feat, light armor mastery, skill increase, vivacious speed +30 feet</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, skill feat, swashbuckler feat</td>\n</tr>\n</tbody>\n</table>\n<h2 class="title">Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2 class="title">Initial Proficiencies</h2>\n<p>At 1st level you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2 class="title">Panache</h2>\n<p>You care as much about the way you accomplish something as whether you actually accomplish it in the first place. When you perform an action with particular bravado, you can leverage this moment of verve to perform spectacular, deadly maneuvers. This state of flair is called panache, and you are either in a state of panache or you are not.</p>\n<p>You gain panache by successfully performing the skill check associated with specific actions that have a bit of flair, including @UUID[Compendium.pf2e.actionspf2e.Tumble Through]{Tumble Through} and additional actions determined by your swashbuckler\'s style (see below). At the GM\'s discretion, after succeeding at a check to perform a particularly daring action, such as swinging on a chandelier or sliding down a drapery, you also gain panache if your result is high enough (typically the very hard DC for your level, but the GM can choose a different threshold).</p>\n<p>While you have panache, you gain a +5-foot status bonus to your Speeds and gain a +1 circumstance bonus to checks to Tumble Through or to take any actions that give you panache due to your style. The precise strike class feature also causes you to deal extra precision damage while you have panache. Powerful finisher actions, including @UUID[Compendium.pf2e.classfeatures.Confident Finisher]{Confident Finisher}, can be used only while you have panache and cause you to lose your panache.</p>\n<p>Normally, you gain and use panache only in combat encounters; when an encounter ends, you lose panache.</p>\n<h2 class="title">Swashbuckler\'s Style</h2>\n<p>As a swashbuckler, you have your own distinctive style that enables you to gracefully handle everyday events and life-or-death situations alike. Choose a swashbuckler\'s style. This style determines the additional actions you use to gain panache and makes you trained in the skill related to that action. The styles presented in this book are as follows.</p>\n<ul>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Battledancer]{Battledancer}</strong> To you, a fight is a kind of performance art, and you command your foes\' attention with mesmerizing motions. You are trained in Performance and gain the @UUID[Compendium.pf2e.feats-srd.Fascinating Performance]{Fascinating Performance} skill feat. You gain panache during an encounter when the result of your Performance check to @UUID[Compendium.pf2e.actionspf2e.Perform]{Perform}exceeds the Will DC of an observing foe, even if the foe isn\'t @UUID[Compendium.pf2e.conditionitems.Fascinated]{Fascinated}.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Braggart]{Braggart}</strong> You boast, taunt, and psychologically needle your foes. You are trained in Intimidation. You gain panache during an encounter whenever you successfully @UUID[Compendium.pf2e.actionspf2e.Demoralize]{Demoralize} a foe.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Fencer]{Fencer}</strong> You move carefully, feinting and creating false openings to lead your foes into inopportune attacks. You are trained in Deception. You gain panache during an encounter whenever you successfully @UUID[Compendium.pf2e.actionspf2e.Feint]{Feint} or @UUID[Compendium.pf2e.actionspf2e.Create a Diversion]{Create a Diversion} against a foe.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Gymnast]{Gymnast}</strong> You reposition, maneuver, and bewilder your foes with daring feats of physical prowess. You are trained in Athletics. You gain panache during an encounter whenever you successfully @UUID[Compendium.pf2e.actionspf2e.Grapple]{Grapple}, @UUID[Compendium.pf2e.actionspf2e.Shove]{Shove}, or @UUID[Compendium.pf2e.actionspf2e.Trip]{Trip} a foe.</li>\n<li><strong>@UUID[Compendium.pf2e.classfeatures.Wit]{Wit}</strong> You are friendly, clever, and full of humor, always knowing just what to say in any situation. Your witticisms leave foes unprepared for the skill and speed of your attacks. You are trained in Diplomacy and gain the @UUID[Compendium.pf2e.feats-srd.Bon Mot]{Bon Mot} skill feat. You gain panache during an encounter whenever you succeed at a Bon Mot against a foe.</li>\n</ul>\n<h2 class="title">Precise Strike</h2>\n<p>You strike with flair. When you have panache and you Strike with an agile or finesse melee weapon or agile or finesse unarmed attack, you deal [[/r 2 #precision]]{2 additional precision damage}. If the strike is part of a finisher, the additional damage is [[/r {2d6}[precision]]]{2d6 precision damage} instead.</p>\n<p>As your swashbuckler level increases, so does your additional damage for precise strike. Increase the amount of additional damage on a Strike and the number of additional dice on a finisher by one at 5th, 9th, 13th, and 17th levels.</p>\n<h2 class="title">Confident Finisher</h2>\n<p>You gain an elegant finishing attack you can make when you have panache. You gain the Confident Finisher action.</p>\n<h2 class="title">Swashbuckler Feats</h2>\n<p>At 1st level and every even-numbered level, you gain a swashbuckler class feat.</p>\n<h2 class="title">Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2 class="title">General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2 class="title">Great Fortitude<span style="float: right;">Level 3</span></h2>\n<p>Your physique is incredibly hardy, granting you increased endurance. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2 class="title">Opportune Riposte<span style="float: right;">Level 3</span></h2>\n<p>You turn the tables on foes who fumble, capitalizing immediately on their mistake. You gain the @UUID[Compendium.pf2e.actionspf2e.Opportune Riposte]{Opportune Riposte} reaction.</p>\n<h2 class="title">Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2 class="title">Stylish Tricks<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level, 7th level, and 15th level, you gain a skill feat. This feat must be for Acrobatics or the trained skill from your swashbuckler\'s style.</p>\n<h2 class="title">Vivacious Speed<span style="float: right;">Level 3</span></h2>\n<p>When you\'ve made an impression, you move even faster than normal, darting about the battlefield with incredible speed. Increase the status bonus to your Speeds when you have panache to a +10-foot status bonus; this bonus increases by 5 feet at 7th, 11th, 15th, and 19th levels. When you don\'t have panache, you still get half this status bonus to your Speed, rounded down to the nearest 5-foot increment.</p>\n<h2 class="title">Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2 class="title">Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2 class="title">Weapon Expertise<span style="float: right;">Level 5</span></h2>\n<p>You\'ve dedicated yourself to learning the intricacies of your weapons. Your proficiency ranks for simple weapons, martial weapons, and unarmed attacks increase to expert. You gain access to the critical specialization effects of all weapons for which you have expert proficiency.</p>\n<h2 class="title">Evasion<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned to move quickly to avoid explosions, a dragon\'s breath, and worse. Your proficiency rank for Reflex saves increases to master. When you roll a success on a Reflex save, you get a critical success instead.</p>\n<h2 class="title">Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and to 4 if you\'re legendary.</p>\n<h2 class="title">Exemplary Finisher<span style="float: right;">Level 9</span></h2>\n<p>You execute your finishing moves with spectacular flair, adding special effects to your finishers. If a Strike you make as part of a finisher hits a foe, you add one of the following effects to the Strike, depending on your swashbuckler\'s style.</p>\n<ul>\n<li><strong>Battledancer</strong> You can Step as a free action immediately after the finisher.</li>\n<li><strong>Braggart</strong> If the foe was temporarily immune to your Demoralize, their temporary immunity ends.</li>\n<li><strong>Fencer</strong> The foe is flat-footed until your next turn.</li>\n<li><strong>Gymnast</strong> If the foe is grabbed, restrained, or prone, you gain a circumstance bonus to the damage roll equal to twice the number of weapon damage dice.</li>\n<li><strong>Wit</strong> The foe takes a -2 circumstance penalty to attack rolls against you until the start of your next turn.</li>\n</ul>\n<h2 class="title">Swashbuckler Expertise<span style="float: right;">Level 9</span></h2>\n<p>You perform swashbuckling techniques with exceptional flair, making them harder to resist. Your proficiency rank for your swashbuckler class DC increases to expert.</p>\n<h2 class="title">Continuous Flair<span style="float: right;">Level 11</span></h2>\n<p>While not equal to the heights of your panache in combat, you have a dramatic flair about you in any situation. Whenever you succeed at a check during exploration that would have granted you panache in combat, you gain a +1 circumstance bonus to further checks for actions that would grant you panache in combat. This benefit ends when the exploration changes to a different scene (as determined by the GM) or shifts to an encounter or downtime.</p>\n<h2 class="title">Vigilant Senses<span style="float: right;">Level 11</span></h2>\n<p>Through your adventures, you\'ve developed keen awareness and attention to detail. Your proficiency rank for Perception increases to master.</p>\n<h2 class="title">Improved Evasion<span style="float: right;">Level 13</span></h2>\n<p>Your ability to elude danger is matchless. Your proficiency rank for Reflex saves increases to legendary. When you roll a critical failure on a Reflex save, you get a failure instead. When you roll a failure on a Reflex save against a damaging effect, you take half damage.</p>\n<h2 class="title">Light Armor Expertise<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to dodge while wearing light or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.</p>\n<h2 class="title">Weapon Mastery<span style="float: right;">Level 15</span></h2>\n<p>You fully understand your weapons. Your proficiency ranks for simple and martial weapons and unarmed attacks increase to master.</p>\n<h2 class="title">Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2 class="title">Keen Flair<span style="float: right;">Level 15</span></h2>\n<p>You inflict particularly devastating attacks on even well-defended foes. When you Strike with a weapon or unarmed attack with which you have master proficiency, if you roll a 19 on the die and the roll is a success, you critically succeed instead.</p>\n<h2 class="title">Resolve<span style="float: right;">Level 17</span></h2>\n<p>You\'ve steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2 class="title">Eternal Confidence<span style="float: right;">Level 17</span></h2>\n<p>As a swashbuckler at the peak of your skill, you swell with confidence and bravado in every attack. Your proficiency rank for your swashbuckler class DC increases to master.</p>\n<p>When you Strike as part of a finisher or Opportune Riposte, you can give the Strike the failure effect from the Confident Finisher action, including the increase from Precise Finisher if you have that feat. You can do so only if the Strike uses a weapon or unarmed attack that you could use for Confident Finisher.</p>\n<h2 class="title">Light Armor Mastery<span style="float: right;">Level 19</span></h2>\n<p>Your skill with light armor improves, increasing your ability to dodge blows. Your proficiency ranks for light armor and unarmored defense increase to master.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 10,
      items: {
        "12j4u": {
          img: "systems/pf2e/icons/features/classes/evasion.webp",
          level: 7,
          name: "Evasion",
          uuid: "Compendium.pf2e.classfeatures.MV6XIuAgN9uSA0Da",
        },
        "2v2xl": {
          img: "systems/pf2e/icons/features/classes/panache.webp",
          level: 1,
          name: "Panache",
          uuid: "Compendium.pf2e.classfeatures.LzYi0OuOoypNb6jd",
        },
        "2z1nf": {
          img: "systems/pf2e/icons/features/classes/precise-strike.webp",
          level: 1,
          name: "Precise Strike",
          uuid: "Compendium.pf2e.classfeatures.RQH6vigvhmiYKKjg",
        },
        "41jmp": {
          img: "systems/pf2e/icons/features/classes/confident-finisher.webp",
          level: 1,
          name: "Confident Finisher",
          uuid: "Compendium.pf2e.classfeatures.pyo0vmxUFIFX2GNl",
        },
        "4sxx4": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "7g9e4": {
          img: "systems/pf2e/icons/features/classes/vivacious-speed.webp",
          level: 3,
          name: "Vivacious Speed",
          uuid: "Compendium.pf2e.classfeatures.8BOFeRE7ZfJ02N0O",
        },
        "9bzuj": {
          img: "systems/pf2e/icons/features/classes/eternal-confidence.webp",
          level: 19,
          name: "Eternal Confidence",
          uuid: "Compendium.pf2e.classfeatures.ypfT3iybew6ZSIUl",
        },
        begqu: {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 17,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        biz5f: {
          img: "systems/pf2e/icons/features/classes/improved-evasion.webp",
          level: 13,
          name: "Improved Evasion",
          uuid: "Compendium.pf2e.classfeatures.L5D0NwFXdLiVSnk5",
        },
        i3ldz: {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        jlyi1: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Swashbuckler's Style",
          uuid: "Compendium.pf2e.classfeatures.beW1OqibVQ3fBvRw",
        },
        k2fub: {
          img: "systems/pf2e/icons/features/classes/great-fortitude.webp",
          level: 3,
          name: "Great Fortitude",
          uuid: "Compendium.pf2e.classfeatures.F57Na5VxfBp56kke",
        },
        m4r06: {
          img: "systems/pf2e/icons/features/classes/stylish-tricks.webp",
          level: 3,
          name: "Stylish Tricks",
          uuid: "Compendium.pf2e.classfeatures.pthjQIK9pDxnbER6",
        },
        mh4q8: {
          img: "systems/pf2e/icons/features/classes/vigilant-senses.webp",
          level: 11,
          name: "Vigilant Senses",
          uuid: "Compendium.pf2e.classfeatures.0npO4rPscGm0dX13",
        },
        mysbh: {
          img: "systems/pf2e/icons/features/classes/light-armor-master.webp",
          level: 19,
          name: "Light Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.SHpjmM4A3Sw4GgDz",
        },
        o4f3f: {
          img: "systems/pf2e/icons/features/classes/opportune-riposte.webp",
          level: 3,
          name: "Opportune Riposte",
          uuid: "Compendium.pf2e.classfeatures.Jtn7IugykXDlIoZq",
        },
        qo5ao: {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 5,
          name: "Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.F5BHEav90oOJ2LwN",
        },
        sltbp: {
          img: "systems/pf2e/icons/features/classes/exemplary-finisher.webp",
          level: 9,
          name: "Exemplary Finisher",
          uuid: "Compendium.pf2e.classfeatures.KxpaxUSuBC7hr4F7",
        },
        t02dj: {
          img: "systems/pf2e/icons/features/classes/light-armor-expertise.webp",
          level: 13,
          name: "Light Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.pZYkb12t5DSwtts7",
        },
        xi59r: {
          img: "systems/pf2e/icons/features/classes/keen-flair.webp",
          level: 15,
          name: "Keen Flair",
          uuid: "Compendium.pf2e.classfeatures.Pk3Ht0KZyFxSeL07",
        },
        yeomf: {
          img: "systems/pf2e/icons/features/classes/swashbuckler-expertise.webp",
          level: 9,
          name: "Swashbuckler Expertise",
          uuid: "Compendium.pf2e.classfeatures.U74JoAcLHTOsZG6q",
        },
        z4u6l: {
          img: "systems/pf2e/icons/features/classes/continuous-flair.webp",
          level: 11,
          name: "Continuous Flair",
          uuid: "Compendium.pf2e.classfeatures.13QpCrR8a8XULbJa",
        },
        zwcsy: {
          img: "systems/pf2e/icons/features/classes/weapon-mastery.webp",
          level: 13,
          name: "Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.i6563IU7x4L9oRgC",
        },
      },
      keyAbility: {
        value: ["dex"],
      },
      perception: 2,
      rules: [],
      savingThrows: {
        fortitude: 1,
        reflex: 2,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Advanced Player's Guide",
      },
      trainedSkills: {
        additional: 4,
        value: ["acr"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "Y5GsHqzCzJlKka6x",
    name: "Thaumaturge",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 1,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 1,
      classFeatLevels: {
        value: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 1,
        medium: 1,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>The world is full of the unexplainable: ancient magic, dead gods, and even stranger things. In response, you\'ve scavenged the best parts of every magical tradition and built up a collection of esoterica???a broken holy relic here, a sprig of mistletoe there???that you can use to best any creature by exploiting their weaknesses and vulnerabilities. The mystic implement you carry is both badge and weapon, its symbolic weight helping you bargain with and subdue the supernatural. Every path to power has its restrictions and costs, but you turn them all to your advantage. You\'re a thaumaturge, and you work wonders.</em></p>\n<p><strong>Key Ability: CHARISMA</strong></p>\n<p>At 1st level, your class gives you an ability boost to Charisma</p>\n<p><strong>Hit Points: 8 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Thaumaturge</h1>\n<h2>During Combat Encounters...</h2>\n<p>You use your implements and diverse arsenal of mystic tools and tricks to assist in combat, always presenting the right bane to exploit enemies\' weaknesses or shield your allies against the supernatural.</p>\n<h2>During Social Encounters...</h2>\n<p>You understand and nudge the social connections between people, much as you strive to understand the larger ties between mysteries and concepts. This helps you to find common ground when negotiating between the mundane and supernatural or even to play one side against the other.</p>\n<h2>While Exploring...</h2>\n<p>You investigate unexplainable phenomena around you, taking appropriate precautions to ward yourself and your allies against paranormal threats. Where necessary, you create your own path through the unknown.</p>\n<h2>In Downtime...</h2>\n<p>You research deeper into the supernatural mysteries you discovered on your last adventure to see how they can be applied in the future. You dust off relics, cultivate herbs, or forge trinkets, updating your collection of scavenged supernatural tools after each new threat you encounter. You return or call in favors with other people, strange creatures, and mystical forces.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Prepare for the worst while improvising as necessary, impressing your allies when you\'re able to handle anything that fate throws at you.</li>\n<li>Assume everything is connected on a deeper level, rather than be content with what you find on the surface.</li>\n<li>Obsess over a certain supernatural phenomenon, attempting to tie everything back to it.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Look to you to learn the weaknesses of a supernatural threat when one rears its head. Even when your explanations are invented on the fly, they just seem to work.</li>\n<li>Rely on you to come up with a solution when the situation seems hopeless.</li>\n<li>Mistake you for a common wizard or magician.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Expert in Perception</p>\n<h2>Saving Throws</h2>\n<p>Expert in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Arcana, Nature, Occultism, and Religion</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in martial weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Trained in light armor</p>\n<p>Trained in medium armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Class DC</h2>\n<p>Trained in Thaumaturge class DC</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Thaumaturge. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, esoteric lore, first implement and esoterica, implement\'s empowerment, thaumaturge feat</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>General feat, lightning reflexes, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>Ability boosts, ancestry feat, second implement, skill increase, thaumaturge weapon expertise</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>General feat, implement adept, resolve, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>Ancestry feat, intensify vulnerability, skill increase, thaumaturgic expertise, vigilant senses</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>General feat, medium armor expertise, second adept, skill increase</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>Ancestry feat, greater resolve, skill increase, weapon mastery</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>Ability boosts, general feat, greater weapon specialization, juggernaut, skill increase, third implement</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>Ancestry feat, implement paragon, skill increase, thaumaturgic mastery</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Skill feat, thaumaturge feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, medium armor mastery, skill increase, unlimited esoterica</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, skill feat, thaumaturge feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Esoteric Lore</h2>\n<p>Your experience with the unknown, as well as the tales you\'ve exchanged with other thaumaturges, has taught you about strange phenomena of every kind. You become trained in Esoteric Lore, a special lore skill that can be used to Recall Knowledge regarding haunts, curses, and creatures of any type, but that can\'t be used to Recall Knowledge of other topics. Unlike a normal Lore skill, you use Charisma as your modifier on Esoteric Lore checks. You also gain the Dubious Knowledge skill feat.</p>\n<p>At 3rd level, you become an expert in Esoteric Lore; at 7th level, you become a master in Esoteric Lore; and at 15th level, you become legendary in Esoteric Lore.</p>\n<h2>First Implement And Esoterica</h2>\n<p>Your implement is a special object of symbolic importance: your badge as you treat with the supernatural and a powerful tool if things turn violent. Choose an implement from the options presented on page 36 (amulet, bell, chalice, lantern, mirror, regalia, tome, wand, and weapon). You begin play with a mundane item of that type, and you gain the initiate benefit for that implement. While an implement is useful to you, it typically has no value if sold. If you acquire a new object of the same general implement type, you can switch your implement to the new object by spending 1 day of downtime with the new item. As you advance as a thaumaturge, you will collect up to three implements and unlock the hidden potential stored within each, so you can mix and match their benefits to suit your situation.</p>\n<p>While your implements are your primary tools in your dealings with the supernatural, you know the value of always being prepared. You constantly collect and carry various smaller mystic objects, bits of materials with paranormal affinities, and items used in folk practices: your esoterica. These might include cold-iron nails, scraps of scrolls and scriptures, fragments of bones purportedly from a saint, and other similar objects. You keep your esoterica in easy-to-access places on your person and are well practiced in brandishing your implement and esoterica together, so you can draw and use esoterica with the same hand you\'re using to wield an implement.</p>\n<h3>Exploit Vulnerability</h3>\n<p>Exploit Vulnerability</p>\n<p>You gain the Exploit Vulnerability action.</p>\n<h2>Implement\'s Empowerment</h2>\n<p>The power of your implement can also be turned to the more common task of combat, its power adding to and amplifying the effects of runes and other magical empowerments. When you Strike, you can trace mystic patterns with an implement you\'re holding to empower the Strike, causing it to deal 2 additional damage per weapon damage die. Channeling the power requires full use of your hands. You don\'t gain the benefit of implement\'s empowerment if you are holding anything in either hand other than a single one-handed weapon, other implements, or esoterica, and you must be holding at least one implement to gain the benefit.</p>\n<h2>Thaumaturge Feats</h2>\n<p>At 1st level and every even-numbered level, you gain a thaumaturge class feat.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Lightning Reflexes<span style="float: right;">Level 3</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Second Implement<span style="float: right;">Level 5</span></h2>\n<p>You\'ve added another implement of power to your toolkit. You choose a second implement, which must be a different type of implement than your first. You gain the initiate benefit of your new implement.</p>\n<p>While you\'re holding an implement in one hand, you can quickly switch it with another implement you\'re wearing to use an action from the implement you\'re switching to. To do so, you can Interact as a free action immediately before executing the implement\'s action. This allows you to meet requirements of having an implement in hand to use its action. For example, if you had your lantern implement in one hand, a weapon in the other, and a chalice implement you were wearing, you could swap your lantern for your chalice to use its reaction.</p>\n<h2>Thaumaturge Weapon Expertise<span style="float: right;">Level 5</span></h2>\n<p>You\'ve learned the secret ways your weapons work most effectively. Your proficiency ranks for simple weapons and martial weapons increase to expert.</p>\n<h2>Implement Adept<span style="float: right;">Level 7</span></h2>\n<p>You have deepened your connection to one of your implements, unlocking its adept power. Choose one of your implements and gain the adept benefit for that implement.</p>\n<h2>Resolve<span style="float: right;">Level 7</span></h2>\n<p>You\'ve steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 7</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and 4 if you\'re legendary.</p>\n<h2>Intensify Vulnerability<span style="float: right;">Level 9</span></h2>\n<p>You\'ve learned to use your implement to further assault a creature whose vulnerabilities you\'re exploiting. You gain the intensify vulnerability benefit of all of your implements, as well as the Intensify Vulnerability action.</p>\n<h2>Thaumaturgic Expertise<span style="float: right;">Level 9</span></h2>\n<p>You\'ve learned deeper secrets of the supernatural, and your abilities are harder to resist. Your proficiency rank for your thaumaturge class DC increases to expert.</p>\n<p>You also gain an additional skill increase, which you can apply only to Arcana, Nature, Occultism, or Religion.</p>\n<h2>Vigilant Senses<span style="float: right;">Level 9</span></h2>\n<p>Through your adventures, you\'ve developed keen awareness and attention to detail. Your proficiency rank for Perception increases to master.</p>\n<h2>Medium Armor Expertise<span style="float: right;">Level 11</span></h2>\n<p>You\'ve learned to defend yourself better against attacks. Your proficiency ranks for light armor, medium armor, and unarmored defense increase to expert.</p>\n<h2>Second Adept<span style="float: right;">Level 11</span></h2>\n<p>You\'ve improved your link to your second implement. You gain the adept benefit of your second implement.</p>\n<h2>Greater Resolve<span style="float: right;">Level 13</span></h2>\n<p>Your unbelievable training grants you mental resiliency. Your proficiency rank for Will saves increases to legendary. When you roll a critical failure on a Will save, you get a failure instead. When you roll a failure on a Will save against a damaging effect, you take half damage.</p>\n<h2>Weapon Mastery<span style="float: right;">Level 13</span></h2>\n<p>You fully understand your weapons. Your proficiency ranks for simple and martial weapons increase to master.</p>\n<h2>Greater Weapon Specialization<span style="float: right;">Level 15</span></h2>\n<p>Your damage from weapon specialization increases to 4 with weapons and unarmed attacks in which you\'re an expert, 6 if you\'re a master, and 8 if you\'re legendary.</p>\n<h2>Juggernaut<span style="float: right;">Level 15</span></h2>\n<p>Your body is accustomed to physical hardship and resistant to a wide range of ailments. Your proficiency rank for Fortitude saves increases to master. When you roll a success on a Fortitude save, you get a critical success instead.</p>\n<h2>Third Implement<span style="float: right;">Level 15</span></h2>\n<p>As you come closer to the culmination of your journey, you gain your final implement, completing your set of three. It must be a different type of implement than your first and second implements. You gain the initiate benefit and intensify vulnerability benefit of your new implement.</p>\n<h2>Implement Paragon<span style="float: right;">Level 17</span></h2>\n<p>You have unlocked the last secrets of an implement. Choose one of your implements that already gained the adept benefit; you gain the paragon benefit for that implement.</p>\n<h2>Thaumaturgic Mastery<span style="float: right;">Level 17</span></h2>\n<p>You\'ve become a master in paranormal phenomena, and your esoterica grow in power. Your proficiency rank for your thaumaturge class DC increases to master.</p>\n<p>You also gain an additional skill increase, which you can apply only to Arcana, Nature, Occultism, or Religion.</p>\n<h2>Medium Armor Mastery<span style="float: right;">Level 19</span></h2>\n<p>Your skill with light and medium armor improves, increasing your ability to avoid blows. Your proficiency ranks for light and medium armor, as well as for unarmed defense, increase to master.</p>\n<h2>Unlimited Esoterica<span style="float: right;">Level 19</span></h2>\n<p>Your understanding of your esoterica becomes so complete that you can access your mystic tools without even thinking. You can use Exploit Vulnerability or Intensify Vulnerability as a free action, rather than a single action, though still with a frequency of only once per round.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 8,
      items: {
        "1LMTz": {
          img: "systems/pf2e/icons/features/classes/unlimited-esoterica.webp",
          level: 19,
          name: "Unlimited Esoterica",
          uuid: "Compendium.pf2e.classfeatures.9ItMYxEkvxqBHrV1",
        },
        "1a61p": {
          img: "systems/pf2e/icons/features/classes/juggerenaut.webp",
          level: 15,
          name: "Juggernaut",
          uuid: "Compendium.pf2e.classfeatures.OMZs5y16jZRW9KQK",
        },
        "2waut": {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 3,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        "3rn78": {
          img: "systems/pf2e/icons/features/classes/first-implement-and-esoterica.webp",
          level: 1,
          name: "First Implement and Esoterica",
          uuid: "Compendium.pf2e.classfeatures.VSQJtzQE6ikKdsnP",
        },
        "4h2t7": {
          img: "systems/pf2e/icons/features/classes/greater-weapon-specialization.webp",
          level: 15,
          name: "Greater Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.Z7HX6TeFsaup7Dx9",
        },
        "59mfg": {
          img: "systems/pf2e/icons/features/classes/medium-armor-expertise.webp",
          level: 11,
          name: "Medium Armor Expertise",
          uuid: "Compendium.pf2e.classfeatures.FCEp9jjxxgRJDJV3",
        },
        "63BEI": {
          img: "systems/pf2e/icons/features/classes/second-adept.webp",
          level: 11,
          name: "Second Adept",
          uuid: "Compendium.pf2e.classfeatures.ZEUxZ4Ta1kDPHiq5",
        },
        "7qJbx": {
          img: "systems/pf2e/icons/features/classes/esoteric-lore.webp",
          level: 1,
          name: "Esoteric Lore",
          uuid: "Compendium.pf2e.classfeatures.cvQmPkJtybMcHinK",
        },
        "91CWx": {
          img: "systems/pf2e/icons/features/classes/third-implement.webp",
          level: 15,
          name: "Third Implement",
          uuid: "Compendium.pf2e.classfeatures.zxZzjN2T53wnH4vU",
        },
        "94AW8": {
          img: "systems/pf2e/icons/features/classes/implements-empowerment.webp",
          level: 1,
          name: "Implement's Empowerment",
          uuid: "Compendium.pf2e.classfeatures.PbNS8d3w3pYQYcVN",
        },
        EeAOX: {
          img: "systems/pf2e/icons/features/classes/implement-paragon.webp",
          level: 17,
          name: "Implement Paragon",
          uuid: "Compendium.pf2e.classfeatures.QEtgbY8N2V4wTbsI",
        },
        HFk1R: {
          img: "systems/pf2e/icons/features/classes/intensify-vulnerability.webp",
          level: 9,
          name: "Intensify Vulnerability",
          uuid: "Compendium.pf2e.classfeatures.VdwNvQwq9sHflEwe",
        },
        Pr5fe: {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 5,
          name: "Thaumaturge Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.ABYmUcLdxDFXEtzu",
        },
        VjdCa: {
          img: "systems/pf2e/icons/features/classes/thaumaturgic-expertise.webp",
          level: 9,
          name: "Thaumaturgic Expertise",
          uuid: "Compendium.pf2e.classfeatures.yvdSUIRU5uLr5eF2",
        },
        anx17: {
          img: "systems/pf2e/icons/features/classes/second-implement.webp",
          level: 5,
          name: "Second Implement",
          uuid: "Compendium.pf2e.classfeatures.Z8WpDAdAXyefLB7Q",
        },
        etPSx: {
          img: "systems/pf2e/icons/features/classes/implement-adept.webp",
          level: 7,
          name: "Implement Adept",
          uuid: "Compendium.pf2e.classfeatures.Obm4ItMIIr0whYeO",
        },
        f5coc: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 7,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        fdT0O: {
          img: "systems/pf2e/icons/features/classes/thaumaturgic-mastery.webp",
          level: 17,
          name: "Thaumaturgic Mastery",
          uuid: "Compendium.pf2e.classfeatures.VywXtJCa0Y9fdGVH",
        },
        gjFwy: {
          img: "systems/pf2e/icons/features/classes/exploit-vulnerability.webp",
          level: 1,
          name: "Exploit Vulnerability",
          uuid: "Compendium.pf2e.classfeatures.uwLNfBprqZw2osTb",
        },
        ifvk8: {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 7,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        le5cj: {
          img: "systems/pf2e/icons/features/classes/medium-armor-mastery.webp",
          level: 19,
          name: "Medium Armor Mastery",
          uuid: "Compendium.pf2e.classfeatures.cGMSYAErbUG5E8X2",
        },
        oa3vk: {
          img: "systems/pf2e/icons/features/classes/greater-resolve.webp",
          level: 13,
          name: "Greater Resolve",
          uuid: "Compendium.pf2e.classfeatures.5LOARurr4qWkfS9K",
        },
        vd7eu: {
          img: "systems/pf2e/icons/features/classes/vigilant-senses.webp",
          level: 9,
          name: "Vigilant Senses",
          uuid: "Compendium.pf2e.classfeatures.0npO4rPscGm0dX13",
        },
        z3br4: {
          img: "systems/pf2e/icons/features/classes/weapon-mastery.webp",
          level: 13,
          name: "Weapon Mastery",
          uuid: "Compendium.pf2e.classfeatures.i6563IU7x4L9oRgC",
        },
      },
      keyAbility: {
        value: ["cha"],
      },
      perception: 2,
      rules: [],
      savingThrows: {
        fortitude: 2,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Dark Archive",
      },
      trainedSkills: {
        additional: 3,
        custom: "Esoteric Lore",
        value: ["arc", "nat", "occ", "rel"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "bYDXk9HUMKOuym9h",
    name: "Witch",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "",
          rank: 0,
        },
        simple: 1,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 0,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>You command powerful magic, not through study or devotion to any ideal, but as a vessel or agent for a mysterious, otherworldly patron that even you don\'t entirely understand. This entity might be a covert divinity, a powerful fey, a manifestation of natural energies, an ancient spirit, or any other mighty supernatural being-but its nature is likely as much a mystery to you as it is to anyone else. Through a special familiar, your patron grants you versatile spells and powerful hexes to use as you see fit, though you\'re never certain if these gifts will end up serving your patron\'s larger plan.</em></p>\n<p><strong>Key Ability: INTELLIGENCE</strong></p>\n<p>At 1st level, your class gives you an ability boost to Intelligence.</p>\n<p><strong>Hit Points: 6 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1 class="title">Roleplaying the Witch</h1>\n<h2 class="title">During Combat Encounters...</h2>\n<p>You cast spells to change the course of battle. You use magical hexes to hamper enemies and aid allies, while leveraging more powerful spells to control the battlefield, heal, or harm, aided by your extraordinary familiar, brewed potions, and magical items.</p>\n<h2 class="title">During Social Encounters...</h2>\n<p>You provide knowledge on numerous topics, including a variety of magical matters, and you might call upon your patron\'s magic to charm or deceive others.</p>\n<h2 class="title">While Exploring...</h2>\n<p>You remain alert for magical traps and treasures, employing a clever array of spells to overcome obstacles that stand in your way. Your familiar might aid you through its own considerable set of exceptional abilities.</p>\n<h2 class="title">In Downtime...</h2>\n<p>You brew potions, craft other magical items, or hunt for new spells for your familiar to learn. You might try to learn more about your patron, their aims, or your own powers, and you might seek out the company of other witches for collaboration or community.</p>\n<h2 class="title">You Might...</h2>\n<ul>\n<li>Strive to learn more about your patron or familiar, your patron\'s goals, why they chose to empower you, and how you fit into their plans.</li>\n<li>Seek out new sources of magic, like scrolls and spellbooks, to supplement the spells your patron provides.</li>\n<li>View your familiar as a steadfast ally, a dear friend, or a necessary nuisance, depending on its personality.</li>\n</ul>\n<h2 class="title">Others Probably...</h2>\n<ul>\n<li>Wonder about the nature of your patron and the source of your magic, worrying you\'ll turn on them or that you unknowingly serve to a foul power.</li>\n<li>Appreciate your ability to aid them with magic, whether you do so by helping them directly or by hampering their adversaries.</li>\n<li>Take care not to offend you, fearful that you\'ll place a malicious hex on them if you\'re angered.</li>\n</ul>\n<h1 class="title">Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2 class="title">Perception</h2>\n<p>Trained in Perception</p>\n<h2 class="title">Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2 class="title">Skills</h2>\n<p>Trained in one skill determined by your patron</p>\n<p>Trained in a number of additional skills equal to 3 plus your Intelligence modifier</p>\n<h2 class="title">Attacks</h2>\n<p>Trained in simple weapons</p>\n<p>Trained in unarmed attacks</p>\n<h2 class="title">Defenses</h2>\n<p>Untrained in all armor</p>\n<p>Trained in unarmored defense</p>\n<h2 class="title">Spells</h2>\n<p>Trained in spell attack rolls of your spellcasting tradition, determined by your patron</p>\n<p>Trained in spell DCs of your spellcasting tradition, determined by your patron</p>\n<h1 class="title">Class Features</h1>\n<p>You gain these features as a Witch. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, patron, familiar, witch spellcasting, hexes</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Skill feat, witch feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Skill feat, witch feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, magical fortitude, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Familiar ability, skill feat, witch feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, expert spellcaster, general feat, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Skill feat, witch feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, lightning reflexes, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, skill feat, witch feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, alertness, general feat, skill increase, weapon expertise</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Familiar ability, skill feat, witch feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, defensive robes, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Skill feat, witch feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, general feat, master spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Skill feat, witch feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, resolve, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Familiar ability, skill feat, witch feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>General feat, legendary spellcaster, patron\'s gift, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, skill feat, witch feat</td>\n</tr>\n</tbody>\n</table>\n<h2 class="title">Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2 class="title">Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2 class="title">Patron</h2>\n<p>You weren\'t born with the power to cast spells, nor have you spent years in devotion to tomes, deities, or mystical secrets. Your power comes through a potent being that has chosen you as their vessel to carry forth some agenda in the world. This entity is typically mysterious and distant, revealing little of their identity and motivations, and they grant you spells and other magical powers through a familiar, which serves as a conduit for their power.</p>\n<p>A patron might be a deity or demigod, a coven of powerful hags, a fey lord, an archdevil, or a similarly powerful entity, or perhaps multiple such figures working in tandem. As you gain more of your patron\'s power, you might learn more about who or what they are-certain combinations of themes and lessons suggest particular patrons or agendas-but patrons empower witches for their own secretive reasons, which they rarely reveal in full.</p>\n<p>At 1st level, choose your patron\'s theme, which determines your spellcasting tradition, a skill, a special cantrip you gain, and a spell added to your familiar.</p>\n<h2 class="title">Familiar</h2>\n<p>Your patron has sent you a familiar, a mystical creature that teaches you and facilitates your spells. This familiar follows the basic rules for familiars, though as it\'s a direct conduit between you and your patron, it\'s more powerful than other familiars. Your familiar gains an extra familiar ability, and gains another extra ability at 6th, 12th, and 18th levels.</p>\n<p>Your familiar is the source and repository of the spells your patron has bestowed upon you, and you must commune with your familiar to prepare your spells each day using your witch spellcasting (see below). Your familiar starts off knowing 10 cantrips, five 1st-level spells, and one additional spell determined by your patron\'s theme. You choose these spells from the common spells of the tradition determined by your patron or from other spells of that tradition you gain access to.</p>\n<p>Each time you gain a level, your patron teaches your familiar two new spells of any level you can cast, chosen from common spells of your tradition or others you gain access to. Feats can also grant your familiar additional spells.</p>\n<p>Your familiar can learn new spells independently of your patron. It can learn any spell on your tradition\'s spell list by physically consuming a scroll of that spell in a process that takes 1 hour. You can use the @UUID[Compendium.pf2e.actionspf2e.Learn a Spell]{Learn a Spell} exploration activity to prepare a special written version of a spell, which your familiar can consume as if it were a scroll. You and your familiar can use the Learn a Spell activity to teach your familiar a spell from another witch\'s familiar. Both familiars must be present for the entirety of the activity, the spell must be on your spellcasting tradition\'s spell list, and you must pay the usual cost for that activity, typically in the form of an offering to the other familiar\'s patron. You can\'t prepare spells from another witch\'s familiar.</p>\n<p>If your familiar dies, your patron replaces it during your next daily preparations. The new familiar might be a duplicate or reincarnation of your former familiar or a new entity altogether, but it knows the same spells your former familiar knew regardless. Your familiar\'s death doesn\'t affect any spells you have already prepared.</p>\n<h2 class="title">Witch Spellcasting</h2>\n<p>Using your familiar as a conduit, your patron provides you the power to cast spells. You can cast spells using the @UUID[Compendium.pf2e.actionspf2e.Cast a Spell]{Cast a Spell} activity, and you can supply material, somatic, and verbal components when casting spells.</p>\n<p>At 1st level, you can prepare up to two 1st-level spells and five cantrips each morning from the spells your familiar knows. Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare is called your spell slots.</p>\n<p>As you increase in level as a witch, your number of spell slots and the highest level of spells you can cast from spell slots increase, as shown in Table 2-7: Witch Spells per Day.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key ability is Intelligence, your spell attack rolls and spell DCs use your Intelligence modifier.</p>\n<h3 class="title"><strong>Heightening Spells</strong></h3>\n<p>When you get spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell\'s level, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain levels.</p>\n<h3 class="title"><strong>Cantrips</strong></h3>\n<p>A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up-this is usually equal to the highest level of spell you can cast as a witch. For example, as a 1st-level witch, your cantrips are 1st-level spells, and as a 5th-level witch, your cantrips are 3rd-level spells.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* The patron conduit class feature gives you a 10th-level spell slot that works a bit differently from other spell slots.</td>\n</tr>\n</tbody>\n</table>\n<h2 class="title">Hexes</h2>\n<p>Your patron and familiar teach you special spells called hexes. A hex is a short-term effect drawn directly from your patron\'s magic. As such, you can cast only one hex each turn; attempts to cast a second hex spell on that turn fail and the spellcasting actions are lost.</p>\n<p>Hexes are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the @UUID[Compendium.pf2e.actionspf2e.Refocus]{Refocus} activity to commune with your familiar.</p>\n<p>Focus spells are automatically heightened to half your level rounded up. Focus spells don\'t require spell slots, and you can\'t cast them using spell slots. Certain feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points.</p>\n<p>You learn the <em>@UUID[Compendium.pf2e.spells-srd.Phase Familiar]{Phase Familiar}</em> hex, which you can cast as a reaction to protect your familiar from harm. You learn most other hexes from witch lessons.</p>\n<p><strong>Hex Cantrips</strong></p>\n<p>Hex cantrips are special hexes that don\'t cost Focus Points, so you can cast them as often as you like, though you can still cast only one hex each round. Hex cantrips are in addition to the cantrips you choose with your witch spellcasting and aren\'t counted toward your prepared cantrips. Your hex cantrips are determined by your patron theme.</p>\n<h2 class="title">Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2 class="title">Witch Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every even-numbered level, you gain a witch class feat.</p>\n<h2 class="title">General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2 class="title">Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use an increase to either become trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to become a master in a skill in which you\'re already an expert, and at 15th level, you can use them to become legendary in a skill in which you\'re already a master.</p>\n<h2 class="title">Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2 class="title">Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2 class="title">Magical Fortitude<span style="float: right;">Level 5</span></h2>\n<p>Magical power has improved your body\'s resiliency. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2 class="title">Expert Spellcaster<span style="float: right;">Level 7</span></h2>\n<p>Your inherent magic responds easily and powerfully to your command. Your proficiency ranks for spell attack rolls and spell DCs for your witch spellcasting increase to expert.</p>\n<h2 class="title">Lightning Reflexes<span style="float: right;">Level 9</span></h2>\n<p>Your reflexes are lightning fast, helping you to avoid danger. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2 class="title">Alertness<span style="float: right;">Level 11</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2 class="title">Weapon Expertise<span style="float: right;">Level 11</span></h2>\n<p>Through sheer experience, you\'ve improved your technique with your weapons. Your proficiency ranks for simple weapons and unarmed attacks increase to expert.</p>\n<h2 class="title">Defensive Robes<span style="float: right;">Level 13</span></h2>\n<p>The flow of magic through your spellcasting and your defensive training combine to help you get out of the way before an attack. Your proficiency rank in unarmored defense increases to expert.</p>\n<h2 class="title">Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>You can inflict greater injuries with the weapons you know. You deal 2 additional damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master and 4 if you\'re legendary.</p>\n<h2 class="title">Master Spellcaster<span style="float: right;">Level 15</span></h2>\n<p>You\'ve achieved mastery over your patron\'s magic. Your proficiency ranks for spell attacks and spell DCs for your witch spellcasting increase to master.</p>\n<h2 class="title">Resolve<span style="float: right;">Level 17</span></h2>\n<p>Communion with your familiar has steeled your mental fortitude. Your proficiency rank for Will saves increases to master. When you roll a success on a Will save, you get a critical success instead.</p>\n<h2 class="title">Legendary Spellcaster<span style="float: right;">Level 19</span></h2>\n<p>You\'ve perfected your command of the magic your patron provides. Your proficiency ranks for spell attacks and spell DCs for your witch spellcasting increase to legendary.</p>\n<h2 class="title">Patron\'s Gift<span style="float: right;">Level 19</span></h2>\n<p>Your patron grants you the power to command incredible works of magic. You gain a single 10th-level spell slot and can prepare a spell in that slot using witch spellcasting. Unlike with other spell slots, these spell slots can\'t be used for abilities that let you cast spells without expending spell slots or abilities that give you more spell slots. You don\'t gain more 10th-level spells as you level up, though you can take the @UUID[Compendium.pf2e.feats-srd.Patron\'s Truth]{Patron\'s Truth} feat to gain a second slot.</p>\n<h2 class="title">Patron Themes</h2>\n<p>Each patron has a theme, regardless of their nature or identity. This theme describes the forces over which the patron grants a witch influence. Some patrons are multifaceted, granting different themes and teaching different lessons to different witches. Your patron\'s theme determines the following.</p>\n<ul>\n<li><strong>Spell List</strong> You use this magical tradition and spell list.</li>\n<li><strong>Patron Skill</strong> You become trained in the listed skill.</li>\n<li><strong>Hex Cantrip</strong> You gain this special hex cantrip.</li>\n<li><strong>Granted Spell</strong> Your familiar automatically learns the spell listed here, in addition to those you gain through witch spellcasting.</li>\n</ul>\n<p><strong>@UUID[Compendium.pf2e.classfeatures.Baba Yaga Patron]{Baba Yaga Patron}</strong></p>\n<p>Baba Yaga teaches you how to transfer spirits into objects and freeze your foes. A witch with Baba Yaga as their patron can choose an inanimate object as a familiar. If they do, they still can gain master abilities and some familiar abilities that don\'t require movement. The object familiar has no Speeds and must select a Speed familiar ability before it can move, coming to life in a way appropriate to the chosen Speed and using the statistics of a normal familiar for that day.</p>\n<ul>\n<li><strong>Spell List</strong> occult</li>\n<li><strong>Patron Skill</strong> Occultism</li>\n<li><strong>Hex Cantrip</strong> <em>@UUID[Compendium.pf2e.spells-srd.Spirit Object]{Spirit Object}</em></li>\n<li><strong>Granted Spell</strong> <em>@UUID[Compendium.pf2e.spells-srd.Chilling Spray]{Chilling Spray}</em></li>\n</ul>\n<p><strong>@UUID[Compendium.pf2e.classfeatures.Curse Patron]{Curse Patron}</strong></p>\n<p>Foiling foes and undermining those who stand in your way are the tools of the curse patrons.</p>\n<ul>\n<li><strong>Spell List</strong> occult</li>\n<li><strong>Patron Skill</strong> Occultism</li>\n<li><strong>Hex Cantrip</strong> <em>@UUID[Compendium.pf2e.spells-srd.Evil Eye]{Evil Eye}</em></li>\n<li><strong>Granted Spell</strong> <em>@UUID[Compendium.pf2e.spells-srd.Ray of Enfeeblement]{Ray of Enfeeblement}</em></li>\n</ul>\n<p><strong>@UUID[Compendium.pf2e.classfeatures.Fate Patron]{Fate Patron}</strong></p>\n<p>Through your patron, you gain glimpses of the future and insight into the ever-woven tapestry of time.</p>\n<ul>\n<li><strong>Spell List</strong> occult</li>\n<li><strong>Patron Skill</strong> Occultism</li>\n<li><strong>Hex Cantrip</strong> <em>@UUID[Compendium.pf2e.spells-srd.Nudge Fate]{Nudge Fate}</em></li>\n<li><strong>Granted Spell</strong> <em>@UUID[Compendium.pf2e.spells-srd.True Strike]{True Strike}</em></li>\n</ul>\n<p><strong>@UUID[Compendium.pf2e.classfeatures.Fervor Patron]{Fervor Patron}</strong></p>\n<p>Your patron represents a grand ideal or goal, granting you magic to further their mission and bring others to the cause.</p>\n<ul>\n<li><strong>Spell List</strong> divine</li>\n<li><strong>Patron Skill</strong> Religion</li>\n<li><strong>Hex Cantrip</strong> <em>@UUID[Compendium.pf2e.spells-srd.Stoke the Heart]{Stoke the Heart}</em></li>\n<li><strong>Granted Spell</strong> <em>Compendium[pf2e.spells-srd.Command]{Command}</em></li>\n</ul>\n<p><strong>@UUID[Compendium.pf2e.classfeatures.Night Patron]{Night Patron}</strong></p>\n<p>Your patron speaks from the shadows, granting you power over darkness and dreams.</p>\n<ul>\n<li><strong>Spell List</strong> occult</li>\n<li><strong>Patron Skill</strong> Occultism</li>\n<li><strong>Hex Cantrip</strong> <em>@UUID[Compendium.pf2e.spells-srd.Shroud of Night]{Shroud of Night}</em></li>\n<li><strong>Granted Spell</strong> <em>@UUID[Compendium.pf2e.spells-srd.Sleep]{Sleep}</em></li>\n</ul>\n<p><strong>@UUID[Compendium.pf2e.classfeatures.Rune Patron]{Rune Patron}</strong></p>\n<p>Your patron is one of sigils and symbols, tomes and texts, words and wisdom.</p>\n<ul>\n<li><strong>Spell List</strong> arcane</li>\n<li><strong>Patron Skill</strong> Arcana</li>\n<li><strong>Hex Cantrip</strong> <em>@UUID[Compendium.pf2e.spells-srd.Discern Secrets]{Discern Secrets}</em></li>\n<li><strong>Granted Spell</strong> <em>@UUID[Compendium.pf2e.spells-srd.Magic Weapon]{Magic Weapon}</em></li>\n</ul>\n<p><strong>@UUID[Compendium.pf2e.classfeatures.Wild Patron]{Wild Patron}</strong></p>\n<p>The wild places of the world feel the touch of your patron.</p>\n<ul>\n<li><strong>Spell List</strong> primal</li>\n<li><strong>Patron Skill</strong> Nature</li>\n<li><strong>Hex Cantrip</strong> <em>@UUID[Compendium.pf2e.spells-srd.Wilding Word]{Wilding Word}</em></li>\n<li><strong>Granted Spell</strong> your choice of <em>@UUID[Compendium.pf2e.spells-srd.Summon Animal]{Summon Animal}</em> or <em>@UUID[Compendium.pf2e.spells-srd.Summon Plant or Fungus]{Summon Plant or Fungus}</em></li>\n</ul>\n<p><strong>@UUID[Compendium.pf2e.classfeatures.Winter Patron]{Winter Patron}</strong></p>\n<p>Your patron reflects the frozen reaches of the world, bitterly cruel to those who underestimate that power.</p>\n<ul>\n<li><strong>Spell List</strong> primal</li>\n<li><strong>Patron Skill</strong> Nature</li>\n<li><strong>Hex Cantrip</strong> <em>@UUID[Compendium.pf2e.spells-srd.Clinging Ice]{Clinging Ice}</em></li>\n<li><strong>Granted Spell</strong> <em>@UUID[Compendium.pf2e.spells-srd.Gust of Wind]{Gust of Wind}</em></li>\n</ul>\n<h2 class="title">Witch Lessons</h2>\n<p>A witch\'s knowledge from their patron comes in the form of lessons, which you can learn by selecting feats like Basic Lesson. Each lesson grants you a hex and teaches your familiar a new spell, adding it to the spells you can prepare using your witch spellcasting. You gain this spell even if it\'s not on your tradition\'s spell list.</p>\n<p><strong>BASIC LESSONS</strong></p>\n<p>You can select from these lessons when a feat or another effect grants you a basic lesson.</p>\n<ul>\n<li><span style="text-decoration: underline;">Lesson of Dreams</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Veil of Dreams]{Veil of Dreams}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Sleep]{Sleep}</em>.</li>\n<li><span style="text-decoration: underline;">Lesson of the Elements</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Elemental Betrayal]{Elemental Betrayal}</em> hex. Your familiar learns your choice of <em>@UUID[Compendium.pf2e.spells-srd.Burning Hands]{Burning Hands}</em>, <em>@UUID[Compendium.pf2e.spells-srd.Air Bubble]{Air Bubble}</em>, <em>@UUID[Compendium.pf2e.spells-srd.Hydraulic Push]{Hydraulic Push}</em>, or <em>@UUID[Compendium.pf2e.spells-srd.Pummeling Rubble]{Pummeling Rubble}</em>.</li>\n<li><span style="text-decoration: underline;">Lesson of Life</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Life Boost]{Life Boost}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Spirit Link]{Spirit Link}</em>.</li>\n<li><span style="text-decoration: underline;">Lesson of Protection</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Blood Ward]{Blood Ward}</em> hex; your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Mage Armor]{Mage Armor}</em>.</li>\n<li><span style="text-decoration: underline;">Lesson of Vengeance</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Needle of Vengeance]{Needle of Vengeance}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Phantom Pain]{Phantom Pain}</em>.</li>\n</ul>\n<p><strong>GREATER LESSONS</strong></p>\n<p>You can select from these lessons when a feat or other effect grants you a greater lesson.</p>\n<ul>\n<li><span style="text-decoration: underline;">Lesson of Mischief</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Deceiver\'s Cloak]{Deceiver\'s Cloak}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Mad Monkeys]{Mad Monkeys}</em>.</li>\n<li><span style="text-decoration: underline;">Lesson of Shadow</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Malicious Shadow]{Malicious Shadow}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Chilling Darkness]{Chilling Darkness}</em>.</li>\n<li><span style="text-decoration: underline;">Lesson of Snow</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Personal Blizzard]{Personal Blizzard}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Wall of Wind]{Wall of Wind}</em>.</li>\n</ul>\n<p><strong>MAJOR LESSONS</strong></p>\n<p>You can select from these lessons when a feat or other effect grants you a major lesson.</p>\n<ul>\n<li><span style="text-decoration: underline;">Lesson of Death</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Curse of Death]{Curse of Death}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Raise Dead]{Raise Dead}</em>.</li>\n<li><span style="text-decoration: underline;">Lesson of Renewal</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Restorative Moment]{Restorative Moment}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Field of Life]{Field of Life}</em>.</li>\n<li><span style="text-decoration: underline;">Lesson of the Frozen Queen</span>: You gain the <em>@UUID[Compendium.pf2e.spells-srd.Glacial Heart]{Glacial Heart}</em> hex, and your familiar learns <em>@UUID[Compendium.pf2e.spells-srd.Wall of Ice]{Wall of Ice}</em>.</li>\n</ul>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 6,
      items: {
        "1ddf6": {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 9,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        "568ec": {
          img: "systems/pf2e/icons/features/classes/weapon-expertise.webp",
          level: 11,
          name: "Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.9XLUh9iMepZesdmc",
        },
        "58uhg": {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 15,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
        "5a5an": {
          img: "systems/pf2e/icons/features/classes/legendary-spellcaster.webp",
          level: 19,
          name: "Legendary Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.Hfaa7TuLn3nE8lr3",
        },
        ac5cq: {
          img: "systems/pf2e/icons/features/classes/defensive-robes.webp",
          level: 13,
          name: "Defensive Robes",
          uuid: "Compendium.pf2e.classfeatures.gU7epgcPSm0TD1UK",
        },
        dmo5u: {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        jj4q5: {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 17,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        q4i1v: {
          img: "systems/pf2e/icons/features/classes/witch-spellcasting.webp",
          level: 1,
          name: "Witch Spellcasting",
          uuid: "Compendium.pf2e.classfeatures.zT6QiTMxxj8JYoN9",
        },
        qo3f2: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 11,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        rmucq: {
          img: "systems/pf2e/icons/features/classes/familiar.webp",
          level: 1,
          name: "Familiar (Witch)",
          uuid: "Compendium.pf2e.classfeatures.yksPhweBZYVCsE1A",
        },
        sbys9: {
          img: "systems/pf2e/icons/features/classes/hexes.webp",
          level: 1,
          name: "Hexes",
          uuid: "Compendium.pf2e.classfeatures.9uLh5z2uPo6LDFRY",
        },
        tasue: {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Patron",
          uuid: "Compendium.pf2e.classfeatures.KPtF29AaeX2sJW0K",
        },
        vkt9a: {
          img: "systems/pf2e/icons/features/classes/magical-fortitude.webp",
          level: 5,
          name: "Magical Fortitude",
          uuid: "Compendium.pf2e.classfeatures.70jqXP2eS4tRZ0Ok",
        },
        vq6ja: {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 7,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        x762n: {
          img: "systems/pf2e/icons/features/classes/patrons-gift.webp",
          level: 19,
          name: "Patron's Gift",
          uuid: "Compendium.pf2e.classfeatures.cDnFXfl3i5Z2l7JP",
        },
      },
      keyAbility: {
        value: ["int"],
      },
      perception: 1,
      rules: [],
      savingThrows: {
        fortitude: 1,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Advanced Player's Guide",
      },
      trainedSkills: {
        additional: 3,
        value: [],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
  {
    _id: "RwjIZzIxzPpUglnK",
    name: "Wizard",
    system: {
      ancestryFeatLevels: {
        value: [1, 5, 9, 13, 17],
      },
      attacks: {
        advanced: 0,
        martial: 0,
        other: {
          name: "club, crossbow, dagger, heavy crossbow and staff",
          rank: 1,
        },
        simple: 0,
        unarmed: 1,
      },
      classDC: 0,
      classFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      defenses: {
        heavy: 0,
        light: 0,
        medium: 0,
        unarmored: 1,
      },
      description: {
        value:
          '<p><em>You are an eternal student of the arcane secrets of the universe, using your mastery of magic to cast powerful and devastating spells. You treat magic like a science, cross-referencing the latest texts on practical spellcraft with ancient esoteric tomes to discover and understand how magic works. Yet magical theory is vast, and there\'s no way you can study it all. You either specialize in one of the eight schools of magic, gaining deeper understanding of the nuances of those spells above all others, or favor a broader approach that emphasizes the way all magic comes together at the expense of depth.</em></p>\n<p><strong>Key Ability: INTELLIGENCE</strong></p>\n<p>At 1st level, your class gives you an ability boost to Intelligence.</p>\n<p><strong>Hit Points: 6 plus your Constitution modifier</strong></p>\n<p>You increase your maximum number of HP by this number at 1st level and every level thereafter.</p>\n<h1>Roleplaying the Wizard</h1>\n<h2>During Combat Encounters...</h2>\n<p>You likely try to stay out of the fray, carefully judging when to use your spells. You save your most powerful magic to incapacitate threatening foes and use your cantrips when only weaker foes remain. When enemies pull out tricks like <em>@UUID[Compendium.pf2e.spells-srd.Invisibility]{Invisibility}</em> or <em>@UUID[Compendium.pf2e.spells-srd.Fly]{Fly}</em>, you answer with spells like <em>@UUID[Compendium.pf2e.spells-srd.Glitterdust]{Glitterdust}</em> or <em>@UUID[Compendium.pf2e.spells-srd.Earthbind]{Earthbind}</em>, leveling the field for your allies.</p>\n<h2>During Social Encounters...</h2>\n<p>You provide a well of knowledge about arcane matters and solve arguments with logic.</p>\n<h2>While Exploring...</h2>\n<p>You locate magical auras and determine the arcane significance of magical writing or phenomena you uncover. When you run across an unusual obstacle to further exploration, you probably have a scroll that will make it easier to overcome.</p>\n<h2>In Downtime...</h2>\n<p>You learn new spells, craft magic items, or scribe scrolls for your party, and seek out new and exciting formulas in addition to spells. You might even forge scholarly connections and establish a school or guild of your own.</p>\n<h2>You Might...</h2>\n<ul>\n<li>Have an unquenchable intellectual curiosity about how everything in the world around you works-magic in particular.</li>\n<li>Believe fervently that your school of magic is superior (if you\'re a specialist) or that true mastery of magic requires knowledge of all schools (if you\'re a universalist).</li>\n<li>Use esoteric jargon and technical terms to precisely describe the minutiae of magical effects, even though the difference is probably lost on other people.</li>\n</ul>\n<h2>Others Probably...</h2>\n<ul>\n<li>Consider you to be incredibly powerful and potentially dangerous.</li>\n<li>Fear what your magic can do to their minds, bodies, and souls, and ask that you avoid casting spells in polite company, as few can identify whether one of your spells is harmless or malevolent until it\'s too late.</li>\n<li>Assume you can easily solve all their problems, from dangerous weather to poor crop yields, and ask you for spells that can help them get whatever they desire.</li>\n</ul>\n<h1>Initial Proficiencies</h1>\n<p>At 1st level, you gain the listed proficiency ranks in the following statistics. You are untrained in anything not listed unless you gain a better proficiency rank in some other way.</p>\n<h2>Perception</h2>\n<p>Trained in Perception</p>\n<h2>Saving Throws</h2>\n<p>Trained in Fortitude</p>\n<p>Trained in Reflex</p>\n<p>Expert in Will</p>\n<h2>Skills</h2>\n<p>Trained in Arcana</p>\n<p>Trained in a number of additional skills equal to 2 plus your Intelligence modifier</p>\n<h2>Attacks</h2>\n<p>Trained in the club, crossbow, dagger, heavy crossbow, and staff</p>\n<p>Trained in unarmed attacks</p>\n<h2>Defenses</h2>\n<p>Untrained in all armor</p>\n<p>Trained in unarmored defense</p>\n<h2>Spells</h2>\n<p>Trained in arcane spell attacks</p>\n<p>Trained in arcane spell DCs</p>\n<h1>Class Features</h1>\n<p>You gain these features as a Wizard. Abilities gained at higher levels list the levels at which you gain them next to the features\' names.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Class Features</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Ancestry and background, initial proficiencies, arcane spellcasting, arcane school, arcane bond, arcane thesis</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>3</td>\n<td>2nd-level spells, general feat, skill increase</td>\n</tr>\n<tr>\n<td>4</td>\n<td>Skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>5</td>\n<td>3rd-level spells, ability boosts, ancestry feat, lightning reflexes, skill increase</td>\n</tr>\n<tr>\n<td>6</td>\n<td>Skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4th-level spells, expert spellcaster, general feat, skill increase</td>\n</tr>\n<tr>\n<td>8</td>\n<td>Skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5th-level spells, ancestry feat, magical fortitude, skill increase</td>\n</tr>\n<tr>\n<td>10</td>\n<td>Ability boosts, skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>11</td>\n<td>6th-level spells, alertness, general feat, skill increase, wizard weapon expertise</td>\n</tr>\n<tr>\n<td>12</td>\n<td>Skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>13</td>\n<td>7th-level spells, ancestry feat, defensive robes, skill increase, weapon specialization</td>\n</tr>\n<tr>\n<td>14</td>\n<td>Skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>15</td>\n<td>8th-level spells, ability boosts, general feat, master spellcaster, skill increase</td>\n</tr>\n<tr>\n<td>16</td>\n<td>Skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>17</td>\n<td>9th-level spells, ancestry feat, resolve, skill increase</td>\n</tr>\n<tr>\n<td>18</td>\n<td>Skill feat, wizard feat</td>\n</tr>\n<tr>\n<td>19</td>\n<td>Archwizard\'s spellcraft, general feat, legendary archwizard, skill increase</td>\n</tr>\n<tr>\n<td>20</td>\n<td>Ability boosts, skill feat, wizard feat</td>\n</tr>\n</tbody>\n</table>\n<h2>Ancestry and Background</h2>\n<p>In addition to the abilities provided by your class at 1st level, you have the benefits of your selected ancestry and background.</p>\n<h2>Arcane Bond</h2>\n<p>You place some of your magical power in a bonded item. Each day when you prepare your spells, you can designate a single item you own as your bonded item. This is typically an item associated with spellcasting, such as a wand, ring, or staff, but you are free to designate a weapon or other item. You gain the Drain Bonded Item free action.</p>\n<h3>@UUID[Compendium.pf2e.actionspf2e.Drain Bonded Item]{Drain Bonded Item} <span class="pf2-icon">F</span></h3>\n<p><strong>Frequency</strong> once per day</p>\n<p><strong>Requirements</strong> You haven\'t acted yet on your turn</p>\n<hr />\n<p>You expend the power stored in your bonded item. During your turn, you gain the ability to cast one spell you prepared today and already cast, without spending a spell slot. You must still Cast the Spell and meet the spell\'s other requirements.</p>\n<h2>Arcane School</h2>\n<p>Many arcane spellcasters delve deeply into a single school of magic in an attempt to master its secrets. If you want to be a specialist wizard, choose a school in which to specialize. You gain additional spells and spell slots for spells of your school.</p>\n<p>If you don\'t choose a school, you\'re a universalist, a wizard who believes that the path to true knowledge of magic requires a multidisciplinary understanding of all eight schools working together. Though a universalist lacks the focus of a specialist wizard, they have greater fiexibility.</p>\n<p>Arcane schools can be found here (@UUID[Compendium.pf2e.classfeatures.Abjuration]{Arcane School: Abjuration}, @UUID[Compendium.pf2e.classfeatures.Conjuration]{Arcane School: Conjuration}, @UUID[Compendium.pf2e.classfeatures.Divination]{Arcane School: Divination}, @UUID[Compendium.pf2e.classfeatures.Enchantment]{Arcane School: Enchantment}, @UUID[Compendium.pf2e.classfeatures.Evocation]{Arcane School: Evocation}, @UUID[Compendium.pf2e.classfeatures.Illusion]{Arcane School: Illusion}, @UUID[Compendium.pf2e.classfeatures.Necromancy]{Arcane School: Necromancy}, @UUID[Compendium.pf2e.classfeatures.Transmutation]{Arcane School: Transmutation} and @UUID[Compendium.pf2e.classfeatures.Universalist]{Arcane School: Universalist})</p>\n<h2>Arcane Spellcasting</h2>\n<p>Through dedicated study and practice, you can harness arcane power to cast spells. You can cast arcane spells using the Cast a Spell activity, and you can supply material, somatic, and verbal components when casting spells.</p>\n<p>At 1st level, you can prepare up to two 1st-level spells and five cantrips each morning from the spells in your spellbook (see below), plus one extra cantrip and spell of your chosen school of each level you can cast if you are a specialist wizard. Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare is called your spell slots.</p>\n<p>As you increase in level as a wizard, your number of spell slots and the highest level of spells you can cast from spell slots increase, shown in Table 3-19: Wizard Spells per Day.</p>\n<p>Some of your spells require you to attempt a spell attack roll to see how effective they are, or have your enemies roll against your spell DC (typically by attempting a saving throw). Since your key ability is Intelligence, your spell attack rolls and spell DCs use your Intelligence modifier.</p>\n<h3><strong>Heightening Spells</strong></h3>\n<p>When you get spell slots of 2nd level and higher, you can fill those slots with stronger versions of lower-level spells. This increases the spell\'s level, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain levels.</p>\n<h3><strong>Cantrips</strong></h3>\n<p>A cantrip is a special type of spell that doesn\'t use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up-this is usually equal to the highest level of spell you can cast as a wizard. For example, as a 1st-level wizard, your cantrips are 1st-level spells, and as a 5th-level wizard, your cantrips are 3rd-level spells.</p>\n<h3><strong>Spellbook</strong></h3>\n<p>Every arcane spell has a written version, usually recorded in a spellbook. You start with a spellbook worth 10 sp or less, which you receive for free and must study to prepare your spells each day. The spellbook contains your choice of 10 arcane cantrips and five 1st-level arcane spells. You choose these from the common spells on the arcane spell list or from other arcane spells you gain access to. Your spellbook\'s form and name are up to you. It might be a musty, leather-bound tome or an assortment of thin metal disks connected to a brass ring; its name might be esoteric, like <em>The Crimson Libram</em>, or something more academic, like <em>A Field Study in Practical Transmutation</em>.</p>\n<p>Each time you gain a level, you add two arcane spells to your spellbook, of any level for which you have spell slots. You can also use the Arcana skill to add other spells that you find in your adventures.</p>\n<table class="pf2-table">\n<thead>\n<tr>\n<th>Your Level</th>\n<th>Cantrips</th>\n<th>1st</th>\n<th>2nd</th>\n<th>3rd</th>\n<th>4th</th>\n<th>5th</th>\n<th>6th</th>\n<th>7th</th>\n<th>8th</th>\n<th>9th</th>\n<th>10th</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>5</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>2</td>\n<td>5</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>3</td>\n<td>5</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>5</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>6</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>7</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>9</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>10</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>11</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>12</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>13</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>14</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>15</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>16</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>17</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>2</td>\n<td>-</td>\n</tr>\n<tr>\n<td>18</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>-</td>\n</tr>\n<tr>\n<td>19</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>3</td>\n<td>1*</td>\n</tr>\n<tr>\n<td style="color: white; width: 120px; background-color: #522e2c; text-align: center; height: 25px;" colspan="12">* The Archwizard\'s Spellcraft class feature gives you a 10th-level spell slot that works a bit differently from other spell slots.</td>\n</tr>\n</tbody>\n</table>\n<h2>Arcane Thesis</h2>\n<p>During your studies to become a full-fledged wizard, you produced a thesis of unique magical research on one of a variety of topics. You gain a special benefit depending on the topic of your thesis research. The arcane thesis topics presented in this book are below; your specific thesis probably has a much longer and more technical title like "On the Methods of Spell Interpolation and the Genesis of a New Understanding of the Building Blocks of Magic."</p>\n<p>Arcane thesis can be found here @UUID[Compendium.pf2e.classfeatures.Arcane Thesis]{Arcane Thesis}.</p>\n<h2>Initial Proficiencies</h2>\n<p>At 1st level, you gain a number of proficiencies that represent your basic training. These proficiencies are noted at the start of this class.</p>\n<h2>Skill Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every 2 levels thereafter, you gain a skill feat. You must be trained or better in the corresponding skill to select a skill feat.</p>\n<h2>Wizard Feats<span style="float: right;">Level 2</span></h2>\n<p>At 2nd level and every even-numbered level thereafter, you gain a wizard class feat.</p>\n<h2>General Feats<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 4 levels thereafter, you gain a general feat.</p>\n<h2>Skill Increases<span style="float: right;">Level 3</span></h2>\n<p>At 3rd level and every 2 levels thereafter, you gain a skill increase. You can use this increase either to increase your proficiency rank to trained in one skill you\'re untrained in, or to increase your proficiency rank in one skill in which you\'re already trained to expert.</p>\n<p>At 7th level, you can use skill increases to increase your proficiency rank to master in a skill in which you\'re already an expert, and at 15th level, you can use them to increase your proficiency rank to legendary in a skill in which you\'re already a master.</p>\n<h2>Ability Boosts<span style="float: right;">Level 5</span></h2>\n<p>At 5th level and every 5 levels thereafter, you boost four different ability scores. You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it\'s already 18 or above, or by 2 if it starts out below 18.</p>\n<h2>Ancestry Feats<span style="float: right;">Level 5</span></h2>\n<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.</p>\n<h2>Lightning Reflexes<span style="float: right;">Level 5</span></h2>\n<p>Your reflexes are lightning fast. Your proficiency rank for Reflex saves increases to expert.</p>\n<h2>Expert Spellcaster<span style="float: right;">Level 7</span></h2>\n<p>Extended practice of the arcane has improved your capabilities. Your proficiency ranks for arcane spell attack rolls and spell DCs increase to expert.</p>\n<h2>Magical Fortitude<span style="float: right;">Level 9</span></h2>\n<p>Magical power has improved your body\'s resiliency. Your proficiency rank for Fortitude saves increases to expert.</p>\n<h2>Alertness<span style="float: right;">Level 11</span></h2>\n<p>You remain alert to threats around you. Your proficiency rank for Perception increases to expert.</p>\n<h2>Wizard Weapon Expertise<span style="float: right;">Level 11</span></h2>\n<p>Through a combination of magic and training, you\'ve learned how to wield wizard weapons more effectively. You gain expert proficiency in the club, crossbow, dagger, heavy crossbow, staff, and unarmed attacks.</p>\n<h2>Defensive Robes<span style="float: right;">Level 13</span></h2>\n<p>The flow of magic and your training combine to help you avoid attacks. Your proficiency rank in unarmored defense increases to expert.</p>\n<h2>Weapon Specialization<span style="float: right;">Level 13</span></h2>\n<p>You\'ve learned how to inflict greater injuries with the weapons you know best. You deal an additional 2 damage with weapons and unarmed attacks in which you are an expert. This damage increases to 3 if you\'re a master, and 4 if you\'re legendary.</p>\n<h2>Master Spellcaster<span style="float: right;">Level 15</span></h2>\n<p>You command superlative spellcasting ability. Your proficiency ranks for arcane spell attack rolls and spell DCs increase to master.</p>\n<h2>Resolve<span style="float: right;">Level 17</span></h2>\n<p>You\'ve steeled your mind with resolve. Your proficiency rank for Will saves increases to master. When you roll a success at a Will save, you get a critical success instead.</p>\n<h2>Archwizard\'s Spellcraft<span style="float: right;">Level 19</span></h2>\n<p>You command the most potent arcane magic and can cast a spell of truly incredible power. You gain a single 10th-level spell slot and can prepare a spell in that slot using arcane spellcasting. You can\'t use this spell slot for abilities that let you cast spells without expending spell slots or that give you more spell slots. Unlike with other spell slots, you don\'t gain more 10th-level spells as you level up, though you can take the @UUID[Compendium.pf2e.feats-srd.Archwizard\'s Might]{Archwizard\'s Might} feat to gain a second slot.</p>\n<h2>Legendary Spellcaster<span style="float: right;">Level 19</span></h2>\n<p>You are a consummate spellcaster, with a comprehensive understanding of both arcane theory and practical spellcraft. Your proficiency ranks for arcane spell attack rolls and spell DCs increase to legendary.</p>',
      },
      generalFeatLevels: {
        value: [3, 7, 11, 15, 19],
      },
      hp: 6,
      items: {
        "4x1uf": {
          img: "systems/pf2e/icons/features/classes/weapon-specialization.webp",
          level: 13,
          name: "Weapon Specialization",
          uuid: "Compendium.pf2e.classfeatures.9EqIasqfI8YIM3Pt",
        },
        "55liz": {
          img: "systems/pf2e/icons/features/classes/resolve.webp",
          level: 17,
          name: "Resolve",
          uuid: "Compendium.pf2e.classfeatures.JQAujUXjczVnYDEI",
        },
        "7bbgv": {
          img: "systems/pf2e/icons/features/classes/expert-spellcaster.webp",
          level: 7,
          name: "Expert Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.cD3nSupdCvONuHiE",
        },
        "7hdxh": {
          img: "systems/pf2e/icons/features/classes/archwizards-spellcraft.webp",
          level: 1,
          name: "Arcane Spellcasting (Wizard)",
          uuid: "Compendium.pf2e.classfeatures.S6WW4Yyg4XonXGHD",
        },
        "93v1o": {
          img: "systems/pf2e/icons/features/classes/choice-feature.webp",
          level: 1,
          name: "Arcane School",
          uuid: "Compendium.pf2e.classfeatures.7nbKDBGvwSx9T27G",
        },
        c3blc: {
          img: "systems/pf2e/icons/features/classes/legendary-spellcaster.webp",
          level: 19,
          name: "Legendary Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.Hfaa7TuLn3nE8lr3",
        },
        djzu5: {
          img: "systems/pf2e/icons/features/classes/archwizards-spellcraft.webp",
          level: 19,
          name: "Archwizard's Spellcraft",
          uuid: "Compendium.pf2e.classfeatures.ZjwJHmjPrSs6VDez",
        },
        fqsfu: {
          img: "systems/pf2e/icons/features/classes/master-spellcaster.webp",
          level: 15,
          name: "Master Spellcaster",
          uuid: "Compendium.pf2e.classfeatures.l1InYvhnQSz6Ucxc",
        },
        hbsn6: {
          img: "systems/pf2e/icons/features/classes/arcane-thesis.webp",
          level: 1,
          name: "Arcane Thesis",
          uuid: "Compendium.pf2e.classfeatures.M89l9FOnjHe63wD7",
        },
        mqstv: {
          img: "systems/pf2e/icons/features/classes/lightning-reflexes.webp",
          level: 5,
          name: "Lightning Reflexes",
          uuid: "Compendium.pf2e.classfeatures.TUOeATt52P43r5W0",
        },
        p9c01: {
          img: "systems/pf2e/icons/features/classes/magical-fortitude.webp",
          level: 9,
          name: "Magical Fortitude",
          uuid: "Compendium.pf2e.classfeatures.70jqXP2eS4tRZ0Ok",
        },
        phtt9: {
          img: "systems/pf2e/icons/features/classes/alertness.webp",
          level: 11,
          name: "Alertness",
          uuid: "Compendium.pf2e.classfeatures.D8CSi8c9XiRpVc5M",
        },
        v5yt7: {
          img: "systems/pf2e/icons/features/classes/arcane-bond.webp",
          level: 1,
          name: "Arcane Bond",
          uuid: "Compendium.pf2e.classfeatures.au0lwQ1nAcNQwcGh",
        },
        yp2vs: {
          img: "systems/pf2e/icons/features/classes/wizard-weapon-expertise.webp",
          level: 11,
          name: "Wizard Weapon Expertise",
          uuid: "Compendium.pf2e.classfeatures.GBsC2cARoFiqMi9V",
        },
        ytft4: {
          img: "systems/pf2e/icons/features/classes/defensive-robes.webp",
          level: 13,
          name: "Defensive Robes",
          uuid: "Compendium.pf2e.classfeatures.gU7epgcPSm0TD1UK",
        },
      },
      keyAbility: {
        value: ["int"],
      },
      perception: 1,
      rules: [
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-club.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-crossbow.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-dagger.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-heavy-crossbow.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.martial.weapon-base-staff.rank",
          value: 1,
        },
        {
          key: "ActiveEffectLike",
          mode: "upgrade",
          path: "system.proficiencies.traditions.arcane.rank",
          value: {
            brackets: [
              {
                end: 6,
                start: 1,
                value: 1,
              },
              {
                end: 14,
                start: 7,
                value: 2,
              },
              {
                end: 18,
                start: 15,
                value: 3,
              },
              {
                start: 19,
                value: 4,
              },
            ],
            field: "actor|system.details.level.value",
          },
        },
      ],
      savingThrows: {
        fortitude: 1,
        reflex: 1,
        will: 2,
      },
      skillFeatLevels: {
        value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
      skillIncreaseLevels: {
        value: [3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      source: {
        value: "Pathfinder Core Rulebook",
      },
      trainedSkills: {
        additional: 2,
        value: ["arc"],
      },
      traits: {
        custom: "",
        rarity: "common",
        value: [],
      },
    },
    type: "class",
  },
];

export default playerClasses;
