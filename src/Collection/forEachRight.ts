/** forEachRight(collection, [iteratee=_.identity])
 * This method is like _.forEach except that it iterates over elements of collection from right to left.

 * Arguments
 * - collection (Array|Object): The collection to iterate over.
 * - [iteratee=_.identity] (Function): The function invoked per iteration.
 * Returns
 * (*): Returns collection.
 */

type ArrayCollection<T> = (value: T, key: number, collection: T[]) => any;
type ObjectCollection<T> = (value: any, key: string, collection: Record<string, any>) => any;

export const forEachRight = <T>(
  collection: T[] | Record<string, T>,
  iteratee?: ArrayCollection<T> | ObjectCollection<T>,
): T[] | Record<string, T> => {
  if (!iteratee) return collection;

  const isArray = Array.isArray(collection);

  const lists = isArray
    ? collection as T[]
    : (Object.values(collection)) as T[];
  const keys = !isArray && Object.keys(collection);

  for (let i = lists.length - 1; i >= 0; i--) {
    keys
      ? (iteratee as ObjectCollection<T>)(lists[i], keys[i], collection)
      : (iteratee as ArrayCollection<T>)(lists[i], i, lists);
  }

  return collection;
};
