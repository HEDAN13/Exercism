/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutes) {
  switch (minutes) {
    case undefined:
      return "You forgot to set the timer.";
    case 0:
      return "Lasagna is done.";
    default:
      return "Not done, please wait.";
  }
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const layer of layers) {
    if (layer === "noodles") {
      noodles += 50;
    } else if (layer === "sauce") {
      sauce += 0.2;
    }
  }

  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList) {
  if (friendsList.length === 0) {
    return;
  }
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, scale) {
  const scaledRecipe = {};
  for (const ingredient in recipe) {
    if (recipe.hasOwnProperty(ingredient)) {
      scaledRecipe[ingredient] = parseFloat(
        ((recipe[ingredient] * scale) / 2).toFixed(6)
      );
    }
  }
  return scaledRecipe;
}
