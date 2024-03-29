/** isElement(value)
 * Checks if value is likely a DOM element.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is a DOM element, else false.
 */

export const isElement = (value: unknown): value is Element => (
  value instanceof Element
);
