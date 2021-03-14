import { flow } from 'src/index';

describe('flow', () => {
  const add = (x: number, y: number) => x + y;
  const doubles = (x: number) => x * 2;

  it('returns the new composite function', () => {
    const fn = jest.fn();

    expect(flow([fn])).not.toBe(fn);
  });

  it('invokes functions in sequence with the return value of previous', () => {
    const flowedFn = flow([add, doubles]);

    const result = flowedFn(2, 3);

    expect(add).toHaveBeenCalledWith(2, 3);
    expect(doubles).toHaveBeenCalledWith(5);
    expect(result).toBe(10);
  });
});
