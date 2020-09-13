import { _, curry } from 'src/index';

describe('curry', () => {
  it('returns the new curried function', () => {
    const mockFn = function(a: number, b: number, c: number) {
      return a + b + c;
    };
    const newFn = curry(mockFn);

    expect(typeof newFn).toBe('function');
    expect(typeof newFn(1)).toBe('function');
    expect(newFn(1)).not.toBe(mockFn);
    expect(newFn(1)(2)(3)).toBe(6);
  });

  it('could be used as normal function as well', () => {
    const mockFn = function(a: number, b: number, c: number) {
      return [a, b, c];
    };

    const newFn = curry(mockFn);
    expect(newFn(1)(2)(3)).toStrictEqual([1, 2, 3]);
    expect(newFn(1, 2)(3)).toStrictEqual([1, 2, 3]);
    expect(newFn(1, 2, 3)).toStrictEqual([1, 2, 3]);
  });

  it('allows placeholder', () => {
    const mockFn = function(a: number, b: number, c: number) {
      return [a, b, c];
    };

    const newFn = curry(mockFn);

    expect(newFn(1)(_, 3)(2)).toStrictEqual([1, 2, 3]);
    expect(newFn(1)(_, _)(_)(2)(3)).toStrictEqual([1, 2, 3]);
    expect(newFn(1)(_, 4)(_)(2)).toStrictEqual([1, 2, 4]);
  });
});
