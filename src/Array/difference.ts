/** difference(array, [values])
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
 * Note: Unlike 'pullAll', this method returns a new array.
 * Arguments
 * - array (Array): The array to inspect.
 * - [values] (...Array): The values to exclude.
 * Returns - (Array): Returns the new array of filtered values.
 */

export const difference = <T>(array: T[], values?: unknown[]): T[] => {
  if (!Array.isArray(array) || !array.length) return [];
  if (!values || !Array.isArray(values) || !values?.length) return array.slice();

  return array.filter(item => !values.includes(item));
};
