/** castArray(value)
 * Casts value as an array if it's not one.

 * Arguments
 * - value (*): The value to inspect.
 * Returns
 * (Array): Returns the cast array.
 */

export const castArray = <T>(...value: T[]): T | T[] => (
  Array.isArray(value[0]) ? value[0] : value.slice(0, 1)
);
