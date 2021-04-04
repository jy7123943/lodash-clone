import { nth } from 'src/index';

describe('nth', () => {
  const array = [1, 2, 3, 4, 5];

  it('gets the element at index n of array and return it', () => {
    expect(nth(array, 0)).toBe(1);
    expect(nth(array, 1)).toBe(2);
    expect(nth(array, 2)).toBe(3);
    expect(nth(array, 3)).toBe(4);
    expect(nth(array, 4)).toBe(5);
  });

  it('gets the nth element from the end and return it', () => {
    expect(nth(array, -1)).toBe(5);
    expect(nth(array, -2)).toBe(4);
    expect(nth(array, -3)).toBe(3);
    expect(nth(array, -4)).toBe(2);
    expect(nth(array, -5)).toBe(1);
  });

  it('returns undefined if n it greater than array length', () => {
    expect(nth(array, 5)).toBe(undefined);
    expect(nth(array, -6)).toBe(undefined);
  });

  it('returns the first element if n is not defined', () => {
    expect(nth(array)).toBe(array[0]);
  });
});
