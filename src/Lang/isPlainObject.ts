import { isNil } from './isNil';
/** isPlainObject(value)
 * Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is a plain object, else false.
 */

export const isPlainObject = (value: unknown): boolean => {
  if (isNil(value)) return false;
  const constructor = (value as Record<string, any>).constructor;

  return isNil(constructor) || constructor.name === 'Object';
};
