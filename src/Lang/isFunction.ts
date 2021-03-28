/** isFunction(value)
 * Checks if value is classified as a Function object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is a function, else false.
 */

type Func = (...params: any[]) => any;
export const isFunction = (value: unknown): value is Func => (
  typeof value === 'function'
);
