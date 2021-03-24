import { unique } from 'src/index';

describe('unique', () => {
  it('returns new array', () => {
    const param = [1, 2];
    const result = unique(param);

    expect(param).toEqual(result);
    expect(param).not.toBe(result);
  });

  it('returns duplicate-free version of an array', () => {
    expect(unique([2, 1, 2, 3, 1])).toEqual([2, 1, 3]);
    expect(unique(['1', 1])).toEqual(['1', 1]);
    expect(unique([NaN, +0, -0, null, NaN, undefined])).toEqual([NaN, 0, null, undefined]);
    expect(unique(['string', true, true, 'string', 'str', false])).toEqual(
      ['string', true, 'str', false],
    );
  });

  it('makes a shallow comparison between reference values', () => {
    expect(unique([[1, 2], { a: 1 }, [1, 2], { a: 1 }])).toEqual(
      [[1, 2], { a: 1 }, [1, 2], { a: 1 }],
    );

    const obj = { a: 1 };
    const arr = [1, 2];
    expect(unique([obj, arr, obj, arr])).toEqual(
      [obj, arr],
    );
  });
});
