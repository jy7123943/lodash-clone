import { _ } from 'src/index';
/** bind(func, thisArg, [partials])
 * Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives. The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.
 * Note: Unlike native Function#bind, this method doesn't set the "length" property of bound functions.

 * Arguments
 * - func (Function): The function to bind.
 * - thisArg (*): The this binding of func.
 * - [partials] (...*): The arguments to be partially applied.
 * Returns
 * (Function): Returns the new bound function.
 */

type Func = (...args: any[]) => any;

export const bind = <T>(func: Func, thisArg: ThisType<T> | null, ...partials: any[]): Func => (
  (...params) => {
    const copiedParams = params.slice();

    const newPartials = partials.map(partial => partial === _ ? copiedParams.shift() : partial);

    return func.apply(thisArg, newPartials.concat(copiedParams));
  }
);
