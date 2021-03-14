import { flow } from 'src/index';

describe('flow', () => {
  it('returns the new composite function', () => {
    const fn = jest.fn();

    expect(flow([fn])).not.toBe(fn);
  });

});
