import { difference } from './difference';

/** differenceWith(array, [values], [comparator])
 * This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
 * Note: Unlike 'pullAll', this method returns a new array.
 * Arguments
 * - array (Array): The array to inspect.
 * - [values] (...Array): The values to exclude.
 * - [comparator] (Function): The comparator invoked per element.
 * Returns - (Array): Returns the new array of filtered values.
 */

export const differenceWith = <T, K>(
  array: T[],
  values?: K[],
  comparator?: (arrVal: T, othVal: K) => boolean,
): T[] => {
  if (!comparator) return difference(array, values);

  if (!Array.isArray(array) || !array.length) return [];
  if (!Array.isArray(values) || !values?.length) return array.slice();

  return array.filter(arrVal => (
    !values.some((othVal) => comparator(arrVal, othVal))
  ));
};
