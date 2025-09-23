/// <reference path="./global.d.ts" />
//
// @ts-check

const prices = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
  none: 0,
};

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let total = prices[pizza] ?? 0;
  if (extras.length === 0) return total;

  let extra = extras[0];
  total = prices[extra] + pizzaPrice(pizza, ...extras.slice(1));
  return total;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export const orderPrice = (pizzaOrders) =>
  pizzaOrders.reduce(
    (total, pizzaOrder) =>
      total + pizzaPrice(pizzaOrder.pizza, ...pizzaOrder.extras),
    0
  );
