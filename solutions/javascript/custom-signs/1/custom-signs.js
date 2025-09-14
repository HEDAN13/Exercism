// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export let buildSign = (occasion, name = "") =>
  `Happy ${occasion}${name !== "" ? " " + name : name}!`;

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export let buildBirthdaySign = (age) =>
  `${buildSign("Birthday")} What a ${
    age < 50 ? "young" : "mature"
  } fellow you are.`;

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export let graduationFor = (name, year) =>
  `Congratulations ${name}!\nClass of ${year}`;

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export let costOf = (sign, currency) =>
  `Your sign costs ${(20 + sign.length * 2).toFixed(2)} ${currency}.`;
