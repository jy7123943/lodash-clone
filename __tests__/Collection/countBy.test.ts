import { countBy } from 'src/index';

describe('countBy', () => {
  it('case - collection: array / iteratee: function', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toStrictEqual({ '4': 1, '6': 2 });
  });

  it('case - collection: array / iteratee: string', () => {
    expect(countBy(['one', 'two', 'three'], 'length')).toStrictEqual({ '3': 2, '5': 1 });
  });

  it('case - collection: array / iteratee: number', () => {
    expect(countBy(['one', 'two', 'three'], 0)).toStrictEqual({ 'o': 1, 't': 2 });
  });

  it('case - collection: array / iteratee: undefined', () => {
    expect(countBy(['one', 'two', 'three'])).toStrictEqual({ one: 1, two: 1, three: 1 });
  });

  it('case - collection: object / iteratee: function', () => {
    const mockIteratee = (n: number) => n * 10;

    expect(
      countBy({ 'hello': 5, 'world': 10 },  mockIteratee),
    ).toStrictEqual({ '50': 1, '100': 1 });
  });

  it('case - collection: object / iteratee: string', () => {
    expect(countBy({ 'hello': '1.1', 'world': '1.5' },  'length')).toStrictEqual({ '3': 2 });
  });

  it('case - collection: object / iteratee: number', () => {
    expect(countBy({ '1': 'hello', '2': 'world' },  3)).toStrictEqual({ 'l': 2 });
  });

  it('case - collection: object / iteratee: undefined', () => {
    expect(countBy({ 'hello': 'one', 'world': 'two' })).toStrictEqual({ one: 1, two: 1 });
  });

  it(`
    creates an object composed of undefined
    if the result of running each element through iteratee is undefined
  `, () => {
    expect(countBy({ 'hello': 1.1, 'world': 1.5 },  'length')).toStrictEqual({ 'undefined': 2 });
    expect(countBy([1, 2, 3],  'length')).toStrictEqual({ 'undefined': 3 });
  });
});
