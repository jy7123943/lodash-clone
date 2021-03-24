/** flow()
 * Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.
 * Arguments: [funcs] (...(Function|Function[])): The functions to invoke.
 * Returns: (Function): Returns the new composite function.
 */

type Func<ReturnType> = (...params: any[]) => ReturnType;

export const flow = <ReturnType>(funcs: Func<ReturnType>[]) => (
  function(...params: any[]): ReturnType {
    return funcs.slice(1).reduce((previousValue, currentFunc) => (
      currentFunc(previousValue)
    ), funcs[0](...params));
  }
);
