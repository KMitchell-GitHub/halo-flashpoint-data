interface UpgradeItem {
    name: string;
    hfp: string;
    cost: number;
    type: string;
    limited: number;
    range: number | null;
    armorPiercing: number | null;
    keywords: string[];
    description: string;
  }
  
  const upgradesItems: UpgradeItem[] = [
    {
      name: "Drop Wall",
      hfp: "drop_wall",
      cost: 5,
      type: "item",
      limited: 1,
      range: null,
      armorPiercing: null,
      keywords: ["Energy Shield Barrier (2)", "One-Use"],
      description: ""
    },
    {
      name: "Active Camouflage",
      hfp: "active_camouflage",
      cost: 3,
      type: "item",
      limited: 1,
      range: null,
      armorPiercing: null,
      keywords: ["Camouflage", "One-Use"],
      description: "When this item is used, enemy models may not draw LOS to the camouflaged model. The effect lasts until the model is killed, or takes a Sprint action, a Shoot action, or an Assault action."
    },
    {
      name: "Explosive Ammo",
      hfp: "explosive_ammo",
      cost: 4,
      type: "item",
      limited: 1,
      range: null,
      armorPiercing: null,
      keywords: ["Lethal (1)", "One-Use"],
      description: "The model carrying this item may use it with a ranged weapon to gain +1 die modifier and Lethal (1) in a single Ranged test. May not be used with weapons which have the Explosive, Grenade, or Lunge."
    }
  ];
  