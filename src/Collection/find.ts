/** find(collection, [predicate=_.identity], [fromIndex=0])
 * Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

 * Arguments
 * - collection (Array|Object): The collection to iterate over.
 * - [predicate=_.identity] (Function): The function invoked per iteration.
 * - [fromIndex=0] (number): The index to search from.
 * Returns
 * (*): Returns the matched element, else undefined.
 */

type ArrayPredicate<T> = (value: T, key: number, collection: T[]) => any;
type ObjectPredicate<T> = (value: T, key: string, collection: Record<string, T>) => any;

export const find = <T>(
  collection: T[] | Record<string, T>,
  predicate?: ArrayPredicate<T> | ObjectPredicate<T>,
  fromIndex = 0,
): T | undefined => {
  const isArray = Array.isArray(collection);

  if (!predicate) return Object.values(collection)[0];

  if (isArray) {
    const list = collection as T[];

    for (let i = fromIndex; i < list.length; i++) {
      if ((predicate as ArrayPredicate<T>)(list[i], i, list)) {
        return list[i];
      }
    }
  } else {
    const list = collection as Record<string, T>;
    const values = Object.values(collection);
    const keys = Object.keys(collection);

    for (let i = fromIndex; i < values.length; i++) {
      if ((predicate as ObjectPredicate<T>)(values[i], keys[i], list)) {
        return values[i];
      }
    }
  }

  return;
};
