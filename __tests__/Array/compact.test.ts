import { compact } from 'src/index';

describe('compact', () => {
  it('returns empty array if array passed as first param is empty', () => {
    expect(compact([])).toStrictEqual([]);
  });

  it('returns new array (not a reference)', () => {
    const inputArray: any[] = [];
    const result = compact(inputArray);

    expect(result).toStrictEqual([]);
    expect(result).not.toBe(inputArray);
  });

  it('filters all falsy values', () => {
    expect(
      compact([
        false,
        0,
        1.3,
        null,
        '',
        'null',
        undefined,
        'world',
        NaN,
        6,
      ]),
    ).toStrictEqual([
      1.3,
      'null',
      'world',
      6,
    ]);
  });
});
