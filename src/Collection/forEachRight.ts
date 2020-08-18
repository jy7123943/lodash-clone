/** forEachRight(collection, [iteratee=_.identity])
 * This method is like _.forEach except that it iterates over elements of collection from right to left.

 * Arguments
 * - collection (Array|Object): The collection to iterate over.
 * - [iteratee=_.identity] (Function): The function invoked per iteration.
 * Returns
 * (*): Returns collection.
 */

type ArrayIteratee<T> = (value: T, key: number, collection: T[]) => any;
type ObjectIteratee<T> = (value: any, key: string, collection: Record<string, any>) => any;

export const forEachRight = <T>(
  collection: T[] | Record<string, T>,
  iteratee?: ArrayIteratee<T> | ObjectIteratee<T>,
): T[] | Record<string, T> => {
  if (!iteratee) return collection;

  const isArray = Array.isArray(collection);

  if (isArray) {
    const list = collection as T[];

    for (let i = list.length - 1; i >= 0; i--) {
      (iteratee as ArrayIteratee<T>)(list[i], i, list);
    }
  } else {
    const values = Object.values(collection as Record<string, T>);
    const keys = Object.keys(collection as Record<string, T>);

    for (let i = values.length - 1; i >= 0; i--) {
      (iteratee as ObjectIteratee<T>)(values[i], keys[i], collection);
    }
  }

  return collection;
};
