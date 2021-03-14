/** flow()
 * Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.
 * Arguments: [funcs] (...(Function|Function[])): The functions to invoke.
 * Returns: (Function): Returns the new composite function.
 */

type Func = (...params: unknown[]) => unknown;

export const flow = (funcs: Func[]) => {
  // type here


  return function(): any {
    // return new function
  };
};
