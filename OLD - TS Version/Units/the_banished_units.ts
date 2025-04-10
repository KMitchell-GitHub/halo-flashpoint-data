interface UnitStats {
    SP: string;
    RA: string;
    FI: string;
    SV: string;
    AR: string;
    HP: string;
  }
  
  interface Weapon {
    type: string;
    name: string;
    range: string;
    AP: number;
    keywords: string[];
  }
  
  interface Unit {
    name: string;
    weapon: string;
    variant: string | null;
    faction: string;
    unitType: string; // New field for general unit type (e.g., "Spartan", "Vehicle")
    subType: string | null; // New field for unit sub-type (e.g., "Unique" for Master Chief)
    squadPoints: number;
    stats: UnitStats;
    keywords: string[];
    itemSlots: any | null;
    grenadeSlots: any | null;
    closeCombatWeapon: Weapon;
    rangedWeapon: Weapon;
    prebuilt: boolean;
    pickupSlot: any | null;
    upgradedCloseCombatWeapon: any | null;
  }
  
  interface UnitList {
    units: Unit[];
  }
  
  import { Unit } from "../types";

  export const unscUnits: Unit[] = [
    {
        name: "TEST BANISHED - Spartan Brawler",
        weapon: "CQS48 Bulldog",
        variant: null,
        faction: "Banished",
        unitType: "Sangheili Mercenary", // General unit type
        subType: "Standard", // Sub-type indicating this is a standard Spartan
        squadPoints: 39,
        stats: {
          SP: "2-3",
          RA: "5+",
          FI: "3+",
          SV: "5+",
          AR: "2",
          HP: "4",
        },
        keywords: ["Energy Shield (2)"],
        itemSlots: null,
        grenadeSlots: null,
        closeCombatWeapon: {
          type: "Close Combat",
          name: "Spartan Fists",
          range: "CC",
          AP: 0,
          keywords: [],
        },
        rangedWeapon: {
          type: "Ranged",
          name: "CQS48 Bulldog",
          range: "R2",
          AP: 2,
          keywords: ["Knockback", "Lethal (1)"],
        },
        prebuilt: false,
        pickupSlot: null,
        upgradedCloseCombatWeapon: null,
      },
      {
        name: "Master Chief",
        weapon: "Energy Sword",
        variant: null,
        faction: "UNSC",
        unitType: "Spartan", // General unit type
        subType: "Unique", // Master Chief is unique
        squadPoints: 88,
        stats: {
          SP: "2-3",
          RA: "3+",
          FI: "3+",
          SV: "3+",
          AR: "2",
          HP: "5",
        },
        keywords: ["Energy Shield (3)", "Stoic", "Tactician (3)"],
        itemSlots: null,
        grenadeSlots: null,
        closeCombatWeapon: {
          type: "Close Combat",
          name: "Energy Sword",
          range: "CC",
          AP: 3,
          keywords: ["ESD (2)", "Lethal (1)"],
        },
        rangedWeapon: {
          type: "Ranged",
          name: "Energy Sword",
          range: "R1",
          AP: 3,
          keywords: ["ESD (1)", "Lunge"],
        },
        prebuilt: true,
        pickupSlot: null,
        upgradedCloseCombatWeapon: null,
      },
      {
        name: "Spartan Brawler",
        weapon: "Needler",
        variant: null,
        faction: "UNSC",
        unitType: "Spartan",
        subType: "Standard",
        squadPoints: 39,
        stats: {
          SP: "2-3",
          RA: "5+",
          FI: "3+",
          SV: "5+",
          AR: "2",
          HP: "4",
        },
        keywords: ["Energy Shield (2)"],
        itemSlots: null,
        grenadeSlots: null,
        closeCombatWeapon: {
          type: "Close Combat",
          name: "Spartan Fists",
          range: "CC",
          AP: 0,
          keywords: ["melee"],
        },
        rangedWeapon: {
          type: "Ranged",
          name: "Needler",
          range: "R3",
          AP: 0,
          keywords: ["Lethal (1)", "Rapid Fire", "Weight of Fire (1)"],
        },
        prebuilt: false,
        pickupSlot: null,
        upgradedCloseCombatWeapon: null,
      }
    ],
  };
  
