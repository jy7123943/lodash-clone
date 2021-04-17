import { identity, invoke } from 'src/index';

describe('invoke', () => {
  it('should invoke the method at path of object', () => {
    const spy = jest.fn();
    const obj = { test: spy };
    invoke(obj, 'test', 1, [2], 3);

    expect(spy).toHaveBeenCalledWith(1, [2], 3);
  });

  it('should accept array path as well', () => {
    const spy = jest.fn();
    const obj = { a: { b: { c: spy }}};
    invoke(obj, ['a', 'b', 'c'], 1, [2], 3);

    expect(spy).toHaveBeenCalledWith(1, [2], 3);
  });

  it('should invoke the method at path of nested object', () => {
    const spy = jest.fn();
    const obj = {
      list: [
        { test: spy },
      ],
    };
    invoke(obj, 'list[0].test');

    expect(spy).toHaveBeenCalledWith();
  });

  it('should invoke the method of prototype at path of object', () => {
    const obj = {
      a: {
        b: [1, 2, 3, 4, 5],
        c: 'hello world',
        d: [
          [0, 1, null, 2, false],
        ],
      },
    };

    expect(invoke(obj, 'a.b.slice', 2, 4)).toEqual([3, 4]);
    expect(invoke(obj, 'a.c.slice', 2, 4)).toBe('ll');
    expect(invoke(obj, 'a.d[0].filter', identity)).toEqual([1, 2]);
  });
});
