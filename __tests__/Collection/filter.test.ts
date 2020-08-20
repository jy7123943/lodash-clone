import { filter } from 'src/index';

describe('filter', () => {
  it(`returns array of original collection's value if predicate is undefined`, () => {
    const arr = [1, 2, 3];
    expect(filter(arr)).not.toBe(arr);
    expect(filter(arr)).toStrictEqual([1, 2, 3]);

    expect(filter({ key: 'value' })).toStrictEqual(['value']);
  });

  it('returns empty array if collection is empty', () => {
    expect(filter([], Boolean)).toStrictEqual([]);
    expect(filter({}, Boolean)).toStrictEqual([]);
  });

  it('is invoked with three arguments - value, index|key, collection', () => {
    const arr = [1, 2, 3];

    filter(arr, (value: number, index: number, collection: number[]) => {
      expect(value).toBe(arr[index]);
      expect(collection).toStrictEqual(arr);

      return true;
    });

    const obj: Record<string, any> = { key: 'v1', key02: 2 };

    filter(obj, (value: any, key: string, collection: Record<string, any>) => {
      expect(value).toBe(obj[key]);
      expect(collection).toStrictEqual(obj);

      return true;
    });
  });

  it('returns the new filtered array with elements passed the predicate check', () => {
    expect(filter([null, 1, 'yes'], () => true)).toStrictEqual([null, 1, 'yes']);
    expect(filter([null, 1, 'yes'], (value: any) => value)).toStrictEqual([1, 'yes']);

    expect(
      filter([1, 'a', 2], (value: any) => typeof value === 'number'),
    ).toStrictEqual([1, 2]);

    expect(
      filter(['a', 'b'], (value: any) => typeof value === 'number'),
    ).toStrictEqual([]);

    expect(
      filter({ '0': 0, '1': 1 }, (value: number, key: string) => Number(key)),
    ).toStrictEqual([1]);
  });
});
