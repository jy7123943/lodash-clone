import { isSameValue, key } from '../utils';
import { identity } from './../Util/identity';
/** uniqBy(array, [iteratee=_.identity])
 * This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:
(value).
 * Arguments
 * - array (Array): The array to inspect.
 * - [iteratee=_.identity] (Function): The iteratee invoked per element.
 * Returns - (Array): Returns the new duplicate free array.
 */

type Func = (...params: any[]) => unknown;
export const uniqueBy = <T>(array: T[], iteratee: Func = identity): T[] => {
  const uniqSet: Record<string, { value: unknown }> = {};

  return [...array].filter((originalValue) => {
    const value = iteratee(originalValue);

    if (uniqSet[key(value)]) {
      return !isSameValue(value, uniqSet[key(value)].value);
    }
    uniqSet[key(value)] = { value };

    return true;
  });
};
