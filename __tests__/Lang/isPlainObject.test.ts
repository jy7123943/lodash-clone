import { isPlainObject } from 'src/index';

describe('isPlainObject', () => {
  it('returns true if parameter is a plain object,', () => {
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('returns false if parameter is not a plain object,', () => {
    function Foo(this: Record<string, any>) {
      this.a = 1;
    }

    expect(isPlainObject(new (Foo as any)())).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject('abc')).toBe(false);
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(new Number(0))).toBe(false);
  });
});
