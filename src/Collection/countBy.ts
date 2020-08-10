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
  const target = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const newIteratee = createIteratee(iteratee);

  return target.reduce((result, current) => {
    const key = newIteratee ? newIteratee(current) : current;
    result[key] = result[key] ? result[key] + 1 : 1;

    return result;
  }, {});
};


// _.countBy([6.1, 4.2, 6.3], Math.floor);
// // => { '4': 1, '6': 2 }
//  
// // The `_.property` iteratee shorthand.
// _.countBy(['one', 'two', 'three'], 'length');
// // => { '3': 2, '5': 1 }

// _.countBy({'hello': 'one', 'world': 'two'}, 'length');
// // => { 3: 2 }

// _.countBy({'hello': 'one', 'world': 'two'});
// Object {one: 1, two: 1}

// _.countBy(['one', 'two', 'three']);
// {one: 1, three: 1, two: 1}
