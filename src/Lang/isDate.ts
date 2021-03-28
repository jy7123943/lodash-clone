/** isDate(value)
 * Checks if value is classified as a Date object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is a date object, else false.
 */

export const isDate = (value: unknown): value is Date => (
  value instanceof Date
);
