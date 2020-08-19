/** after(n, func)
 * The opposite of _.before; this method creates a function that invokes func once it's called n or more times.

 * Arguments
 * - n (number): The number of calls before func is invoked.
 * - func (Function): The function to restrict.
 * Returns
 * (Function): Returns the new restricted function.
 */

type Func = (...args: any[]) => any;

export const after = (n: number, func: Func): Func => {
  let count = 0;

  return () => {
    if (++count >= n) {
      return func();
    }
  };
};
