interface GrenadeUpgrade {
    name: string;
    hfp: string;
    cost: number;
    type: string;
    limited?: number;
    range: string;
    armourpiercing?: number;
    armorPiercing?: number;
    keywords: string[];
    description: string[];
  }
  
  const grenadeUpgrades: GrenadeUpgrade[] = [
    {
      name: "Fragmentation Grenade",
      hfp: "fragmentation_grenade",
      cost: 3,
      type: "grenade",
      limited: 2,
      range: "R3",
      armourpiercing: 1,
      keywords: ["Frag 5)", "Grenade", "One-Use"],
      description: ["The standard high-explosive, dual-purpose fragmentation grenade."]
    },
    {
      name: "Plasma Grenade",
      hfp: "plasma_grenade",
      cost: 6,
      type: "grenade",
      range: "R3",
      armorPiercing: 2,
      keywords: ["Frag (4)", "Grenade", "Lethal (1)", "One-Use", "Sticky"],
      description: ["The high-powered plasma grenade that sticks to targets."]
    }
  ];
  
  export default grenadeUpgrades;
  