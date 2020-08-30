import { _, bind } from 'src/index';

describe('bind', () => {
  it('returns a function', () => {
    const result = bind(() => true, null, _);

    expect(typeof result).toBe('function');
  });

  it('creates a function that invokes func with the this binding of thisArg', () => {
    const mockThis = {
      a: 1,
      b: 2,
    };

    const newFunc = bind(function(this: Record<string, number>) {
      return this.a + this.b;
    }, mockThis);

    expect(newFunc()).toBe(3);
  });

  it(`
    creates a function that invokes func with partials prepended to the arguments it receives
  `, () => {
    const mockThis = {
      a: 1,
      b: 2,
    };

    const newFunc = bind(function(
      this: Record<string, number>,
      c: number,
      d: number,
    ) {
      return this.a + this.b + c + d;
    }, mockThis, 3);

    expect(newFunc()).toBe(NaN);
    expect(newFunc(4)).toBe(10);
  });

  it(`
    creates a function that invokes func with partials prepended to the arguments it receives 02
  `, () => {
    type ThisModel = Record<string, string>;
    const mockThis: ThisModel = { user: 'fred' };
   
    const newFunc = bind(function(this: ThisModel, greeting: string, punctuation: string) {
      return `${greeting} ${this.user}${punctuation}`;
    }, mockThis, 'hi');

    expect(newFunc('!')).toBe('hi fred!');
  });

  it('applies arguments partially if _ used as a placeholder', () => {
    type ThisModel = Record<string, string>;
    const mockThis: ThisModel = { user: 'fred' };
   
    const newFunc = bind(function(this: ThisModel, greeting: string, punctuation: string) {
      return `${greeting} ${this.user}${punctuation}`;
    }, mockThis, _, '!');

    expect(newFunc('hi')).toBe('hi fred!');
  });
});
