/* eslint-disable no-underscore-dangle */
/*
The default string description of the class should return the airport code (example below).
*/
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() { return this._name; }

  get code() { return this._code; }

  set name(name) { this._name = name; }

  set code(code) { this._code = code; }

  get [Symbol.toStringTag]() { return this.code; }
}
