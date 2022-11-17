export const Catalog = (harvestedPlants) => {
  let htmlElement = "";
  for (const plant of harvestedPlants) {
    htmlElement += `<section class="plant">${plant.type}</section>\n`;
  }
  return htmlElement;
};
