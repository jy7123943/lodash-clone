import { isArray } from 'src/Lang/isArray';
/** shuffle(collection)
 * Creates an array of shuffled values, using a version of the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

 * Arguments
 * - collection (Array|Object): The collection to shuffle.
 * Returns
 * (Array): Returns the new shuffled array.
*/

const randomNum = (min: number, max: number) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export const shuffle = <T>(collection: T[] | Record<string, T>): T[] => {
  const arr = isArray(collection) ? [...collection] : Object.values(collection);

  if (arr.length === 0) {
    return arr;
  }

  const result = [];

  while (arr.length > 0) {
    result.push(
      arr.splice(randomNum(0, arr.length - 1), 1)[0],
    );
  }

  return result;
};
