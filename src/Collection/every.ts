/** every(collection, [predicate=_.identity])
 * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

Note: This method returns true for empty collections because everything is true of elements of empty collections.

 * Arguments
 * - collection (Array|Object): The collection to iterate over.
 * - [predicate=_.identity] (Function): The function invoked per iteration.
 * Returns
 * (boolean): Returns true if all elements pass the predicate check, else false.
 */

type ArrayPredicate<T> = (value: T, key: number, collection: T[]) => any;
type ObjectPredicate<T> = (value: T, key: string, collection: Record<string, T>) => any;

export const every = <T>(
  collection: T[] | Record<string, T>,
  predicate?: ArrayPredicate<T> | ObjectPredicate<T>,
): boolean => {
  if (!predicate) return true;

  const isArray = Array.isArray(collection);

  if (isArray) {
    const list = collection as T[];

    for (let i = 0; i < list.length; i++) {
      if (!(predicate as ArrayPredicate<T>)(list[i], i, list)) return false;
    }
  } else {
    const list = collection as Record<string, T>;

    for (const key in list) {
      if (!(predicate as ObjectPredicate<T>)(list[key], key, list)) return false;
    }
  }

  return true;
};
