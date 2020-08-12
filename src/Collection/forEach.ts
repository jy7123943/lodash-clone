/** forEach(collection, [iteratee=_.identity])
 * Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

 * Arguments
 * - collection (Array|Object): The collection to iterate over.
 * - [iteratee=_.identity] (Function): The function invoked per iteration.
 * Returns
 * (*): Returns collection.
 */

type ArrayCollection<T> = (value: T, key: number, collection: T[]) => any;
type ObjectCollection<T> = (value: any, key: string, collection: Record<string, any>) => any;

export const forEach = <T>(
  collection: T[] | Record<string, T>,
  iteratee?: ArrayCollection<T> | ObjectCollection<T>,
): T[] | Record<string, T> => {
  const isArray = Array.isArray(collection);

  if (!iteratee) return collection;

  if (isArray) {
    (collection as T[]).forEach((value, idx) => {
      (iteratee as ArrayCollection<T>)(
        value,
        idx,
        collection as T[],
      );
    });
  } else {
    for (const key in collection as Record<string, T>) {
      (iteratee as ObjectCollection<T>)(
        (collection as Record<string, T>)[key],
        key,
        collection as Record<string, T>,
      );
    }
  }

  return collection;
};
