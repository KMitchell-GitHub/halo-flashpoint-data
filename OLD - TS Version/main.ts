import { Unit } from "../data/units/unit_types";
import { unscUnits } from "../data/units/unsc_units";
import { theBanishedUnits } from "../data/units/the_banished_units";
import { validateSquad } from "../data/rules";

// DOM elements
const unitSelect = document.getElementById("unitSelect") as HTMLSelectElement;
const factionSelect = document.getElementById("factionSelect") as HTMLSelectElement;
const selectedUnitsDiv = document.getElementById("selectedUnits") as HTMLElement;
const totalPointsEl = document.getElementById("totalPoints") as HTMLElement;
const limitWarning = document.getElementById("limitWarning") as HTMLElement;
const pointLimitInput = document.getElementById("pointLimit") as HTMLInputElement;
const validateButton = document.getElementById("validateButton") as HTMLButtonElement;

// Data state
let availableUnits: Unit[] = [];
let selectedUnits: Unit[] = [];

// Load units based on selected faction
function fetchUnits(): void {
  const faction = factionSelect.value;
  unitSelect.innerHTML = '<option value="">-- Select a unit --</option>';
  availableUnits = [];

  if (faction === "UNSC") {
    availableUnits = unscUnits.map(u => ({ ...u, faction }));
  } else if (faction === "The Banished") {
    availableUnits = theBanishedUnits.map(u => ({ ...u, faction }));
  }

  populateUnitSelect();
}

// Populate the dropdown with unit options
function populateUnitSelect(): void {
  unitSelect.innerHTML = '<option value="">-- Select a unit --</option>';
  availableUnits.forEach((unit, index) => {
    const option = document.createElement("option");
    option.value = index.toString();
    option.textContent = unit.variant
      ? `${unit.name} - ${unit.weapon} (${unit.variant})`
      : `${unit.name} - ${unit.weapon}`;
    unitSelect.appendChild(option);
  });
}

// Add a unit to the selected list
function addUnit(): void {
  const index = unitSelect.value;
  if (index === "") return;

  const unit = availableUnits[parseInt(index)];
  selectedUnits.push(unit);
  renderSelectedUnits();
}

// Render selected units and update squad points
function renderSelectedUnits(): void {
  selectedUnitsDiv.innerHTML = "";
  let totalPoints = 0;

  selectedUnits.forEach((unit, i) => {
    const div = document.createElement("div");
    div.className = "unit-card";
    totalPoints += unit.squadPoints;

    div.innerHTML = `
      <strong>${unit.name} (${unit.weapon})</strong><br>
      Faction: ${unit.faction}<br>
      Stats: SP: ${unit.stats.SP}, RA: ${unit.stats.RA}, FI: ${unit.stats.FI}, SV: ${unit.stats.SV}, AR: ${unit.stats.AR}, HP: ${unit.stats.HP}<br>
      Ranged Weapon: ${unit.rangedWeapon.name} (Range: ${unit.rangedWeapon.range}, AP: ${unit.rangedWeapon.AP})<br>
      Close Combat Weapon: ${unit.closeCombatWeapon.name}<br>
      Squad Points: ${unit.squadPoints}<br>
      <button onclick="removeUnit(${i})">Remove</button>
    `;

    selectedUnitsDiv.appendChild(div);
  });

  totalPointsEl.textContent = totalPoints.toString();

  const limit = parseInt(pointLimitInput.value);
  if (totalPoints > limit) {
    limitWarning.textContent = "Squad exceeds point limit!";
    limitWarning.className = "over-limit";
  } else {
    limitWarning.textContent = "";
    limitWarning.className = "";
  }
}

// Remove a unit from the list
function removeUnit(index: number): void {
  selectedUnits.splice(index, 1);
  renderSelectedUnits();
}

// Validate squad using imported rules
function validateSquadComposition(): void {
  const result = validateSquad(selectedUnits);
  if (result.valid) {
    alert("Squad is valid!");
  } else {
    alert("Invalid squad: " + result.message);
  }
}

// Event listeners
factionSelect.addEventListener("change", fetchUnits);
unitSelect.addEventListener("change", addUnit);
validateButton.addEventListener("click", validateSquadComposition);
