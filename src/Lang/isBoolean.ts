/** isBoolean(value)
 * Checks if value is classified as a boolean primitive or object.

 * Arguments
 * - value (*): The value to clone.
 * Returns
 * (boolean): Returns true if value is a boolean, else false.
 */

export const isBoolean = <T>(value: T): boolean => (
  typeof value === 'boolean'
);
