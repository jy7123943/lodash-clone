import { after } from 'src/index';

describe('after', () => {
  it('returns a function', () => {
    const result = after(3, () => true);

    expect(typeof result).toBe('function');
  });

  it(`creates a function that invokes func once it's called n or more times`, () => {
    const func = jest.fn();

    const newFn = after(3, func);

    newFn();
    newFn();
    expect(func).not.toHaveBeenCalled();

    newFn();
    expect(func).toHaveBeenCalledTimes(1);

    newFn();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('creates a function that invokes func, with arguments of the created function', () => {
    const newFn = after(0, (a: number, b: number) => a + b);

    expect(newFn(1, 2)).toBe(3);
  });
});
