import { _, bindKey } from 'src/index';

describe('bindKey', () => {
  it('returns a function', () => {
    const newFn = bindKey({ 'mockFn': jest.fn() }, 'mockFn');

    expect(typeof newFn).toBe('function');
  });

  it('creates a function that invokes func with partials', () => {
    const mockFn = jest.fn();
    const newFn = bindKey({ 'mockFn': mockFn }, 'mockFn', 1, 2);

    newFn(3, 4);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3, 4);
  });

  it('creates a function that invokes func with placeholder', () => {
    const mockFn = jest.fn();
    const newFn = bindKey({ 'mockFn': mockFn }, 'mockFn', _, 1);

    newFn();

    expect(mockFn).toHaveBeenCalledWith(undefined, 1);
  });

  it(`
    creates a function that invokes func with the this binding of object passed as param
  `, () => {
    const mockObject = {
      user: 'fred',
      greet: function(greeting: string, punctuation: string) {
        return greeting + ' ' + this.user + punctuation;
      },
    };

    const newFn = bindKey(mockObject, 'greet', 'hi');

    expect(newFn('!')).toBe('hi fred!');

    mockObject.greet = function(greeting: string, punctuation: string) {
      return greeting + 'ya ' + this.user + punctuation;
    };

    expect(newFn('!')).toBe('hiya fred!');
  });

  it(`
    creates a function that invokes func with the this binding of object passed as param
  `, () => {
    const mockObject = {
      user: 'fred',
      greet: function(greeting: string, punctuation: string) {
        return greeting + ' ' + this.user + punctuation;
      },
    };

    const newFn = bindKey(mockObject, 'greet', _, '!');

    expect(newFn('hi')).toBe('hi fred!');
  });
});
