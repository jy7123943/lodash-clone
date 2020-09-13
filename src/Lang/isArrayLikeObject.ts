import { isArrayLike } from './isArrayLike';

/** isArrayLikeObject(value)
 * This method is like _.isArrayLike except that it also checks if value is an object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is an array-like object, else false.
 */

export const isArrayLikeObject = <T>(value: T): boolean => (
  isArrayLike(value) && typeof value === 'object'
);
