/** isNull(value)
 * Checks if value is null.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is null, else false.
 */

export const isNull = (value: unknown): value is null => (
  value === null
);
