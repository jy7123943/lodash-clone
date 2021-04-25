import { zip } from 'src/index';

describe('zip', () => {
  it('returns a new array of grouped elements', () => {
    expect(zip(['a', 'b', 'c'], [1, 2, 3], [true, false, true])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
      ['c', 3, true],
    ]);

    expect(zip(['a', 'b', 'c'], [1], [true, false])).toEqual([
      ['a', 1, true],
      ['b', undefined, false],
      ['c', undefined, undefined],
    ]);

    expect(zip(['a'], [1, 2, 3], [true, false])).toEqual([
      ['a', 1, true],
      [undefined, 2, false],
      [undefined, 3, undefined],
    ]);

    expect(zip(['a'], [1, 2, 3, 4, 5], [true, false], [null, null, undefined])).toEqual([
      ['a', 1, true, null],
      [undefined, 2, false, null],
      [undefined, 3, undefined, undefined],
      [undefined, 4, undefined, undefined],
      [undefined, 5, undefined, undefined],
    ]);
  });
});
