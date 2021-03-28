/** isArray(value)
 * Checks if value is classified as an Array object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is an array, else false.
 */

export const isArray = <T>(value: T | T[]): value is T[] => (
  Array.isArray(value)
);
