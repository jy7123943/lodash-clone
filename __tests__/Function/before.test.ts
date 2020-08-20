import { before } from 'src/index';

describe('before', () => {
  it('returns a function', () => {
    const result = before(3, () => true);

    expect(typeof result).toBe('function');
  });

  it(`creates a function that invokes func while it's called less than n times`, () => {
    const func = jest.fn();

    const newFn = before(3, func);

    newFn();
    newFn();
    newFn();
    newFn();

    expect(func).toHaveBeenCalledTimes(2);
  });

  it('returns the last result of the func invocation', () => {
    const newFn = before(3, (a: number) => a);

    expect(newFn(1)).toBe(1);
    expect(newFn(2)).toBe(2);
    expect(newFn(3)).toBe(2);
    expect(newFn(4)).toBe(2);
  });
});
