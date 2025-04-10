// Define upgrade sources
const upgradeSources = {
    weapons: 'https://raw.githubusercontent.com/KMitchell-GitHub/halo-flashpoint-data/main/Data/upgrades/Upgrades_Weapons.json',
    grenades: 'https://raw.githubusercontent.com/KMitchell-GitHub/halo-flashpoint-data/main/Data/upgrades/Upgrades_Grenades.json',
    items: 'https://raw.githubusercontent.com/KMitchell-GitHub/halo-flashpoint-data/main/Data/upgrades/Upgrades_Items.json',
    specialOrders: 'https://raw.githubusercontent.com/KMitchell-GitHub/halo-flashpoint-data/main/Data/upgrades/Upgrades_SpecialOrders.json'
  };
  
  // Upgrade storage object
  const upgrades = {
    weapons: [],
    grenades: [],
    items: [],
    specialOrders: []
  };
  
  // Fetch and load upgrades from all sources
  async function loadAllUpgrades() {
    const loadPromises = Object.entries(upgradeSources).map(async ([type, url]) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        upgrades[type] = data;
      } catch (error) {
        console.error(`Failed to load ${type} upgrades:`, error);
      }
    });
  
    await Promise.all(loadPromises);
    console.log("All upgrades loaded:", upgrades);
  }
  
  // Example usage
  loadAllUpgrades();
  