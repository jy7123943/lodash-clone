import { isDate } from 'src/index';

describe('isDate', () => {
  it('returns true if parameter is a date object', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date)).toBe(true);
  });

  it('returns false if parameter is not a date object', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
    expect(isDate(2012)).toBe(false);
    expect(isDate(new Date().toISOString())).toBe(false);
  });
});
