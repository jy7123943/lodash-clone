/** zip([arrays])
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

 * Arguments
 * - [arrays] (...Array): The arrays to process.
 * Returns
 * (Array): Returns the new array of grouped elements.
*/

export const zip = (...arrays: unknown[][]): unknown[][] => {
  const result: unknown[][] = [];

  arrays.forEach((array) => {
    array.forEach((item: unknown, i: number) => {
      if (result[i]) {
        result[i].push(item);
      } else {
        result[i] = [item];
      }
    });
  });

  return result;
};
