const userInputString = prompt("Please enter the flavors you would like.");

const flavors = userInputString.split(",");

function flavorCounter(currentFlavor) {
  flavorCount = {};

  let i = 0;
  while (i < flavors.length) {
    const currentFlavor = flavors[i];
    if (currentFlavor in flavorCount) {
      flavorCount[currentFlavor] = flavorCount[currentFlavor] + 1;
      i = i + 1;
    } else {
      flavorCount[currentFlavor] = 1;
      i = i + 1;
    }
  }
  return flavorCount;
}

const countOfFlavors = flavorCounter(flavors);
console.log(countOfFlavors);
