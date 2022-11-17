const field = [];

export const addPlant = (seedObj) => {
  // if the plant seed is "corn", make sure to plant both corn plants in the array
  if (Array.isArray(seedObj)) {
    for (const seed of seedObj) {
      field.push(seed);
    }
  } else {
    field.push(seedObj);
  }
};

export const usePlants = () => {
  return [...field];
};
