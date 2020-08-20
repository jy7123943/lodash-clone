import { chunk } from 'src/index';

describe('chunk', () => {
  it('returns empty array if array passed as first param is empty', () => {
    expect(chunk([], 2)).toStrictEqual([]);
  });

  it('returns empty array if size is 0', () => {
    expect(chunk([1, 2, 3], 0)).toStrictEqual([]);
  });

  it('has default size, 1', () => {
    expect(chunk([1, 2, 3])).toStrictEqual([[1], [2], [3]]);
    expect(chunk([1, 2, 3], 1)).toStrictEqual([[1], [2], [3]]);
  });

  it('returns new array (not a reference)', () => {
    const inputArray: any[] = [];
    const result = chunk(inputArray, 2);

    expect(result).toStrictEqual([]);
    expect(result).not.toBe(inputArray);
  });

  it('successfully creates an array of elements slit into groups the length of size', () => {
    expect(chunk([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]]);

    expect(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 4)).toStrictEqual([
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g', 'h'],
    ]);
  });

  it(`
    creates the final chunk with the remaining elements
    if array cannot be split evenly
  `, () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);

    expect(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3)).toStrictEqual([
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h'],
    ]);
  });

  it('creates one chunk if size passed as param is bigger than the length of array', () => {
    expect(chunk([1, 2, 3], 4)).toStrictEqual([[1, 2, 3]]);
  });
});
