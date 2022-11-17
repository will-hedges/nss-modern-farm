export const harvestPlants = (plantsArray) => {
  // make a container to hold all the harvested plants
  const harvest = [];
  // go through each exsising plant
  for (const plant of plantsArray) {
    // if the plant is corn, sell 1/2 and keep 1/2
    //  so determine the number of plants you want to add to the harvest
    let plantOutput = plant.output;
    if (plant.type === "Corn") {
      plantOutput *= 0.5;
    }

    // and then add that plant that number of times
    for (let i = 0; i < plantOutput; i++) {
      harvest.push(plant);
    }
  }
  return harvest;
};
