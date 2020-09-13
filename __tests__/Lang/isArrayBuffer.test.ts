import { isArrayBuffer } from 'src/index';

describe('isArrayBuffer', () => {
  it('returns true if parameter is ArrayBuffer object', () => {
    expect(isArrayBuffer(new ArrayBuffer(2))).toBe(true);
  });

  it('returns false if parameter is not an array type', () => {
    expect(isArrayBuffer(document.body.children)).toBe(false);
    expect(isArrayBuffer(1)).toBe(false);
    expect(isArrayBuffer('abc')).toBe(false);
    expect(isArrayBuffer(undefined)).toBe(false);
    expect(isArrayBuffer([1, 2, 3])).toBe(false);
  });
});
