import { every } from 'src/Collection/every';

describe('every', () => {
  it('returns true if predicate is undefined', () => {
    expect(every([1, 2, 3])).toBe(true);
    expect(every({ key: 'value' })).toBe(true);
  });

  it('returns true if collection is empty', () => {
    expect(every([], Boolean)).toBe(true);
    expect(every({}, Boolean)).toBe(true);
  });

  it('is invoked with three arguments - value, index|key, collection', () => {
    const arr = [1, 2, 3];

    every(arr, (value: number, index: number, collection: number[]) => {
      expect(value).toBe(arr[index]);
      expect(collection).toStrictEqual(arr);

      return true;
    });

    const obj: Record<string, any> = { key: 'v1', key02: 2 };

    every(obj, (value: any, key: string, collection: Record<string, any>) => {
      expect(value).toBe(obj[key]);
      expect(collection).toStrictEqual(obj);

      return true;
    });
  });

  it('returns true if all elements pass the predicate check', () => {
    expect(every([true, 1, 'yes'], () => true)).toBe(true);
    expect(every([true, 1, 'yes'], Boolean)).toBe(true);
    expect(every([true, 1, 'yes'], (value: any) => value)).toBe(true);

    expect(every([1, 2, 3], (value: number) => typeof value === 'number')).toBe(true);

    expect(every({ key: 1, key02: 2 }, (value: number, key: string) => (
      typeof value === 'number' && typeof key === 'string'
    ))).toBe(true);
  });

  it('returns false if all elements does not pass the predicate check', () => {
    expect(every([true, 1, 'yes'], () => false)).toBe(false);
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
    expect(every(['1', ''], (value: any) => value)).toBe(false);

    expect(every([1, 'a', 3], (value: any) => typeof value === 'number')).toBe(false);

    expect(every({ key: 'hello', key02: 2 }, (value: any, key: string) => (
      typeof value === 'number' && typeof key === 'string'
    ))).toBe(false);
  });

  it('stops iteration if once predicate returns falsey', () => {
    const result: number[] = [];

    expect(every([2, 1, 0, 4], (value: number) => {
      result.push(value);

      return value;
    })).toBe(false);

    expect(result).toStrictEqual([2, 1, 0]);
  });
});
