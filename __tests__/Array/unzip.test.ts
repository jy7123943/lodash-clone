import { unzip } from 'src/index';

describe('unzip', () => {
  it('returns the new array of regrouped elements', () => {
    expect(unzip([
      ['a', 1, true],
      ['b', 2, false],
      ['c', 3, true],
    ])).toEqual([['a', 'b', 'c'], [1, 2, 3], [true, false, true]]);

    expect(unzip([
      ['a', 1, true],
      ['b', undefined, false],
      ['c', undefined, undefined],
    ])).toEqual([
      ['a', 'b', 'c'],
      [1, undefined, undefined],
      [true, false, undefined],
    ]);

    expect(unzip([
      ['a', 1, true],
      [undefined, 2, false],
      [undefined, 3, undefined],
    ])).toEqual([
      ['a', undefined, undefined],
      [1, 2, 3],
      [true, false, undefined],
    ]);

    expect(unzip([
      ['a', 1, true, null],
      [undefined, 2, false, null],
      [undefined, 3, undefined, undefined],
      [undefined, 4, undefined, undefined],
      [undefined, 5, undefined, undefined],
    ])).toEqual([
      ['a', undefined, undefined, undefined, undefined],
      [1, 2, 3, 4, 5],
      [true, false, undefined, undefined, undefined],
      [null, null, undefined, undefined, undefined],
    ]);
  });
});
