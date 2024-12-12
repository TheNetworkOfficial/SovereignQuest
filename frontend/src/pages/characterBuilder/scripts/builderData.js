// builderData.js
import humanImg from '../../../assets/images/characters/Subraces/human.png';

import woodElfImg from '../../../assets/images/characters/Subraces/woodElf.png';
import highElfImg from '../../../assets/images/characters/Subraces/highElf.png';
import halfElfImg from '../../../assets/images/characters/Subraces/halfElf.png';

import hairfootImg from '../../../assets/images/characters/Subraces/hairfoot.png';
import tallfellowImg from '../../../assets/images/characters/Subraces/tallfellow.png';
import stoutImg from '../../../assets/images/characters/Subraces/stout.png';

import mountainDwarfImg from '../../../assets/images/characters/Subraces/mountainDwarf.png';
import hillDwarfImg from '../../../assets/images/characters/Subraces/hillDwarf.png';

import mountainGnomeImg from '../../../assets/images/characters/Subraces/mountainGnome.png';
import rockGnomeImg from '../../../assets/images/characters/Subraces/rockGnome.png';

import mountainOrcImg from '../../../assets/images/characters/Subraces/mountainOrc.png';
import plainsOrcImg from '../../../assets/images/characters/Subraces/plainsOrc.png';
import halfOrcImg from '../../../assets/images/characters/Subraces/halfOrc.png';



