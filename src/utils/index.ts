type Iteratee = (arrValue: any) => any;

export const createIteratee = (
  iteratee: string | number | Iteratee,
): Iteratee => (
  typeof iteratee === 'function'
    ? (value: any) => (iteratee as Iteratee)(value)
    : (value: any) => value[iteratee as (string | number)]
);
