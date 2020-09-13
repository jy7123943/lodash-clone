import { isArrayLikeObject } from 'src/index';

import { mockHTMLCollection } from '../utils/mock-html-collection';

describe('isArrayLikeObject', () => {
  it('returns true if parameter is considered array-like', () => {
    expect(isArrayLikeObject(new Array(0))).toBe(true);
    expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    expect(isArrayLikeObject(new (mockHTMLCollection as any)([1, 2, 3]))).toBe(true);
  });

  it('returns false if parameter is not an array-like', () => {
    expect(isArrayLikeObject('abc')).toBe(false);
    expect(isArrayLikeObject(1)).toBe(false);
    expect(isArrayLikeObject(undefined)).toBe(false);
    expect(isArrayLikeObject(true)).toBe(false);
    expect(isArrayLikeObject(jest.fn())).toBe(false);
  });
});
