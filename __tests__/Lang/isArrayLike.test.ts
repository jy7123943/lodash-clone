import { isArrayLike } from 'src/index';

import { mockHTMLCollection } from '../utils/mock-html-collection';

describe('isArrayLike', () => {
  it('returns true if parameter is considered array-like', () => {
    expect(isArrayLike(new Array(0))).toBe(true);
    expect(isArrayLike([1, 2, 3])).toBe(true);
    expect(isArrayLike(new (mockHTMLCollection as any)([1, 2, 3]))).toBe(true);
    expect(isArrayLike('abc')).toBe(true);
  });

  it('returns false if parameter is not an array-like', () => {
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
    expect(isArrayLike(true)).toBe(false);
    expect(isArrayLike(jest.fn())).toBe(false);
  });
});
