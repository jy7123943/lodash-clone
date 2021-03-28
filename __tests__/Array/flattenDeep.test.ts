import { flattenDeep } from 'src/index';

describe('flattenDeep', () => {
  it('returns new array', () => {
    const param = [1, 2];
    const result = flattenDeep(param);

    expect(param).toEqual(result);
    expect(param).not.toBe(result);
  });

  it('recursively flattens array', () => {
    expect(flattenDeep([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
    expect(flattenDeep([[{ a: 1 }, { a: 2 }], [{ a: 3 }, { a: 4 }]])).toEqual(
      [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
    );
  });

  it('sets undefined for empty slots in arrays', () => {
    expect(flattenDeep([1, [2], , 4])).toEqual([1, 2, undefined, 4]);
  });
});
