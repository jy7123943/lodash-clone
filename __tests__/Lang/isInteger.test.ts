import { isInteger } from 'src/index';

describe('isInteger', () => {
  it('returns true if parameter is an integer', () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(10)).toBe(true);
  });

  it('returns false if parameter is not an integer', () => {
    expect(isInteger(0.5)).toBe(false);
    expect(isInteger(Number.MIN_VALUE)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger('123')).toBe(false);
  });
});
