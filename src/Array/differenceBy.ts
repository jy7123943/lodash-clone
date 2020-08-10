import { createIteratee } from 'src/utils';

import { difference } from './difference';

/** differenceBy(array, [values], [iteratee=_.identity])
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value).
 * Note: Unlike 'pullAll', this method returns a new array.
 * Arguments
 * - array (Array): The array to inspect.
 * - [values] (...Array): The values to exclude.
 * - [iteratee=_.identity] (Function): The iteratee invoked per element.
 * Returns - (Array): Returns the new array of filtered values.
 */

type Iteratee = (arrValue: any) => any;

export const differenceBy = (
  array: unknown[],
  values?: unknown[],
  iteratee?: string | number | Iteratee,
): unknown[] => {
  if (iteratee === undefined) return difference(array, values);

  if (!array.length) return [];
  if (!values?.length) return array.slice();
  const newIteratee = createIteratee(iteratee);

  const comparison = values.map(v => newIteratee(v));

  return array.filter(v => !comparison.includes(
    newIteratee(v),
  ));
};
