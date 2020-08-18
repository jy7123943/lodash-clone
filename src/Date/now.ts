/** now()
 * Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).

 * Returns
 * (number): Returns the timestamp.
 */

export const now = (): number => (
  new Date().getTime()
);
