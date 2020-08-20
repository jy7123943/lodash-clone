import { difference } from 'src/index';

describe('difference', () => {
  it('returns empty array if array passed as first param is not an array or empty', () => {
    expect(difference([])).toStrictEqual([]);
    expect(difference([], [2, 3])).toStrictEqual([]);
  });

  it('returns copy of the first param if the second param is undefined', () => {
    expect(difference([1, 2])).toStrictEqual([1, 2]);
  });

  it('returns copy of the first param if the second param is an empty array', () => {
    expect(difference([1, 2], [])).toStrictEqual([1, 2]);
  });

  it('returns new array (not a reference)', () => {
    const inputArray = [1, 2, 3];
    const result = difference(inputArray);

    expect(result).toStrictEqual([1, 2, 3]);
    expect(result).not.toBe(inputArray);
  });

  it('creates an array of array values not included in the other given arrays', () => {
    expect(difference([1, 2], [2, 3])).toStrictEqual([1]);
    expect(difference(['a', null], ['a', null])).toStrictEqual([]);
    expect(difference([undefined, 2], [2])).toStrictEqual([undefined]);
  });

  it('checks a shallow equality for reference values', () => {
    expect(difference([[2], 1], [[2]])).toStrictEqual([[2], 1]);
    expect(difference(
      [{ hello: 'world' }, 'string'],
      [4, { hello: 'world' }],
    )).toStrictEqual([{ hello: 'world' }, 'string']);
  });
});
