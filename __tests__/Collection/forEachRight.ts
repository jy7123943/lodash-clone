import { forEachRight } from 'src/Collection/forEachRight';

describe('forEachRight', () => {
  it('iterates over elements of array and invokes iteratee for each element', () => {
    const mockArray = [1, 2, 3];

    const mockIteratee = (value: number, index: number, list: number[]) => {
      expect(value).toBe(mockArray[index]);
      expect(list).toBe(mockArray);
    };

    forEachRight(mockArray, mockIteratee);
  });

  it('iterates over elements of object and invokes iteratee for each element', () => {
    const mockObject: Record<string, string> = {
      key01: 'value01',
      key02: 'value02',
      key03: 'value03',
    };

    const mockIteratee = (value: string, key: string, list: Record<string, string>) => {
      expect(value).toBe(mockObject[key]);
      expect(list).toBe(mockObject);
    };

    forEachRight(mockObject, mockIteratee);
  });

  it('iterates from right to left - Array', () => {
    const values: number[] = [];
    const indices: number[] = [];

    forEachRight([1, 2, 3], (value: number, index: number) => {
      values.push(value);
      indices.push(index);
    });

    expect(values).toEqual([3, 2, 1]);
    expect(indices).toEqual([2, 1, 0]);
  });

  it('iterates from right to left - Object', () => {
    const values: string[] = [];
    const keys: string[] = [];

    forEachRight({
      key01: 'value01',
      key02: 'value02',
      key03: 'value03',
    }, (value: string, key: string) => {
      values.push(value);
      keys.push(key);
    });

    expect(values).toEqual(['value03', 'value02', 'value01']);
    expect(keys).toEqual(['key03', 'key02', 'key01']);
  });

  it('returns original collection - Array Collection', () => {
    const mockArray = [1, 2, 3];
    const mockIteratee = (value: number) => value;

    const result = forEachRight(mockArray, mockIteratee);

    expect(result).toBe(mockArray);
  });

  it('returns original collection - Object Collection', () => {
    const mockObject = {
      key01: 'value01',
      key02: 'value02',
      key03: 'value03',
    };
    const mockIteratee = (value: string) => value;

    const result = forEachRight(mockObject, mockIteratee);

    expect(result).toBe(mockObject);
  });
});
