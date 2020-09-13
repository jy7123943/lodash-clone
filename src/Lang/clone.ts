/** clone(value)
 * Creates a shallow clone of value.
 * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.

 * Arguments
 * - value (*): The value to clone.
 * Returns
 * (*): Returns the cloned value.
 */

export const clone = (value: any): any => {
  if (value instanceof Map) return new Map(value);
  if (value instanceof Set) return new Set(value);
  if (value instanceof Date) return new Date(value);
  if (value instanceof RegExp) return new RegExp(value);
  if (value instanceof ArrayBuffer || Array.isArray(value)) return value.slice(0);

  if (typeof value === 'object') return { ...value };

  const isPrimitive = Object(value) !== value;
  if (isPrimitive) return value;

  return {};
};
