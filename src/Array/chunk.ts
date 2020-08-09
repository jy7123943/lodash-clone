/** chunk(array, [size=1])
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * Arguments
 * - array (Array): The array to process.
 * - [size=1] (number): The length of each chunk
 * Returns
 * (Array): Returns the new array of chunks.
 */

export const chunk = <T>(array: T[], size = 1): T[][] => {
  if (!Array.isArray(array) || !array.length || !size) return [];

  const count = Math.floor((array.length / size) + (array.length % size && 1));

  return Array.from({ length: count }, (v, i) => array.slice(i * size, i * size + size));
};
