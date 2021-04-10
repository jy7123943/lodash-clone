/** nth(array, [n=0])
 * Gets the element at index n of array. If n is negative, the nth element from the end is returned.

 * Arguments
 * - array (Array): The array to query.
 * - [n=0] (number): The index of the element to return.
 * Returns
 * (*): Returns the nth element of array.
*/

export const nth = <ArrayItem>(
  array: ArrayItem[],
  n = 0,
): ArrayItem | undefined => (
    array[n < 0 ? array.length + n : n]
  );
