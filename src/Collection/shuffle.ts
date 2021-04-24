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
  if (collection.length === 0) return [];

  const values = isArray(collection) ? [...collection] : Object.values(collection);

  const result = [];

  while (values.length > 0) {
    const [randomValue] = values.splice(randomNum(0, values.length - 1), 1);

    result.unshift(randomValue);
  }

  return result;
};
