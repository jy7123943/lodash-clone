import { after } from 'src/Function/after';

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
});
