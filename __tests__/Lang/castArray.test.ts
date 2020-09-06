import { castArray } from 'src/index';

describe('castArray', () => {
  it(`casts value as an array if it's not one`, () => {
    expect(castArray(1)).toStrictEqual([1]);
    expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }]);
    expect(castArray('abc')).toStrictEqual(['abc']);
    expect(castArray(null)).toStrictEqual([null]);
    expect(castArray(undefined)).toStrictEqual([undefined]);
  });

  it('returns empty array if parameter is empty', () => {
    expect(castArray()).toStrictEqual([]);
  });

  it('returns same array passed as parameter', () => {
    const mockArray = [1, 2, 3];

    expect(castArray(mockArray)).toBe(mockArray);
    expect(castArray(mockArray)).toStrictEqual(mockArray);
  });

  it('only returns an array of the first parameter', () => {
    expect(castArray(1, 2, 3)).toStrictEqual([1]);
  });
});
