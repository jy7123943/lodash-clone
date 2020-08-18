import { createIteratee } from 'src/utils';

/** countBy(collection, [iteratee=_.identity])
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).
 * Arguments
 * - collection (Array|Object): The collection to iterate over.
 * - [iteratee=_.identity] (Function): The iteratee to transform keys.
 * Returns
 * (Object): Returns the composed aggregate object.
 */

type Iteratee = (arrValue: any) => any;

export const countBy = (
  collection: any[] | Record<string, any>,
  iteratee?: string | number | Iteratee,
): Record<string, any> => {
  const target = Object.values(collection);
  const newIteratee = iteratee !== undefined && createIteratee(iteratee);

  return target.reduce((result, current) => {
    const key = newIteratee ? newIteratee(current) : current;
    result[key] = result[key] ? result[key] + 1 : 1;

    return result;
  }, {});
};
