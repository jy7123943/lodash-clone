import { zip } from 'src/index';

describe('zip', () => {
  it('returns a new array of grouped elements', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);

    expect(zip(['a', 'b'], [1], [true, false])).toEqual([
      ['a', 1, true],
      ['b', undefined, false],
    ]);
  });
});
