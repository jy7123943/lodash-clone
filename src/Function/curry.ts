import { _ } from 'src/index';
/** curry(func, [arity=func.length])
 * Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
 * The _.curry.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments.
 * Note: This method doesn't set the "length" property of curried functions.

 * Arguments
 * - func (Function): The function to curry.
 * - [arity=func.length] (number): The arity of func.
 * Returns
 * (Function): Returns the new curried function.
 */

type Func = (...args: any[]) => any;

export const curry = (func: Func, arity = func.length): Func => {
  function wrapper(prevParams: any[]) {
    return (...nextParams: any[]) => {
      const newParams = prevParams
        .map(param => param === _ ? (nextParams.shift() || param) : param)
        .concat(nextParams);

      return newCurry(...newParams);
    };
  }

  function newCurry(...params: any[]): Func {
    const hasPlaceholder = params.some(param => param === _);

    if (hasPlaceholder) {
      return wrapper(params);
    }

    if (params.length < arity) {
      return newCurry.bind(null, ...params);
    } else {
      return func.call(null, ...params);
    }
  }

  return newCurry;
};
