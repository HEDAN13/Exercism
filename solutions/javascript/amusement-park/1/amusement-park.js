/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId,
  };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  if (visitor.ticketId) {
    visitor.ticketId = null;
  }
  return visitor;
}
/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export let ticketStatus = (tickets, ticketId) =>
  !tickets.hasOwnProperty(ticketId)
    ? "unknown ticket id"
    : tickets[ticketId] === null
    ? "not sold"
    : `sold to ${tickets[ticketId]}`;

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export let simpleTicketStatus = (tickets, ticketId) =>
  tickets[ticketId] ?? "invalid ticket !!!";

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export let gtcVersion = (visitor) => visitor.gtc?.version;
