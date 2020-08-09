import { differenceBy } from 'src/Array/differenceBy';

describe('differenceBy', () => {
  it('returns empty array if array passed as first param is empty', () => {
    expect(differenceBy([])).toStrictEqual([]);
    expect(differenceBy([], [2, 3])).toStrictEqual([]);
  });

  it('returns copy of the first param if the second param is undefined', () => {
    expect(differenceBy([1, 2])).toStrictEqual([1, 2]);
  });

  it('returns copy of the first param if the second param is an empty array', () => {
    expect(differenceBy([1, 2], [])).toStrictEqual([1, 2]);
  });

  it('returns new array (not a reference)', () => {
    const inputArray = [1, 2, 3];
    const result = differenceBy(inputArray);

    expect(result).toStrictEqual([1, 2, 3]);
    expect(result).not.toBe(inputArray);
  });

  it('creates an array of array values not included in the other given arrays', () => {
    expect(differenceBy([1, 2], [2, 3])).toStrictEqual([1]);
    expect(differenceBy(['a', null], ['a', null])).toStrictEqual([]);
    expect(differenceBy([undefined, 2], [2])).toStrictEqual([undefined]);
  });

  it('checks a shallow equality for reference values', () => {
    expect(differenceBy([[2], 1], [[2]])).toStrictEqual([[2], 1]);
    expect(differenceBy(
      [{ hello: 'world' }, 'string'],
      [4, { hello: 'world' }],
    )).toStrictEqual([{ hello: 'world' }, 'string']);
  });

  it('invokes iteratee for comparison', () => {
    expect(
      differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor),
    ).toStrictEqual(
      [1.2],
    );

    expect(
      differenceBy([2, 4, 5], [2], (num) => num % 2 === 0),
    ).toStrictEqual(
      [5],
    );
  });

  it('uses iteratee as key/index for comparison if iteratee is not a function type', () => {
    expect(
      differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'),
    ).toStrictEqual(
      [{ 'x': 2 }],
    );

    expect(
      differenceBy([{ '0': 2 }, { '0': 1 }], [{ '0': 1 }], 0),
    ).toStrictEqual(
      [{ '0': 2 }],
    );

    expect(
      differenceBy(['hello', 'ee', 'ce', 'cc'], ['ce'], 1),
    ).toStrictEqual(
      ['cc'],
    );
  });
});
