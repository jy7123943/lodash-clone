import { find } from 'src/index';

describe('find', () => {
  it(`returns first value of collection if predicate is undefined`, () => {
    expect(find([1, 3, 4])).toStrictEqual(1);
    expect(find({ key: 'value' })).toStrictEqual('value');
    expect(find([])).toStrictEqual(undefined);
    expect(find({})).toStrictEqual(undefined);
  });

  it('is invoked with three arguments - value, index|key, collection', () => {
    const arr = [1, 2, 3];

    find(arr, (value: number, index: number, collection: number[]) => {
      expect(value).toBe(arr[index]);
      expect(collection).toStrictEqual(arr);

      return true;
    });

    const obj: Record<string, any> = { key: 'v1', key02: 2 };

    find(obj, (value: any, key: string, collection: Record<string, any>) => {
      expect(value).toBe(obj[key]);
      expect(collection).toStrictEqual(obj);

      return true;
    });
  });

  it('returns the first element predicate returns truthy for', () => {
    expect(find([0, 1, 2, 3], Boolean)).toBe(1);
    expect(find([null, '', 'b'], Boolean)).toBe('b');

    expect(find({ 'key': 1, 'key2': 2 }, (value: number) => value === 2)).toBe(2);
  });

  it('returns undefined if predicate all returns falsy', () => {
    expect(find([0, 1, 2, 3], () => false)).toBe(undefined);
    expect(
      find({ 'key': undefined, 'key2': false }, (value: any) => value),
    ).toBe(undefined);
  });

  it('starts to iterate from index passed as param (default index is 0)', () => {
    expect(
      find([false, 'hello', '', null, 'world'], Boolean),
    ).toBe('hello');

    expect(
      find([false, 'hello', '', null, 'world'], Boolean, 1),
    ).toBe('hello');

    expect(
      find([false, 'hello', '', null, 'world'], Boolean, 2),
    ).toBe('world');

    expect(
      find([false, 'hello', '', null, 'world'], Boolean, 5),
    ).toBe(undefined);
  });
});
