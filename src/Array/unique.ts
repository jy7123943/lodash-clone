import { isSameValue, key } from '../utils';

/** uniq(array)
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
 * Arguments
 * - array (Array): The array to inspect.
 * (Array): Returns the new duplicate free array.
 */
export const unique = <T>(array: T[]): T[] => {
  const uniqSet: Record<string, { value: T }> = {};

  return [...array].filter((value) => {
    if (uniqSet[key(value)]) {
      return !isSameValue(value, uniqSet[key(value)].value);
    }
    uniqSet[key(value)] = { value };

    return true;
  });
};

/* Another way to make unique array
export const unique = <T>(array: T[]): T[] => {
  const uniqueSet = new Set(array);
  const result: T[] = [];

  uniqueSet.forEach(v => result.push(v));

  return result;
};
*/
