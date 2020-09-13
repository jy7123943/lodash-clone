import { isObjectLike } from 'src/index';

describe('isObjectLike', () => {
  it('returns true if parameter is the language type of Object', () => {
    expect(isObjectLike([1, 2, 3])).toBe(true);
    expect(isObjectLike({ a: 1 })).toBe(true);
    expect(isObjectLike(/a/)).toBe(true);
    expect(isObjectLike(new Number(0))).toBe(true);
    expect(isObjectLike(new String(''))).toBe(true);
  });

  it('returns false if parameter is not the language type of Object', () => {
    expect(isObjectLike(function mockFn() { return 1; })).toBe(false);
    expect(isObjectLike(undefined)).toBe(false);
    expect(isObjectLike(false)).toBe(false);
    expect(isObjectLike('abc')).toBe(false);
    expect(isObjectLike(3)).toBe(false);
    expect(isObjectLike(null)).toBe(false);
  });
});
