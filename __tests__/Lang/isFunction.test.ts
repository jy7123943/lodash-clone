import { isFunction } from 'src/index';

describe('isFunction', () => {
  it('returns true if parameter is a function object', () => {
    expect(isFunction(function mockFn() { return 1; })).toBe(true);
    expect(isFunction(jest.fn)).toBe(true);
  });

  it('returns false if parameter is not a function object', () => {
    expect(isFunction('abc')).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction([1, 2])).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});