const raceDetails = {
  Human: {
    lore: "A species of unrivaled adaptability and ambition, human's unrivaled curiosity, balanced physical and magical aptitudes, and quick reproduction have led humanity to a place of prominace. Despite this, humanity is the most fractious of the core races, often at war with one another. Humanity is considered to be the jack-of-all-trades race, equally capable of learning any given Skill, but without the specialized knowledge of other races.",
    tier: {
      1: 1,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
    primaryStats: {
      STR: 0,
      DEX: 0,
      CON: 0,
      INT: 0,
      WIS: 0,
      PER: 0,
      LUK: 0,
      CHR: 0,
      COM: 0,
    },
    bonuses: ["+5 to all Skill Acquisition Checks","Can learn non human race specific Skill's at -50% exp penalty", "Can reatempt all Skill Acquisition Checks of Rare rank or lower one time"],
    penalties: ["-10% exp to all Skill's over level 90", "-25% exp to all Skill's over level 100"],
    racialSkills: ["None"],
    skillPredispositions: ["None"]
  },
  Elf: {
    lore: "Long lived and aloof, little is known of elves that they do not wish to be known. One of the most diverse races, the elven nations of old spread across the land when it was still young, from the peaks above the clouds in the Marrowglave, to the vast forests of the Vigvarr, and even into the depths of the world. In these varied and often hostile enviroments, the elves discovered the greatest gift imparted to them by those above, evolving unique adaptations to their surroundings within only a few generations.",
    tier: {
      1: 3,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
    primaryStats: {
      STR: 0,
      DEX: 2,
      CON: -2,
      INT: 0,
      WIS: 1,
      PER: 2,
      LUK: 0,
      CHR: 0,
      COM: 0,
    },
    bonuses: ["Ultravision - 50ft", "Superior Charm Resistance", "Instinctive Grace"],
    penalties: ["Xenophobia", "Delicate Fortitude"],
    racialSkills: ["Elven Step", "Harmonic Attunement", "Perceptive Sight"],
    skillPredispositions: ["Lightfooted", "Dexterous", "Focus", "Passive Perception"]
  },
  Halfling: {
    lore: "Halflings are small, nimble folk who value comfort, friendship, and a good meal.",
    tier: {
      1: 3,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
    primaryStats: {
      STR: -2,
      DEX: 2,
      CON: -1,
      INT: 0,
      WIS: 0,
      PER: 2,
      LUK: 1,
      CHR: 1,
      COM: 0,
    },
    bonuses: ["Magical Resistance", "Superior Poison Resistance", "Natural Charm"],
    penalties: ["Cowardly", "Hungry", "Pacifist"],
    racialSkills: ["Florensense", "These Are The Best (Laziest) Of Days", "Tales Of The Glory (Story) Days"],
    skillPredispositions: ["Sleight Of Hand", "Lightfooted", "Dexterous", "Cooking"]
  },
  Dwarf: {
    lore: "It is said that there is no rival to the strength of dwarven fortitude, for in anything they do, from raising halls of unrivialed craftsmenship deep in the heart of mountain peaks, to fighting against the horrors that rise from the deep places under the ground, no challenge finds dwarven souls wanting.",
    tier: {
      1: 2,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
    primaryStats: {
      STR: 2,
      DEX: 1,
      CON: 2,
      INT: 0,
      WIS: 0,
      PER: 0,
      LUK: 0,
      CHR: -1,
      COM: 0,
    },
    bonuses: ["Infravision - 60ft", "Ultravision - 40ft", "+5 to all crafting Skill Acquisition Checks", "+5% exp to all crafting Skills", "Tireless"],
    penalties: ["Bulky", "Light Sensitive", "Clan Bound"],
    racialSkills: ["Dwarven Direction", "Dweorg Appraisal"],
    skillPredispositions: ["Crafting", "Heavy Armor", "Block"]
  },
  Gnome: {
    lore: "Thought to be a distant relative of the dwarves, Gnomes are penultimate craftsmen of the relms, having discovered both the enchanter and artificer class through their boundless curiousity and experimitation. Anti-social to the point of antagonism, Gnomish socity forms more out of a necessity to acquire aid in their indvidual endevors rather then a sense of clan or kin. Despite this, gnomish colleges are each a wonder of the world in and of themselves, containing knowledge lost, or yet to be even imagined by the other races.",
    tier: {
      1: 2,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
    primaryStats: {
      STR: 0,
      DEX: 0,
      CON: 2,
      INT: 2,
      WIS: 1,
      PER: -1,
      LUK: 0,
      CHR: 0,
      COM: 0,
    },
    bonuses: ["Infravision - 60ft", "Ultravision - 40ft", "Superior Magical Resistance", "+10% exp to all non combat Skills"],
    penalties: ["Xenophobia", "Obsessive", "Severely Weakened Najima", "Antagonistic", "Incompetent Combatant"],
    racialSkills: ["Tomte script", "Mechanically Minded", "Knowledge Of the Nisse"],
    skillPredispositions: ["Crafting", "Scribing", "Enchanting", "Teaching", "Apt Pupil"]
  },
  Orc: {
    lore: "Orcs are the youngest of the foundational races, and are the first of the them to raise one of their own to Godhood. In many ways, despite their still primitive culture, the Orcish people have always been tied inexorably to the fate of the world itself, a rapidly evolving catalyst of those above.",
    tier: {
      1: 3,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
    primaryStats: {
      STR: 3,
      DEX: 0,
      CON: 3,
      INT: 0,
      WIS: -1,
      PER: -1,
      LUK: 0,
      CHR: 0,
      COM: 0,
    },
    bonuses: ["Infravision - 30ft", "Ultravision - 20ft", "Stamina Reserves", "+20% Character EXP to level 20", "Lineage"],
    penalties: ["-20% Character EXP past level 60", "Shortsighted", "Frenzy"],
    racialSkills: ["Rites Of The Tribe", "Rites Of The Gods", "Rites Of The Living", "Rites Of The Dead"],
    skillPredispositions: ["Hunting", "Tracking", "Prayer"]
  }
};


// Store user selections in a simple object
const characterData = {
  race: null,
  subrace: null,
  gender: null,
  height: null,
  weight: null,
  age: null,
  homeland: null,
  religion: null,
  devotion: null,
};
  
  const subraceData = {
    Human: ["Human"],
    Elf: ["Wood Elf", "High Elf", "Half Elf"],
    Halfling: ["Hairfoot","Tallfellow", "Stout"],
    Dwarf: ["Mountain Dwarf", "Hill Dwarf"],
    Gnome: ["Mountain Gnome", "Rock Gnome"],
    Orc: ["Mountain Orc", "Plains Orc","Half Orc"]
  };
  
  const subraceDetails = {
    Human: {
      "Human": {
        image: humanImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
    },
    Elf: {
      "Wood Elf": {
        image: woodElfImg,
        lore: "The Sleilvien, or Wood Elves as they are known in the Common Tonuge, are the most populus of the elven subraces, and are known for their ",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
      "High Elf": {
        image: highElfImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
      "Half Elf": {
        image: halfElfImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
    },
    Halfling: {
      "Hairfoot": {
        image: hairfootImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
      "Tallfellow": {
        image: tallfellowImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
      "Stout": {
        image: stoutImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
    },
    Dwarf: {
      "Mountain Dwarf": {
        image: mountainDwarfImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
      "Hill Dwarf": {
        image: hillDwarfImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
    },
    Gnome: {
      "Mountain Gnome": {
        image: mountainGnomeImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
      "Rock Gnome": {
        image: rockGnomeImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
    },
    Orc: {
      "Mountain Orc": {
        image: mountainOrcImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
      "Plains Orc": {
        image: plainsOrcImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
      "Half Orc": {
        image: halfOrcImg,
        lore: "",
        primaryStats: { 
          STR: 0, 
          DEX: 0, 
          CON: 0, 
          INT: 0, 
          WIS: 0, 
          PER: 0, 
          LUK: 0, 
          CHR: 0, 
          COM: 0 
        },
        bonuses: [],
        penalties: [],
        racialSkills: [],
        skillPredispositions: []
      },
    },
  };
  
  function setRace(selectedRace) {
    characterData.race = selectedRace;
    characterData.subrace = null; // Reset subrace if race changes
  }
  
  function setSubrace(selectedSubrace) {
    characterData.subrace = selectedSubrace;
  }

  function setGender(selectedGender) {
    characterData.gender = selectedGender;
  }
  
  function setPhysicalAttributes(height, weight, age) {
    characterData.height = height;
    characterData.weight = weight;
    characterData.age = age;
  }
  
  function setBackground(homeland, religion, devotion) {
    characterData.homeland = homeland;
    characterData.religion = religion;
    characterData.devotion = devotion;
  }

  
  function getAvailableSubraces() {
    console.log("getAvailableSubraces called with:", characterData.race);
    console.log("subraceData:", subraceData);
    return subraceData[characterData.race] || [];
  }  
  
  function getCharacterSummary() {
    // For now, just race and subrace. Expand as you add more steps.
    return {
      race: characterData.race,
      subrace: characterData.subrace
    };
  }
  
  // Dummy function to simulate sending data to a backend server
  async function submitCharacterData() {
    const summary = getCharacterSummary();
    // Replace this with a real fetch call or WebSocket to your backend when available
    console.log("Submitting character data to backend:", summary);
    // Example:
    // const response = await fetch('/api/characters', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(summary)
    // });
    // const result = await response.json();
    // return result;
    return { success: true, message: "Character data accepted (dummy response)" };
  }

  export { raceDetails, subraceDetails, subraceData };

  
  export {
    characterData,
    setRace,
    setSubrace,
    setGender,
    setPhysicalAttributes,
    setBackground,
    getAvailableSubraces,
    getCharacterSummary,
    submitCharacterData
  };