import { isArray } from 'src/Lang/isArray';
/** invoke(object, path, [args])
 * Invokes the method at path of object.

 * Arguments
 * - object (Object): The object to query.
 * - path (string|Array): The path of the method to invoke.
 * - [args] (...*): The arguments to invoke the method with.

 * Returns
 * (*): Returns the result of the invoked method.
*/

export const invoke = <Result = unknown>(
  obj: Record<string, any>,
  path: string | string[],
  ...args: unknown[]
): Result => {
  const paths = isArray(path)
    ? path
    : path.replace(/\[|\]\.?/g, '.').split('.');

  return paths.reduce((targetObj: any, currentPath, i: number) => (
    i === paths.length - 1
      // eslint-disable-next-line prefer-spread
      ? targetObj[currentPath].apply(targetObj, args)
      : targetObj[currentPath]
  ), obj);
};
