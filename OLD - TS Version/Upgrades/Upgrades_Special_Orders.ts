interface Upgrade {
    name: string;
    hfp: string;
    cost: number;
    type: string;
    limited: number;
    restriction: string; // Restriction based on unit type, faction, and subType
  }
  
  // Example special orders upgrades
  const specialOrdersUpgrades: Upgrade[] = [
    {
      name: "Snap Shot",
      hfp: "snap_shot",
      cost: 2,
      type: "special order",
      limited: 1,
      restriction: "Any Spartan, Any, Any" // Any Spartan unit, no specific sub-type
    },
    {
      name: "Army of One",
      hfp: "army_of_one",
      cost: 6,
      type: "special order",
      limited: 1,
      restriction: "UNSC, Spartan, Unique" // Only Master Chief (Unique Spartan)
    },
    {
      name: "Return to Sender",
      hfp: "return_to_sender",
      cost: 5,
      type: "special order",
      limited: 1,
      restriction: "Any Spartan, Any, Any" // Any Spartan, no specific sub-type
    },
    {
      name: "Reinforcements Incoming",
      hfp: "reinforcements_incoming",
      cost: 5,
      type: "special order",
      limited: 1,
      restriction: "Any, Sangheili Mercenaries, Any" // Any faction with Sangheili Mercenaries
    },
    {
      name: "Alliance",
      hfp: "alliance",
      cost: 3,
      type: "special order",
      limited: 1,
      restriction: "Any Banished, Any, Any" // Any Banished unit
    }
  ];
  
  export { specialOrdersUpgrades };
  
