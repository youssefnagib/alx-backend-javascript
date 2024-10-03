/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new Error('Size must be a positive integer');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('Location must be a non-empty string');
    }
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
