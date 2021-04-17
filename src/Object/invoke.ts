import { isArray } from 'src/index';
/** invoke(object, path, [args])
 * Invokes the method at path of object.

 * Arguments
 * - object (Object): The object to query.
 * - path (string|Array): The path of the method to invoke.
 * - [args] (...*): The arguments to invoke the method with.

 * Returns
 * (*): Returns the result of the invoked method.
*/

export const invoke = <ObjectValue = unknown, Result = unknown>(
  obj: Record<string, ObjectValue>,
  path: string | string[],
  ...args: unknown[]
): Result => {
  const paths = isArray(path)
    ? path
    : path.replace(/\[|\]\.?/g, '.').split('.');


};
