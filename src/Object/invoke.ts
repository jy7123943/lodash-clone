/** invoke(object, path, [args])
 * Invokes the method at path of object.

 * Arguments
 * - object (Object): The object to query.
 * - path (string): The path of the method to invoke.
 * - [args] (...*): The arguments to invoke the method with.

 * Returns
 * (*): Returns the result of the invoked method.
*/

export const invoke = <ObjectValue, InvokeArg, Result>(
  obj: Record<string, ObjectValue>,
  path: string,
  ...args: InvokeArg[]
): Result => {
  // Write here
};
