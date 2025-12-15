//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (phrase) => new Set(phrase.toLowerCase().split("").filter((c) => c >= "a" && c <= "z")).size === 26;