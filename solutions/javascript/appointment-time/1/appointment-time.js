// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export const createAppointment = (days, now = undefined) => {
  const currentDay = now ? new Date(now) : new Date();
  const appointmentDate = new Date(currentDay);
  appointmentDate.setDate(currentDay.getDate() + days);
  return appointmentDate;
};

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export const getAppointmentTimestamp = (appointmentDate) =>
  appointmentDate.toISOString();

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export const getAppointmentDetails = (timestamp) => {
  return {
    year: new Date(timestamp).getFullYear(),
    month: new Date(timestamp).getMonth(),
    date: new Date(timestamp).getDate(),
    hour: new Date(timestamp).getHours(),
    minute: new Date(timestamp).getMinutes(),
  };
};

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export const updateAppointment = (timestamp, options) => {
  const date = new Date(timestamp);

  if (options.year !== undefined) {
    date.setFullYear(options.year);
  }
  if (options.month !== undefined) {
    date.setMonth(options.month);
  }
  if (options.date !== undefined) {
    date.setDate(options.date);
  }
  if (options.hour !== undefined) {
    date.setHours(options.hour);
  }
  if (options.minute !== undefined) {
    date.setMinutes(options.minute);
  }

  return getAppointmentDetails(date.toISOString());
};

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export const timeBetween = (timestampA, timestampB) => {
  const dateA = new Date(timestampA);
  const dateB = new Date(timestampB);
  const diffMs = Math.abs(dateB.getTime() - dateA.getTime());
  return Math.round(diffMs / 1000);
};

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export const isValid = (appointmentTimestamp, currentTimestamp) =>
  appointmentTimestamp > currentTimestamp;
