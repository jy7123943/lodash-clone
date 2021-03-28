/** isNumber(value)
 * Checks if value is classified as a Number primitive or object.
 * Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is a number, else false.
 */

export const isNumber = (value: unknown): value is number => (
  typeof value === 'number'
);
