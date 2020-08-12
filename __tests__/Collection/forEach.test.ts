import { forEach } from 'src/Collection/forEach';

describe('forEach', () => {
  it('iterates over elements of array and invokes iteratee for each element', () => {
    const mockArray = [1, 2, 3];

    const mockIteratee = (value: number, index: number, list: number[]) => {
      expect(value).toBe(mockArray[index]);
      expect(list).toBe(mockArray);
    };

    forEach(mockArray, mockIteratee);
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

    forEach(mockObject, mockIteratee);
  });

  it('returns original collection - Array Collection', () => {
    const mockArray = [1, 2, 3];
    const mockIteratee = (value: number) => value;

    const result = forEach(mockArray, mockIteratee);

    expect(result).toBe(mockArray);
  });

  it('returns original collection - Object Collection', () => {
    const mockObject = {
      key01: 'value01',
      key02: 'value02',
      key03: 'value03',
    };
    const mockIteratee = (value: string) => value;

    const result = forEach(mockObject, mockIteratee);

    expect(result).toBe(mockObject);
  });
});
