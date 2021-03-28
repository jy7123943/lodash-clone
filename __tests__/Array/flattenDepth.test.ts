import { flattenDepth } from 'src/index';

describe('flattenDepth', () => {
  it('returns new array', () => {
    const param = [1, 2];
    const result = flattenDepth(param);

    expect(param).toEqual(result);
    expect(param).not.toBe(result);
  });

  it('Recursively flatten array up to depth times', () => {
    expect(flattenDepth([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, [3, [4, [5]]]]);
    expect(flattenDepth([1, [2, [3, [4, [5]]]]], 2)).toEqual([1, 2, 3, [4, [5]]]);
    expect(flattenDepth([1, [2, [3, [4, [5]]]]], 3)).toEqual([1, 2, 3, 4, [5]]);
    expect(flattenDepth([1, [2, [3, [4, [5]]]]], 5)).toEqual([1, 2, 3, 4, 5]);
    expect(flattenDepth([1, [2, [3, [4, [5]]]]], 6)).toEqual([1, 2, 3, 4, 5]);
  });

  it('does not flatten if depth is negative number', () => {
    expect(flattenDepth([1, [2, [3, [4, [5]]]]], -1)).toEqual([1, [2, [3, [4, [5]]]]]);
  });

  it('sets undefined for empty slots in arrays', () => {
    expect(flattenDepth([1, [2], , 4])).toEqual([1, 2, undefined, 4]);
  });
});
