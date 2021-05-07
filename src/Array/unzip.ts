import { isArray } from 'src/index';
/** unzip(array)
 * This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.

 * Arguments
 * - array (Array): The array of grouped elements to process.
 * Returns
 * (Array): Returns the new array of regrouped elements.
*/

export const unzip = (arrays: unknown[][]): unknown[][] => {
  const result: unknown[][] = [];

  arrays.forEach((array, i) => {
    array.forEach((item, j) => {
      if (!isArray(result[j])) {
        result[j] = [];
      }
      result[j][i] = item;
    });
  });

  return result;
};
