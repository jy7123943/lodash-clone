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

type Iteratee = (param: any) => any;

const executeIteratee = (
  iteratee: string | number | Iteratee,
  value: any,
) => (
  typeof iteratee === 'function'
    ? (iteratee as Iteratee)(value)
    : value[iteratee as (string | number)]
);

export const differenceBy = <T>(
  array: unknown[],
  values?: unknown[],
  iteratee?: string | number | Iteratee,
): unknown[] => {
  if (!values || iteratee === undefined) return difference(array, values);

  if (!Array.isArray(array) || !array.length) return [];
  if (!Array.isArray(values) || !values?.length) return array.slice();

  const comparison = values.map(v => executeIteratee(iteratee, v));

  return array.filter(v => !comparison.includes(
    executeIteratee(iteratee, v),
  ));
};
