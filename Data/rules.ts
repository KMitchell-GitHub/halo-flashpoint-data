// Define interfaces for the structure
interface WeaponRestriction {
    maxPerWeapon: number;
  }
  
  interface UpgradeRule {
    maxPerUnit?: number;
    maxPerSquad?: number;
    maxPerFireteam?: number;
    noDuplicateItemPerUnit?: boolean;
    excludedFromWeaponRestriction?: boolean;
    excludedFromItemSlot?: boolean;
    minSOPerFireteam?: number;
    maxSOPerFireteam?: number;
  }
  
  interface UnitSelectionRules {
    minUnits: number;
    maxUnits: number | null;
    weaponRestriction: WeaponRestriction;
  }
  
  interface Rules {
    unitSelection: UnitSelectionRules;
    weaponUpgrades: UpgradeRule;
    grenadeUpgrades: UpgradeRule;
    itemUpgrades: UpgradeRule;
    fireteamCommandUpgrades: UpgradeRule;
    specialOrders: UpgradeRule;
  }
  
  // Example of how the rules could be typed
  const rules: Rules = {
    unitSelection: {
      minUnits: 1,
      maxUnits: null,
      weaponRestriction: {
        maxPerWeapon: 2
      }
    },
    weaponUpgrades: {
      maxPerSquad: 1,
      excludedFromWeaponRestriction: true
    },
    grenadeUpgrades: {
      maxPerUnit: 2,
      excludedFromItemSlot: true
    },
    itemUpgrades: {
      maxPerUnit: 2,
      maxPerFireteam: 2,
      noDuplicateItemPerUnit: true
    },
    fireteamCommandUpgrades: {
      maxPerSquad: 1
    },
    specialOrders: {
      minSOPerFireteam: 1,
      maxSOPerFireteam: 3
    }
  };
  