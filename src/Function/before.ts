/** before(n, func)
 * Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. Subsequent calls to the created function return the result of the last func invocation.

 * Arguments
 * - n (number): The number of calls at which func is no longer invoked.
 * - func (Function): The function to restrict.
 * Returns
 * (Function): Returns the new restricted function.
 */

type Func = (...args: any[]) => any;

export const before = (n: number, func: Func): Func => {
  let count = 0;
  let lastResult: any;

  return (...params) => {
    if (++count < n) {
      lastResult = func(...params);
    }

    return lastResult;
  };
};
