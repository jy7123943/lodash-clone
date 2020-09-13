import { isNull } from './isNull';
/** isObjectLike(value)
 * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is object-like, else false.
 */

export const isObjectLike = <T>(value: T): boolean => (
  !isNull(value) && typeof value === 'object'
);
