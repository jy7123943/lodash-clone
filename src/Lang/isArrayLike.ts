import { isArray } from './isArray';

/** isArrayLike(value)
 * Checks if value is array-like. A value is considered array-like if it's not a function and has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is array-like, else false.
 */

export const isArrayLike = <T>(value: T): boolean => (
  isArray(value)
    || (
      !!value
        && typeof value !== 'function'
        && (value as Record<string, any>).hasOwnProperty('length')
        && (value as Record<string, any>).length >= 0
        && (value as Record<string, any>).length <= Number.MAX_SAFE_INTEGER
    )
);
