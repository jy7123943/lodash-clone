/** isMap(value)
 * Checks if value is classified as a Map object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is a map, else false.
 */

export const isMap = <MapKey, MapValue>(value: unknown): value is Map<MapKey, MapValue> => (
  value instanceof Map
);
