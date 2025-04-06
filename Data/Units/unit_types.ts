export interface UnitStats {
    SP: string;
    RA: string;
    FI: string;
    SV: string;
    AR: string;
    HP: string;
  }
  
  export interface Weapon {
    type: string;
    name: string;
    range: string;
    AP: number;
    keywords: string[];
  }
  
  export interface Unit {
    name: string;
    weapon: string;
    variant: string | null;
    faction: string;
    unitType: string; // e.g., "Spartan", "Vehicle"
    subType: string | null; // e.g., "Unique"
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
  