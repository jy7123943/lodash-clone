import { isArray } from 'src/index';

import { mockHTMLCollection } from '../utils/mock-html-collection';

describe('isArray', () => {
  it('returns true if parameter is array type', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it('returns false if parameter is not an array type', () => {
    expect(isArray(new (mockHTMLCollection as any)([1, 2, 3]))).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray('abc')).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(new ArrayBuffer(1))).toBe(false);
  });
});
