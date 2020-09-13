import { isMap } from 'src/index';

describe('isMap', () => {
  it('returns true if parameter is a map object', () => {
    expect(isMap(new Map())).toBe(true);
  });

  it('returns false if parameter is not a map object', () => {
    expect(isMap(new WeakMap())).toBe(false);
    expect(isMap({ a: 1 })).toBe(false);
    expect(isMap([1, 2, 3])).toBe(false);
    expect(isMap('123')).toBe(false);
  });
});
