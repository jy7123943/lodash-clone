import { isNil } from 'src/index';

describe('isNil', () => {
  it('returns true if parameter is nullish', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(void 0)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  it('returns false if parameter is not nullish', () => {
    expect(isNil(NaN)).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil('')).toBe(false);
  });
});
