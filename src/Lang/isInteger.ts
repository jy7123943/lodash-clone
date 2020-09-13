/** isInteger(value)
 * Checks if value is an integer.
 * Note: This method is based on Number.isInteger.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is an integer, else false.
 */

export const isInteger = <T>(value: T): boolean => (
  Number.isInteger(value)
);
