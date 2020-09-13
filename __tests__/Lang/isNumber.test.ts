import { isNumber } from 'src/index';

describe('isNumber', () => {
  it('returns true if parameter is a number type', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(0.5)).toBe(true);
    expect(isNumber(Number.MIN_VALUE)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
  });

  it('returns false if parameter is not a number type', () => {
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber('abc')).toBe(false);
    expect(isNumber('3')).toBe(false);
  });
});
