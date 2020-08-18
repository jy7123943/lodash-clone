/** filter(collection, [predicate=_.identity])
 * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

 * Arguments
 * - collection (Array|Object): The collection to iterate over.
 * - [predicate=_.identity] (Function): The function invoked per iteration.
 * Returns
 * (Array): Returns the new filtered array.
 */

type ArrayPredicate<T> = (value: T, key: number, collection: T[]) => any;
type ObjectPredicate<T> = (value: T, key: string, collection: Record<string, T>) => any;

export const filter = <T>(
  collection: T[] | Record<string, T>,
  predicate?: ArrayPredicate<T> | ObjectPredicate<T>,
): T[] => {
  const isArray = Array.isArray(collection);

  if (!predicate) {
    return isArray
      ? (collection as T[]).slice()
      : Object.values(collection);
  }

  const result: T[] = [];

  if (isArray) {
    const list = collection as T[];

    for (let i = 0; i < list.length; i++) {
      if ((predicate as ArrayPredicate<T>)(list[i], i, list)) {
        result.push(list[i]);
      }
    }
  } else {
    const list = collection as Record<string, T>;

    for (const key in list) {
      if ((predicate as ObjectPredicate<T>)(list[key], key, list)) {
        result.push(list[key]);
      }
    }
  }

  return result;
};
