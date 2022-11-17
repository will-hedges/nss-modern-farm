import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";

console.log("Welcome to the main module");

// get the array of arrays for the planting plan
const yearlyPlan = createPlan();

// plant all of the seeds into the field array
plantSeeds(yearlyPlan);

// get a copy of the plantsInField array from field.js
const plantedPlants = usePlants();

// harvest the planted plants
const harvest = harvestPlants(plantedPlants);

console.log(harvest);
