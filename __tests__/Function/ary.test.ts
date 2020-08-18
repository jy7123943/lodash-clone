import { ary } from 'src/Function/ary';

describe('ary', () => {
  it('returns a function', () => {
    const result = ary(() => true);

    expect(typeof result).toBe('function');
  });

  it(`
    creates a function that invokes func,
    with up to n arguments, ignoring any additional arguments
  `, () => {
    ary((x: any, y: any, z: any) => {
      expect(x).toBe(1);
      expect(y).toBe(undefined);
      expect(z).toBe(undefined);
    }, 1)(1, 2, 3);

    ary((x: any, y: any, z: any) => {
      expect(x).toBe(1);
      expect(y).toBe(2);
      expect(z).toBe(undefined);
    }, 2)(1, 2, 3);

    ary((...p) => {
      expect(p).toStrictEqual([1, 2]);
    }, 2)(1, 2, 3);

    const result = ['6', '8', '10'].map(ary(parseInt, 1));
    expect(result).toStrictEqual([6, 8, 10]);
  });

  it(`
    creates a function that invokes func
    with empty arguments if 0 is passed
  `, () => {
    ary((...p) => {
      expect(p).toStrictEqual([]);
    }, 0)(1, 2, 3);
  });

  it('uses func.length as a default value', () => {
    const arr = [1, 2, 3];

    arr.map(ary((v, i, list) => {
      expect(v).toBe(arr[i]);
      expect(list).toStrictEqual(arr);
    }));
  });
});
