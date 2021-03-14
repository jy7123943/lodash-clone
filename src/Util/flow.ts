/** flow()
 * Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.
 * Arguments: [funcs] (...(Function|Function[])): The functions to invoke.
 * Returns: (Function): Returns the new composite function.
 */

type Func = (...params: any[]) => unknown;

export const flow = <ReturnType>(funcs: Func[]) => (
  function(...params: any[]): ReturnType {
    const [result] = funcs.reduce((previousValue, currentFunc) => (
      [currentFunc(...previousValue)]
    ), params);

    return result;
  }
);
