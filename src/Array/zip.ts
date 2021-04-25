import { isArray } from 'src/index';
/** zip([arrays])
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

 * Arguments
 * - [arrays] (...Array): The arrays to process.
 * Returns
 * (Array): Returns the new array of grouped elements.
*/

export const zip = (...arrays: unknown[][]): unknown[][] => {
  const result: unknown[][] = [];

  arrays.forEach((array, i) => {
    array.forEach((item: unknown, j: number) => {
      if (isArray(result[j])) {
        result[j][i] = item;
      } else {
        const emptyArray = new Array(arrays.length).fill(undefined);
        emptyArray[i] = item;
        result[j] = emptyArray;
      }
    });
  });

  return result;
};
