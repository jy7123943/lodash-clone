/** isNil(value)
 * Checks if value is null or undefined.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is nullish, else false.
 */

export const isNil = <T>(value: T): boolean => (
  value == null
);
