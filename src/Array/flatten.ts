import { isArray } from 'src/index';
/** flatten(array)
 * Flattens array a single level deep.

 * Arguments
 * - array (Array): The array to flatten.
 * Returns
 * (Array): Returns the new flattened array.
*/

export const flatten = <T>(array: (T | T[])[]): T[] => {
  const result = [];
  for (const item of array) {
    if (isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }

  return result;
};
