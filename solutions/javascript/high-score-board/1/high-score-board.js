/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  return { "The Best Ever": 1000000 };
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export let addPlayer = (scoreBoard, player, score) => (
  (scoreBoard[player] = score), scoreBoard
);

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export let removePlayer = (scoreBoard, player) => (
  scoreBoard.hasOwnProperty(player) && delete scoreBoard[player], scoreBoard
);

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export let updateScore = (scoreBoard, player, points) => (
  scoreBoard.hasOwnProperty(player) && (scoreBoard[player] += points),
  scoreBoard
);

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export let applyMondayBonus = (scoreBoard) => (
  Object.keys(scoreBoard).forEach((player) => (scoreBoard[player] += 100)),
  scoreBoard
);
