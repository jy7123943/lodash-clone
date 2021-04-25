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
  });
});
