export function mockHTMLCollection(this: any, arr: any[]): any {
  for (let i = 0; i < arr.length; i += 1) {
    this[i] = arr[i];
  }
  Object.defineProperty(this, 'length', {
    get: function() {
      return arr.length;
    },
  });
  Object.freeze(this);
}
