// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let value1 = "";
  let value2 = "";
  for (let i = 0; i < array1.length; i++) {
    value1 = value1.concat(String(array1[i]));
  }
  for (let i = 0; i < array2.length; i++) {
    value2 = value2.concat(String(array2[i]));
  }
  return Number(value1) + Number(value2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let value1 = String(value);
  const reversedValue = value1.split("").reverse().join("");
  return value1 === reversedValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input.trim() === "") {
    return "Required field";
  }
  const trimmedInput = input.trim();
  if (Number.isNaN(Number(trimmedInput)) || Number(trimmedInput) === 0) {
    return "Must be a number besides 0";
  }
  return "";
}
