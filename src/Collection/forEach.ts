/** forEach(collection, [iteratee=_.identity])
 * Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

 * Arguments
 * - collection (Array|Object): The collection to iterate over.
 * - [iteratee=_.identity] (Function): The function invoked per iteration.
 * Returns
 * (*): Returns collection.
 */

type Collection<T> = T[] | Record<string, T>;

export const forEach = <T>(
  collection: Collection<T>,
  iteratee?: (value: T, key: number | string, collection: Collection<T>) => T,
): Collection<T> => {
  const isArray = Array.isArray(collection);

  if (!iteratee) return collection;

  if (isArray) {
    (collection as T[]).forEach((value, idx) => {
      iteratee(value, idx, collection);
    });
  } else {
    for (const key in collection) {
      iteratee((collection as Record<string, T>)[key], key, collection);
    }
  }

  return collection;
};
