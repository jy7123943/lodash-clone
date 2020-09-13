import { isBoolean } from 'src/index';

describe('isBoolean', () => {
  it('returns true if parameter is a boolean type', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('returns false if parameter is not a boolean type', () => {
    expect(isBoolean('abc')).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(jest.fn())).toBe(false);
    expect(isBoolean([1, 2, 3])).toBe(false);
  });
});
