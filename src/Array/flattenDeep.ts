import { isArray } from 'src/index';
/** flattenDeep(array)
 * Recursively flattens array.

 * Arguments
 * - array (Array): The array to flatten.
 * Returns
 * (Array): Returns the new flattened array.
*/

export const flattenDeep = <T>(array: (T | T[])[]): T[] => {
  const result = [];
  for (const item of array) {
    if (isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item);
    }
  }

  return result;
};
