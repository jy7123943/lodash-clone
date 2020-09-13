import { isNull } from 'src/index';

describe('isNull', () => {
  it('returns true if parameter is null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('returns false if parameter is not null', () => {
    expect(isNull(void 0)).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(NaN)).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
  });
});
