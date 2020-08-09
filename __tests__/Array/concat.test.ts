import { concat } from 'src/Array/concat';

describe('Array', () => {
  describe('01. concat', () => {
    it('returns empty array if array passed as first param is empty', () => {
      expect(concat([])).toStrictEqual([]);
    });

    it('returns new array (not a reference)', () => {
      const inputArray = [1, 2, 3];
      const result = concat(inputArray);

      expect(result).toStrictEqual([1, 2, 3]);
      expect(result).not.toBe(inputArray);
    });


    it('creates a concatenating array with additional values', () => {
      expect(concat([1, 2, 3], 4, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it('creates a concatenating array with additional array values', () => {
      expect(concat([1, 2, 3], [4], [5])).toStrictEqual([1, 2, 3, 4, 5]);
      expect(concat([1, 2, 3], [[4]], [5])).toStrictEqual([1, 2, 3, [4], 5]);
    });
  });
});
