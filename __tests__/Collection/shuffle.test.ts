import { shuffle } from 'src/index';

describe('shuffle', () => {
  it('returns the new array', () => {
    const array: any[] = [];
    const result = shuffle(array);

    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(array);
  });

  it('returns the new shuffled array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const firstResult = shuffle(array);
    const secondResult = shuffle(array);

    expect(firstResult).toEqual(expect.arrayContaining(array));
    expect(secondResult).toEqual(expect.arrayContaining(array));
    expect(firstResult).not.toEqual(secondResult);
  });

  it(`shuffles object's value and return the new shuffled array`, () => {
    const obj = { a: 1, b: 2, c: 3 };
    const firstResult = shuffle(obj);
    const secondResult = shuffle(obj);

    expect(firstResult).toBeInstanceOf(Array);
    expect(firstResult).toEqual(expect.arrayContaining([1, 2, 3]));
    expect(secondResult).toEqual(expect.arrayContaining([1, 2, 3]));
    expect(firstResult).not.toEqual(secondResult);
  });

  it('returns the new shuffled array containing object', () => {
    const array = [{ key: 'a' }, { key: 'b' }, { key: 'c' }];
    const firstResult = shuffle(array);
    const secondResult = shuffle(array);

    expect(firstResult).toEqual(expect.arrayContaining(array));
    expect(secondResult).toEqual(expect.arrayContaining(array));
    expect(firstResult).not.toEqual(secondResult);
  });
});
