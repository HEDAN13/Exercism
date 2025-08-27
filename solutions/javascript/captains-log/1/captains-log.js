// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export let randomShipRegistryNumber = () =>
  `NCC-${Math.ceil(Math.random() * (9999 - 1000 + 1) + 1000)
    .toString()
    .padStart(4, "0")}`;

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export let randomStardate = () => Math.floor(Math.random() * 1000) + 41000;

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export let randomPlanetClass = () => {
  const classes = "DHJKLMNRTY";
  return classes[Math.floor(Math.random() * classes.length)];
};
