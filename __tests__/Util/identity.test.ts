import { identity } from 'src/index';

describe('identity', () => {
  it('returns the first argument it receives', () => {
    const param = { 'a': 1 };

    expect(identity(param)).toBe(param);
    expect(identity(2)).toBe(2);
    expect(identity('string')).toBe('string');
  });
});
