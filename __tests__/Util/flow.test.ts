import { flow } from 'src/index';

describe('flow', () => {
  const add = (x: number, y: number) => x + y;
  const double = (x: number) => x * 2;
  const tripple = (x: number) => x * 3;

  it('returns the new composite function', () => {
    const fn = jest.fn();

    const flowedFn = flow([fn]);

    expect(typeof flowedFn).toBe('function');
    expect(flowedFn).not.toBe(fn);
  });

  it('invokes functions in sequence with the return value of previous', () => {
    const foo = jest.fn().mockReturnValue('hello');
    const bar = jest.fn().mockReturnValue('world');
    const flowedFn = flow([foo, bar]);

    const result = flowedFn(2, 3);

    expect(foo).toHaveBeenCalledWith(2, 3);
    expect(bar).toHaveBeenCalledWith('hello');
    expect(result).toBe('world');
  });

  it('returns 30 after invoking add, double and tripple', () => {
    const flowedFn = flow([add, double, tripple]);

    const result = flowedFn(2, 3);

    expect(result).toBe(30);
  });
});
