import { differenceWith } from 'src/Array/differenceWith';

describe('differenceWith', () => {
  const mockFn = (x: number, y: number) => !!(x + y);

  it('returns empty array if array passed as first param is empty', () => {
    expect(differenceWith([])).toStrictEqual([]);
    expect(differenceWith([], [2, 3])).toStrictEqual([]);
    expect(differenceWith([], [2, 3], mockFn)).toStrictEqual([]);
  });

  it('returns copy of the first param if the second param is undefined', () => {
    expect(differenceWith([1, 2])).toStrictEqual([1, 2]);
    expect(differenceWith([1, 2], undefined, mockFn)).toStrictEqual([1, 2]);
  });

  it('returns copy of the first param if the second param is an empty array', () => {
    expect(differenceWith([1, 2], [])).toStrictEqual([1, 2]);
    expect(differenceWith([1, 2], [], mockFn)).toStrictEqual([1, 2]);
  });

  it('returns new array (not a reference)', () => {
    const inputArray = [1, 2, 3];
    const result = differenceWith(inputArray);

    expect(result).toStrictEqual([1, 2, 3]);
    expect(result).not.toBe(inputArray);
  });

  it('creates an array of array values not included in the other given arrays', () => {
    expect(differenceWith([1, 2], [2, 3])).toStrictEqual([1]);
    expect(differenceWith(['a', null], ['a', null])).toStrictEqual([]);
    expect(differenceWith([undefined, 2], [2])).toStrictEqual([undefined]);
  });

  it('checks a shallow equality for reference values', () => {
    expect(differenceWith([[2], 1], [[2]])).toStrictEqual([[2], 1]);
    expect(differenceWith(
      [{ hello: 'world' }, 'string'],
      [4, { hello: 'world' }],
    )).toStrictEqual([{ hello: 'world' }, 'string']);
  });

  it('accepts comparator which is invoked to compare elements of array to values', () => {
    const comparator = (x: number[], y: number[]) => x[0] === y[0];

    expect(
      differenceWith([[1, 2], [1, 3], [2, 3], [1, 1]], [[1]], comparator),
    ).toStrictEqual(
      [[2, 3]],
    );

    const comparator02 = (x: string, y: string) => x === y;

    expect(
      differenceWith(['a', 'd'], ['v', 'a'], comparator02),
    ).toStrictEqual(
      ['d'],
    );
  });
});
