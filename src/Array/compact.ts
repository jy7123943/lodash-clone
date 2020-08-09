/** compact(array)
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * Arguments - array (Array): The array to compact.
 * Returns - (Array): Returns the new array of filtered values.
 */

export const compact = <T>(array: T[]): T[] => {
  if (!Array.isArray(array) || !array.length) return [];

  return array.filter(v => v);
};
