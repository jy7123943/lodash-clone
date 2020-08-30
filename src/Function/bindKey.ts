import { _ } from 'src/index';
/** bind(func, thisArg, [partials])
 * Creates a function that invokes the method at object[key] with partials prepended to the arguments it receives.
 * This method differs from _.bind by allowing bound functions to reference methods that may be redefined or don't yet exist. See Peter Michaux's article for more details.
 * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.

 * Arguments
 * - object (Object): The object to invoke the method on.
 * - key (string): The key of the method.
 * - [partials] (...*): The arguments to be partially applied.
 * Returns
 * (Function): Returns the new bound function.
 */

type Func = (...args: any[]) => any;

export const bindKey = <T>(
  object: Record<string, any | Func>,
  key: string,
  ...partials: (T | string)[]
): Func => (
    (...params) => {
      const copiedParams = params.slice();

      const newPartials = partials.map(partial => partial === _ ? copiedParams.shift() : partial);

      return (object[key] as Func).apply(object, newPartials.concat(copiedParams));
    }
  );
