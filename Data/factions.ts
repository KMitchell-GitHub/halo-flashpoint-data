// Define interface for a single faction
interface Faction {
    name: string;
    hfp: string;
    unitFile: string;
  }
  
  // Define the array of factions using the interface
  export const factions: Faction[] = [
    {
      name: "UNSC",
      hfp: "unsc",
      unitFile: "units/unsc_units.json"
    },
    {
      name: "The Banished",
      hfp: "thebanished",
      unitFile: "units/the_banished_units.json"
    }
  ];
  
