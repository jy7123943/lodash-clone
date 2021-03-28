/** isArrayBuffer(value)
 * Checks if value is classified as an ArrayBuffer object.

 * Arguments
 * - value (*): The value to check.
 * Returns
 * (boolean): Returns true if value is an array buffer, else false.
 */

export const isArrayBuffer = (value: unknown): value is ArrayBuffer => (
  value instanceof ArrayBuffer
);
