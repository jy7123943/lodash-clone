import { clone } from 'src/index';

describe('clone', () => {
  it('returns value of primitive parameter', () => {
    const num = 1;
    const string = 'hello';
    const boolean = true;

    expect(clone(num)).toBe(num);
    expect(clone(string)).toBe(string);
    expect(clone(boolean)).toBe(boolean);
  });

  it('returns shallow clone of Array', () => {
    const mockArray = [1, 2, [3]];
    const cloned = clone(mockArray);

    expect(cloned).not.toBe(mockArray);
    expect(cloned).toStrictEqual(mockArray);
    expect(cloned[2]).toBe(mockArray[2]);
  });

  it('returns shallow clone of Object', () => {
    const mockObject = { x: 1, y: 2, z: [3] };
    const cloned = clone(mockObject);

    expect(cloned).not.toBe(mockObject);
    expect(cloned).toStrictEqual(mockObject);

    expect(cloned.z).toBe(mockObject.z);
  });

  it('returns shallow clone of Map', () => {
    const mockMap = new Map();
    mockMap.set('x', 1);
    mockMap.set('y', [2]);
    const cloned = clone(mockMap);

    expect(cloned).not.toBe(mockMap);
    expect(cloned).toStrictEqual(mockMap);

    expect(cloned.get('y')).toBe(mockMap.get('y'));
  });

  it('returns empty object if uncloneable values passed as parameter', () => {
    expect(clone(new WeakMap())).toStrictEqual({});
    expect(clone(function hello() { return 1; })).toStrictEqual({});
    expect(clone(new Error())).toStrictEqual({});
  });
});
