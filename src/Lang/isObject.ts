/** isObject(value)
 * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is an object, else false.
 */

export const isObject = <T>(value: T): boolean => (
  value instanceof Object
);
