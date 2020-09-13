import { isObject } from 'src/index';

describe('isObject', () => {
  it('returns true if parameter is the language type of Object', () => {
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(function mockFn() { return 1; })).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(/a/)).toBe(true);
    expect(isObject(new Number(0))).toBe(true);
    expect(isObject(new String(''))).toBe(true);
  });

  it('returns false if parameter is not the language type of Object', () => {
    expect(isObject(undefined)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject('abc')).toBe(false);
    expect(isObject(3)).toBe(false);
    expect(isObject(null)).toBe(false);
  });
});
