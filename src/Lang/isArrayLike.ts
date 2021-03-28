import { isArray } from './isArray';

/** isArrayLike(value)
 * Checks if value is array-like. A value is considered array-like if it's not a function and has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is array-like, else false.
 */

type ObjectOrString = Record<string, any> | string;

export const isArrayLike = (value: unknown): boolean => (
  isArray(value)
    || (
      !!value
        && typeof value !== 'function'
        && (value as ObjectOrString).hasOwnProperty('length')
        && (value as ObjectOrString).length >= 0
        && (value as ObjectOrString).length <= Number.MAX_SAFE_INTEGER
    )
);
