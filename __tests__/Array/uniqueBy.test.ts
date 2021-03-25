import { uniqueBy } from 'src/index';

describe('uniqueBy', () => {
  it('returns new array', () => {
    const param = [1, 2];
    const result = uniqueBy(param);

    expect(param).toEqual(result);
    expect(param).not.toBe(result);
  });

  it('returns duplicate-free version of an array', () => {
    expect(uniqueBy([2.1, 1.2, 2.3, 3.2, 2.4], Math.floor)).toEqual([2.1, 1.2, 3.2]);
    expect(
      uniqueBy([
        { label: 'a', value: 1 },
        { label: 'b', value: 2 },
        { label: 'a', value: 3 },
        { label: 'c', value: 4 },
        { label: 'a', value: 5 },
      ], (item: any) => item.label),
    ).toEqual([
      { label: 'a', value: 1 },
      { label: 'b', value: 2 },
      { label: 'c', value: 4 },
    ]);
  });
});
