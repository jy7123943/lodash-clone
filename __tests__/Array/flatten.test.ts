import { flatten } from 'src/index';

describe('flatten', () => {
  it('returns new array', () => {
    const param = [1, 2];
    const result = flatten(param);

    expect(param).toEqual(result);
    expect(param).not.toBe(result);
  });

  it('flattens array a single level deep', () => {
    expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);
    expect(flatten([[{ a: 1 }], { b: 2 }])).toEqual([{ a: 1 }, { b: 2 }]);
  });

  it('sets undefined for empty slots in arrays', () => {
    expect(flatten([1, [2], , 4])).toEqual([1, 2, undefined, 4]);
  });
});
