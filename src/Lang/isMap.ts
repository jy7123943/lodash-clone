/** isMap(value)
 * Checks if value is classified as a Map object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is a map, else false.
 */

export const isMap = <T>(value: T): boolean => (
  value instanceof Map
);
