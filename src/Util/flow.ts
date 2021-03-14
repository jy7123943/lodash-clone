/** flow()
 * Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.
 * Arguments: [funcs] (...(Function|Function[])): The functions to invoke.
 * Returns: (Function): Returns the new composite function.
 */

type Func<T> = (...params: T[]) => unknown;

export const flow = <T>(funcs: Func<T>[]) => {
  // type here
  return function(...params: unknown[]): any {
    // return new function
    params.reduce((previousValue, currentFunc) => {
      console.log('🚀 ~ file: flow.ts ~ line 14 ~ params.reduce ~ currentFunc', currentFunc);
      console.log('🚀 ~ file: flow.ts ~ line 14 ~ params.reduce ~ previousValue', previousValue);
    }, params);
  };
};
