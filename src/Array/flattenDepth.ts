import { isArray } from 'src/index';
/** flattenDepth(array, [depth=1])
 * Recursively flatten array up to depth times.

 * Arguments
 * - array (Array): The array to flatten.
 * - [depth=1] (number): The maximum recursion depth.
 * Returns
 * (Array): Returns the new flattened array.
*/

export const flattenDepth = <T>(array: (T | T[])[], depth = 1): (T | T[])[] => {
  if (depth <= 0) {
    return [...array];
  }

  const result = [];
  for (const item of array) {
    if (isArray(item)) {
      if (depth > 1) {
        result.push(...flattenDepth(item, depth - 1));
      } else {
        result.push(...item);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};
