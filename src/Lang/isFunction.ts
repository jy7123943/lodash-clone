/** isFunction(value)
 * Checks if value is classified as a Function object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is a function, else false.
 */

export const isFunction = <T>(value: T): boolean => (
  typeof value === 'function'
);
