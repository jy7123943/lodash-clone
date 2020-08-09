/** concat(array, [values])
 * Creates a new array concatenating array with any additional arrays and/or values.
 * Arguments
 * - array (Array): The array to concatenate.
 * - [values] (...*): The values to concatenate.
 * Returns - (Array): Returns the new concatenated array.
 */

export const concat = <T, K>(array: T[], ...values: (K[] | K[][])): (T | K | K[])[] => {
  if (!Array.isArray(array) || !array.length) return [];

  const result: (T | K | K[])[] = array.slice();

  values.forEach((item: K | K[]) => {
    if (Array.isArray(item)) {
      result.push(item[0]);
    } else {
      result.push(item);
    }
  });

  return result;
};
