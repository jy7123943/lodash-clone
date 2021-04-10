/** isArray(value)
 * Checks if value is classified as an Array object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is an array, else false.
 */

export const isArray = (value: unknown | unknown[]): value is unknown[] => (
  Array.isArray(value)
);
