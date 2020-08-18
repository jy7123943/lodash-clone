/** ary(func, [n=func.length])
 * Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.

 * Arguments
 * - func (Function): The function to cap arguments for.
 * - [n=func.length] (number): The arity cap.
 * Returns
 * (Function): Returns the new capped function.
 */

type Func = (...args: any[]) => any;

export const ary = (
  func: Func,
  n = func.length,
): Func => (
  (...params) => func(...params.slice(0, n))
);
