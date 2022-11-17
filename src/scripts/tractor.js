import { addPlant } from "./field.js";

import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (plantingPlanArray) => {
  // define a variable to hold seed
  let seed = null;
  // go through each row of the plan
  for (const row of plantingPlanArray) {
    // within each row, go through each plant
    // and call the factory function for that plant
    for (const plant of row) {
      if (plant === "Asparagus") {
        seed = createAsparagus();
      } else if (plant === "Corn") {
        seed = createCorn();
      } else if (plant === "Potato") {
        seed = createPotato();
      } else if (plant === "Soybean") {
        seed = createSoybean();
      } else if (plant === "Sunflower") {
        seed = createSunflower();
      } else if (plant === "Wheat") {
        seed = createWheat();
      }
      // add the seed at the end, rather than after each factory function
      addPlant(seed);
    }
  }
};
