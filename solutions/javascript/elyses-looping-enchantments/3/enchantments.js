// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
// 🚨 Use .forEach
export function cardTypeCheck(stack, card) {
  let counter = 0;
  stack.forEach((cardInStack) => {
    if (cardInStack === card) counter++;
  });
  return counter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let counter = 0;

  for (const card of stack) {
    if (card % 2 === 0) counter++;
  }
  if (type) return counter;
  return stack.length - counter;
}
