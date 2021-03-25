type Iteratee = (arrValue: any) => any;

export const createIteratee = (
  iteratee: string | number | Iteratee,
): Iteratee => (
  typeof iteratee === 'function'
    ? (value: any) => (iteratee as Iteratee)(value)
    : (value: any) => value[iteratee as (string | number)]
);

export const isSameValue = (x: unknown, y: unknown): boolean => {
  if (typeof x !== typeof y) return false;
  if (typeof x === 'number') {
    if (isNaN(x)) return isNaN(y as number);
  }

  return x == y;
};

export const key = (value: unknown): string => JSON.stringify(value);
