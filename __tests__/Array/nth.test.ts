import { nth } from 'src/index';

describe('nth', () => {
  const array = [1, 2, 3, 4, 5];

  it('gets the element at index n of array and return it', () => {
    array.forEach((expectedResult, index) => {
      expect(nth(array, index)).toBe(expectedResult);
    });
  });

  it('gets the nth element from the end and return it', () => {
    const expectedResults = [5, 4, 3, 2, 1];

    array.forEach((_, index) => {
      expect(nth(array, -(index + 1))).toBe(expectedResults[index]);
    });
  });

  it('returns undefined if n it greater than array length', () => {
    expect(nth(array, 5)).toBe(undefined);
    expect(nth(array, -6)).toBe(undefined);
  });

  it('returns the first element if n is not defined', () => {
    expect(nth(array)).toBe(array[0]);
  });
});
